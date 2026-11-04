# QA Checklist (run before shipping anything)

## Content (check first)
- [ ] `grep -E '\[(VERIFY|metric|Customer|Name|Role|TBD)' ` on the output returns **nothing**
- [ ] No "John Doe", "$1,234.56", "Acme Corp", "user@example.com" — demo data is believable and consistent (`16-copywriting.md` §8)
- [ ] Every number, customer and quote is in `FACTS.md`
- [ ] The logo bar uses the real SVGs from `assets/logos/customers/`
- [ ] Hero has **≤ 4 elements**: badge/eyebrow · h1 · sub · 1–2 CTAs
- [ ] h1 is 2–7 words; hero sub ≤ 20 words; card body ≤ 20 words
- [ ] No banned word or invented urgency ("Instant", "secure", "effortless", "Act now", "Only 3 left")
- [ ] No meta-annotation about the work ("Concept design…", "Timing: [VERIFY…]", "Draft")

## Brand
- [ ] **Exactly one logo in the nav — Sarvam.** No partner mark, sub-brand or "in collaboration with"
- [ ] Co-brand lockup (if requested): Sarvam first unless Sarvam is the guest; ≤ 2 marks; partner keeps its own colours
- [ ] Wordmark is an original file, black or white only, with clear space respected, never beside the logomark
- [ ] Eyebrows and section labels are **Geist**, **`#666666`**, never monospace, never indigo
- [ ] Eyebrows: hero 0–1, mid-page ≤ 2 in total, never on adjacent sections, none on FAQ, testimonials, pricing, CTA, blog cards or legal. Each one names an owner, product, programme or tier (delete it: is anything lost?)
- [ ] Section labels (if any) are Geist 500 12px, at most 1–2 per page, not above every h2
- [ ] Product pages: centred hero, plain background, no split layout
- [ ] Headline is Season Mix 425 (h1) / 525 (h2), sentence case, tracking −0.02em, no orphan word
- [ ] UI and body text are Matter; demo micro-labels are Semi Mono caps; no other fonts
- [ ] Colour = neutrals + one blue/orange light story (+ max 1 supporting hue via glyphs)
- [ ] Exactly one gateway-derived element or one 2–3 glyph cluster
- [ ] Passes every item in `foundations/12-anti-slop.md`
- [ ] Copy follows `foundations/13-voice-and-tone.md` and `16-copywriting.md`; product names exact; no invented stats

## Craft
- [ ] Spacing values are on the 4px scale; section gaps 96/128
- [ ] Radii: pills for buttons, 16px cards, 24–32px panels
- [ ] Contrast: body ≥4.5:1, display ≥3:1
- [ ] Optical alignment: headline left edge aligns with the wordmark left edge
- [ ] Gradients have grain or blur, with no banding
- [ ] No card around a section, no card inside a card
- [ ] Non-bento card grids: equal width **and** equal height; footers share a baseline
- [ ] Icons are Hugeicons (or Sarvam's own glyphs) — no emoji, no mixed families

## Web responsive
- [ ] Screenshots at 375 / 768 / 1440 (plus a check at 1024 / 1280)
- [ ] No horizontal scroll at 375; touch targets ≥44px
- [ ] Layout reflows (stack, reorder, collapse) and doesn't just shrink
- [ ] Type steps: h1 44→64(→72), h2 28→36
- [ ] Reveals off on mobile and under reduced motion
- [ ] Websites: React + Tailwind (Vite, Next.js or Astro) with all animation in Motion (`motion` package, `MotionConfig reducedMotion="user"`). No CSS keyframes or second animation library for UI motion. Banners stay static HTML.
- [ ] Hero fits one viewport at 1440 without a scroll to reach the CTAs
- [ ] Logo wall / language row / sample cards start below the first viewport on desktop
- [ ] At 100% width, every card in a row is the same width and height (measure them)
- [ ] No 4-up card row below 1280px

## Banners
- [ ] Exact pixel size, PNG, sRGB
- [ ] Nothing within the safe margin (80px Meta / 64px LinkedIn sides)
- [ ] Headline legible at 300px thumbnail
- [ ] The series shares archetype logic, wordmark position and type scale
- [ ] Background line texture uses the Sarvam mandala (`assets/mandala/`), not generic ripples or concentric circles. It is large, cropped and tone-on-tone, appears in at most 1–2 places, and keeps the text at 4.5:1 contrast.
- [ ] Banners: no mono micro-labels or kicker lines (no "DIWALI 2026", "SARVAM · NEW MODEL", URL footers); only Season Mix + Matter on the `--u` scale
- [ ] Banners: the ad CTA pill is ≈ 6u tall (64px at 1080); partner logos are official artwork, optically matched to the Sarvam wordmark
- [ ] Banners: the gateway window holds the whole text block; ornament is the official mandala (thin, faint); no Indic line + emoji afterthoughts
- [ ] Taste pass (`references/taste.md`): h1 names the thing and buyer, one FACTS.md number on the first screen, buttons verb + object, one idea per screen, equal edges, linked cards lift 2px, card loops 2.5–4s and restart on hover, nothing tilted or staggered
