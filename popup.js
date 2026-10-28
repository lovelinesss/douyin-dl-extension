const el = (id) => document.getElementById(id)

// 版本号直接读 manifest，改一处就够
try {
  el("ver").textContent = "v" + chrome.runtime.getManifest().version
} catch (e) {}

const stateText = {
  queued: "排队中",
  downloading: "下载中",
  done: "完成",
  failed: "失败",
}

function formatSize(n) {
  if (!n) return ""
  if (n < 1024) return n + " B"
  if (n < 1024 * 1024) return (n / 1024).toFixed(0) + " KB"
  return (n / 1024 / 1024).toFixed(1) + " MB"
}

function render(list) {
  const stat = { queued: 0, downloading: 0, done: 0, failed: 0 }
  list.forEach((t) => {
    if (stat[t.state] !== undefined) stat[t.state]++
  })
  el("s-queued").textContent = stat.queued
  el("s-active").textContent = stat.downloading
  el("s-done").textContent = stat.done
  el("s-failed").textContent = stat.failed

  const ul = el("list")
  ul.innerHTML = ""
  el("empty").style.display = list.length ? "none" : "block"

  list
    .slice()
    .reverse()
    .slice(0, 30)
    .forEach((t) => {
      const li = document.createElement("li")
      const name = document.createElement("div")
      name.className = "name"
      name.textContent = t.filename
      const meta = document.createElement("div")
      meta.className = "meta st-" + t.state
      let text = stateText[t.state] || t.state
      if (t.state === "downloading" && t.received && t.total) {
        text += " " + formatSize(t.received) + " / " + formatSize(t.total)
      }
      if (t.state === "failed" && t.error) text += " - " + t.error
      meta.textContent = text
      li.appendChild(name)
      li.appendChild(meta)
      ul.appendChild(li)
    })
}

function refresh() {
  chrome.runtime.sendMessage({ type: "action", action: "getTasks" }, (res) => {
    if (res && res.ok) render(res.result.list)
  })
}

chrome.runtime.sendMessage({ type: "action", action: "getSettings" }, (res) => {
  if (!res || !res.ok) return
  el("subdir").value = res.result.settings.subdir
  el("concurrency").value = res.result.settings.concurrency
})

function updateSettings(patch) {
  chrome.runtime.sendMessage({ type: "action", action: "setSettings", payload: patch })
}

el("subdir").addEventListener("change", (e) => updateSettings({ subdir: e.target.value.trim() }))
el("concurrency").addEventListener("change", (e) => {
  const v = Math.max(1, Math.min(10, parseInt(e.target.value, 10) || 3))
  e.target.value = v
  updateSettings({ concurrency: v })
})
el("clear").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "action", action: "clearFinished" }, refresh)
})

chrome.runtime.onMessage.addListener((msg) => {
  if (msg && msg.type === "tasks") render(msg.list)
})

refresh()
