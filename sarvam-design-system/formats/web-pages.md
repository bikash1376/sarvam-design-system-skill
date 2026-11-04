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
| 14 | **CTA panel** | `--grad-cta-panel` | dark CTA panel (slate button) |
| 15 | **Footer** | `--sf` | footer + giant image wordmark |

A product landing page usually uses: 1, 2, 3, (4), 5, 8 or 9, (6), 12, 14, 15, plus product-specific blocks (use-case tabs, live demo, metrics "<500ms / 350M+", "Build. Test. Go live." 3-step).

## Product / API page anatomy (measured on sarvam.ai/apis/speech-to-text)
Use this for any product, model or API landing page. The home page pattern above is for brand pages.
1. **Hero, centred, no aura**: ornament divider → h1 (Season Mix 425, 32/52px, 2 lines) → sub (Matter 18px `#666`, max 640px) → CTA pair ("Get Started for Free" primary + "Contact Us" secondary). **No eyebrow pill, no split layout, no side card in the hero.**
2. **Demo bezel** right below the hero: an outer frame (radius 32px, pale periwinkle `#eef1fd` fill, 1px `#e8ecfb`, padding 12px) holding a white inner card (radius 24px) with the live demo ("Speak to see live captions" + mic button). Under it: "Want to use this API?" + a primary pill ("Get 100 credits free").
3. **Cross-sell strip**: a thin white bar, 1px border, radius 12px: a line of copy + an indigo arrow link ("Explore Voice Agents →").
4. **Feature grid on a dark panel** (output modes): `--grad-cta-panel`-style navy→periwinkle, radius 24px, 3×2 cells with h3 white 22px, 14px white/60% copy, Semi Mono "OUTPUT" micro label, and native-script sample output in white.
5. **Interactive transcript**: numbered rows (01, 02…) of Indic text with indigo-highlighted entities and Semi Mono micro labels (CODE SWITCH, PROPER NOUN, NUMBER), timestamps at the right, and an audio player pill on top.
6. **Sample cards**: 3 white cards (radius 24px), title + copy left, an audio sample with a photo background right.
7. **Use cases**: segmented tabs (Voice agents · Post-call analytics · Subtitling & captioning) → card.
8. **Developer bento**: h2 + "Get API key" primary, then 2-column white cards (languages glyph art, REST/streaming/batch, diarization, key-term prompting, integrations).
9. **Stats band**: full-bleed `--grad-stats-band`, 3 numbers in Season Mix 425 48px white, labels white 16px. Use the product's FACTS.md numbers.
10. **Language grid**: all 22 languages, native script + English + code, from FACTS.md.
11. **FAQ** accordion (5 questions, answers from FACTS.md).
12. **CTA panel** → footer.
There is **no section label above the h2s** on this page. Section titles stand alone, centred and often split over 2 lines.

## Hero rules by page type
| Page | Layout | Background | Eyebrow |
|---|---|---|---|
| Home / brand | Centred | Hero aura (06 §1) | Ornament + hairline eyebrow ("India's Sovereign AI Platform") |
| Product / API | Centred | Plain `--sf` | Ornament only |
| Campaign / event | Centred or archetype-led | Spectrum field | Optional |
Never use a left-aligned split hero with a demo card beside the headline. It crowds the hero and isn't a Sarvam pattern.

## Section rhythm
- Gap between sections: **96px mobile / 128px desktop**. Title to content: **32 / 48px**.
- Alternate density: dense (demo, cards) → airy (statement, stats) → dense.
- Dark moments: home pages have **one** (the CTA panel). Product pages may have **three**, never adjacent: the dark feature panel, the stats band and the CTA panel. At most **two aura moments** per page; product pages use none in the hero.
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
