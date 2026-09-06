// Phase 8 re-walk: every `code` span in docs/00-content-inventory.md is looked up in the rendered
// page. Usage: node scripts/walk-inventory.mjs [url]
import { readFileSync } from "node:fs";

const url = process.argv[2] ?? "http://localhost:3021/";
const html = await fetch(url).then((r) => r.text());
const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
const raw = decode(html);
const text = decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ");
const views = [raw, text];

const inventory = readFileSync("docs/00-content-inventory.md", "utf8");
// Only sections 1 to 3 are page content; 0, 4 to 9 are document, assets, behaviours and notes.
const start = inventory.indexOf("## 1. Header");
const end = inventory.indexOf("## 4. Assets");
const body = inventory.slice(start, end);

const skip = new Set([
  "aria-hidden",
  'target="_blank" rel="noopener"',
  "<em>",
  "<s>",
  "--:--",
  "Africa/Lagos",
  "Europe/London",
  "WAT",
  "GMT",
  "BST",
  "01",
  "02",
  "03",
  "04",
  "#",
  "name",
  "org",
  "email",
  "sector",
  "interest",
  "message",
  "organization",
  'aria-label="Von Newman Technology Consultants, home"',
  "aria-haspopup",
  'aria-label="Open menu"',
  'aria-controls="mobile-menu"',
  '<nav aria-label="Mobile">',
  'aria-label="Screens from Von Newman Atlas and Von Newman Sonar"',
  'aria-label="Works with"',
  'aria-label="Choose a sector"',
  "panel-public",
  "panel-private",
  "#contact-form",
  '<main id="top">',
  "fin",
  "Live",
  "Cloud inventory",
]);

// Removed from the page at the client's instruction on 5 September 2026 (hero screenshots).
const removed = new Set([
  "Atlas · 109+ courses",
  "Sonar · every asset, one view",
  "Von Newman Atlas learning platform home page",
  "Von Newman Sonar cloud inventory dashboard",
  // Sonar screenshot replaced with the product homepage, 5 September 2026 (client).
  "Sonar cloud inventory listing managed and unmanaged resources across AWS accounts",
  // Header Sign in menu removed, 5 September 2026 (client); both links remain in the footer.
  "Sign in to Atlas",
  "Sonar console",
  "Learners and administrators.",
  "Access is issued per organisation. Request yours.",
  // Form note removed from view, 7 September 2026 (client).
  "Sending opens your email app with the message ready to go. Or write to us directly.",
  // Contact label "Visit" renamed "Address", 6 September 2026 (client).
  "Visit",
  // Product actions removed 5 September 2026 (client); the footer keeps the same destinations.
  "Browse the catalogue",
  "Request console access",
  // Hero locator lines removed, 7 September 2026 (client).
  "Lagos and London",
  "Public and private sector",
  // Trust point reworded to "Delivered for NRS and More", 5 September 2026 (client).
  "Delivered for HP and LexisNexis",
]);

let total = 0;
const misses = [];
for (const m of body.matchAll(/`([^`]+)`/g)) {
  const s = m[1];
  if (skip.has(s) || s.startsWith("#") || s.startsWith("assets/")) continue;
  total++;
  const probe = s.replace(/^mailto:|^tel:/, (x) => x);
  if (!views.some((v) => v.includes(probe))) misses.push(s);
}
// Attributes and assets checked separately.
const attrs = {
  "Atlas alt": raw.includes(
    'alt="Atlas home page showing pathways, progress and a request-a-demo button"',
  ),
  "Works with": raw.includes('aria-label="Works with"'),
  "Choose a sector": raw.includes('aria-label="Choose a sector"'),
  "Open menu": raw.includes('aria-label="Open menu"'),
  "Live badge": text.includes(" Live "),
  "tel link": raw.includes('href="tel:+2349029534228"'),
  "mailto link": raw.includes('href="mailto:info@vonnewmanconsulting.com.ng"'),
  "lang en-GB": raw.includes('lang="en-GB"'),
};
const assets = [
  "vn-mark.png",
  "atlas-home.jpg",
  "sonar-inventory.jpg",
  "team-wilfred.jpg",
  "team-vijay.jpg",
  "team-kate.jpg",
  "team-oyin.jpg",
  "team-abdulrasaq.jpg",
  "team-victor-2026.jpg",
  "vn-logo-white.png",
].map((f) => [f, raw.includes(encodeURIComponent("/assets/" + f)) || raw.includes("/assets/" + f)]);
const anchors = [
  "top",
  "difference",
  "products",
  "atlas",
  "sonar",
  "approach",
  "services",
  "sectors",
  "company",
  "team",
  "contact",
].map((id) => [
  id,
  new RegExp(`id="${id}"`).test(raw),
  (raw.match(new RegExp(`href="#${id}"`, "g")) ?? []).length,
]);
const externalTargets = [
  ...new Set(
    [...raw.matchAll(/href="(https?:[^"]+)"/g)]
      .map((m) => m[1])
      .filter((h) => !h.includes("localhost")),
  ),
];

console.log(
  `inventory strings checked: ${total}, present: ${total - misses.length}, missing: ${misses.length}`,
);
for (const m of misses) {
  if (removed.has(m)) {
    console.log("  REMOVED by client instruction, 5 Sep 2026:", JSON.stringify(m));
  } else if (m.includes(" · ")) {
    const parts = m.split(" · ");
    const ok = parts.every((part) => views.some((v) => v.includes(part)));
    console.log(
      `  SPLIT (dot removed, both parts ${ok ? "present" : "MISSING"}):`,
      JSON.stringify(m),
    );
  } else {
    console.log("  MISSING:", JSON.stringify(m));
  }
}
console.log(
  "attributes:",
  Object.entries(attrs)
    .filter(([, ok]) => !ok)
    .map(([k]) => k)
    .join(", ") || "all present",
);
console.log(
  "assets:",
  assets
    .filter(([, ok]) => !ok)
    .map(([f]) => f)
    .join(", ") || "all referenced",
);
console.log("anchors (id present, inbound hrefs):");
for (const [id, present, count] of anchors)
  console.log(`  #${id}: ${present ? "resolves" : "MISSING"}, ${count} link(s)`);
console.log("external targets:", externalTargets.join(" | "));
console.log("h1 count:", (raw.match(/<h1/g) ?? []).length);
