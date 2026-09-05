// Device-emulated screenshots and page checks through the Chrome DevTools Protocol.
// Usage: node scripts/shot.mjs <url> <outDir> [widths...]   (default widths 360 768 1024 1440)
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [url = "http://localhost:3020/", outDir = "shots", ...widthArgs] = process.argv.slice(2);
const widths = widthArgs.length ? widthArgs.map(Number) : [360, 768, 1024, 1440];
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 9333;
mkdirSync(outDir, { recursive: true });

const proc = spawn(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--remote-debugging-port=${port}`,
    "--user-data-dir=/tmp/vn-shot-profile",
    "about:blank",
  ],
  { stdio: "ignore" },
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function targets() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      return await res.json();
    } catch {
      await sleep(250);
    }
  }
  throw new Error("Chrome did not start");
}

const page = (await targets()).find((t) => t.type === "page");
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
ws.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
};
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const n = ++id;
    pending.set(n, resolve);
    ws.send(JSON.stringify({ id: n, method, params }));
  });
const evaluate = async (expression) =>
  (await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true })).result
    .result.value;

await send("Page.enable");
const report = {};
for (const width of widths) {
  const mobile = width < 768;
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height: 900,
    deviceScaleFactor: mobile ? 2 : 1,
    mobile,
  });
  await send("Page.navigate", { url });
  await sleep(2500);
  // SHOT_SCROLL=<px> scrolls before measuring and capturing (viewport-only mode).
  if (process.env.SHOT_SCROLL) {
    await evaluate(
      `window.scrollTo({ top: ${Number(process.env.SHOT_SCROLL)}, behavior: "instant" }); 1`,
    );
    await sleep(600);
  }
  const metrics = await evaluate(`(() => {
    const de = document.documentElement;
    const wide = [...document.querySelectorAll('body *')].filter(el => el.getBoundingClientRect().right > de.clientWidth + 1).slice(0, 8).map(el => el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ').slice(0,3).join('.') : ''));
    return { innerWidth: de.clientWidth, scrollWidth: de.scrollWidth, overflow: de.scrollWidth > de.clientWidth, height: de.scrollHeight, wide };
  })()`);
  report[width] = metrics;
  // SHOT_VIEWPORT_ONLY=1 keeps the 900px viewport, for sections sized to the viewport.
  if (process.env.SHOT_EVAL) report.eval = await evaluate(process.env.SHOT_EVAL);
  const height = process.env.SHOT_VIEWPORT_ONLY ? 900 : Math.min(metrics.height, 16000);
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: mobile ? 2 : 1,
    mobile,
  });
  await sleep(1800);
  const shot = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: !process.env.SHOT_VIEWPORT_ONLY,
  });
  writeFileSync(join(outDir, `page-${width}.png`), Buffer.from(shot.result.data, "base64"));
}
report.a11y = await evaluate(`(() => ({
  headings: [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h => h.tagName + ' ' + h.textContent.trim().replace(/\\s+/g,' ').slice(0, 50)),
  landmarks: [...document.querySelectorAll('header,nav,main,footer,[role=dialog],dialog')].map(e => e.tagName.toLowerCase() + (e.getAttribute('aria-label') ? '[' + e.getAttribute('aria-label') + ']' : '')),
  imagesMissingAlt: [...document.images].filter(i => !i.hasAttribute('alt')).length,
  unlabelledControls: [...document.querySelectorAll('input,select,textarea')].filter(c => !c.labels || c.labels.length === 0).map(c => c.name),
  anchorsResolved: ['top','difference','products','atlas','sonar','approach','services','sectors','company','team','contact'].filter(a => !document.getElementById(a)),
}))()`);
writeFileSync(join(outDir, "report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
ws.close();
proc.kill();
