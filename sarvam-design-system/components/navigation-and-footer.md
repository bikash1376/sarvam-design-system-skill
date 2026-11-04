# Components · Navigation, CTA Panel and Footer

## Top nav
| | Mobile / tablet (<1024) | Desktop (≥1024) |
|---|---|---|
| Height | 64px | 68px |
| Left | Wordmark 16px tall — **the only logo in the nav** | Wordmark 18px tall — **the only logo in the nav** |
| Centre | n/a | Products · Developers · Resources · Company (Matter 425 15px `--tx`, gap 32px, dropdowns on hover) |
| Right | "Log In" secondary pill + 24px hamburger | "Log In" **primary** pill + "Contact Us" secondary pill |
| Background | transparent over the hero aura → `rgba(252,252,252,.8)` + `backdrop-filter: blur(12px)` + bottom hairline on scroll | same |

- **One logo, always.** The nav holds the Sarvam wordmark and nothing else. No partner logo, no "in collaboration with", no sub-brand, no model mark — even on a partner page. A co-branded lockup (`sarvam ✦ Partner`) is used only when the user asks for one, and then in the hero badge or footer. Sarvam sits first unless Sarvam is the guest in another company's programme (`aws marketplace ✦ sarvam`). See `foundations/11-logo-usage.md`.
- Optional **secondary nav** (product pages): a 45px (mobile) / 57px (desktop) bar of icon + label use-case tabs separated by 1px dividers, sticky under the main nav (e.g. Appointment Booking · Cart Abandonment · Lead Qualification).
- **Mobile sheet:** full-screen `--sf`, accordion groups (Matter 525 20px) with an 18px icon + label per item, and CTA pills pinned at the bottom.
- **Mega-menu (desktop):** white card, 16px radius, `--shadow-elev-md`, 2–3 columns of `[icon] Title / one-line description` rows.

## Dark CTA panel (pre-footer), measured on sarvam.ai
```
radius 24px · background --grad-cta-panel: linear-gradient(180deg, #13121e 0%, #a5bbfc 116.55%)
            (near-black navy at the top, periwinkle glowing up from the bottom)
padding 80px 40px (desktop) / 48px 24px (mobile) · centred
h2 Season Mix 425 36px white, 2 lines ("Start transcribing in minutes / Powered by Saaras V4")
a small glowing white dot / star below + concentric 1px arcs at 8% white around the bottom centre
button: the PRIMARY slate pill (#2a2c33, inset edge, cursor glow), not a white button
```

## Footer
**Desktop (≥1024):** container grid with
- Column 1 (brand): wordmark 24px tall, "AI for all from India" (Matter 13px `--tx-tertiary`), compliance badges (ISO 27001, AICPA SOC 2) in `--sf-tertiary` 56px squares, "Find us at" + social icons, and a small bordered box with © and address (12px).
- Columns 2–6: headings in **Matter Semi Mono 12px UPPERCASE** (`--tx`), links in Matter 425 14px `--tx-tertiary` with a 10px row gap: Products / APIs / Resources / Company / Legal.
- **Giant wordmark** below: full container width, **filled with photography** (sarvam.ai uses Indian miniature painting) via `background-clip:text` or an SVG mask, cropped by the bottom edge by about 30%. **Never a colour gradient.**

**Tablet (768–1023):** brand column on top, then link columns in a 3-up grid.
**Mobile (<768):** brand block, then link columns 2-up, then legal. The giant wordmark scales to 100vw and is still cropped.
Top separation: the footer sits on `--sf` with a 1px top border, or a large 32px top radius card edge.
