# 10 · Motion

> **Library: [Motion](https://motion.dev) (`motion` package) on every website, in every stack.** React + Vite, Next.js and Astro all animate with Motion. There is no CSS-keyframe or GSAP stack, and no second animation library. Banners and social posts are static HTML rendered to PNG, so they use no animation library.
>
> - React / Next.js: `import { motion, AnimatePresence, MotionConfig, useInView, useScroll } from "motion/react"`.
> - Astro: Motion inside React islands (`client:visible`), or Motion's vanilla API (`import { animate, inView, scroll } from "motion"`) in `<script>` tags for `.astro` components.
> - Wrap the app once in `<MotionConfig reducedMotion="user" transition={{ ease: [0.2, 0, 0, 1], duration: 0.35 }}>`. Reduced motion is then respected everywhere without per-component checks.
> - Easing and durations come from the tokens below. Pass them as arrays: `--ease-brand` = `[0.2, 0, 0, 1]`, `--ease-reveal` = `[0.25, 1, 0.5, 1]`, `--ease-standard` = `[0.4, 0, 0.2, 1]`.

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

## Motion recipes (use these, don't invent new ones)
| Pattern | Motion code |
|---|---|
| Section reveal (md+ only) | `<motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}>` |
| Grid stagger | parent `variants` with `transition: { staggerChildren: 0.055 }`; children fade up 16px |
| Press | `whileTap={{ scale: 0.96 }}` (cards `0.97`) |
| Card hover | `whileHover={{ y: -2 }}` plus the `--shadow-card-hover` class |
| Active pill / tab indicator | a shared `layoutId` element (`<motion.span layoutId="pill" />`) that slides between items |
| Enter / exit (toasts, menus, page swaps) | `<AnimatePresence mode="wait">` with `initial={{ opacity: 0, y: 8 }}` → `exit={{ opacity: 0, y: -8 }}`, 200ms |
| Number count-up (stats) | `animate(0, value, { duration: 1.2, ease: [0.25, 1, 0.5, 1] })` with `useInView` |
| Smooth scroll | Lenis (React + Vite default; optional in Next/Astro). Motion's `useScroll` reads it fine |

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

Respect reduced motion: `MotionConfig reducedMotion="user"` in apps, and `@media (prefers-reduced-motion: no-preference)` for the few remaining CSS transitions (colour and shadow hovers). Turn reveals off on mobile.
