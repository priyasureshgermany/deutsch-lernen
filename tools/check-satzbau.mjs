// Checks satzbau-data.js:  node tools/check-satzbau.mjs
// Every sentence has an end mark, English and a known rule; every other
// correct order uses exactly the same blocks; each level has 10 sets of 10 and
// no sentence appears twice in a level.
import { readFileSync } from "node:fs";
const window = {};
new Function("window", readFileSync(new URL("../satzbau-data.js", import.meta.url), "utf8"))(window);
let bad = 0;
const fail = (w, m) => { bad++; console.log("✗ " + w + ": " + m); };
const blocks = s => s.replace(/[.?!]$/, "").split("|").map(b => b.replace(/^,\s*/, "").toLowerCase());
for (const [lv, sets] of Object.entries(window.SB)) {
  if (sets.length !== 10) fail(lv, "needs 10 sets, has " + sets.length);
  sets.forEach((set, k) => { if (set.length !== 10) fail(lv + " set " + (k + 1), "needs 10 sentences, has " + set.length); });
  const list = sets.flat();
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
