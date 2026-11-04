# Sarvam Design System: an agent skill

Sarvam AI's brand as a skill that an agent (Claude Code, Cursor, Codex and others) loads to produce on-brand websites, UI, banners, embed images and illustrations.

Install: `npx skills add bikash1376/sarvam-design-system-skill`, or copy this folder to `~/.claude/skills/sarvam-design-system/`.

## Map
- **Entry point:** [`SKILL.md`](SKILL.md) holds the workflow (step 0 is the website intake questions), the golden rules, a quick reference and the file map.
- **Decisions and facts:** [`DECISIONS.md`](DECISIONS.md) picks badges, buttons, cards and gradients from context. [`FACTS.md`](FACTS.md) is the only allowed source for numbers, customers and quotes.
- **Tokens:** [`tokens/tokens.css`](tokens/tokens.css) (source of truth) and [`tokens/tokens.json`](tokens/tokens.json).
- **Foundations** `foundations/01–17`: brand essence, colour, typography, layout and responsive behaviour, radius, elevation and surfaces, gradients and light, motifs and glyphs, iconography, imagery, **motion (the Motion library is required on every website)**, logo, anti-slop, voice and tone, soft glow surfaces, glyph colour depth, copywriting, and the mandala background.
- **Components** `components/reference/*.md`: 68 specs, each with Styles, Usage (Use / Not for), Rules (Must / Should / Never), Accessibility, Edge cases, API, Tokens and Related. Specs measured from sarvam.ai sit next to ones derived from shadcn and the brand rules (inputs, overlays, data, AI).
- **Formats:**
  - `formats/web-pages.md`
  - `formats/hero-layouts.md` (10 layouts × audience × brand tier)
  - `formats/social-banners.md` (six canvases, proportional `--u` type scale)
  - `formats/embed-images.md` (glass tiles and wide embeds)
- **References:**
  - `references/project-intake.md` (questions to ask before building a website)
  - `references/stack-setup.md` (React + Vite / Next.js / Astro, plus Tailwind, Motion and the shadcn theme layer)
  - `references/pick-ui-library.md`
  - `references/ui-ux-pro-max.md` (bundled in `vendor/`, MIT)
- **Templates:** `templates/banner.html` (banners and posts) and `templates/shadcn-sarvam.css` (the Sarvam theme for shadcn/ui).
- **Tools:**
  - `scripts/render.js` (HTML or a dev-server URL → PNG at an exact size)
  - `tools/embed/embed.py` (embed images)
  - `tools/soft-glow/` and `tools/color-depth/`
- **Assets:** logos, fonts (licensed), gateway glyphs, the Sarvam mandala, motifs, glows, icons in three styles, embed examples and reference screenshots.
- **QA:** `checklists/qa.md`.

## Sources
Extracted from sarvam.ai production CSS and markup, sarvam.ai/brand, sarvam.ai/brand-guidelines and Sarvam's LinkedIn posts (Nov 2026). Items marked **[added]** are small extensions, not a rebrand.

## Use without an agent
```bash
npm i
node scripts/render.js templates/banner.html out/banner.png 1080 1080
python tools/embed/embed.py tile --palette rose --png --out out/tile.svg
```
