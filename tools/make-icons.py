"""Draws the app icon into icons/.

    python tools/make-icons.py

Needs Pillow. The mark: the level ladder the pages open with, A1 · A2 · B1,
as three rising bars in the pages' own colours on the blue ground.
"""
import os
from PIL import Image, ImageDraw, ImageFont

S = 512
K = 2
W = S * K
BG_TOP, BG_BOT = (58, 104, 228), (30, 66, 170)
BARS = [((27, 138, 107), 0.46, "A1"), ((232, 179, 60), 0.70, "A2"), ((255, 255, 255), 1.0, "B1")]


def font(size):
    for p in ("C:/Windows/Fonts/seguibl.ttf", "C:/Windows/Fonts/segoeuib.ttf", "C:/Windows/Fonts/arialbd.ttf"):
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            pass
    return ImageFont.load_default()


def build(scale=1.0, transparent=False):
    img = Image.new("RGBA", (W, W), (0, 0, 0, 0))
    if not transparent:
        px = img.load()
        for y in range(W):
            t = y / W
            c = tuple(round(BG_TOP[i] + (BG_BOT[i] - BG_TOP[i]) * t) for i in range(3)) + (255,)
            for x in range(W):
                px[x, y] = c
    d = ImageDraw.Draw(img)
    plot_w, plot_h = 340 * K * scale, 300 * K * scale
    cx, cy = W / 2, W / 2
    base = cy + plot_h / 2
    gap = plot_w * 0.08
    bw = (plot_w - 2 * gap) / 3
    f = font(round(62 * K * scale))
    for i, (col, frac, lab) in enumerate(BARS):
        x0 = cx - plot_w / 2 + i * (bw + gap)
        y0 = base - plot_h * frac
        d.rounded_rectangle((x0 + 6 * K, y0 + 10 * K, x0 + bw + 6 * K, base + 10 * K), radius=bw * 0.2, fill=(0, 0, 0, 60))
        d.rounded_rectangle((x0, y0, x0 + bw, base), radius=bw * 0.2, fill=col + (255,))
        ink = (30, 66, 170) if col == (255, 255, 255) else (255, 255, 255)
        d.text((x0 + bw / 2, base - 48 * K * scale), lab, font=f, fill=ink, anchor="mm")
    return img.resize((S, S), Image.LANCZOS)


if __name__ == "__main__":
    here = os.path.dirname(os.path.abspath(__file__))
    icons = os.path.join(here, "..", "icons")
    os.makedirs(icons, exist_ok=True)
    art = build()
    art.save(os.path.join(icons, "icon-512.png"))
    art.resize((192, 192), Image.LANCZOS).save(os.path.join(icons, "icon-192.png"))
    build(scale=0.72).save(os.path.join(icons, "icon-maskable-512.png"))
    art.convert("RGB").resize((180, 180), Image.LANCZOS).save(os.path.join(icons, "apple-touch-icon.png"))
    print("wrote icon-512, icon-192, icon-maskable-512, apple-touch-icon")
