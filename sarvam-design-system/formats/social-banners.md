# Format · Social Banners (Meta, LinkedIn, X)

Derived from Sarvam's own LinkedIn posts (2025–26). Every banner = **one archetype + one hue story + one message**.

## Canvas specs
| Platform | Size (px) | Ratio | Safe zone (inner margin) | Notes |
|---|---|---|---|---|
| Meta feed square | **1080 × 1080** | 1:1 | 80px all sides | IG grid crops nothing |
| Meta feed portrait | **1080 × 1350** | 4:5 | 80px sides, **100px top/bottom** | IG grid preview crops to the centre 1080×1080, so keep the headline in the middle 1080 |
| LinkedIn single image | **1200 × 627** | 1.91:1 | 64px sides, 56px top/bottom | Shown small in the feed; the headline must read at 50% scale |
| LinkedIn square | 1200 × 1200 | 1:1 | 80px | Alternative |
| X / Twitter | 1600 × 900 | 16:9 | 72px | n/a |

Export **PNG, sRGB, 1×** at exact size. Keep text crisp: no blur on text layers.

## Type scale for banners
| Element | 1080×1080 | 1080×1350 | 1200×627 |
|---|---|---|---|
| Wordmark height | 36–40px | 40px | 28–32px |
| Eyebrow / lockup label (Semi Mono caps) | 22px, tracking .12em | 22px | 18px |
| **Headline (Season Mix 425)** | **88–112px**, lh 1.02–1.08, tracking −0.025em | **96–120px** | **64–80px** |
| Headline (Matter 600, saturated archetype only) | 84–100px, lh 1.05 | 96px | 64–72px |
| Sub-copy (Matter 425) | 30–34px, lh 1.4 | 32–36px | 24–26px |
| Meta (date/venue, Matter 425) | 24–26px | 26px | 18–20px |
| CTA pill (Matter 525) | 24px text, 64px tall | 24px | 18px text, 48px tall |

Max **12 words** of headline + sub combined on LinkedIn, and 16 on Meta. One CTA at most.

## The six archetypes

### A · Editorial Light *(Startup Program)*
```
┌──────────────────────────────────────────┐
│ sarvam                       (Apply Now) │ ← wordmark top-left · small secondary pill top-right
│                                           │
│ Startup                   ✿  ◇◇◇◇        │ ← huge Season Mix headline, left, 2 lines
│ Program                  ◇ GATEWAY ◇     │ ← cluster of 2–3 gateway glyphs, right half,
│                            ◇◇◇◇   ✤      │   overlapping, different hues & sizes
│ Everything you                            │ ← small Matter sub, bottom-left
│ need to build                             │
└──────────────────────────────────────────┘ bg #ffffff or #fcfcfc
```
Best for launches, programmes and product names. Works at all sizes. On LinkedIn 1200×627 the glyph cluster takes the right ~45%.

### B · Two-tone Centred *(Champions Program)*
White background. Wordmark centred at the top, in `--sr-indigo-950` or black. Headline centred over two lines: line 1 `--sr-indigo-900`, line 2 `--sr-indigo-400`. Then a 1–2 line sub in `--tx-secondary`. The lower half holds a **monochrome indigo hero object** (3D render or large gateway glyph) with ghosted white duplicates behind it that fade out.
Best for programmes, community and people. Ideal at 1080×1350.

### C · Gateway Frame *(Knowledge Fabric for Agents)*
Full-bleed **concentric gateway** (`assets/motifs/gateway-concentric-*.svg`, stretched to fill and rings blurred 2–4px) in a saturated ramp (leaf→marigold, saffron, indigo). White wordmark centred at the top of the inner arch, and a white **Matter 600** headline centred over 2 lines.
Best for technical features, research and blog posts. Strong thumb-stop.

### D · Spectrum Field *(India's AI Now Arriving)*
Full-bleed blurred **blue→orange spectrum** (06 §2, motion-field variant) with grain. White wordmark top-left. Large white **Season Mix 425** headline left-aligned, 2 lines. Meta line bottom-left (venue · date · time) in white at 85%.
Best for event teasers, drops and "coming soon".

### E · Glow Gateway *(Supernova case study)*
A grainy cream → lavender → violet vertical field with a **blurred cream gateway glow** in the centre (06 §3). Inside the glow: the lockup `sarvam · PARTNER`, then a dark Season Mix 425 headline, centred, 3 lines max.
Best for customer stories and partner announcements.

### F · Event Key Visual *(Sarvam Epoch, Voice Agents Live)*
White top zone with the wordmark small top-left, the event name top-right, and a Season Mix headline left. Below sits a **heritage band**: a B&W halftone of Indian architecture plus pixel-textile strips (magenta/marigold checks, saffron squares with concentric pixel circles) in heritage colours. The webinar variant uses a white card with soft lavender scalloped cloud edges, the `sarvam │ [glyph] PRODUCT` lockup centred, the title, and a speaker photo in a 160px circle with name and role.
Best for conferences, webinars and livestreams.

## Choosing quickly
| Message type | Archetype | Hue story |
|---|---|---|
| Product / model launch | A or C | product hue (TTS indigo, Translate saffron…) |
| Programme / community | A or B | indigo, or green for startups |
| Research / blog / feature explainer | C | leaf/marigold or indigo |
| Event / drop teaser | D or F | blue→orange spectrum |
| Customer story | E | cream → violet |
| Hiring / culture | A with photo in gateway mask | warm heritage |

## Series consistency
When making a set (e.g. 3 Meta + 3 LinkedIn):
1. Use the **same archetype family** across sizes for one message. Re-flow it; don't redesign it.
2. Fix the wordmark position (top-left or top-centre) for the whole series.
3. Vary **hue story** per message, not layout per message.
4. Re-flow rules from square to landscape: **stacked becomes side-by-side.** Headline left (55%), visual right (45%). Sub-copy may be dropped on 1200×627 if it would fall below 24px.
5. Portrait 4:5: add vertical air. The visual grows, and the headline stays in the centre 1080px band.

## Banner QA
- Headline readable at a 300px-wide thumbnail?
- Wordmark black/white only, unmodified, with clear space respected?
- No text over the busiest part of a gradient? Contrast ≥4.5:1 for sub-copy, ≥3:1 for headline.
- Grain added to gradients (no banding)?
- Nothing important within 80px of the edges?
