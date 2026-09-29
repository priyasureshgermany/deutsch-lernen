"""Copies the three study pages in from their saved artifact sources.

    python tools/import-modules.py <a1.html> <b1.html> <themen.html>

One change on the way in: the word popup's hint about a Claude account is
dropped, since on GitHub Pages the popup always offers the dictionary links.
"""
import os, re, sys

here = os.path.dirname(os.path.abspath(__file__))
root = os.path.join(here, "..")
TIP = re.compile(r'<div class="pn muted">Tipp: Mit einem Claude-Konto[^<]*</div>')

for src, name in zip(sys.argv[1:4], ("a1.html", "b1.html", "themen.html")):
    with open(src, encoding="utf-8") as f:
        s = f.read()
    s, n = TIP.subn("", s)
    with open(os.path.join(root, name), "w", encoding="utf-8", newline="\n") as f:
        f.write(s)
    print(f"{name}: {len(s)} chars, removed {n} Claude hint(s)")
