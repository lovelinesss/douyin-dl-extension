/**
 * 抖音下载助手 - 后台服务
 *
 * 负责：下载队列调度、调用 chrome.downloads、状态追踪、跨域请求转发
 */

const SETTINGS_KEY = "dy_dl_settings"

const defaultSettings = {
  subdir: "douyin",
  concurrency: 3,
  askWhereToSave: false,
}

let settings = { ...defaultSettings }

/** 等待中的任务 */

/** 正在下载的数量 */
let activeCount = 0
/** downloadId -> task */
const tasks = new Map()

// ---------- 设置 ----------

async function loadSettings() {
  const data = await chrome.storage.local.get(SETTINGS_KEY)
  if (data[SETTINGS_KEY]) settings = { ...defaultSettings, ...data[SETTINGS_KEY] }
}

async function saveSettings(next) {
  settings = { ...settings, ...next }
  await chrome.storage.local.set({ [SETTINGS_KEY]: settings })
}

// ---------- 工具 ----------

function safePath(p) {
  return String(p || "")
    .split("/")
    .map((seg) => seg.replace(/[\\:*?"<>|\x00-\x1f]/g, "_").replace(/^\.+/, "_").trim())
    .filter((seg) => seg.length > 0)
    .join("/")
}

let seqCounter = 0

// ---------- 队列 ----------
//
// 注意：chrome.downloads.download 自己有队列，这里只做计数和状态登记。
// 之前这层是异步入队后立即 ack，调用方据此判定「成功」，结果任务其实才刚开始，
// 页面秒显「完成」而真正的下载可能还在跑甚至失败 —— 这就是「假成功」。
// 现在改成 await 出真实的 downloadId 再返回，让调用方能追踪到底。

async function runTask(task) {
  task.state = "downloading"
  tasks.set("pending_" + task.seq, task)
  broadcastTasks()
  try {
    const downloadId = await chrome.downloads.download({
      url: task.url,
      filename: task.path,
      saveAs: settings.askWhereToSave,
      conflictAction: "uniquify",
    })
    task.id = downloadId
    task.downloadId = downloadId
    tasks.set(downloadId, task)
    broadcastTasks()
  } catch (err) {
    task.state = "failed"
    task.error = String(err && err.message ? err.message : err)
    broadcastTasks()
    notifyPage(task, { type: "download-failed", filename: task.filename, error: task.error })
  }
}

// ---------- 事件广播 ----------

function broadcastTasks() {
  const list = [...tasks.values()].slice(-100)
  chrome.runtime.sendMessage({ type: "tasks", list }).catch(() => {})
}

function notifyPage(task, event) {
  if (!task.tabId) return
  chrome.tabs.sendMessage(task.tabId, { type: "event", event }).catch(() => {})
}

// ---------- 动作处理 ----------

const handlers = {
  async download(payload, sender) {
    const { url, filename, subdir, concurrency } = payload
    if (!url) return { ok: false, error: "缺少下载地址" }
    if (concurrency) {
      settings.concurrency = Math.max(1, Math.min(10, parseInt(concurrency, 10) || 3))
    }
    const dir = subdir !== undefined ? subdir : settings.subdir
    const path = dir ? `${safePath(dir)}/${safePath(filename)}` : safePath(filename)
    const task = {
      url,
      filename: safePath(filename).split("/").pop(),
      path,
      seq: ++seqCounter,
      state: "queued",
      tabId: sender.tab ? sender.tab.id : null,
      createdAt: Date.now(),
    }
    // 必须 await 到真实 downloadId 才 ack，否则调用方拿不到 id，只能盲等
    await runTask(task)
    if (task.state === "failed") {
      return { ok: false, error: task.error, id: null, path }
    }
    return { ok: true, id: task.id, path }
  },

  /**
   * 查询单个任务的真实状态
   *
   * 状态以 chrome.downloads.search 为准，不依赖 service worker 缓存：
   * MV3 的 worker 会休眠，休眠期间发生的 onChanged 事件收不到，tasks 里会永远停在 downloading。
   */
  async getTask(payload) {
    const id = payload && payload.id
    if (id === undefined || id === null) return { task: null }
    try {
      const list = await chrome.downloads.search({ id })
      if (list && list.length > 0) {
        const it = list[0]
        const state = it.state === "complete" ? "done" : it.state === "interrupted" ? "failed" : "downloading"
        return {
          task: {
            id: it.id,
            state,
            received: it.bytesReceived || 0,
            total: it.totalBytes || 0,
            error: it.error || null,
            fullPath: it.filename || "",
            filename: (it.filename || "").split(/[\\/]/).pop(),
          },
        }
      }
    } catch (e) {}
    const cached = tasks.get(id)
    return { task: cached ? { id, state: cached.state, error: cached.error || null } : null }
  },

  async xhr(payload) {
    const { url, method = "GET", headers = {}, data, responseType, timeout = 30000 } = payload
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), timeout)
    try {
      const res = await fetch(url, {
        method,
        headers,
        body: data,
        signal: ctrl.signal,
        credentials: "include",
      })
      let response
      if (responseType === "arraybuffer") response = await res.arrayBuffer()
      else if (responseType === "blob") response = await res.blob()
      else if (responseType === "json") response = await res.json()
      else response = await res.text()
      const responseHeaders = [...res.headers.entries()].map(([k, v]) => `${k}: ${v}`).join("\r\n")
      return { status: res.status, response, responseHeaders }
    } finally {
      clearTimeout(timer)
    }
  },

  async getTasks() {
    return { list: [...tasks.values()].slice(-100) }
  },

  async getSettings() {
    return { settings }
  },

  async setSettings(payload) {
    await saveSettings(payload)
    return { settings }
  },

  async clearFinished() {
    for (const [id, t] of tasks) {
      if (t.state === "done" || t.state === "failed") tasks.delete(id)
    }
    broadcastTasks()
    return { ok: true }
  },
}

// ---------- 消息入口 ----------

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (!msg || msg.type !== "action") return
  const fn = handlers[msg.action]
  if (!fn) {
    sendResponse({ ok: false, error: "未知动作: " + msg.action })
    return
  }
  Promise.resolve()
    .then(() => fn(msg.payload || {}, sender))
    .then((result) => sendResponse({ ok: true, result }))
    .catch((err) => sendResponse({ ok: false, error: String(err && err.message ? err.message : err) }))
  return true
})

// ---------- 下载状态追踪 ----------

chrome.downloads.onChanged.addListener((delta) => {
  const task = tasks.get(delta.id)
  if (!task) return
  if (delta.state) {
    if (delta.state.current === "complete") task.state = "done"
    else if (delta.state.current === "interrupted") task.state = "failed"
    if (delta.error) task.error = delta.error.current
  }
  if (delta.bytesReceived && delta.totalBytes) {
    task.received = delta.bytesReceived.current
    task.total = delta.totalBytes.current
  }
  if (task.state === "done") {
    notifyPage(task, { type: "download-done", filename: task.filename })
  } else if (task.state === "failed") {
    notifyPage(task, { type: "download-failed", filename: task.filename, error: task.error || "下载中断" })
  }
  broadcastTasks()
})

chrome.downloads.onErased.addListener((id) => {
  tasks.delete(id)
  broadcastTasks()
})

loadSettings()
