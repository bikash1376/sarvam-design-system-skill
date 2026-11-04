# Components · Navigation, CTA Panel and Footer

## Top nav
| | Mobile / tablet (<1024) | Desktop (≥1024) |
|---|---|---|
| Height | 64px | 68px |
| Left | Wordmark 16px tall | Wordmark 18px tall |
| Centre | n/a | Products · Developers · Resources · Company (Matter 400 15px `--tx`, gap 32px, dropdowns on hover) |
| Right | "Log In" secondary pill + 24px hamburger | "Log In" **primary** pill + "Contact Us" secondary pill |
| Background | transparent over the hero aura → `rgba(252,252,252,.8)` + `backdrop-filter: blur(12px)` + bottom hairline on scroll | same |

- Optional **secondary nav** (product pages): a 45px (mobile) / 57px (desktop) bar of icon + label use-case tabs separated by 1px dividers, sticky under the main nav (e.g. Appointment Booking · Cart Abandonment · Lead Qualification).
- **Mobile sheet:** full-screen `--sf`, accordion groups (Matter 500 20px) with an 18px icon + label per item, and CTA pills pinned at the bottom.
- **Mega-menu (desktop):** white card, 16px radius, `--shadow-elev-md`, 2–3 columns of `[icon] Title / one-line description` rows.

## Dark CTA panel (pre-footer)
```
radius 32px (desktop) / 24px (tablet) / 16px (mobile) · background --grad-night
padding 80px 40px (desktop) / 48px 24px (mobile) · centred
h2 Season Mix 400 36–40px white, max 2 lines ("Build the Future of India's AI / with Sarvam")
white 4-point star glyph (32px) below + concentric 1px arcs at 8% white radiating from bottom centre
button: on-dark white pill
```

## Footer
**Desktop (≥1024):** container grid with
- Column 1 (brand): wordmark 24px tall, "AI for all from India" (Matter 13px `--tx-tertiary`), compliance badges (ISO 27001, AICPA SOC 2) in `--sf-tertiary` 56px squares, "Find us at" + social icons, and a small bordered box with © and address (12px).
- Columns 2–6: headings in **Matter Semi Mono 12px UPPERCASE** (`--tx`), links in Matter 400 14px `--tx-tertiary` with a 10px row gap: Products / APIs / Resources / Company / Legal.
- **Giant wordmark** below: full container width, image-filled (`background-clip:text` or an SVG mask with photography), cropped by the bottom edge by about 30%.

**Tablet (768–1023):** brand column on top, then link columns in a 3-up grid.
**Mobile (<768):** brand block, then link columns 2-up, then legal. The giant wordmark scales to 100vw and is still cropped.
Top separation: the footer sits on `--sf` with a 1px top border, or a large 32px top radius card edge.
