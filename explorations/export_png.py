"""Supersampled render -> float downsample + triangular dither -> 8-bit PNG (removes gradient banding).

usage: python export_png.py <hi-res.png> <out.png> <width> <height>
"""
import sys

import numpy as np
from PIL import Image

src, out, w, h = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
im = Image.open(src).convert("RGB")
# Downsample in 16-bit-ish float space per channel to keep fractional values.
chans = [np.asarray(c.convert("F").resize((w, h), Image.Resampling.LANCZOS)) for c in im.split()]
arr = np.stack(chans, axis=-1)
rng = np.random.default_rng(7)
dither = rng.random(arr.shape) - rng.random(arr.shape)  # triangular PDF, +/-1 LSB
arr = np.clip(np.round(arr + dither), 0, 255).astype(np.uint8)
Image.fromarray(arr, "RGB").save(out, optimize=True)
print("saved", out, arr.shape)
