# Sarvam design system docs

The docs site for the [`sarvam-design-system`](../sarvam-design-system/) skill, built with Next.js 16, shadcn/ui (Base UI), Tailwind v4 and Motion.

- **Human view:** a live, interactive Sarvam preview for every foundation and component, then Usage, Rules, Accessibility, Edge cases, API, Tokens and Related.
- **Agent view:** the raw Markdown spec an agent reads.
- **Content comes from the skill.** `src/lib/content.ts` reads `../sarvam-design-system` at build time and never writes to it.
- **The Sarvam theme is scoped.** `src/styles/sarvam.css` maps shadcn variables to Sarvam tokens inside `.sarvam` only, so the docs chrome never shifts. Portals (dialogs, popovers, toasts) add the `sarvam` class themselves.
- **Layout:** a 1416px container (264 · 48 · 792 · 48 · 264).

```bash
npm install
npm run dev      # runs scripts/sync-skill.mjs (fonts, icons, glyphs, embeds → public/skill, tokens → src/styles), then next dev
npm run build
```

| Path | What |
|---|---|
| `src/lib/nav.ts` | Sidebar groups and the skill file behind each page |
| `src/lib/content.ts` | Parses a skill Markdown file into sections |
| `src/components/previews/` | Live previews: `foundations.tsx`, `components.tsx`, `brand.tsx` |
| `src/components/sarvam/button.tsx` | Sarvam buttons on top of shadcn (pill variants, cursor glow, icon pill) |
| `src/components/docs/` | Docs chrome: sidebar, Human/Agent switch, sections, on-this-page + install panel, Motion helpers |
