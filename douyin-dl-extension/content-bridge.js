/**
 * 消息桥
 *
 * 主脚本跑在 MAIN world（拿不到 chrome.*），这里跑在 ISOLATED world，
 * 负责把页面消息转给 background，再把 background 的事件转回页面。
 */

const CHANNEL_REQ = "dy-dl:req"
const CHANNEL_RES = "dy-dl:res"
const CHANNEL_EVT = "dy-dl:evt"
const CHANNEL_PING = "dy-dl:ping"
const CHANNEL_PONG = "dy-dl:pong"

// 主动宣告：主脚本可能先于本脚本注入，这里补一次 pong 让它标记可用
window.postMessage({ channel: CHANNEL_PONG }, "*")

window.addEventListener("message", (event) => {
  const d = event.data
  if (!d || typeof d !== "object") return

  if (d.channel === CHANNEL_PING) {
    window.postMessage({ channel: CHANNEL_PONG }, "*")
    return
  }

  if (d.channel !== CHANNEL_REQ) return

  chrome.runtime
    .sendMessage({ type: "action", action: d.action, payload: d.payload })
    .then((res) => {
      if (res && res.ok) {
        window.postMessage({ channel: CHANNEL_RES, id: d.id, ok: true, result: res.result }, "*")
      } else {
        window.postMessage({ channel: CHANNEL_RES, id: d.id, ok: false, error: (res && res.error) || "扩展调用失败" }, "*")
      }
    })
    .catch((err) => {
      window.postMessage({ channel: CHANNEL_RES, id: d.id, ok: false, error: String(err && err.message ? err.message : err) }, "*")
    })
})

chrome.runtime.onMessage.addListener((msg) => {
  if (msg && msg.type === "event") {
    window.postMessage({ channel: CHANNEL_EVT, event: msg.event }, "*")
  }
})
