// Checks satzbau-data.js:  node tools/check-satzbau.mjs
// Every sentence has an end mark, English and a known rule; every other
// correct order uses exactly the same blocks; no level is too small for a round.
import { readFileSync } from "node:fs";
const window = {};
new Function("window", readFileSync(new URL("../satzbau-data.js", import.meta.url), "utf8"))(window);
let bad = 0;
const fail = (w, m) => { bad++; console.log("✗ " + w + ": " + m); };
const blocks = s => s.replace(/[.?!]$/, "").split("|").map(b => b.replace(/^,\s*/, "").toLowerCase());
for (const [lv, list] of Object.entries(window.SB)) {
  if (list.length < 10) fail(lv, "needs at least 10 sentences");
  const seen = new Set();
  list.forEach(([s, en, rule, alt], i) => {
    const w = `${lv} #${i + 1} ${s}`;
    if (!/[.?!]$/.test(s)) fail(w, "no end mark");
    if (!en) fail(w, "no English");
    if (!window.SBR[rule]) fail(w, "unknown rule " + rule);
    if (blocks(s).length < 3) fail(w, "fewer than 3 blocks");
    if (seen.has(s)) fail(w, "repeated"); seen.add(s);
    for (const a of alt || []) if (blocks(a).sort().join("|") !== blocks(s).sort().join("|")) fail(w, "other order uses different blocks: " + a);
  });
  console.log(`  ${lv}: ${list.length} sentences`);
}
if (bad) { console.log(bad + " problem(s)"); process.exit(1); }
console.log("✓ all Satzbau sentences fine");
