// Checks gespraeche-data.js and briefe-data.js:  node tools/check-alltag.mjs
// At least ten of each; every line and letter part has German and English;
// dialogues use only their two roles, each with a gender (m / f / me);
// letters have a greeting, body and close.
import { readFileSync } from "node:fs";

const window = {};
for (const f of ["../gespraeche-data.js", "../briefe-data.js"])
  new Function("window", readFileSync(new URL(f, import.meta.url), "utf8"))(window);
let bad = 0;
const fail = (w, m) => { bad++; console.log("✗ " + w + ": " + m); };
const ids = new Set();

for (const d of window.GS) {
  const w = "Gespräch " + d.id;
  if (ids.has(d.id)) fail(w, "duplicate id"); ids.add(d.id);
  if (!d.de || !d.en || !d.sit || !d.sitEn || !d.who || !d.who.A || !d.who.B) fail(w, "missing title, situation or roles");
  if (!d.lines || d.lines.length < 10) fail(w, "fewer than 10 lines");
  (d.lines || []).forEach(([r, g, e], i) => {
    if (r !== "A" && r !== "B") fail(w, "line " + (i + 1) + " has role " + r);
    if (!g || !e) fail(w, "line " + (i + 1) + " is missing German or English");
    if (/"/.test(g)) fail(w, "line " + (i + 1) + " has a straight quote");
  });
  if (!d.tips || d.tips.length < 3) fail(w, "fewer than 3 key phrases");
  if (!d.g || !["m", "f", "me"].includes(d.g.A) || !["m", "f", "me"].includes(d.g.B)) fail(w, "roles need a gender g:{A,B} of m / f / me");
}
for (const d of window.BR) {
  const w = "Brief " + d.id;
  if (ids.has(d.id)) fail(w, "duplicate id"); ids.add(d.id);
  if (!d.de || !d.en || !d.task || !d.taskEn || !d.points || d.points.length < 3) fail(w, "missing title, task or points");
  const kinds = (d.parts || []).map(p => p[0]);
  for (const k of ["a", "p", "g"]) if (!kinds.includes(k)) fail(w, "no part of kind " + k);
  if (kinds.filter(k => k === "p").length < 3) fail(w, "fewer than 3 paragraphs");
  (d.parts || []).forEach(([k, g, e], i) => {
    if (!"mbapg".includes(k)) fail(w, "part " + (i + 1) + " has kind " + k);
    if (!g || !e) fail(w, "part " + (i + 1) + " is missing German or English");
  });
  if (!d.tips || d.tips.length < 3) fail(w, "fewer than 3 key phrases");
}
if (window.GS.length < 10) fail("Gespräche", "fewer than 10");
if (window.BR.length < 10) fail("Briefe", "fewer than 10");
if (bad) { console.log(bad + " problem(s)"); process.exit(1); }
console.log("✓ " + window.GS.length + " Gespräche (" + window.GS.reduce((n, d) => n + d.lines.length, 0) + " lines), " + window.BR.length + " Briefe");
