# Sarvam AI design system

**Private repository.** It contains licensed fonts (Season Mix, Matter). Don't make it public or redistribute the fonts.

| Folder | What it is |
|---|---|
| [`sarvam-design-system/`](sarvam-design-system/) | **The skill**: `SKILL.md`, `DECISIONS.md`, tokens, foundations, component reference pages, assets (including fonts), tools and templates. The single source of truth. |
| [`sarvam-docs/`](sarvam-docs/) | Next.js docs site (Human / Agent views, Customize, Install). It reads the skill at build time and never edits it. |
| [`explorations/`](explorations/) | Assets generated with the skill (e.g. the Diwali flame) and their build scripts. |

Live docs: https://sarvam-design-system-1103.netlify.app

## Install the skill (Claude Code)
macOS / Linux:
```bash
git clone https://github.com/bikash1376/sarvam-aii.git
mkdir -p ~/.claude/skills && cp -r sarvam-aii/sarvam-design-system ~/.claude/skills/
```
Windows (PowerShell):
```powershell
git clone https://github.com/bikash1376/sarvam-aii.git
Copy-Item -Recurse -Force sarvam-aii\sarvam-design-system "$env:USERPROFILE\.claude\skills\"
```
Restart Claude Code. The skill is discovered as `sarvam-design-system`. To update: `git pull`, then copy again.

Other agents (Cursor, Codex, ChatGPT): point them at `sarvam-design-system/SKILL.md` and let them follow its file map.

## Develop the docs site
```bash
cd sarvam-docs
npm install
npm run dev      # syncs assets from ../sarvam-design-system, then starts Next.js
npm run build    # static export to out/ (deployed to Netlify)
```
After editing component reference pages, regenerate them with `python sarvam-design-system/scripts/build_component_reference.py`.
