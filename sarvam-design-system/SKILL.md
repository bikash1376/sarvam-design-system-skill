---
name: sarvam-design-system
description: Sarvam AI brand and design system. Use whenever creating ANYTHING branded as Sarvam / Sarvam AI — web pages, landing pages, UI, social banners (Meta, LinkedIn, X), event key visuals, decks, SVG illustrations, icons, or marketing copy. Encodes Sarvam's real production tokens (colours, Season Mix + Matter + Geist type, spacing, radius, gradients), the Gateway / Monogram / mandala visual language, logo and co-branding rules, responsive behaviour across 375/768/1440, banner archetypes, and copywriting rules (4-element hero, word budgets, no placeholders/urgency/emoji). Triggers on "Sarvam", "sarvam.ai", "Indus", "Bulbul", "Saaras", "Sarvam 105B", "Sarvam Voice Agents", "AI for all from India", or any request for on-brand Sarvam output.
---

# Sarvam Design System

> **AI for all from India.** *Sarvam* (सर्वम्) is Sanskrit for "all". The brand
> should feel **grounded, familiar and modern at the same time, without
> nostalgia or spectacle**. These are Sarvam's own words. Keep them in mind
> for every decision.

This skill turns sarvam.ai's live design language into rules an AI can follow.
Every value here comes from production CSS on sarvam.ai, Sarvam's official
`/brand` and `/brand-guidelines` pages, or Sarvam's LinkedIn posts. Anything
marked **[added]** is a small, deliberate extension and not a rebrand.

---

## 1. How to use this skill (workflow)

0. **Website? Ask first.** For any website, landing page or web UI, run the intake in `references/project-intake.md` before writing code. Ask multiple-choice questions (the `AskUserQuestion` tool in Claude Code) about the **stack** (default React + Vite + Tailwind + Lenis + Motion; or Next.js + Tailwind + Motion; or Astro + Tailwind + Motion), **pages**, **audience** (which picks the hero) and **sections**. **Read the prompt first.** Infer the audience and sections from how the user describes the product ("a Sarvam model" means developers, "for students" means individuals, "Aadhaar layer for India" means government/public, "add navbar, hero, CTA" means build exactly those sections). Ask only the questions still unanswered. If everything is clear, confirm in one line and build. Use the defaults if the user says "just build". Then scaffold with `references/stack-setup.md`. Web pages are never vanilla single-file HTML: always React + Tailwind (Vite, Next.js or Astro), and **always Motion for animation** (`foundations/10-motion.md`). Banners, social posts and SVGs are the only plain-HTML outputs, and they skip this step.
1. **Identify the format.** Is it a web page, a social banner or an illustration/SVG?
2. **Write the copy first.** Read `foundations/16-copywriting.md` before you lay out a single section. Hero = badge, h1, sub, 1–2 CTAs. Nothing else. Word budgets and banned words are hard rules.
3. **Read the core files below** (always): `tokens/tokens.css`, `foundations/01-brand-essence.md`, `foundations/12-anti-slop.md`, **`DECISIONS.md`** and **`FACTS.md`** (the only allowed source for numbers, customers, quotes and product facts). Prompts won't say which badge, icon style, button, card or gradient to use; `DECISIONS.md` decides from context.
4. **Read the format file**:
   - Web page or UI: `formats/web-pages.md`, `foundations/04-layout-grid-responsive.md`, `components/*.md`. For *which* hero layout fits the audience and brand tier: `formats/hero-layouts.md`
   - **Hero layouts are also mirrored standalone** as the `sarvam-hero-layouts` skill; that copy defers to `sarvam-design-system/formats/hero-layouts.md`
   - Social banner or post: `formats/social-banners.md` (archetypes, six canvases, **proportional `--u` type scale** so one banner fits every platform). For art-direction options and extra sizes, the bundled `references/ui-ux-pro-max.md`
   - SVG, illustration or motif: `foundations/07-motifs-and-glyphs.md`, `foundations/06-gradients-and-light.md`
   - Background line texture (instead of ripples/concentric circles): `foundations/17-mandala-background.md` (assets: `assets/mandala/`)
   - Card or section background glow: `foundations/14-soft-glow-surfaces.md` (tool: `tools/soft-glow/`)
   - Colouring a glyph, emblem or motif with depth: `foundations/15-glyph-color-depth.md` (tool: `tools/color-depth/`)
5. **Start from a scaffold, not a blank file.** Web pages use the chosen stack (`references/stack-setup.md`). Banners use `templates/banner.html`.
6. **Use only the components the page needs.** A component list is a menu, not a checklist. If a section repeats the one above it, delete it. Default landing page: 6–8 sections, not 15.
7. **Render and check.** `node scripts/render.js <file.html | http://localhost:PORT> <out.png> <w> <h|full>` renders a PNG (banner file or running dev server). Then run through `checklists/qa.md` before calling anything done.

## 2. File map

| File | What it holds |
|---|---|
| `FACTS.md` | **Published facts only**: product numbers, language list, real customer logos, the one approved testimonial. Never use placeholders |
| `DECISIONS.md` | **Which variant to use**: icon style, badge vs tag, button, card, gradient, hue by subject. Read every time |
| `tokens/tokens.css` | **Source of truth.** All colours, gradients, type, spacing, radius, shadow, motion tokens and @font-face rules |
| `tokens/tokens.json` | The same tokens for Figma, Tailwind or other tools |
| `foundations/01-brand-essence.md` | Mission, Gateway idea, mandala logic, brand pillars, personality |
| `foundations/02-color.md` | Palette roles, ratios, pairings, contrast, the blue→orange spectrum |
| `foundations/03-typography.md` | Season Mix + Matter, responsive type scale, Indic scripts |
| `foundations/04-layout-grid-responsive.md` | Breakpoints, containers, grid per size, spacing that scales, reflow rules |
| `foundations/05-radius-elevation-surfaces.md` | Corners, shadows, surface stack |
| `foundations/06-gradients-and-light.md` | Aura, spectrum, gateway glow, grain: copy-paste recipes |
| `foundations/07-motifs-and-glyphs.md` | Monogram, Gateway glyphs, star bullets, ornament divider, how to draw new ones |
| `foundations/08-iconography.md` | Three icon styles (flat stroke · solid product-hue · depth periwinkle), sizes, hue map |
| `foundations/09-imagery.md` | Photography, cultural textures, 3D renders, halftone |
| `foundations/10-motion.md` | **Motion library (required on every website)**, recipes, easing, durations, reveals |
| `foundations/11-logo-usage.md` | Wordmark vs logomark, clear space, co-branding, don'ts |
| `foundations/12-anti-slop.md` | What makes output look generic or off-brand, and how to avoid it |
| `foundations/13-voice-and-tone.md` | Copy voice, naming, headline formulas, examples |
| `foundations/14-soft-glow-surfaces.md` | Pastel blurred-curve glows for cards, tiles and social posts; presets incl. `sr-dawn`, `sr-spectrum`, `sr-meadow` |
| `foundations/17-mandala-background.md` | **Sarvam mandala illustration as background.** Replaces generic ripples / concentric circles. Big, cropped, tone-on-tone, 1–2 placements max; banners yes |
| `foundations/15-glyph-color-depth.md` | Core + rim colour depth for gateway glyphs (4 rim moods, echo), Sarvam `sr-*` palettes |
| `foundations/16-copywriting.md` | **Write copy before layout.** Word budgets, the 4-element hero, "what happens when", banned words, believable demo data, no placeholders/urgency/emoji, worked before→after examples |
| `references/project-intake.md` | **Ask before building a website.** Multiple-choice intake: stack, pages, audience → hero, sections, plus optional round 2 (co-brand, languages, delivery, content) |
| `references/stack-setup.md` | Scaffold commands for React+Vite+Tailwind+Lenis+Motion (default), Next.js+Tailwind+Motion, Astro+Tailwind+Motion; tokens → Tailwind v4 `@theme` |
| `references/ui-ux-pro-max.md` | Bundled ui-ux-pro-max (MIT) in `vendor/`: banner art direction, extra platform sizes, UX search. Sarvam brand always overrides it |
| `references/pick-ui-library.md` | Curated frontend library picks (base-ui, Sonner, motion, Virtuoso…). Also installed as the `pick-ui-library` skill |
| `tools/soft-glow/` | `glow.py` (CLI) + `generator.html` (visual editor) for soft-glow surfaces |
| `tools/color-depth/` | `color_depth.py` + `sarvam-glyphs.json` (curated Sarvam glyph set) |
| `components/*.md` | Buttons, eyebrow, nav, cards, feature list, stats, code block, badges (12px radius, not pills), tags, integration card, testimonial, CTA panel, footer; `interactive.md`: cursor-glow button, audio player pill, dot-matrix visualiser, language select, segmented control, copy button |
| `formats/social-banners.md` | Meta 1080², 1080×1350, LinkedIn 1200×627: archetypes, safe zones, type sizes |
| `formats/web-pages.md` | Landing page anatomy, section order, per-breakpoint behaviour |
| `formats/hero-layouts.md` | **Which hero for which page.** 10 named layouts (Aura Statement, Demo Stage, Prompt Bar, Docs Left, Editorial Split, Gateway Frame, Manifesto, Benchmark, Visual Top, Side Visual), audience → layout, 6 brand tiers, responsive stacks, gradient level, pitfalls |
| `templates/` | Starter HTML for banners and a landing page, already wired to tokens |
| `assets/` | Fonts, official logos, 19 gateway glyph SVGs, `glyphs-depth/` (12 colour-depth glyphs), `glows/` (9 glow surfaces), icons in three styles (`icons/`, `icons-solid/`, `icons-depth/`), reference screenshots |
| `checklists/qa.md` | Pre-ship checklist |

## 3. The twelve golden rules (memorise these)

1. **Two typefaces, two jobs — plus Geist for eyebrows.** **Season Mix** (soft display serif-sans hybrid) for headlines and big statements. **Matter** (geometric grotesk) for UI, body, card titles and buttons. **Geist** for every eyebrow and section label, always `#666666` — never monospace, never indigo. **Matter Semi Mono** is only for micro-labels inside demos and footer column heads. No other fonts.
2. **Headlines are calm.** Season Mix at sarvam.ai's **425 (regular) / 525 (medium)** weights, never bold, with tight tracking (−0.02em) and tight leading (1.05–1.2). Use sentence case. Big and quiet beats small and loud.
3. **Light canvas by default.** The page background is `#fcfcfc` (`--sf`), cards are `#fff`, text is `#1f1f1f`. Dark surfaces (`--slate`, `--black`, night gradient) are for one CTA panel or a feature moment, not whole pages.
4. **Colour comes as light, not blocks.** The brand's signature is a continuous **blue→orange spectrum** (indigo/periwinkle meets saffron). Use it as soft glows, auras and gradient fills inside gateway shapes. Never use flat saturated rectangles of brand colour behind UI.
5. **Mandala, not ripples.** For background line texture, use Sarvam's own mandala illustration (`assets/mandala/`, rules in `foundations/17-mandala-background.md`): large, cropped, tone-on-tone, in 1–2 places only. Never draw random ripples or concentric circles.
6. **The Gateway is the core motif.** The cusped multifoil arch (torana) appears as gradient glyphs, as frames that hold headlines, and as silhouettes. Use the official SVGs in `assets/glyphs/` or follow the drawing rules in `07-motifs-and-glyphs.md`.
7. **One logo in the nav — Sarvam.** Even when the page mentions partners, models or sub-brands. Partner lockups (`sarvam ✦ Partner`) appear only when the user deliberately asks for co-branding, and then in the hero badge or footer, never as a second nav logo. Sarvam sits first unless Sarvam is the guest in someone else's programme (then `aws marketplace ✦ sarvam`). The wordmark is black on light and white on dark, with no colour, gradient or effects. The logomark (mandala monogram) is used **separately**, never locked up with the wordmark.
8. **Pills and soft corners.** Buttons and chips are fully rounded pills (min height 40px). Cards use 16px radius, large panels 24–32px. No sharp rectangles, and no 4px "bootstrap" corners on cards.
9. **Shadows are ambient and inset.** Use 40px-blur, 6% black for cards. Buttons get an inset highlight (`inset 0 1px 0 rgba(255,255,255,.4)`), which makes them look tactile. **Every dark button gets a soft white glow that follows the cursor on hover.** Never use hard drop shadows.
10. **Generous, centred rhythm.** Section titles are centred, 128px between sections on desktop and 96px on mobile. Content is 10/12 of the viewport and capped at 1400px. **The hero holds four things** — badge, h1, sub, 1–2 CTAs — and nothing else; proof, logos, language rows and floating cards start below the first viewport.
11. **Rooted, not costume.** Indian identity comes through structure (gateways, mandala geometry), Indic scripts, real Indian photography and textile-derived pattern. Never use clichés: no Taj Mahal clip-art, flags, tricolour gradients, paisley wallpaper, diyas or "namaste" emoji.
12. **Copy is the design.** Say what happens. h1 2–7 words, hero sub ≤ 20 words, card body ≤ 20 words. No invented urgency, no placeholders, no emoji, no meta-annotations ("concept design", "timing: [VERIFY]"). Full rules: `16-copywriting.md`.
13. **Space, not boxes.** Don't put a card around everything, and never a card inside a card — separate groups with space, and use a card only for a thing the reader acts on. In a non-bento grid every card is the same width and the same height.

## 4. Quick reference

```
Gradients     : surface glow -> 14 (soft-glow) · hero light -> 06 §1 aura · banner field -> 06 §2 spectrum · inside shapes -> 15 (colour depth)
Display font  : Season Mix 425 (h1) / 525 (h2), tracking -0.02em, line-height 1.05–1.2
UI/body font  : Matter 425 (body) / 525 (titles, buttons)
Eyebrow       : Geist 400–500, 12–16px, #666666 ALWAYS. Never monospace, never indigo
Section label : Geist 500, 12px, UPPERCASE, tracking 2px, #666666. Rare: logo bar + product modules, never above every h2
Micro label   : Matter Semi Mono 10–11px caps, indigo — demo chrome only (OUTPUT, CODE SWITCH) + footer column heads
Hero          : 4 elements max — badge · h1 (2–7 words) · sub (≤20 words) · 1–2 CTAs. Nothing else in the first viewport
Cards         : non-bento grids: equal width AND height (repeat(n, minmax(0,1fr)) + stretch + height:100%)
No placeholders: every number, logo and quote comes from FACTS.md; demo data is believable (§8 of 16), never [VERIFY]/John Doe/$1,234.56
Text          : #1f1f1f / #3d3d3d / #666666      Background: #fcfcfc   Card: #ffffff
Primary btn   : #2a2c33 pill, white Matter 525, inset highlight, cursor-follow white glow on hover (all dark buttons)
Secondary btn : #f5f5f5 pill (or white + 1px #e6e6e6), #1f1f1f text
Brand indigo  : #556adc (600) · #212191 (900) · #a7c0f1 (300) · #e8effc (100)
Brand saffron : #e6651b · #f38858 · #d5650f (glow core)
Breakpoints   : 640 · 768 (md) · 1024 (lg) · 1280 (xl) · 1536 (2xl)
Container     : 88% (<768) → 83.33% (≥768) → max 1400px
Section gap   : 96px mobile → 128px desktop; heading→content 32 → 48px
Radius        : pill buttons · 12px inputs · 16px cards · 24–32px panels
```

## 5. When information is missing

- **Product names**: use exact names (Sarvam Voice Agents, Indus, Indus Cowork, Bulbul V4, Saaras V4, Sarvam 105B, Sarvam Translate, Document AI, Work Agents, Content Studio, Sarvam Edge, Token Factory). Never abbreviate them.
- **Numbers, customers and quotes**: use only `FACTS.md`. If a fact isn't there, **rewrite the copy without it**. **Never ship placeholders** (`[VERIFY]`, `[metric]`, `[Customer logo]`, `[Name]`, `John Doe`, `$1,234.56`); a bracket on the page is a failed build.
- **Copy**: follow `foundations/16-copywriting.md`. Marketing claims need a fact; demo/mock UI needs *believable* sample data (Indian names, ₹ amounts, real-looking times) — never "John Doe" and never a bracket. If a detail is unknown, leave it out instead of annotating it.
- **Frontend library choice** (toasts, dialogs, charts, DnD, virtualisation): see `references/pick-ui-library.md`. Prefer what the project already uses; don't add a second library for the same job.
- **Logos**: real customer logos are in `assets/logos/customers/`. Never draw boxes labelled "Customer logo".
- **Imagery**: if there is no real photo, use a gateway glyph composition or a gradient aura. Never use stock-AI people.
