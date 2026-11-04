# Components · Actions

## Button
All buttons are **pills** set in **Matter 525**, with min-height 40px (44px hero), a tactile inset shadow, `active:scale(.96)`, and a 350ms `--ease-brand` transition.

| Variant | Fill | Text | Shadow | Use |
|---|---|---|---|---|
| **Primary** | `--slate #2a2c33` | white | `--shadow-btn-dark` + **cursor glow on hover** | Main action (Log In, Get Started, Sign up, Play Audio) |
| **Primary (hero)** | `--grad-btn-dark` (#3a3f5c→#1e2033) | white, **Season Mix 525** | **cursor glow on hover** | The hero CTA pair only |
| **Secondary** | `--sf-secondary #f5f5f5` → hover `#fff` | `--tx` | `--shadow-btn-light` | Contact Us, See pricing |
| **Secondary (hero)** | `--grad-btn-light` + `inset 0 0 0 1px rgba(30,32,51,.14)` | `#1e2033`, Season Mix 525 | n/a | Hero secondary |
| **Outline** | `#fff` + 1px `--st`, hover `--sf` | `--tx` Matter 525 14px | none | "Explore Indus Cowork →", "View All Updates" |
| **On dark** | `#fff` | `--tx` | `--shadow-btn-light` | Inside dark CTA panels |
| **Ghost link** | none | `--tx-tertiary` → `--sr-indigo-800` | none | Inline links, footer |

### Sizes
| Size | Padding | Font | Height |
|---|---|---|---|
| sm | 8px 16px | 14px | 36px |
| md (default) | 10px 20px | 15–16px | 40–44px |
| lg (hero) | 14px 24px | 16px | 48–52px |

```css
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:40px;padding:10px 20px;
  border-radius:9999px;font:500 16px/1 var(--font-sans);white-space:nowrap;border:0;cursor:pointer;
  transition:background-color .35s var(--ease-brand),box-shadow .35s var(--ease-brand),transform .15s;}
.btn:active{transform:scale(.96)}
.btn-primary{background:var(--slate);color:#fff;box-shadow:var(--shadow-btn-dark)}
.btn-primary:hover{background:#1f2026}
/* cursor glow: REQUIRED on every dark button (.btn-primary, .btn-hero dark) */
.btn-primary,.btn-hero-dark{position:relative;overflow:hidden;--gx:50%;--gy:50%}
.btn-primary::after,.btn-hero-dark::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;
  background:radial-gradient(circle 80px at var(--gx) var(--gy),rgba(255,255,255,.16) 0%,transparent 100%);
  transition:opacity .3s var(--ease-brand)}
.btn-primary:hover::after,.btn-hero-dark:hover::after{opacity:1}
.btn-secondary{background:var(--sf-secondary);color:var(--tx);box-shadow:var(--shadow-btn-light)}
.btn-secondary:hover{background:#fff}
.btn-outline{background:#fff;color:var(--tx);border:1px solid var(--st);font-size:14px}
.btn-hero{min-height:52px;padding:14px 24px;font-family:var(--font-display)}
.btn:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(165,187,252,.6)}
```
**Rule: every dark button gets the cursor glow.** On sarvam.ai each slate button (Log In, Sign up, Get Started, Contact Us panels, Play Audio) carries a glow layer: a white radial `circle 80px` at 16% centred on the pointer, which fades in over 300ms on hover. sarvam.ai's homepage markup has 7 dark buttons and 7 glow layers. Light, secondary and outline buttons do **not** get it; they change background instead. One small script drives all of them:
```js
document.addEventListener('pointermove', e => {
  const b = e.target.closest('.btn-primary, .btn-hero-dark'); if (!b) return;
  const r = b.getBoundingClientRect();
  b.style.setProperty('--gx', e.clientX - r.left + 'px'); b.style.setProperty('--gy', e.clientY - r.top + 'px');
});
```
Touch devices: no hover, so no glow; the press `scale(.96)` is the feedback. Buttons can carry a leading 14–16px solid icon, with an 8px gap. Details: `interactive.md` §1.

**Responsive:** stacked or in-card buttons are `width:100%` below 768px. Hero CTA pairs stay inline when both fit at 375px (they do at ≤12 characters each). One primary per view.

## Chip / Tab pill
- Inactive: `#fff`, 1px `--st`, `--tx-secondary`, 14px Matter, padding 6px 14px.
- Active: `--sf-tertiary` or `#fff` with `--shadow-elev-sm`, `--tx`.
- Product tab bar (playground): a white container with 12px radius, 5 tabs each holding a 16px icon + label, active tab indigo text (`--sr-indigo-700`) on `--sr-indigo-50`. On mobile it collapses to a select pill with a chevron.

## Link
`--tx` underline offset 3px on hover, or a coloured link `--sr-indigo-600` → hover `--sr-indigo-800`. Arrow links add `→` and translate the arrow 2px on hover.
