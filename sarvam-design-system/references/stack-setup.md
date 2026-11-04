# Reference · Stack setup (web pages)

Pick the stack in the intake step (`references/project-intake.md`). If nobody chose one, use the **default: React + Vite + Tailwind + Lenis + Motion**. If an existing project already has a stack, keep it. Web pages are never built as vanilla single-file HTML. Plain HTML is only for banners and PNG renders.

Every stack follows the same three rules:
1. **Tokens first.** Copy `tokens/tokens.css` and `assets/fonts/` into the project, import `tokens.css` once globally, and map it into Tailwind's `@theme` (see below). Components use token classes or `var(--…)`, never raw hex.
2. **Motion for all animation: required in every stack.** Install `motion` in React + Vite, Next.js and Astro alike, and wrap the app in `<MotionConfig reducedMotion="user">`. Use the recipes in `foundations/10-motion.md` (reveals, stagger, press, `layoutId` pills, `AnimatePresence`). Don't use CSS keyframes, GSAP or another animation library for UI motion. CSS transitions are fine only for simple colour and shadow hovers.
3. **Tailwind v4.** Configure it in CSS (`@import "tailwindcss"` + `@theme`). There is no `tailwind.config.js` unless the project already has one.

---

## 1. React + Vite + Tailwind + Lenis + Motion (default)
```bash
npm create vite@latest sarvam-site -- --template react-ts
cd sarvam-site
npm i tailwindcss @tailwindcss/vite motion lenis
```
`vite.config.ts`
```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({ plugins: [react(), tailwindcss()] });
```
`src/main.tsx`: Lenis smooth scroll, turned off when the user prefers reduced motion
```tsx
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import "./index.css";

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
createRoot(document.getElementById("root")!).render(
  reduce ? <App /> : <ReactLenis root options={{ lerp: 0.1, duration: 1.1 }}><App /></ReactLenis>
);
```
Lenis notes: anchor links use `lenis.scrollTo("#id")` through `useLenis()`, and modals or scroll areas get `data-lenis-prevent`. Don't combine it with CSS `scroll-behavior: smooth`.

## 2. Next.js + Tailwind + Motion
```bash
npx create-next-app@latest sarvam-site --ts --tailwind --app --eslint
cd sarvam-site && npm i motion
```
- Put `motion` components in `"use client"` files. Keep sections as server components and wrap only the animated parts.
- Load the fonts with `next/font/local` pointing at `assets/fonts/*.woff2`, or keep the `@font-face` rules in `tokens.css`.
- Optional smooth scroll: `npm i lenis`, then a client `Providers.tsx` with `<ReactLenis root>` around `{children}` in `app/layout.tsx`.
- Static marketing site? Set `output: "export"` in `next.config.ts`.

## 3. Astro + Tailwind + Motion
```bash
npm create astro@latest sarvam-site
cd sarvam-site
npx astro add tailwind react
npm i motion
```
- Write pages and sections as `.astro` files (zero JS). Make animated parts React components hydrated with `client:visible`.
- Optional smooth scroll: `npm i lenis`, then `new Lenis({ autoRaf: true })` in a `<script>` in the base layout, skipped when reduced motion is on.

---

## Tokens → Tailwind v4 (`src/index.css` / `app/globals.css`)
```css
@import "tailwindcss";
@import "./tokens.css";          /* copied from the skill; fixes font urls to ./fonts/ */

@theme inline {
  --font-display: var(--font-display);   /* Season Mix */
  --font-sans:    var(--font-sans);      /* Matter */
  --font-mono:    var(--font-mono);
  --color-tx:     var(--tx);
  --color-tx-2:   var(--tx-secondary);
  --color-sf:     var(--sf);
  --color-st:     var(--st);
  --color-slate:  var(--slate);
  --color-indigo-500: var(--sr-indigo-500);
  --color-orange-500: var(--sr-orange-500);
  /* add other --sr-* steps as needed */
}
body { background: var(--sf); color: var(--tx); font-family: var(--font-sans); }
```
Then use `font-display text-tx bg-sf border-st` and similar classes. Gradients (`--grad-*`) stay as CSS variables: `bg-[image:var(--grad-cta-panel)]` or a small utility class.

## Before you call it done
- Run the dev server and screenshot at 375, 768 and 1440: `node scripts/render.js http://localhost:5173 out/page-375.png 375 full` (Next: port 3000, Astro: 4321).
- Check `checklists/qa.md`. Lighthouse accessibility ≥ 90, no layout shift from fonts.

## shadcn/ui on top (optional, recommended for app UI)
Sarvam sits on top of shadcn instead of replacing it:
1. `npx shadcn@latest init` (Base UI style, matching `pick-ui-library.md`).
2. Copy `tokens/tokens.css` to `src/styles/tokens.css`. Replace `:root` with `.sarvam`, and point font urls at your fonts folder.
3. Copy `templates/shadcn-sarvam.css` to `src/styles/` and import it after `shadcn/tailwind.css` in `globals.css`.
4. Wrap Sarvam UI in `<div className="sarvam">`. Stock shadcn components inside it take Sarvam colours, fonts and radius. Nothing outside the wrapper changes, so there are no font or layout shifts.
5. Portals (dialog, popover, select, tooltip, toast) render outside the wrapper, so add `sarvam` to their content `className`.
6. Buttons need the Sarvam pill variants and the dark-button cursor glow (`components/reference/button.md`). Use a small `cva` wrapper instead of shadcn's square button.

Components that sarvam.ai doesn't ship (inputs, overlays, data, AI) are specified in `components/reference/*.md` with origin "derived". Build them on shadcn primitives following those specs and the brand rules.

