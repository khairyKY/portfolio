// Stamp the portfolio's K icon into every study guide in public/files (runs as `prebuild`).
// ponytail: the guides are standalone HTML written by other build scripts, so the icon is added here, at deploy time,
// instead of in each builder. Inline data URI so the icon also shows when a guide is downloaded and opened offline.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const svg = readFileSync("public/favicon.svg", "utf8").replace(/\s+/g, " ").trim();
const tag = `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,${encodeURIComponent(svg)}" data-portfolio-icon>`;

let n = 0;
for (const f of readdirSync("public/files").filter(f => f.endsWith(".html"))) {
  const p = `public/files/${f}`;
  const before = readFileSync(p, "utf8");
  const h = before.replace(/<link[^>]*data-portfolio-icon[^>]*>\n?/g, ""); // drop an old stamp so icon changes propagate
  if (!/<\/head>/i.test(h)) continue;
  const after = h.replace(/<\/head>/i, tag + "\n</head>");
  if (after !== before) { writeFileSync(p, after); n++; }
}
console.log(`stamp-icon: ${n} guide(s) updated`);
