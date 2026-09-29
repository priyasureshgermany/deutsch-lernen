"""Copies the three study pages in from their saved artifact sources.

    python tools/import-modules.py <a1.html> <b1.html> <themen.html>

Changes on the way in: the word popup's hint about a Claude account is
dropped, and the popup is pointed at translate.js (`window.freeSample`), which
answers the same calls as Claude's `sample` when the page is not on claude.ai.
"""
import os, re, sys

here = os.path.dirname(os.path.abspath(__file__))
root = os.path.join(here, "..")
TIP = re.compile(r'<div class="pn muted">Tipp: Mit einem Claude-Konto[^<]*</div>')

for src, name in zip(sys.argv[1:4], ("a1.html", "b1.html", "themen.html")):
    with open(src, encoding="utf-8") as f:
        s = f.read()
    s, n = TIP.subn("", s)
    s = s.replace("Promise.resolve(null);return sampleP}", "Promise.resolve(window.freeSample||null);return sampleP}", 1)
    s = s.replace("<script>\n", '<script src="translate.js"></script>\n<script>\n', 1)
    with open(os.path.join(root, name), "w", encoding="utf-8", newline="\n") as f:
        f.write(s)
    print(f"{name}: {len(s)} chars, removed {n} Claude hint(s)")
