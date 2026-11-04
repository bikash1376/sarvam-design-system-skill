# Format · Web Pages (landing / product pages)

## Clean UI: the whole page, not just the hero
A Sarvam page is quiet **everywhere**. Restraint is not a hero-only rule — every section has to earn its place, and nothing decorative may compete with the content.

1. **One idea per section.** If a section repeats the one above it, delete it.
2. **One primary action per view.** One accent hue per section, plus neutrals.
3. **Space separates groups; a card holds one thing you act on.** Never a card around a whole section, never a card inside a card.
4. **Max two pieces of chrome per section** — a label, a link, a tag row. Not a label *and* a badge *and* a footnote *and* a link.
5. **No floating decorations.** No sample cards orbiting a headline, no sticker labels, no arrows pointing at things, no "scroll to explore", no corner badges.
6. **No chip soup.** Max 2 tag rows per card, 1 badge per block, 6 chips in a cluster. More than that is a list or a table.
7. **One eyebrow per page.** One section label per 2–3 sections, at most.
8. **Numbers live in a stats row**, not scattered as pills through the copy.
9. **Remove any element whose absence changes nothing.**
10. **Whitespace is the default filler.** If a gap feels large, it is probably right.

**Clutter test** (100% zoom, desktop):
- Cover the copy — do you see more than two visual objects in the first viewport? Too much.
- Squint — is there one clear focal point per section? If two things compete, demote one.
- Count the boxes — a box inside a box? Remove the outer one.
- Count the colours — more than 2 brand hues + neutrals? Reduce.

## Canonical section order (from sarvam.ai home and product pages)
| # | Section | Background | Key components |
|---|---|---|---|
| 1 | **Nav** (fixed) | transparent → frosted | nav |
| 2 | **Hero** | `--sf` + **Hero Aura** | ornament + eyebrow, h1 (Season Mix 44→64/72), lead, CTA pair (hero buttons). **Four elements, nothing else** |
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

A product landing page usually uses: 1, 2, 3, (4), 5, 8 or 9, (6), 12, 14, 15, plus product-specific blocks (use-case tabs, live demo, metrics "<500ms / 350M+", "Build. Test. Go live." 3-step). **This is a menu, not a checklist** — ship 6–8 sections, not 15. If two sections make the same point, keep the stronger one.

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
| Page | Layout | Background | Eyebrow (Geist, `#666666`) |
|---|---|---|---|
| Home / brand | Centred | Hero aura (06 §1) | Ornament + hairline eyebrow ("India's Sovereign AI Platform") |
| Product / API | Centred | Plain `--sf` | Ornament only |
| Campaign / event | Centred or archetype-led | Spectrum field | Optional |
Never use a left-aligned split hero with a demo card beside the headline. It crowds the hero and isn't a Sarvam pattern.

## Hero budget (every page type)
| Slot | Required | Budget |
|---|---|---|
| Badge / eyebrow | optional | 2–5 words |
| h1 | **yes** | 2–7 words, ≤ 2 lines |
| Sub | **yes** | ≤ 20 words, ≤ 2 lines at desktop |
| CTAs | **yes** | 1 primary + at most 1 secondary |

**Nothing else in the first viewport.** No floating caption/notes cards, language chips, logo wall, stats, trust bar, disclaimers, verification chips, "scroll" hints or side demo.

**Exception — product / API pages:** the demo bezel may begin under the hero and peek into the viewport. That is one object, not a cluster: no chips, sample cards or logo rows inside the hero itself.

**Below the fold** — must start after the first viewport (≥ `100svh` from the top) on desktop:
logo marquee · language row · floating caption/notes samples · stat band · customer proof.

A hero that needs a fifth element is two sections stacked. Move the extra one down.

## Section rhythm
- Gap between sections: **96px mobile / 128px desktop**. Title to content: **32 / 48px**.
- Alternate density: dense (demo, cards) → airy (statement, stats) → dense.
- Dark moments: home pages have **one** (the CTA panel). Product pages may have **three**, never adjacent: the dark feature panel, the stats band and the CTA panel. At most **two aura moments** per page; product pages use none in the hero.
- Section titles are centred unless the section is a split layout.

## Card grids: equal width, equal height
In any **non-bento** grid, every card is the **same width and the same height**. Unequal cards read as an accident, not a layout.

```css
.cards{
  display:grid;
  grid-template-columns:repeat(var(--cols), minmax(0,1fr)); /* minmax(0,…) — NOT 1fr */
  gap:24px;
  align-items:stretch;
}
.cards > *{
  min-width:0;            /* stops long words/tags blowing a column wider */
  height:100%;
  display:flex;
  flex-direction:column;
}
.cards .card-footer{ margin-top:auto; }   /* pins tags/links to a common baseline */
```

- **`minmax(0,1fr)` is the fix for unequal widths.** Grid items default to `min-width:auto`, so one long tag or unbreakable word widens its column and every card in the row drifts.
- Never `align-items:start` on a card grid. Never let content set the card width. Never `flex:1` cards in a wrapping row.
- **Column count:** 1 (<768) · 2 (768–1023) · **3 (1024–1279)** · **4 only at ≥1280**, and only if each card is ≥ 260px wide. Four cards in a 1200px container is the most common cause of cramped, uneven rows.
- **Keep heights close:** title ≤ 4 words (2 lines), body ≤ 20 words (3 lines), ≤ 2 tag rows, one media well at a fixed height. Clamp with `-webkit-line-clamp` rather than stretching the text.
- Cards with a media well, a tag row and a footer all share the same internal order, so rows line up.

## Bento (only when the content is genuinely uneven)
Bento is **not** four equal feature cards. Use it when the tiles carry different weight.

- Max **6 tiles**. One hero tile (2×2), 1–2 medium (2×1 or 1×2), the rest 1×1.
- Same gap (16–24px), same radius (16–24px), same internal padding on every tile.
- Each tile: visual or icon at the top, title + one line at the bottom. **No card inside a tile.**
- Tiles must still align to a shared grid — the eye should see rows and columns, not a mosaic of accidents.
- Reference: [sarvam.ai/token-factory](https://www.sarvam.ai/token-factory), and Sarvam's "Use your documents / Take action / Create sub-agents / Run on a schedule" block.

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
- **Stack:** ask first (`references/project-intake.md`), then set up with `references/stack-setup.md`. The default is React + Vite + Tailwind + Lenis + Motion, with Next.js or Astro as alternatives. Never vanilla single-file HTML.
- Mobile-first CSS. `min-width` media queries at 640/768/1024/1280/1536.
- Import `tokens/tokens.css`. Use variables, never raw hex in components.
- Semantic HTML (`header/nav/main/section/footer`), one `h1`, alt text on images, and `aria-hidden` on decorative glyphs.
- Images: `loading="lazy"` below the fold, explicit width/height, `object-fit:cover`.
- Reveal animations only at `md+`, and only with `prefers-reduced-motion: no-preference`.
- Lighthouse: aim for ≥90 accessibility and no layout shift from fonts (`font-display:swap` + size-adjusted fallbacks).
- Deliver screenshots at **375, 768 and 1440** widths. Check 1024 and 1280 to confirm the in-between states look intentional.

Starter: scaffold the chosen stack with `references/stack-setup.md`, then build the sections from `components/*.md`.
