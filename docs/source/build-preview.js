// Original static-site tooling, kept for reference in docs/source. Not part of the Next.js app.
// Builds preview.html: a single self-contained file (CSS + JS inlined, images as data URIs)
// for publishing as a preview. The deployable site is index.html + styles.css + script.js + assets/.
const fs = require("fs");
const path = require("path");
const root = __dirname;
let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const js = fs.readFileSync(path.join(root, "script.js"), "utf8");

const mime = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml" };
html = html.replace(/(src|href)="(assets\/[^"]+)"/g, (m, attr, rel) => {
  const file = path.join(root, rel);
  const ext = path.extname(file).toLowerCase();
  if (!mime[ext] || !fs.existsSync(file)) return m;
  return `${attr}="data:${mime[ext]};base64,${fs.readFileSync(file).toString("base64")}"`;
});
html = html.replace('<link rel="stylesheet" href="styles.css">', `<style>\n${css}\n</style>`);
html = html.replace('<script src="script.js"></script>', `<script>\n${js}\n</script>`);

// Artifact mode: strip the document shell, keep <title> + head links + body content.
const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
  .replace(/<meta[^>]*>/g, "")
  .replace(/<link rel="icon"[^>]*>/g, "");
const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1];
const artifact = head.trim() + "\n" + body.trim() + "\n";
fs.writeFileSync(path.join(root, "preview.html"), artifact);
console.log("preview.html written:", (artifact.length / 1024).toFixed(0), "KB");
