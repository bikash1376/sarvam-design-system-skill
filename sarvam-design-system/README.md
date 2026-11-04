# Sarvam Design System: an AI-ready skill

Sarvam AI's brand turned into a skill that an AI agent (Claude Code, Cursor, ChatGPT and others) can load to produce on-brand web pages, banners and illustrations.

- **Entry point:** [`SKILL.md`](SKILL.md) holds the workflow, twelve golden rules, quick reference and file map.
- **Tokens:** [`tokens/tokens.css`](tokens/tokens.css) (source of truth) and [`tokens/tokens.json`](tokens/tokens.json)
- **Foundations:** `foundations/01–16` cover brand essence, colour, typography, layout and responsive behaviour, radius and elevation, gradients, motifs, icons, imagery, motion, logo, anti-slop, voice, soft-glow surfaces, glyph colour depth, and **copywriting**.
- **Components:** `components/` covers actions, content blocks, and navigation and footer.
- **Formats:** `formats/social-banners.md` (6 archetypes, exact specs), `formats/web-pages.md`, and `formats/hero-layouts.md` (10 hero layouts × audience × brand tier)
- **References:** `references/pick-ui-library.md` (curated frontend library picks; also installed as the `pick-ui-library` skill)
- **Templates and tooling:** `templates/banner.html`, `scripts/render.js` (HTML → PNG at exact size)
- **Assets:** official logos, Season Mix, Matter and Geist fonts, 19 official gateway glyphs, derived gateway frames, icons, reference screenshots

## Sources
Everything was extracted from sarvam.ai production CSS and markup, sarvam.ai/brand, sarvam.ai/brand-guidelines, and Sarvam's LinkedIn posts (Nov 2026). Items marked **[added]** are small extensions, not a rebrand.

## Use
```bash
npm i
node scripts/render.js templates/banner.html out/banner.png 1080 1080
```
With an agent, point it at this folder (Claude Code: put it in `.claude/skills/sarvam-design-system/`), or paste `SKILL.md` and the relevant files into context.
