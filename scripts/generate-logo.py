#!/usr/bin/env python3
"""Generate a production-ready transparent PNG wordmark for beyond.dev.

SpaceX-inspired aerospace wordmark: clean geometric typography with
subtle angular cuts, integrated swoosh arc above ".dev".
White on transparent background, optimized for dark navbar at ~130x28px.
"""

import math
import os

from PIL import Image, ImageDraw, ImageFont

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.join(SCRIPT_DIR, "..")
OUTPUT_DIR = os.path.join(PROJECT_DIR, "public", "images")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "beyond-dev-logo.png")
SVG_FILE = os.path.join(OUTPUT_DIR, "beyond-dev-logo.svg")

SCALE = 8
FINAL_W, FINAL_H = 640, 110


def load_font(index, size):
    paths = [
        "/System/Library/Fonts/Avenir Next.ttc",
        "/System/Library/Fonts/Avenir.ttc",
        "/System/Library/Fonts/HelveticaNeue.ttc",
    ]
    for fp in paths:
        if os.path.exists(fp):
            try:
                return ImageFont.truetype(fp, size * SCALE, index=index)
            except Exception:
                continue
    return ImageFont.load_default()


def smooth_line(draw, pts, color, width):
    for i in range(len(pts) - 1):
        draw.line([pts[i], pts[i + 1]], fill=color, width=width, joint="curve")


def arc_points(cx, cy, rx, ry, start, end, n=200):
    return [
        (cx + rx * math.cos(start + (end - start) * i / n),
         cy + ry * math.sin(start + (end - start) * i / n))
        for i in range(n + 1)
    ]


def create_wordmark():
    CW = FINAL_W * SCALE
    CH = FINAL_H * SCALE
    img = Image.new("RGBA", (CW, CH), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Avenir Next: 0=Regular, 2=DemiBold, 4=Bold, 6=Heavy, 8=Medium
    font_beyond = load_font(4, 70)    # Bold for "beyond"
    font_dev = load_font(2, 70)       # DemiBold for ".dev"

    beyond = "beyond"
    dev = ".dev"

    bb = draw.textbbox((0, 0), beyond, font=font_beyond)
    bw, bh, bx, by = bb[2] - bb[0], bb[3] - bb[1], bb[0], bb[1]

    db = draw.textbbox((0, 0), dev, font=font_dev)
    dw, dh, dx, dy = db[2] - db[0], db[3] - db[1], db[0], db[1]

    gap = int(3 * SCALE)
    total_w = bw + gap + dw

    swoosh_top = int(16 * SCALE)
    pad_bot = int(12 * SCALE)
    avail_h = CH - swoosh_top - pad_bot

    text_h = max(bh, dh)
    ox = (CW - total_w) // 2
    oy = swoosh_top + (avail_h - text_h) // 2

    bx_pos = ox - bx
    by_pos = oy - by
    dx_pos = ox + bw + gap - dx
    dy_pos = oy - dy

    # Draw text
    draw.text((bx_pos, by_pos), beyond, fill=(255, 255, 255, 255), font=font_beyond)
    draw.text((dx_pos, dy_pos), dev, fill=(255, 255, 255, 255), font=font_dev)

    # === Swoosh arc above ".dev" ===
    scx = dx_pos + dw * 0.45
    scy = oy - int(2 * SCALE)
    srx = dw * 0.34
    sry = int(6 * SCALE)
    swoosh_c = (255, 255, 255, 150)
    swoosh_w = int(1.8 * SCALE)
    pts = arc_points(scx, scy, srx, sry, math.pi, 2 * math.pi)
    smooth_line(draw, pts, swoosh_c, swoosh_w)

    # === Angular slash on "b" ascender ===
    slash_x1 = bx_pos + int(10 * SCALE)
    slash_y1 = oy - int(4 * SCALE)
    slash_len = int(14 * SCALE)
    slash_ang = math.radians(-30)
    slash_x2 = slash_x1 + slash_len * math.cos(slash_ang)
    slash_y2 = slash_y1 + slash_len * math.sin(slash_ang)
    draw.line([(slash_x1, slash_y1), (slash_x2, slash_y2)],
              fill=(255, 255, 255, 120), width=int(2.0 * SCALE))

    # === Small angular notch on "y" tail ===
    y_bb = draw.textbbox((bx_pos, by_pos), "y", font=font_beyond)
    y_tail_x = y_bb[2] - int(4 * SCALE)
    y_tail_y = y_bb[3] + int(2 * SCALE)
    notch_len = int(8 * SCALE)
    notch_ang = math.radians(35)
    nx2 = y_tail_x + notch_len * math.cos(notch_ang)
    ny2 = y_tail_y + notch_len * math.sin(notch_ang)
    draw.line([(y_tail_x, y_tail_y), (nx2, ny2)],
              fill=(255, 255, 255, 80), width=int(1.5 * SCALE))

    return img


def create_svg():
    return '''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 95" width="640" height="95">
  <defs>
    <clipPath id="bounds"><rect x="0" y="0" width="640" height="95"/></clipPath>
  </defs>
  <g clip-path="url(#bounds)">
    <text x="16" y="64" font-family="'Avenir Next','Avenir',sans-serif"
          font-size="70" font-weight="700" letter-spacing="3" fill="white">beyond</text>
    <text x="318" y="64" font-family="'Avenir Next','Avenir',sans-serif"
          font-size="70" font-weight="600" letter-spacing="3" fill="white">.dev</text>
    <path d="M 335,24 Q 400,6 465,24" stroke="white" stroke-width="2"
          fill="none" stroke-linecap="round" opacity="0.59"/>
    <line x1="28" y1="28" x2="48" y2="16" stroke="white" stroke-width="2.4"
          stroke-linecap="round" opacity="0.47"/>
    <line x1="250" y1="82" x2="264" y2="90" stroke="white" stroke-width="1.8"
          stroke-linecap="round" opacity="0.31"/>
  </g>
</svg>
'''


def crop_and_pad(img, pad=10):
    alpha = img.getchannel("A")
    bbox = alpha.getbbox()
    if not bbox:
        return img
    crop = (
        max(0, bbox[0] - pad),
        max(0, bbox[1] - pad),
        min(img.width, bbox[2] + pad),
        min(img.height, bbox[3] + pad),
    )
    return img.crop(crop)


def verify(path):
    img = Image.open(path).convert("RGBA")
    w, h = img.size
    alpha = img.getchannel("A")
    fsize = os.path.getsize(path)

    print(f"\n{'='*50}")
    print(f"OUTPUT: {path}")
    print(f"Dimensions: {w}x{h}px  (ratio {w/h:.2f})")
    print(f"Alpha: {alpha.getextrema()}")
    print(f"Size: {fsize:,} bytes ({fsize/1024:.1f} KB)")

    corners = [(0, 0), (w-1, 0), (0, h-1), (w-1, h-1)]
    corner_ok = all(img.getpixel(c)[3] == 0 for c in corners)
    print(f"Transparent bg: {'✓' if corner_ok else '✗'}")

    content = alpha.getbbox()
    print(f"Content bbox: {content}")

    dw = 130
    dh = dw / (w / h)
    print(f"Navbar: {dw}px wide → {dh:.0f}px tall {'✓' if 24 <= dh <= 40 else '⚠'}")


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    img = create_wordmark()
    img = crop_and_pad(img, pad=6 * SCALE)

    fw = img.size[0] // SCALE
    fh = img.size[1] // SCALE
    img = img.resize((fw, fh), Image.LANCZOS)
    img.save(OUTPUT_FILE, "PNG", optimize=True)

    with open(SVG_FILE, "w") as f:
        f.write(create_svg())
    print(f"SVG: {SVG_FILE}")

    verify(OUTPUT_FILE)


if __name__ == "__main__":
    main()
