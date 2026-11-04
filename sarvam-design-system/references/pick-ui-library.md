# Reference · Picking a frontend library

> Source: [emilkowalski/skills · `pick-ui-library`](https://github.com/emilkowalski/skills) (MIT). Installed as the `pick-ui-library` skill alongside this one.
>
> **Install / update:** `npx skills add https://github.com/emilkowalski/skills --skill pick-ui-library`
> Installed to `~/.claude/skills/pick-ui-library` (Claude Code) and `~/.agents/skills/pick-ui-library` (OpenCode).

Use this when a Sarvam page or UI needs a *behaviour* — toasts, dialogs, charts, drag-and-drop, virtualisation, state — and the choice of library is not already decided.

**Sarvam's own stack wins first.** If the project already uses a library for the job, keep it. Only introduce one of these when the project has nothing, and never run two libraries for the same job.

## The picks

| Task | Library |
|---|---|
| Unstyled, accessible UI components (dialog, popover, menu, select) | [base-ui](https://base-ui.com) |
| Command menus (⌘K palettes) | [cmdk](https://cmdk.paco.me) |
| Toasts / notifications | [Sonner](https://sonner.emilkowal.ski) |
| OTP / verification-code inputs | [input-otp](https://input-otp.rodz.dev) |
| Customisable GUIs / control panels | [Leva](https://github.com/pmndrs/leva) |
| General animation (springs, layout, enter/exit) | [motion](https://motion.dev) |
| Animating numbers (counters, prices, stats) | [NumberFlow](https://number-flow.barvian.me) |
| Animated text | [torph](https://torph.lochie.me/) |
| 3D globes | [Cobe](https://cobe.vercel.app) |
| Dynamic OG images (HTML/CSS → SVG/PNG) | [Satori](https://github.com/vercel/satori) |
| Syntax highlighting | [shiki](https://shiki.style) |
| Real-time / streaming charts | [Liveline](https://github.com/benjitaylor/liveline) |
| General charts | [recharts](https://recharts.org) |
| Drag and drop | [dnd kit](https://dndkit.com) |
| Virtualisation (long lists, tables) | [Virtuoso](https://virtuoso.dev) |
| State management | [zustand](https://zustand.docs.pmnd.rs) |
| Conditional `className` strings | [clsx](https://github.com/lukeed/clsx) |
| Variant-driven styling (Tailwind) | [cva](https://cva.style) |
| Theme switching / dark mode (no flash) | [next-themes](https://github.com/pacocoursey/next-themes) |

## Rules of use

1. **Identify the task, not the library the user named.** "I need a dropdown" is a base-ui job.
2. **Check `package.json` first.** Use what's installed; flag a mismatch instead of churning a dependency.
3. **Recommend one**, say what it's for in a sentence, and wire it up if asked.
4. **Motion is conditional.** Springs, layout and exit animations → motion. A hover or fade → plain CSS (Sarvam's default, `10-motion.md`).
5. **Don't let a library set the visual style.** Sarvam's tokens and components still govern colour, radius, type and spacing; these libraries supply behaviour only.
6. **Out of scope?** Say so, then recommend from your own knowledge — and say you've left the curated list.

## Common mismatches

- Hand-built toasts, or a modal library used for toasts → **Sonner**
- `<div>` dropdown/dialog with manual focus handling → **base-ui**
- Number animated by re-rendering text → **NumberFlow**
- 1,000+ rows rendered directly → **Virtuoso**
- Prop-drilled shared state → **zustand**
- Template-literal className ternaries three deep → **clsx** (or **cva** if variant-shaped)
