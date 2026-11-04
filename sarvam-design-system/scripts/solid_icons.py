"""Build the SOLID icon set: each icon filled flat in its product hue (as on sarvam.ai).

Hues were sampled from sarvam.ai (product tiles, check badges, feature icons):
  python scripts/solid_icons.py            -> assets/icons-solid/*.svg
Knock-outs stay as holes (fill-rule evenodd) or white paint, exactly as in the source.
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC, OUT = ROOT / "assets/icons", ROOT / "assets/icons-solid"

# icon -> hue (hex as observed on sarvam.ai)
HUES = {
    "tts": "#818cf8",            # Text to Speech tile (periwinkle)
    "voice": "#818cf8",
    "stt": "#f87171",            # Speech to Text tile (coral)
    "translation": "#f97316",    # Translation tile (orange)
    "parse": "#e879a0",          # Parse tile (pink)
    "doc-ai": "#e879a0",
    "database": "#ee7944",       # DPDP / data badge (sr-orange-600)
    "check-badge": "#556adc",    # verified badge (sr-indigo-600)
    "ui-presentations_mic": "#e96c2f",  # mic (sr-orange-700)
}
UI_DEFAULT = "#556adc"           # generic UI icons in solid style use sr-indigo-600

# extra colourways observed for the check badge
BADGE_VARIANTS = {"green": "#83c040", "pink": "#d9a0d0", "orange": "#d0542a", "indigo": "#556adc"}

# any paint that is not none / white / transparent counts as ink and takes the hue
INK = re.compile(r'(fill|stroke)="(?!none|white|#fff\b|#ffffff|transparent)([^"]+)"', re.I)


def paint(svg: str, hue: str) -> str:
    return INK.sub(lambda m: f'{m.group(1)}="{hue}"', svg).replace('color="#1f1f1f"', f'color="{hue}"')


def main():
    OUT.mkdir(exist_ok=True)
    n = 0
    for f in sorted(SRC.glob("*.svg")):
        hue = HUES.get(f.stem, UI_DEFAULT)
        (OUT / f.name).write_text(paint(f.read_text(encoding="utf8"), hue), encoding="utf8")
        n += 1
    badge = (SRC / "check-badge.svg").read_text(encoding="utf8")
    for name, hue in BADGE_VARIANTS.items():
        (OUT / f"check-badge-{name}.svg").write_text(paint(badge, hue), encoding="utf8")
        n += 1
    print(f"wrote {n} icons to {OUT}")


if __name__ == "__main__":
    main()
