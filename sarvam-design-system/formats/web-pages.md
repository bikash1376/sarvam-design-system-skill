# Format · Web Pages (landing / product pages)

## Canonical section order (from sarvam.ai home and product pages)
| # | Section | Background | Key components |
|---|---|---|---|
| 1 | **Nav** (fixed) | transparent → frosted | nav |
| 2 | **Hero** | `--sf` + **Hero Aura** | ornament + eyebrow, h1 (Season Mix 44→64/72), lead, CTA pair (hero buttons) |
| 3 | **Social proof bar** | `--sf` | "INDIA BUILDS WITH SARVAM" label + logo marquee |
| 4 | **Product demo / playground** | periwinkle aura bleeding under a white frame | tabbed UI frame, composer, live demo |
| 5 | **Feature explainer** | `--sf` | section header + numbered stepper/accordion (01–05) or feature cards |
| 6 | **Developer block** | white panel on a light indigo gradient | code block + 2×2 API tiles |
| 7 | **Story / mission moment** | `--sf` | text card + large media (video/photo) with Indic glyph texture |
| 8 | **Why us / pillars** | `--sf` | illustrated card (scalloped horizon) + star-bullet pillar list + CTA |
| 9 | **Platform / stats** | `--sf` | gradient tiles + link lists + metric table |
| 10 | **Enterprise trust** | `--sf` | cards + compliance badges |
| 11 | **Deployment options** | `--sf` | 3 cards with gateway glyph thumbnails |
| 12 | **Testimonial** | `--sf` | testimonial card |
| 13 | **Updates** | `--sf` | 3 blog cards (date · tag · title) + "View All Updates" |
| 14 | **CTA panel** | night gradient | dark CTA panel |
| 15 | **Footer** | `--sf` | footer + giant image wordmark |

A product landing page usually uses: 1, 2, 3, (4), 5, 8 or 9, (6), 12, 14, 15, plus product-specific blocks (use-case tabs, live demo, metrics "<500ms / 350M+", "Build. Test. Go live." 3-step).

## Section rhythm
- Gap between sections: **96px mobile / 128px desktop**. Title to content: **32 / 48px**.
- Alternate density: dense (demo, cards) → airy (statement, stats) → dense.
- At most **one dark section** per page (the CTA panel). At most **two aura moments** (hero + demo).
- Section titles are centred unless the section is a split layout.

## Per-breakpoint design targets
| | 375 mobile | 768 tablet | 1440 desktop |
|---|---|---|---|
| Container | 330px | 640px | 1200px |
| Hero h1 | 44px, 2–3 lines | 64px, 2 lines | 64–72px, 1–2 lines |
| Hero height | content + 144px top padding | same | ~min(100vh, 900px) |
| Cards | 1-up | 2-up | 3-up |
| Splits | stacked (text → media) | stacked or 50/50 | side-by-side 5/7 |
| Nav | wordmark + Log In + ☰ | same | full |
| Footer | 2-col links | 3-col | 6-col |
| Section gap | 96 | 128 | 128 |

## Build rules
- Mobile-first CSS. `min-width` media queries at 640/768/1024/1280/1536.
- Import `tokens/tokens.css`. Use variables, never raw hex in components.
- Semantic HTML (`header/nav/main/section/footer`), one `h1`, alt text on images, and `aria-hidden` on decorative glyphs.
- Images: `loading="lazy"` below the fold, explicit width/height, `object-fit:cover`.
- Reveal animations only at `md+`, and only with `prefers-reduced-motion: no-preference`.
- Lighthouse: aim for ≥90 accessibility and no layout shift from fonts (`font-display:swap` + size-adjusted fallbacks).
- Deliver screenshots at **375, 768 and 1440** widths. Check 1024 and 1280 to confirm the in-between states look intentional.

Starter: `templates/landing-page.html`.
