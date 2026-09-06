// Generates components/ui/world-map-path.ts from Natural Earth land data (public domain).
// One-off tooling, not a runtime dependency. To regenerate:
//   npm install --no-save world-atlas@2 topojson-client@3 d3-geo@3 topojson-simplify@3
//   node scripts/make-map.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import * as topojson from "topojson-client";
import { presimplify, simplify } from "topojson-simplify";
import { geoEquirectangular, geoPath } from "d3-geo";
const require = createRequire(import.meta.url);
const world = JSON.parse(readFileSync(require.resolve("world-atlas/land-110m.json"), "utf8"));
const simplified = simplify(presimplify(world), 0.35);
const land = topojson.feature(simplified, simplified.objects.land);
const W = 1000,
  H = 500;
const projection = geoEquirectangular().fitSize([W, H], { type: "Sphere" });
const path = geoPath(projection);
let d = path(land);
d = d.replace(/(\d+\.\d{2})\d+/g, "$1");
const pin = (lon, lat) => projection([lon, lat]).map((v) => Math.round(v * 100) / 100);
const lagos = pin(3.3792, 6.5244),
  london = pin(-0.1276, 51.5072);
writeFileSync(
  "components/ui/world-map-path.ts",
  `// Generated from Natural Earth land (public domain) via world-atlas 110m, equirectangular,\n// simplified. Regenerate with the script in scripts/make-map.mjs.\nexport const WORLD_MAP_VIEWBOX = "0 0 ${W} ${H}";\nexport const WORLD_MAP_PATH =\n  "${d}";\n`,
);
console.log(
  JSON.stringify({
    bytes: d.length,
    lagos,
    london,
    pctLagos: [(lagos[0] / W) * 100, (lagos[1] / H) * 100],
    pctLondon: [(london[0] / W) * 100, (london[1] / H) * 100],
  }),
);
