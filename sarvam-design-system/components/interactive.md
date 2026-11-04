# Components · Interactive (measured on sarvam.ai API pages)

## 1. Cursor glow on dark buttons (applies to ALL dark buttons; "Play Audio" is one example)
Every dark button (primary slate pill or dark hero gradient pill) (see `actions.md`) gets a **radial white glow that follows the cursor** on hover. The glow is brightest where the pointer is (hovering at the bottom lights the bottom; at the left edge, the left).
```html
<button class="btn btn-primary btn-glow"><span class="glow"></span><span class="lbl"><svg><!-- play --></svg>Play Audio</span></button>
```
```css
.btn-glow{position:relative;overflow:hidden;--gx:50%;--gy:50%}
.btn-glow .glow{position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;
  background:radial-gradient(circle 80px at var(--gx) var(--gy),rgba(255,255,255,.16) 0%,transparent 100%);
  transition:opacity .3s var(--ease-brand)}
.btn-glow:hover .glow{opacity:1}
.btn-glow .lbl{position:relative;z-index:1;display:flex;align-items:center;gap:8px}
```
```js
el.addEventListener('pointermove', e => {
  const r = el.getBoundingClientRect();
  el.style.setProperty('--gx', e.clientX - r.left + 'px');
  el.style.setProperty('--gy', e.clientY - r.top + 'px');
});
```
Specs: `#2a2c33`, height 40px, padding 8px 20px, Matter 525 15px, a leading 14–16px **solid** white icon (play, mic, send), gap 8px. The tactile edge `inset 0 1px 0 rgba(255,255,255,.4), inset 0 -2px 0 rgba(0,0,0,.2)` is what reads as the slightly "thicker bottom" of the button. Press: `scale(.96)`, 150ms.
Use on any dark CTA where the interaction is the product (play, record, generate).

## 2. Audio player pill (compound control)
A white track holding a **play button**, a **dot-matrix visualiser** and a **language select**.
```
track : inline-flex · bg #fff · 1px #e8e8e8 · radius full · padding 4px · gap 8px (10px md)
        shadow 0 4px 20px 0 rgba(0,0,0,.05)          (--shadow-track)
[ ▶ Play Audio ]  [ ::::::: dot matrix ::::::: ]  [ हिन्दी Hindi ⌄ ]
```
- **Dot matrix:** CSS grid of 2.5px round dots with a 1.5px gap. 32 cols × 10 rows on desktop, 14 × 10 on mobile. Idle dots are `#e5e5e5` (`--dot-idle`). While playing, columns light from the bottom up to `#a3a3a3` (`--dot-active`) following the audio level, with a 150ms colour transition. No other colour.
- **Language select:** bg `#f5f5f5`, radius full, height 40px, padding 0 16px, Matter 425 16px, `#000`. It shows the **native-script name, then the English name** ("हिन्दी Hindi"), then a 16px chevron-down in `--tx-tertiary`. Edge: `inset 0 -1px 0 1px rgba(0,0,0,.04)` (`--shadow-select`), a faint bottom lip. Hover: bg `#f0f0f0`.
- Mobile (<768): the button label shortens to "Play", the matrix drops to 14 columns, and the select keeps both scripts.

## 3. Segmented control
Used for tabs such as "olmOCR Overall · Word Accuracy · Character Accuracy" or "Python · JavaScript · cURL".
```
track  : bg #f5f5f5 · radius full · padding 4px · gap 4px · no border
item   : padding 8px 16px · Matter 13–15px · radius full · colour #666 (--tx-tertiary) · weight 425
active : bg #fff · colour #1f1f1f · weight 525 · shadow 0 1px 3px rgba(0,0,0,.08) (--shadow-seg-active)
hover (inactive) : colour #3d3d3d
transition : background/colour 200ms --ease-brand (the active pill may slide)
```
Mobile: the track scrolls horizontally if items overflow. Never wrap onto two lines.

## 4. Copy button (code blocks)
Three states. Use a 16px Hugeicons stroke icon (`Copy01` → a copy-with-check icon on success) with a label.

| State | Look |
|---|---|
| Default | ghost: no bg, icon + "Copy" in `#666`, Matter 425 14px, gap 6px, padding 8px 12px |
| Hover | bg `#f5f5f5` (`--sf-secondary`), radius 12px, text and icon `#3d3d3d` |
| Copied (2s) | same bg, icon swaps to copy-check, label "Copied", then reverts |

In the code-block header it sits at the right, separated by a 1px `--st-secondary` left border.

## 5. Icon round button (playground utilities)
40px circle, bg `--sf` → hover `--sf-secondary`, 1px `--st-secondary`, `shadow-sm`, 18px stroke icon in `--tx-tertiary`. Used for copy, reset and download beside players.
