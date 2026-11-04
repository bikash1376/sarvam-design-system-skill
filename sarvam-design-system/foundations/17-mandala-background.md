# 17 · Mandala background (the Sarvam illustration)

Sarvam's own mandala illustration: nine interlocking petals around a centre diamond. Use it **instead of generic ripples, concentric circles or arbitrary arcs** wherever a background needs a quiet line texture.

Source: **Sarvam's official mandala line art** (`assets/mandala/sarvam-mandala.svg`, 903×895, from sarvam.ai). Use it, never a redraw or trace.

## Assets (`assets/mandala/`)
| File | Use |
|---|---|
| `sarvam-mandala.svg` | The official file as delivered: 0.72px `#F5F5F5` strokes at 15% opacity. Drop it straight onto a dark or saturated surface. |
| `sarvam-mandala-outline.svg` | The same line art with solid black strokes (1.4px). Use it as a **CSS mask** to tint the lines in any colour and opacity. |
| `sarvam-mandala-outline-{white,black}.png` | 2048px transparent PNGs of the line art, for tools that can't use SVG or masks. |

## When to use it (sparingly)
- **Optional, not a default.** Reach for it only where you would otherwise draw circles, ripples or arcs, and only if it improves the piece. Most banners and sections don't need it.
- **Yes:** social banners and posts (festive, announcement, product), dark CTA panels, one hero background, a section divider band.
- **At most 1–2 placements per page.** Use it once per banner. Never as wallpaper, never tiled, and never on every card.
- **No:** behind body copy or dense UI, on top of photography, or next to gateway glyphs that are already the hero. Don't use it as a logo replacement. The wordmark stays the logo.

## How to place it (good representation)
1. **Big and cropped.** Scale it to **110–160% of the canvas width**, centred horizontally. Anchor it so it rises from the bottom edge (roughly the top 40–60% of the mandala visible, e.g. the "Happy New Year 2026" post), or let it fill the middle band behind floating chips (the "Voice Agent" post). Never shrink it into a small centred badge.
2. **Tone on tone.** Tint it with the surface's own light colour, never a contrasting one:
      - White at **30–60% opacity** through the mask over saffron, periwinkle or indigo gradients (or the official file as is: white at 15%).
   - Ink `#1e2033` at **6–10%** on near-white surfaces.
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
  background:#fff; opacity:.45;                      /* tone-on-tone tint */
  -webkit-mask:url(assets/mandala/sarvam-mandala-outline.svg) center/contain no-repeat;
          mask:url(assets/mandala/sarvam-mandala-outline.svg) center/contain no-repeat;
}
```
The parent needs `position:relative; overflow:hidden`. When rendering with `scripts/render.js`, mask URLs resolve from file paths, so keep the path relative to the HTML.

## Don'ts
- Don't recolour it in rainbow or multi-hue gradients, add depth effects, or animate it spinning.
- Don't distort it (keep `aspect-ratio:1`), and don't rotate it off its 9-fold axis without a reason.
- Don't stack it with the concentric gateway (`gateway-concentric-*`) on the same canvas. Pick one.
