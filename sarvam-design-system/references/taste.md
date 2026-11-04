# Reference · Taste pass (anti-slop, polish, micro-motion)

Translated from [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) v2.5 (MIT; core references bundled in `vendor/taste-skill/`). Its bar is figma.com and x.ai: a page a good company would ship, that says plainly what it sells, shows the real thing on every screen, and looks made for this client. Here it's rewritten in Sarvam tokens and rules. Where the original disagrees with this skill, **Sarvam wins** (conflicts are listed at the end).

**When to run it:** as the last step on every website and animated UI (after `checklists/qa.md`), and whenever someone says a page looks generic, templated, "AI-made", or asks to make it feel more premium. It adds taste; it never changes the brand.

## 1. Copy that a stranger understands in five seconds
- **h1 names the thing and who it's for**, in 2–7 words (`16-copywriting.md` budgets): "Speech to text for India", "Voice agents for customer support". Never a riddle, a mood or a brand line over a plain sub-line.
- **The first screen holds one hard fact** from `FACTS.md`: a number, a language count, a latency, a price ("<250ms", "22 Indian languages", "from ₹3 a minute").
- **Every heading has a noun that names a thing** ("Works with your stack", "Pricing", "Questions"), 1–6 words, never a question (FAQ entries aside), a colon heading or a line that only makes sense after the page.
- **Buttons are a verb plus what you get**, 1–5 words: "Get API key", "Start building", "Try a voice agent", "Get 100 credits free". Never "Learn more", "Read more", "Discover" or "Click here". Sarvam's outline link form "Explore models →" is allowed because it names the thing.
- **Few actions, one wording each:** at most two in the hero; the main action reads the same in the nav, the hero and the close.
- **Words per screen:** about 60–80 at 1440 on product pages, counted outside UI mocks and code. Cut a second sentence under a heading first, then card bodies to one sentence.
- **Banned** (on top of `16-copywriting.md`): metaphors and "where X meets Y"; exclamation marks; all-caps labels; invented capitalised concepts; filler (seamless, effortless, cutting-edge, unlock, elevate, supercharge, reimagine, next-generation, game-changing, powerful, robust); a "sample" or "example" note anywhere; captions that explain or apologise for a visual.

## 2. Layout: one idea per screen, equal edges
- **One section ≈ one screen** (1–2 screens tall at 1440×900). The hero holds the first screen alone; no next section's heading peeking in. A section that is mostly empty space is merged or cut.
- **Equal left and right edges:** every block sits on the container lines (`foundations/04`) or the 12-column grid; nothing hangs out to one side; no sideways scroll at any width.
- **Every row is full and even:** two-up 6+6, three-up 4+4+4; one height per row; titles level across a row.
- **Two levels of boxes, never three:** card → picture (a soft glow surface or aura, `foundations/14`) → the real UI fragment. Never a card in a card, never a patterned panel holding another white card, never glass.
- At 768 and 375, splits stack **text first**; no row half empty; buttons full width only inside cards and forms (hero CTAs stay auto-width, `button.md`).

## 3. Cards that look expensive
- **The card is barely there:** `--sf-white` on `--sf`, a 1px `--st-secondary` hairline, generous padding (32px desktop, 24px mobile, never under 24), radius 16px. The colour lives inside the picture, not on the card.
- **The picture is lit, not flat:** a soft glow surface, the hero aura or a glyph in colour depth, never a flat two-stop rectangle or a dot/grid pattern behind UI.
- **Real UI at true size, cut by the panel edge:** a glimpse of the product (a transcript, a call log, an API response), not a toy floating dead centre. A fade covers only context (the next row, the input bar), never the point; every edge keeps 24px of ground or is cut by 24px or more.
- **One thing moves per card group** (`components/reference/animations.md`). A card never moves on its own.
- Card text keeps Sarvam's measured scale (title Matter 525 18–20px; body `--tx-tertiary` 14px on sarvam.ai feature cards). Don't drop below that; labels only may be smaller.

## 4. The hover layer (quiet micro-interactions, every page)
Built in Motion (`foundations/10-motion.md`), fine pointer only, every hover also reachable by tap and keyboard:

| Part | Motion |
|---|---|
| Button | hover: fill steps a little toward the ink and the box rises 1px; press: Sarvam's `scale(.96)`, `--ease-brand`, 150ms |
| Arrow in a link or button | nudges 3px right and settles |
| Link | one underline style that draws left to right (nav words included); never a gliding pill in the nav |
| Card with a link | lifts 2px (`whileHover={{ y: -2 }}`), border darkens a step, an optional soft shadow on hover only (`--shadow-card-hover`) |
| Card without a link | nothing |
| Photograph in a linked card | scales 1.02–1.03 inside its frame over ~600ms; never dims or takes an overlay |
| Focus | Sarvam's indigo ring, settling in 200ms |
| Mega menu / dropdown | opens after ~80–150ms of intent, drops 6px while fading in; switching menus swaps content instantly (`mega-menu.md`) |

Never: tilt, flip, magnetic buttons, cursor-following glows on cards (the cursor glow is for dark **buttons** only), shine sweeps, overshooting easing.

## 5. Loops and "alive" moments (product and AI pages)
- **Card loops cycle in 2.5–4s**, start on their finished picture, hold the finished frame for the last 10–15% of each cycle, and **restart when the pointer or focus enters the card**. One subject per cycle (a status turns, a bar fills, a line types), one change every 1–2s, each change ≤ 300ms.
- **One timed loop per screen**, never two loops in one panel, and one count-up per page at most (in a stats band, final figure in the HTML).
- Typing speed 12–20 characters a second; a pointer glides ~200px in 1s and presses at `scale(.96)`.
- Anything still moving after 5s gets a small pause control (a round 32px button in the card corner).
- **Hero text is in place on the first frame:** never hidden behind a loader or intro.

## 6. Final eye check (beside sarvam.ai)
- It reads as a professional company page made for Sarvam, not a template and not an art piece.
- Nothing tilted, staggered, cut or overlapping; one button pair, one card style, one radius scale, one link look.
- Every visual renders at 1440, 1024, 768 and 375 (`scripts/render.js` at each).
- No placeholder, no apology caption, no drawn look-alike of a real logo, no invented quote or figure.

## Where the original conflicts with Sarvam (Sarvam wins)
| taste-skill says | In this system |
|---|---|
| Never violet or lavender | Periwinkle and indigo light **is** Sarvam's brand (`foundations/02`, `06`). Keep it. |
| Deal palettes, font pairings and heroes at random | Never. Tokens, Season Mix + Matter + Geist, and the 10 hero layouts (`formats/hero-layouts.md`) decide. |
| Nothing animates on scroll; no Lenis or smooth scroll | Sarvam's measured section reveal (desktop only, once, content visible by default) and the default React + Vite + Lenis stack stay. Cards still never animate individually on scroll. |
| No logo marquee, no FAQ accordion | Both are measured Sarvam components (`logo-marquee.md`, `collapsible.md`). Keep them. |
| Shader grounds, WebGL scenes, award-site moments | Only the Sarvam patterns in `components/reference/animations.md` (grain field, illustration cards). No third-party shader kits. |
| Real photographs lead every page | Real photography where it exists; otherwise gateway glyphs, the mandala and glow surfaces (`foundations/09`). Never stock. |
| Its own button press (.985) and easings | Sarvam's `scale(.96)` press and `--ease-brand` / `--ease-reveal` / `--ease-standard`. |
| Its `system.css`, starter, dealer and checker scripts | Sarvam's stacks (`references/stack-setup.md`), tokens and `checklists/qa.md`. The kit's 38MB of assets and scripts is not bundled. |
