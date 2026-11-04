# Format · Social Banners (Meta, LinkedIn, X)

> Start with **`formats/banner-decisions.md`** (ad or post, hue story, surface, motif, copy move). This file holds the layouts, canvases and type scale those decisions plug into.

Derived from Sarvam's own LinkedIn posts (2025–26). Every banner = **one archetype + one hue story + one message**.

> Banners and social posts are **static HTML + CSS** (`templates/banner.html`) rendered to PNG with `scripts/render.js`. No React, no Tailwind and no animation library: the output is an image.

## Canvas specs
| Size class | Platform | Size (px) | Ratio | Safe zone |
|---|---|---|---|---|
| `size-sq` | Meta / Instagram feed square | **1080 × 1080** | 1:1 | 80px all sides |
| `size-pt` | Meta / Instagram feed portrait | **1080 × 1350** | 4:5 | 80px sides, 100px top/bottom; keep the headline in the centre 1080×1080 (grid preview crop) |
| `size-st` | Instagram / Facebook story, WhatsApp status | 1080 × 1920 | 9:16 | 80px sides, **250px top, 340px bottom** (platform UI) |
| `size-li` | LinkedIn single image, Facebook link share | **1200 × 627** | 1.91:1 | 64px sides, 56px top/bottom. Reads at 50% in the feed |
| `size-lsq` | LinkedIn square | 1200 × 1200 | 1:1 | 88px |
| `size-x` | X / Twitter in-feed | 1600 × 900 | 16:9 | 72px |

Export **PNG, sRGB, 1×** at the exact size. Keep text crisp: no blur on text layers.

## Proportional type and spacing (one banner, every platform)
Never hand-pick pixel sizes per platform. `templates/banner.html` sets **`--u` = 1% of the canvas's short side**. Every size is a multiple of `--u`, with a multiplier per aspect ratio. A banner adapted from square to LinkedIn to story then keeps the same balance of headline, margins and white space. Nothing looks cramped on one platform and empty on another.

| Token | Square / LI square | Portrait 4:5 | Story 9:16 | LinkedIn 1.91:1 | X 16:9 |
|---|---|---|---|---|---|
| `--u` | 10.8px / 12px | 10.8px | 10.8px | 6.27px | 9px |
| Padding `--pad` | 7.4u (80px) | 7.4u (80px) | 7.4u (80px) | 10.2u (64px) | 8u (72px) |
| Vertical padding `--pad-y` | 1× pad | 1.25× pad (100px) | 3.1× pad (250px) | 0.88× pad (56px) | 1× pad |
| **Headline (Season Mix 425)** `--h` | **9.6u (104px)** | **10.4u (112px)** | **11.2u (121px)** | **12.1u (76px)** | **10u (90px)** |
| Sub-copy `--sub` | 3u (32px) | 3.15u (34px) | 3.4u (37px) | 4u (25px) | 3.2u (29px) |
| Wordmark height `--wm` | 3.5u (38px) | 3.7u (40px) | 3.9u (42px) | 4.8u (30px) | 3.8u (34px) |
| Eyebrow / label | 0.68 × sub | 0.68 × sub | 0.68 × sub | 0.68 × sub | 0.68 × sub |
| Meta (date, venue) | 0.78 × sub | 0.78 × sub | 0.78 × sub | 0.78 × sub | 0.78 × sub |
| CTA pill | height 1.4 × wm, text 0.55 × wm | same | same | same | same |

Rules:
- Landscape formats get a **larger** headline multiplier (12.1u on LinkedIn) because the short side is small and the feed shows them at ~50%. Story gets more vertical padding, not bigger margins at the sides.
- Glyph clusters, mandalas and frames are sized in **% of the canvas**, never px, so they scale with it.
- To adapt a banner, change only the `size-*` class on `<body>`. If the copy wraps to an extra line in one size, shorten the copy. Don't shrink the type.
- Render every size you ship and compare them side by side (`node scripts/render.js banner.html out-sq.png 1080 1080`, then `-li` at 1200×627 and so on).

## Composition with ui-ux-pro-max
For art direction options, extra platform sizes (Facebook cover, YouTube, Pinterest, display ads) and UX checks, use the bundled `vendor/ui-ux-pro-max/` (see `references/ui-ux-pro-max.md`). Sarvam tokens, type and archetypes always override its palettes and fonts.

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

## Mandala background (Sarvam illustration)
For banners and posts, the Sarvam mandala (`assets/mandala/`) is the preferred background texture, used instead of ripples or concentric circles. It is **optional, not for every banner**. Use it only where a background would otherwise get circles or ripples and it clearly looks better, at most once per banner and in roughly 1 of every 3 banners in a series. When used: 110–160% of the canvas width, cropped, rising from the bottom (festive or greeting posts like "Happy New Year 2026") or floating mid-canvas behind chips (product posts like "A Voice Agent with all the little human things"). Keep it **thin and faint**: the official ~0.7px lines in white at 15–25% (the official file as delivered is already 15%), ink at 5–8% on light canvases. Keep the headline in the calm zone above it. Full rules and CSS: `foundations/17-mandala-background.md`.

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
