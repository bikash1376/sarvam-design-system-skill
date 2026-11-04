# 17 · Mandala background (the Sarvam illustration)

Sarvam's own mandala illustration: nine interlocking petals around a centre diamond. Use it **instead of generic ripples, concentric circles or arbitrary arcs** wherever a background needs a quiet line texture.

Source: `assets/reference/sarvam-mandala-source.jpeg`, traced to vector with 9-fold symmetry.

## Assets (`assets/mandala/`)
| File | Use |
|---|---|
| `sarvam-mandala-mark.svg` | Filled bands (logo weight). Best as a **CSS mask**, so you can tint it any colour. |
| `sarvam-mandala-outline.svg` | Same shape as an engraved double hairline (1.5px non-scaling stroke). Use it for fine line texture on large canvases. |
| `sarvam-mandala-{mark,outline}-{white,black}.png` | 2048² transparent PNGs, for tools that can't use SVG or masks. |

## When to use it (sparingly)
- **Yes:** social banners and posts (festive, announcement, product), dark CTA panels, one hero background, a section divider band.
- **At most 1–2 placements per page.** Use it once per banner. Never as wallpaper, never tiled, and never on every card.
- **No:** behind body copy or dense UI, on top of photography, or next to gateway glyphs that are already the hero. Don't use it as a logo replacement. The wordmark stays the logo.

## How to place it (good representation)
1. **Big and cropped.** Scale it to **110–160% of the canvas width**, centred horizontally. Anchor it so it rises from the bottom edge (roughly the top 40–60% of the mandala visible, e.g. the "Happy New Year 2026" post), or let it fill the middle band behind floating chips (the "Voice Agent" post). Never shrink it into a small centred badge.
2. **Tone on tone.** Tint it with the surface's own light colour, never a contrasting one:
   - Filled `mark`: white at **6–12% opacity** over saffron or indigo gradients.
   - `outline`: white at **35–60% opacity** over periwinkle or indigo gradients, or ink `#1e2033` at **6–10%** on near-white surfaces.
3. **Keep text clear.** The headline sits in the calm zone above or beside it. Body copy must stay at contrast ≥ 4.5:1, so check it over the brightest band of the mandala.
4. Optional: a 1–2px blur or a top-to-bottom mask fade (`mask-image: linear-gradient(transparent, #000 30%)`) so it emerges from the gradient instead of sitting on it.

## Recipe (CSS mask: any colour, any size)
```html
<div class="mandala-bg" aria-hidden="true"></div>
```
```css
.mandala-bg{
  position:absolute; left:50%; bottom:-45%; width:140%; aspect-ratio:1;
  transform:translateX(-50%); pointer-events:none;
  background:#fff; opacity:.10;                      /* tone-on-tone tint */
  -webkit-mask:url(assets/mandala/sarvam-mandala-mark.svg) center/contain no-repeat;
          mask:url(assets/mandala/sarvam-mandala-mark.svg) center/contain no-repeat;
}
/* fine-line variant */
.mandala-bg.is-outline{ opacity:.5;
  -webkit-mask-image:url(assets/mandala/sarvam-mandala-outline.svg);
          mask-image:url(assets/mandala/sarvam-mandala-outline.svg); }
```
The parent needs `position:relative; overflow:hidden`. When rendering with `scripts/render.js`, mask URLs resolve from file paths, so keep the path relative to the HTML.

## Don'ts
- Don't recolour it in rainbow or multi-hue gradients, add depth effects, or animate it spinning.
- Don't distort it (keep `aspect-ratio:1`), and don't rotate it off its 9-fold axis without a reason.
- Don't stack it with the concentric gateway (`gateway-concentric-*`) on the same canvas. Pick one.
