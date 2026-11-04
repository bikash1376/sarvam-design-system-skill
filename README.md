# Sarvam design system skill

Sarvam AI's brand as an **agent skill**. Load it into Claude Code, Cursor, Codex or another coding agent and it produces on-brand Sarvam websites, UI, social banners, embed images and illustrations. A docs site shows every foundation and component visually.

> Private repository: it includes licensed fonts (Season Mix, Matter).

| Folder | What it is |
|---|---|
| [`sarvam-design-system/`](sarvam-design-system/) | **The skill** and single source of truth: `SKILL.md`, `DECISIONS.md`, `FACTS.md`, tokens, foundations, 68 component specs, formats (web pages, hero layouts, social banners, embed images), templates, tools and assets. |
| [`sarvam-design-system-docs/`](sarvam-design-system-docs/) | The docs site (Next.js + shadcn/ui + Tailwind + Motion). It reads the skill at build time and never edits it. **Human** view: live Sarvam previews and rules. **Agent** view: the raw spec an agent reads. |

## Install the skill
For Claude Code, Cursor, Codex and other agents:
```bash
npx skills add bikash1376/sarvam-design-system-skill --skill sarvam-design-system
```
Run it again to update.


Manual install for Claude Code:
```bash
git clone https://github.com/bikash1376/sarvam-design-system-skill.git
cp -r sarvam-design-system-skill/sarvam-design-system ~/.claude/skills/
```
On Windows (PowerShell): `Copy-Item -Recurse -Force sarvam-design-system-skill\sarvam-design-system "$env:USERPROFILE\.claude\skills\"`

Restart the agent. The skill triggers on anything branded Sarvam ("Sarvam", "Bulbul", "Saaras", "Sarvam 105B", "AI for all from India" and so on).

## What the skill does
- **Websites:** before building, it asks a few multiple-choice questions (stack, pages, audience, sections) and skips any the prompt already answers. Websites are always React + Tailwind (Vite by default, or Next.js or Astro) with **Motion** for all animation, built on shadcn/ui through a scoped `.sarvam` theme.
- **Banners and posts:** static HTML rendered to PNG. Six platform canvases with a proportional type scale, so one banner keeps its proportions on every platform. Art direction and extra platform sizes come from the bundled ui-ux-pro-max (MIT).
- **Embed images:** glass glyph tiles and wide pastel embeds via `tools/embed/embed.py`.
- **Brand:** tokens from sarvam.ai production, gateway glyphs, the Sarvam mandala, soft glows, logo and co-branding rules, copywriting rules, and an anti-slop checklist.

## Run the docs site
```bash
cd sarvam-design-system-docs
npm install
npm run dev        # syncs fonts, icons and tokens from ../sarvam-design-system, then starts Next.js
npm run build      # production build
```

## Working on the skill
- Component specs live in `sarvam-design-system/components/reference/*.md`. New ones are generated from `scripts/component_specs.py` with `python sarvam-design-system/scripts/build_component_reference.py`. Hand-edited pages are kept unless you pass `--force`.
- Render a banner: `cd sarvam-design-system && npm i && node scripts/render.js templates/banner.html out/banner.png 1080 1080`
- Generate an embed: `python sarvam-design-system/tools/embed/embed.py wide --palette lilac --icon globe --png --out out/og.svg`
