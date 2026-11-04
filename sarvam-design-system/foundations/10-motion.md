# 10 · Motion

Motion is **calm, eased-out and purposeful**. It reflects "transitions as signals of flow".

| Token | Value | Use |
|---|---|---|
| `--ease-brand` | `cubic-bezier(.2,0,0,1)` | Buttons, tabs, UI state |
| `--ease-reveal` | `cubic-bezier(.25,1,.5,1)` | Section and scroll reveals |
| `--ease-standard` | `cubic-bezier(.4,0,.2,1)` | Colour and opacity |
| `--dur-fast` | 150ms | Hover colour |
| `--dur-btn` | 350ms | Button background and shadow |
| `--dur-entrance` | 700ms | Hero elements |
| `--dur-reveal` | 800ms | Sections (opacity 0→1, translateY 24px→0) |

## Patterns
- **Press:** buttons `active:scale(.96)` (cards `.97`), 150ms.
- **Card hover:** `translateY(-2px)` plus `--shadow-card-hover`. Image zoom 1.03 inside an `overflow:hidden` frame.
- **Scroll reveal:** sections fade up 24px. Grids stagger children by 55ms (`--step`). **Desktop only.**
- **Scale reveal:** media frames go from `scale(.96)` to `1`.
- **Logo marquee:** constant linear scroll, ~100px/s, grayscale 50% opacity, colour on hover.
- **Typing caret:** a 2px `--sr-indigo-600` caret that blinks with `steps(1)` in composer demos.
- **Pulse:** live and voice indicators scale 1→1.25 and fade .6→0 over 2s.
- **Aura:** a very slow (20–30s) drift of gradient positions, optional.

**Reveal safety:** content must be fully visible within 600ms of entering the viewport, and visible by default if JS fails (add the hidden state only after JS runs, via a class on `<html>`). Use an IntersectionObserver threshold ≤ 0.1, trigger once, and never animate opacity on whole sections below 768px. A section that screenshots at partial opacity is a bug.

Always wrap motion in `@media (prefers-reduced-motion: no-preference)`. Turn reveals off on mobile.
