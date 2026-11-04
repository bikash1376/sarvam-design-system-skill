# 03 · Typography

## Families
| Role | Family | Weights | Notes |
|---|---|---|---|
| **Display** | **Season Mix** (variable, 300–900) | **425** for h1 and stats, **525** for section titles (sarvam.ai's `normal` = 425 and `medium` = 525, measured) | Sarvam's primary brand face. Warm, with soft calligraphic serif cues on a sans skeleton. Gives the "grounded but modern" voice. |
| **UI / Body** | **Matter** (variable, 100–1000) | **425** body, **525** titles/buttons/labels, **625** badges | Geometric grotesk. Used for everything functional. |
| **Section label** | **Geist** | 500 | 12px UPPERCASE, tracking 2px, `#666666`: "INDIA BUILDS WITH SARVAM", product-module labels. **Not Semi Mono, not bigger than 12px** |
| **Eyebrow** | **Geist** | 400 (sentence case) / 500 (uppercase) | 12–16px, `#666666` **always**. Never monospace, never indigo, never a pill |
| **Micro label** | **Matter Semi Mono** | 400 | 10–11px UPPERCASE, indigo, inside demos (OUTPUT, CODE SWITCH, PROPER NOUN), footer column heads, partner lockup names |
| **Code** | **Matter Mono** | 400 / 500 | Code blocks, API snippets |

Font files are in `assets/fonts/` and loaded by `tokens/tokens.css`. Geist ships as `GeistVF.woff2` (variable, Latin subset, SIL OFL).
**Fallbacks** (when brand fonts can't be embedded, e.g. in image-gen prompts or Google Docs): Season Mix → *Source Serif 4 / Newsreader at 400*; Matter → *Inter Tight / Manrope*; Geist → *Inter / system-ui at 400–500*.

> Season Mix and Matter are licensed typefaces (Displaay). The files here are for internal Sarvam work only. Don't redistribute them publicly.

## Which font where
- **Season Mix:** hero h1, section h2, banner headlines, big pull quotes, CTA-panel headline, two-tone headlines, event titles.
- **Matter:** nav, buttons, h3 card titles, body, captions, stats labels, form fields, partner lockup names, testimonial quotes.
- **Geist:** every eyebrow and section label (hero tagline, "INDIA BUILDS WITH SARVAM", product-module kicker, badge-adjacent labels). Always `#666666` on light surfaces. On a dark surface an eyebrow is either omitted or set to `rgba(255,255,255,.62)` — never indigo, never mono.
- **Exception, observed on LinkedIn:** a *bold Matter* (600) headline is sometimes set in white over a saturated gateway gradient ("Knowledge Fabric for Agents"). Use this only on dark or saturated full-bleed banners, where Season Mix regular would lose legibility.

## Web type scale (responsive, production values)
Mobile is the default. Values step up at `md` (768px) and, **[added]**, at `xl` (1280px) for landing heroes only.

| Token | Use | Font | Mobile (375) | Tablet (768) | Desktop (1440) | Line-height | Tracking |
|---|---|---|---|---|---|---|---|
| display (home) | Home hero h1 | Season Mix 425 | **44px** | **64px** | **64px** | 1.05 | −1.6px (−0.025em) |
| display (product) | Product / API page h1 | Season Mix 425 | **32px** | **52px** | **52px** | 1.2 | −1px |
| h2 | Section title | Season Mix 525 | **28px** | **36px** | **36px** | 1.2 | −0.72px (−0.02em) |
| h2-xl | Feature statement | Season Mix 425 | 32px | 40px | 48px | 1.1 | −0.02em |
| h3 | Card / feature title | Matter 525 | 18px | 20px | 22px | 1.35 | −0.015em |
| h4 | List / small card title | Matter 525 | 16px | 18px | 18px | 1.3 | −0.01em |
| lead | Hero sub-copy | Matter 425, `--tx-tertiary` on product pages / `--tx-secondary` on home | 16px | 18px | 18–20px | 1.55 | 0 |
| body-lg | Section intro | Matter 425, `--tx-tertiary` | 16px | 18px | 18px | 1.6 | 0 |
| body | Card copy | Matter 425, `--tx-tertiary` | 15px | 16px | 16px | 1.55 | 0 |
| small | Meta, captions | Matter 425 | 13px | 14px | 14px | 1.45 | 0 |
| eyebrow | Hero tagline | **Geist 400–500**, `#666666` | 13px | 14px | 16px | 1.5 | 0.02em |
| label | Section label / logo bar | **Geist 500**, UPPERCASE, `#666666` | 12px | 12px | 12px | 16px | 2px |
| metric | Big numbers | Season Mix 425 | 40px | 48px | 48px | 1 | −0.02em |
| button | Buttons | Matter 525 | 15px | 16px | 16px | 1 | 0 |

**Implementation:** use the `--fs-*` variables in `tokens.css` (they already change at the breakpoints), or `clamp()` for fluid steps between breakpoints:
```css
h1 { font: 400 clamp(44px, 3.2vw + 32px, 72px)/1.05 var(--font-display); letter-spacing: -0.025em; }
h2 { font: 500 clamp(28px, 1.1vw + 24px, 36px)/1.2 var(--font-display); letter-spacing: -0.02em; }
```

## Rules
1. **Sentence case everywhere.** "Build anything with Sarvam APIs", not Title Case Every Word. (Product names keep their capitals.)
2. **One or two lines for headlines.** Use `text-wrap: balance`. Force breaks deliberately ("The AI Platform / India Builds On"). Never leave a single orphan word on the last line.
3. **Never bold Season Mix** above 525. Its character comes from regular weights at large sizes.
4. **Tight tracking on display, neutral on body.** Never letter-space body text.
5. **Two-tone headlines** (social and heroes): split the phrase over two lines and colour line 2 lighter (`--sr-indigo-900` → `--sr-indigo-400`, or `--tx` → `--tx-tertiary`). Use one per piece at most.
6. **Inline highlight:** one keyword in a headline may be `--sr-indigo-600` ("Add *Text to Speech* to your app in minutes"). Don't use gradient text.
7. **Hierarchy through size and colour, not weight.** Body copy is `--tx-tertiary #666`. Titles are `--tx`.
8. **Measure:** 60–75ch for paragraphs. Hero sub-copy is max ~640px, centred, and **≤ 20 words**.
9. **Eyebrows are Geist and grey.** `#666666`, 2–5 words, never monospace, never indigo, never a pill. On a dark surface, omit the eyebrow or use `rgba(255,255,255,.62)`.
10. **One eyebrow per page, and only where it adds a label.** It is a label, not a decoration; it never repeats the h1.

## Indic scripts
Sarvam is an Indic-language company, so showing scripts is on-brand and encouraged.
- Use **Noto Sans Devanagari / Tamil / Telugu / Bengali / Kannada / Malayalam / Gujarati / Gurmukhi / Odia** (or *Noto Serif* to pair with Season Mix in display).
- Set Indic display text in **indigo** (`--sr-indigo-700`) at large sizes, as on the brand page ("नींद पूरी नहीं हुई…").
- Indic text needs **+15–20% line-height** compared with Latin (matras sit above and below).
- Scattered small Indic glyphs at 10–20% opacity work as a texture behind media (as in the "India Can" section). Use real words, never gibberish.

## Banner type scale
See `formats/social-banners.md`. Summary: headline 72–120px Season Mix, sub 28–36px Matter, meta 22–26px Matter, wordmark 32–44px tall.
