// Checks gespraeche-data.js and briefe-data.js:  node tools/check-alltag.mjs
// At least ten of each; every line and letter part has German and English;
// dialogues use only their two roles, each with a gender (m / f / me);
// letters have a greeting, body and close.
import { readFileSync } from "node:fs";

const window = {};
for (const f of ["../gespraeche-data.js", "../briefe-data.js", "../hoeren-data.js"])
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
const PLACES = ["station", "train", "sbahn", "airport", "shop", "radio", "phone", "cafe", "hotel", "bank", "doctor", "office", "street", "museum"];
for (const d of window.HS) {
  const w = "Hören " + d.id;
  if (ids.has(d.id + "-h")) fail(w, "duplicate id"); ids.add(d.id + "-h");
  for (const k of ["de", "en", "kind"]) if (!d[k]) fail(w, "missing " + k);
  if (!PLACES.includes(d.amb)) fail(w, "unknown background " + d.amb);
  for (const r in d.who || {}) if (!["m", "f"].includes(d.who[r][1])) fail(w, "speaker " + r + " needs m / f");
  const spoken = (d.parts || []).filter(p => typeof p !== "string");
  if (spoken.length < 2) fail(w, "fewer than 2 spoken parts");
  (d.parts || []).forEach((p, i) => {
    if (typeof p === "string") { if (!["chime", "ring", "beep"].includes(p)) fail(w, "part " + (i + 1) + " unknown sound " + p); return; }
    if (!d.who[p[0]]) fail(w, "part " + (i + 1) + " has unknown speaker " + p[0]);
    if (!p[1] || !p[2]) fail(w, "part " + (i + 1) + " is missing German or English");
  });
  if (!d.q || d.q.length < 3) fail(w, "fewer than 3 questions");
  if (!Array.isArray(d.qen) || d.qen.length !== (d.q || []).length || d.qen.some(x => !x)) fail(w, "every question needs its English in qen");
  (d.q || []).forEach((q, i) => {
    if (q[0] === "rf") { if (typeof q[2] !== "boolean" || !q[1] || !q[3]) fail(w, "question " + (i + 1) + " (rf) malformed"); }
    else if (q[0] === "mc") { if (!Array.isArray(q[2]) || q[2].length !== 3 || !(q[3] >= 0 && q[3] < 3) || !q[4]) fail(w, "question " + (i + 1) + " (mc) malformed"); }
    else fail(w, "question " + (i + 1) + " has type " + q[0]);
  });
}
if (window.GS.length < 10) fail("Gespräche", "fewer than 10");
if (window.BR.length < 10) fail("Briefe", "fewer than 10");
if (bad) { console.log(bad + " problem(s)"); process.exit(1); }
console.log("✓ " + window.GS.length + " Gespräche (" + window.GS.reduce((n, d) => n + d.lines.length, 0) + " lines), " + window.BR.length + " Briefe, " + window.HS.length + " Hören-Szenen (" + window.HS.reduce((n, d) => n + d.q.length, 0) + " questions)");
