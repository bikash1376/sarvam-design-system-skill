# 05 · Radius, Elevation and Surfaces

## Radius
| Token | Value | Use |
|---|---|---|
| `--radius-pill` | 9999px | **All buttons**, chips, tabs, nav pills, tags, toggles |
| `--radius-md` | 6px | Inline code, tiny badges |
| `--radius-lg` | 8px | Small thumbnails, icon tiles |
| `--radius-xl` | 12px | Inputs, composer boxes, dropdowns, mobile cards |
| `--radius-2xl` | **16px** | **Default card** (`--radius-card`) |
| `--radius-3xl` | 24px | Feature panels, tablet CTA panel, media frames |
| `--radius-4xl` | **32px** | Large hero media, desktop CTA panel (`--radius-card-lg`) |

Nested radius rule: inner radius = outer radius − padding (e.g. a 24px panel with 8px padding holds a 16px card).
Logo carousels and full-bleed photography have **0 radius**.

## Elevation (soft and ambient)
| Level | Token | Use |
|---|---|---|
| 0 | none + 1px `--st` border | Most cards on `--sf` |
| 1 | `--shadow-elev-sm` `0 1px 3px #00000014` | Chips, small pills |
| 2 | `--shadow-card` `0 0 40px #0000000f` | Floating cards, playground frame |
| 2-hover | `--shadow-card-hover` `0 8px 40px -4px #0000001f` | Card hover (+ translateY(-2px)) |
| 3 | `--shadow-elev-md` `0 4px 24px #0000001f` | Menus, popovers, cookie sheet |
| 4 | `--shadow-elev-lg` `0 12px 40px -8px #0000001f` | Modals |

**Tactile inset shadows** are a signature detail:
- Dark button: `inset 0 1px 0 rgba(255,255,255,.4), inset 0 -2px 0 rgba(0,0,0,.2)`
- Light button: `inset 0 2px 0 rgba(200,200,200,.1), inset 0 -1px 0 rgba(0,0,0,.05)`
- Tinted chip: `inset 0 -0.5px 1px 0 {hue-200}`
- Glyphs: inner shadow `dy=1, blur=2` in a pale tint of the glyph hue (see SVGs in `assets/glyphs/`)

## Surface stack (light theme)
```
--sf        #fcfcfc   page
  --sf-white  #ffffff   card (1px #e6e6e6 border or shadow-card)
    --sf-tertiary #f0f0f0  wells, code header, inner panels
  aura / gradient glows sit behind, never on top of, text
```
Dark moments: `--black #141414` or `--grad-night` panels hold white Season Mix text, a white hairline grid or concentric arcs, and a centred white star glyph.

## Borders and dividers
- 1px `#e6e6e6` (`--st`) on cards. 1px `#f0f0f0` for hairlines inside cards and table rows.
- Stats use 1px vertical dividers between items (desktop) and horizontal dividers (mobile).
- **Gradient hairlines:** the eyebrow uses 1px lines with `radial-gradient(circle, #6a88e2 0%, transparent 100%)`, which fade at both ends.
