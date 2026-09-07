// Verifies that every string literal in lib/content appears verbatim in the original static site.
// Usage: node scripts/check-content.mjs
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

// Two views of the source: raw (so attribute values such as href, alt and aria-label match) and
// tag-stripped (so copy the source wraps in <em>, <s> or <b> still matches as one string).
const html = decode(readFileSync("docs/source/index.html", "utf8"));
const script = readFileSync("docs/source/script.js", "utf8");
const sources = [html + "\n" + script, html.replace(/<[^>]+>/g, "")];
const dir = "lib/content";

// Identifiers that are structure, not copy, plus approved additions. Allowed to be absent.
const structural = new Set([
  "text",
  "email",
  "select",
  "textarea",
  "public",
  "private",
  "atlas",
  "sonar",
  "lagos",
  "london",
  "custom-built",
  "both-sectors",
  "market-experience",
  "own-products",
  "discover",
  "adapt",
  "embed",
  "evolve",
  "software-development",
  "lms-engineering",
  "doc2video",
  "hr-performance",
  "cloud",
  "network-infrastructure",
  "cybersecurity",
  "advanced-technology",
  "wilfred-babatope-achom",
  "vijay-gadhia",
  "kate-welling",
  "oyinloluwa-bolarinwa",
  "abdulrasaq-oladapo",
  "abdulrazaq-oladapo",
  "victor-aderibigbe",
  "above",
  "below",
  "ownership",
  "security",
  "markets",
  "outcomes",
  "Von Newman Technology Consultants",
  "Nigeria",
  "Lekki",
  "Lagos",
  "United Kingdom",
  // Approved new accessibility string (design plan open decision 6).
  "Close menu",
  // Approved addition (design plan open decision 5): white wordmark for the footer.
  "/assets/vn-logo-white.png",
  // Client-supplied hero background video, 5 September 2026.
  "/assets/hero-bg.mp4",
  "/assets/hero-poster.jpg",
  // Name spelling corrected and a new portrait supplied by the client, 7 September 2026.
  "Abdulrazaq Oladapo",
  "/assets/team-oyin-2026.jpg",
  // Team member added by the client, 7 September 2026.
  "anthonia-osekhale",
  "Anthonia Osekhale",
  "Project Manager",
  "/assets/team-anthonia-2.jpg",
  "/assets/team-victor-3x4.jpg",
  // Client copy change, 5 September 2026: third hero trust point.
  "Delivered for NRS and More",
  // Contact label "Visit" became "Address", 6 September 2026 (client).
  "Address",
  // New portrait supplied by the client, 5 September 2026 (renamed to bypass caches).
  "team-victor-2026.jpg",
  // New Sonar screenshot supplied by the client, 5 September 2026.
  "/assets/sonar-home.png",
  // The two set-aside screenshots placed in the sector card, 7 September 2026 (client).
  "/assets/atlas-catalogue.jpg",
  "/assets/sonar-terraform.jpg",
  "Atlas catalogue showing public sector learning pathways for revenue and tax administration, and governance, ethics and anti-corruption",
  "Sonar importing an unmanaged AWS resource into Terraform with suggested tag values",
  "Von Newman Sonar homepage: find what isn't in Terraform, import it in a few steps, with a scan listing unmanaged AWS resources",
]);

let checked = 0;
const misses = [];
// trust.ts holds client-provided content from 5 September 2026 that was never on the original site.
const clientProvided = new Set(["trust.ts"]);
for (const file of readdirSync(dir).filter(
  (f) => f.endsWith(".ts") && f !== "index.ts" && !clientProvided.has(f),
)) {
  const text = readFileSync(join(dir, file), "utf8").replace(/\/\*[\s\S]*?\*\/|^\s*\/\/.*$/gm, "");
  for (const m of text.matchAll(/"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`/g)) {
    const s = (m[1] ?? m[2]).replace(/\\"/g, '"');
    if (s.length < 2 || s.startsWith("./") || s.startsWith("@/") || s.includes("${")) continue;
    if (structural.has(s)) continue;
    checked++;
    const probe = s.startsWith("/assets/") ? s.slice(1) : s;
    if (!sources.some((src) => src.includes(probe))) misses.push(`${file}: ${JSON.stringify(s)}`);
  }
}
console.log(`checked ${checked} strings against docs/source/index.html and script.js`);
if (misses.length) {
  console.log(`${misses.length} not found verbatim:`);
  for (const m of misses) console.log("  " + m);
  process.exit(1);
}
console.log("every content string is present verbatim in the source");
