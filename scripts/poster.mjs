// Extracts a frame from the hero video as a JPEG poster, using Chrome through the DevTools Protocol.
// Usage: node scripts/poster.mjs <pageUrl> <videoPath> <outFile> [seconds] [blurPx]
// The blur is baked into the JPEG so the page needs no CSS filter on its LCP image.
import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";

const [
  url = "http://localhost:3020/",
  videoPath = "/assets/hero-bg.mp4",
  outFile = "public/assets/hero-poster.jpg",
  seconds = "0.5",
  blurPx = "0",
] = process.argv.slice(2);
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 9334;
const proc = spawn(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    `--remote-debugging-port=${port}`,
    "--user-data-dir=/tmp/vn-poster-profile",
    "--autoplay-policy=no-user-gesture-required",
    "about:blank",
  ],
  { stdio: "ignore" },
);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let page;
for (let i = 0; i < 40 && !page; i++) {
  try {
    page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(
      (t) => t.type === "page",
    );
  } catch {
    await sleep(250);
  }
}
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) {
    pending.get(m.id)(m);
    pending.delete(m.id);
  }
};
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const n = ++id;
    pending.set(n, resolve);
    ws.send(JSON.stringify({ id: n, method, params }));
  });
await send("Page.enable");
await send("Page.navigate", { url });
await sleep(2000);
const res = await send("Runtime.evaluate", {
  awaitPromise: true,
  returnByValue: true,
  expression: `(async () => {
  const v = document.createElement('video'); v.muted = true; v.src = ${JSON.stringify(videoPath)}; v.crossOrigin = 'anonymous';
  await new Promise((r) => { v.addEventListener('loadeddata', r, { once: true }); v.load(); });
  v.currentTime = ${Number(seconds)};
  await new Promise((r) => v.addEventListener('seeked', r, { once: true }));
  const c = document.createElement('canvas'); c.width = v.videoWidth; c.height = v.videoHeight;
  const ctx = c.getContext('2d'); ctx.filter = 'blur(${Number(blurPx)}px)'; ctx.drawImage(v, -${Number(blurPx) * 2}, -${Number(blurPx) * 2}, c.width + ${Number(blurPx) * 4}, c.height + ${Number(blurPx) * 4});
  return c.toDataURL('image/jpeg', 0.82);
})()`,
});
const dataUrl = res.result.result.value;
if (!dataUrl?.startsWith("data:image/jpeg"))
  throw new Error("no frame: " + JSON.stringify(res.result).slice(0, 300));
writeFileSync(outFile, Buffer.from(dataUrl.split(",")[1], "base64"));
console.log("wrote", outFile);
ws.close();
proc.kill();
