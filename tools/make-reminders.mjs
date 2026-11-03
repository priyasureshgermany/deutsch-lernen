// Writes reminder/HH-MM.ics:  node tools/make-reminders.mjs
// One calendar file per half hour (06:00–22:30): a daily 30-minute event with
// an alarm at its start. The app links to the one for the chosen time; the
// phone's calendar then reminds every day, even when the app is closed (a
// static site has no server that could send push notifications).
// Floating local time (no time zone), so it rings at that hour wherever you are.
import { mkdirSync, writeFileSync } from "node:fs";
const dir = new URL("../reminder/", import.meta.url);
mkdirSync(dir, { recursive: true });
const APP = "https://priyasureshgermany.github.io/deutsch-lernen/";
const pad = n => String(n).padStart(2, "0");
/* RFC 5545: lines of at most 75 bytes, continued with a leading space */
const fold = line => { const out = []; let cur = "", len = 0;
  for (const ch of line) { const b = Buffer.byteLength(ch); if (len + b > (out.length ? 74 : 75)) { out.push(cur); cur = ""; len = 0; } cur += ch; len += b; }
  out.push(cur); return out.join("\r\n "); };
let n = 0;
for (let h = 6; h <= 22; h++) for (const m of [0, 30]) {
  const t = pad(h) + pad(m);
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Deutsch lernen//Tagesplan//DE",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:tagesplan-${t}@deutsch-lernen`,
    "DTSTAMP:20261103T000000Z",
    `DTSTART:20261103T${t}00`,
    "DURATION:PT30M",
    "RRULE:FREQ=DAILY",
    "SUMMARY:🔥 Deutsch lernen: Tagesplan",
    "DESCRIPTION:30 Minuten: Wiederholen · Hören und nachsprechen · Grammatik anwenden · Dein Deutsch\\n" + APP,
    "URL:" + APP,
    "TRANSP:TRANSPARENT",
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    "DESCRIPTION:Zeit für deinen Tagesplan 🔥",
    "TRIGGER:PT0M",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
    ""
  ].map(fold).join("\r\n");
  writeFileSync(new URL(`${pad(h)}-${pad(m)}.ics`, dir), ics);
  n++;
}
console.log(`✓ ${n} reminder files`);
