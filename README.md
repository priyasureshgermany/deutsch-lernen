# Deutsch lernen

Offline study app for German: **telc Deutsch A1** and **telc Deutsch B1** exam practice, plus **25 Gesprächsthemen** with A1/A2/B1 versions of every question and B1 model answers.

Live: https://priyasureshgermany.github.io/deutsch-lernen/

- English translation, solutions, and a practice mode that hides answers and listening texts until tapped
- Read-aloud (▶) with a slow tempo, using the device's German voice
- Tap a word (or several with *Mehrere Wörter*) for Google Translate / DeepL / dict.cc
- Search in German or English
- Installable (Add to Home Screen) and works offline; it only updates when you press the version button in the top bar

## Layout

| File | What |
|---|---|
| `index.html` | App shell: tabs, update button, service worker registration |
| `a1.html`, `b1.html`, `themen.html` | The three study sections, each self-contained |
| `sw.js` | Offline cache; replaced only through the Update button |
| `tools/make-icons.py` | Redraws `icons/` (needs Pillow) |
| `tools/import-modules.py` | Re-imports the sections from saved Claude artifact sources |

Releasing: bump the version in `index.html` (`APP_VERSION`), `sw.js` (`VERSION`) and `version.json` together, and add a line to `RELEASES.md`.
