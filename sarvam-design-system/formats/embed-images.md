# Format · Embed images (glass glyph tiles and wide embeds)

Small, quiet brand images for places where a photo or a full banner would be too much: link previews (OG), blog and changelog headers, docs cards, app and feature tiles, integration listings and Notion or Slack embeds.

Generator: **`tools/embed/embed.py`** (standard library only, SVG output; `--png` renders through `scripts/render.js`). Examples are in `assets/embeds/`.

## The two kinds
| Kind | What's in it | Default size | Use |
|---|---|---|---|
| **Glyph tile** (`tile`) | A rounded square (radius 22%). Vertical gradient from a deep hue at the top to its light tint at the bottom, a soft inner haze, a pale rim at the edges and fine grain. In the centre, a **frosted-glass outline** of a gateway glyph (`assets/glyphs/model-XX.svg`) at ~54% of the tile, drawn as layered translucent white strokes (faint glow, translucent body, crisp core) | 512×512 (164×164 `tile-sm`) | App icons, feature or product tiles, integration listings, avatars for agents |
| **Wide embed** (`wide`) | A diagonal two-hue pastel gradient, a pale centre haze and film grain. The **Sarvam mandala** is scaled to ~3.6× the height and masked to the edges, so only its large outer arcs show at the left and right. In the centre, a **glass line icon** (globe with star, mic, wave, chat, doc or spark) at ~46% of the height | 1200×520 (`og` 1200×630, `blog` 1600×900, `square` 1080²) | Link and OG previews, blog and changelog headers, docs cards, embeds |

Analysed from Sarvam's own embeds:
- **Red glyph tile:** a sindoor red top fading to rose, with a six-pointed gateway glyph in glass outline.
- **Lilac globe embed:** a pink-lilac to periwinkle gradient with grain, faint mandala arcs at the edges, and a white glass globe with a four-point star.

## Usage
```bash
python tools/embed/embed.py --list                                    # palettes, glyphs, icons, sizes
python tools/embed/embed.py tile --palette rose --glyph model-07 --out out/tile.svg --png
python tools/embed/embed.py wide --palette lilac --icon globe --size og --out out/og.svg --png
```

| Palette | From → to | Fits |
|---|---|---|
| `rose` | sindoor `#c32f3a` → `#e7a3ab` | Default tile; alerts, voice, heritage |
| `lilac` | `#d7a5d6` → `#8e9ced` | Default wide; translation, multilingual, general announcements |
| `indigo` | `#3d4bb8` → `#a7c0f1` | Models, platform, developer |
| `dusk` | `#1c1f4a` → `#6a88e2` | Research, launches, dark contexts |
| `saffron` | `#d5650f` → `#f9bb9e` | Events, community, festive |
| `marigold` | `#c08827` → `#ffe8b7` | Education, programmes |
| `leaf` | `#496d21` → `#c8e4b0` | Government, sovereignty, public good |
| `spectrum` | `#a7c0f1` → `#f9bb9e` | The blue→orange light, brand-level |

## Rules
- **Must** use one glyph or one icon per image. No text, no logos and no second motif. The page or card around it carries the words.
- **Must** keep the glass white (layered translucent strokes). Never colour the glyph or icon, and never fill it solid.
- **Must** keep grain subtle (5–7% white noise) and never add it to text.
- **Should** match the glyph or icon to the subject. Use gateway glyphs for product and brand tiles, and line icons for capabilities (globe for translation, mic for speech to text, wave for text to speech, chat for agents, doc for parsing).
- **Should** pick the palette by subject from the table above, and keep one palette per series so a set of tiles reads as a family.
- **Never** use the mandala on tiles (too small to read). It belongs to the wide kind, at the edges only.
- **Never** stretch: use the size presets or a custom `WxH`. The composition scales from the short side.

## Accessibility
- Embeds are decorative next to a visible title: use `alt=""` and keep the meaning in the surrounding text.
- When an embed stands alone (an OG image), the page's `og:title` carries the meaning; the image never holds the only copy of it.
