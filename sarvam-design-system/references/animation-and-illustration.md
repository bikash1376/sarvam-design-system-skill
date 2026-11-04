# Reference · Animation and illustration skills (bundled)

Three external skills live inside this one under `vendor/`, so there is still a single skill to install. Their `SKILL.md` files are renamed (e.g. `ANIMATE.md`) so skill installers don't list them separately.

| Bundled | Source | License | Use it for |
|---|---|---|---|
| `vendor/emil-kowalski/animate/ANIMATE.md` (+ `RECIPES.md`) | [emilkowalski/skills](https://github.com/emilkowalski/skills) | MIT | Building one animation from scratch: should it animate, what purpose, which property, which easing and duration |
| `vendor/emil-kowalski/choreograph/CHOREOGRAPH.md` (+ `RECIPES.md`) | same | MIT | Several elements moving together: order, overlap and what stays still (illustration cards, staggered grids) |
| `vendor/emil-kowalski/animation-performance/ANIMATION_PERFORMANCE.md` | same | MIT | Staying inside the frame budget: composite-only properties, off-main-thread motion |
| `vendor/emil-kowalski/animation-vocabulary/ANIMATION_VOCABULARY.md` | same | MIT | Turning a vague request ("the bouncy thing") into the exact technique |
| `vendor/emil-kowalski/emil-design-eng/EMIL_DESIGN_ENG.md` | same | MIT | Polish: when motion helps, when it hurts, invisible details |
| `vendor/anthropic/algorithmic-art/ALGORITHMIC_ART.md` (+ `templates/`) | [anthropics/skills](https://github.com/anthropics/skills) | Apache 2.0 | Seeded generative ornament and fields (p5.js): grain fields, mandala-like line repeats, flow fields |
| `vendor/anthropic/canvas-design/CANVAS_DESIGN.md` | same | Apache 2.0 | Composed visual artwork (posters, ornament studies) as PNG or PDF. Its bundled fonts are left out: use Sarvam's fonts |

## When to reach for them
1. Someone asks for **an animation that isn't an existing component** → start at `components/reference/animations.md` (the pattern library and card grammar), then use `animate` / `choreograph` to decide timing and order, and `animation-performance` before shipping.
2. Someone asks for **generative art, ornament or a pattern** (a hero field, a festive motif, a texture) → `algorithmic-art`, rendered in Sarvam hues. Use the official mandala (`assets/mandala/`) and gateway glyphs as source geometry instead of inventing new ornament.
3. Someone asks for **a designed illustration or poster** → `canvas-design`, then bring it back into a Sarvam format (banner, embed, card).

## Already adapted to Sarvam
Every bundled file opens with a **"Sarvam overrides"** block, and conflicting values have been replaced in place:
- **Easing:** their `--ease-out` / `--ease-in-out` / `--ease-drawer` now hold Sarvam's `--ease-brand` / `--ease-standard` / `--ease-reveal` curves. Durations map to the `--dur-*` scale, and the stagger step is 55ms.
- **Fonts:** Poppins, Lora, Courier and "download whatever fonts" are replaced by Season Mix, Matter, Geist and Matter Mono.
- **Colour:** the Anthropic UI colours and default art palette in the algorithmic-art viewer and generator are now Sarvam tokens and the spectrum.
- **Banner styles:** mapped to Sarvam archetypes; off-brand styles (neon, retro, brutalist, anti-design, duotone) are excluded. Type sizes come from the `--u` scale.
- **ui-ux-pro-max:** its palettes, font pairings and density spacing scales are marked as ignored.

## Precedence (non-negotiable)
- **Sarvam wins on brand.** Colours, fonts, easing tokens, radius and copy come only from this skill. Ignore any palette, font or style choice the vendor skills suggest.
- **Motion is the animation library** on websites (`foundations/10-motion.md`). Vendor recipes written in CSS or another library are translated to Motion (`motion/react`), or to canvas for generative fields.
- Easing defaults are Sarvam's: `--ease-brand` `[0.2, 0, 0, 1]` for UI, `--ease-reveal` `[0.25, 1, 0.5, 1]` for entrances.
- Generated art never replaces official assets (logo, mandala, glyphs). It sits around them.
