# 11 · Logo Usage

Source: sarvam.ai/brand-guidelines (official). **Never redraw the logo.** Always use the files in `assets/logos/`.

## The marks
| Mark | File | Use |
|---|---|---|
| **Wordmark** "sarvam" (lowercase, wide geometric) | `sarvam-wordmark-black.svg` / `-white.svg` (202×32 viewBox) | Default for websites, banners, decks, co-branding |
| **Logomark** (mandala monogram) | `sarvam-logo-black.svg` / `-white.svg` | Only where the brand is already established: app icons, social avatars, product UI, a centred emblem in brand moments |

## Hard rules (official)
1. **Wordmark and logomark are never used together** in one lockup. No "icon + name" combos.
2. **Black on light, white on dark. Nothing else.** No accent colours, gradients, shadows, outlines or effects.
3. Don't rearrange, stretch, crop or re-space the letters. Don't alter the logomark's stroke widths.
4. Don't place either mark on low-contrast or busy backgrounds.
5. **Partner lockups use the wordmark only.** Keep balanced spacing and clear hierarchy, and don't match visual weights exactly.
6. **Government lockups:** a vertical stack with the government emblem **above** the Sarvam wordmark. Needs approval.

> Exception seen in Sarvam's own social posts: the wordmark is set in **deep indigo `#212191`** on white for the Champions program. Treat this as a Sarvam-internal campaign variant. Partners must use black or white only.

## Clear space and sizing
- **Clear space** = the height of the wordmark's "a" (x-height) on all sides. Minimum = 0.5× wordmark height.
- **Minimum size:** wordmark 16px tall on screen (nav uses 16–18px) and 12mm in print. Logomark 20px.
- **Nav:** wordmark 16px tall (mobile) to 18px (desktop), left-aligned to the container edge.
- **Banners:** wordmark is 3–4% of canvas width tall (1080 canvas → 32–40px tall; 1200×627 → 26–32px).

## Navbar: one logo, always
- The nav carries **exactly one brand mark: the Sarvam wordmark.** Nothing beside it — no partner logo, no "in collaboration with", no sub-brand, no model mark.
- This holds even when the page is *about* a partner, a programme, a model or a co-marketing campaign. The partner belongs in the hero badge, a section, or the footer — never as the nav's second logo.
- A co-branded lockup is used **only when the user deliberately asks for one**, and then once: in the hero badge or the footer.
- If the page is Sarvam's, the nav says Sarvam. Full stop.

## Co-branded lockups (only when asked)
Anatomy: `[Sarvam wordmark] [separator] [partner mark]`

| Situation | Order | Example |
|---|---|---|
| Sarvam-led (default) | **Sarvam first** | `sarvam ✦ HealthPlix` · `sarvam ✦ SUPERNOVA` |
| Product / event lockup | Sarvam first, then glyph + name | `sarvam │ ◉ VOICE AGENTS` |
| Sarvam is the **guest** — a marketplace listing, accelerator, conference, or another company's programme | **Host first** | `aws marketplace ✦ sarvam` |

| Element | Spec |
|---|---|
| Sarvam wordmark | 16–18px tall in nav · 24–32px in a hero badge · 32–44px on banners |
| Partner mark | Scale the **partner** to a cap-height ≈ Sarvam's x-height; its overall height never exceeds **1.1×** the wordmark. Never enlarge or shrink Sarvam to match a partner |
| Separator | A 3–4px diamond (rotated square) `✦`, **or** a 1px vertical rule at 60% of the wordmark height. Use the rule when the partner is a heavy/bold wordmark |
| Gap | 0.5–0.75× wordmark height on each side of the separator |
| Colour | Sarvam stays black on light / white on dark. The partner keeps its **own** brand colours. Never recolour either one into the other's palette |
| Max marks | **Two.** Three or more → drop to text: "Sarvam, HealthPlix and Supernova" |
| Alignment | Optically centred on cap-height, not bounding box. The lockup reads as one line |
| Semantics | One link to home, one accessible name ("Sarvam and HealthPlix") |

Product names in a lockup use **Matter Semi Mono, uppercase, tracking 0.08em**, with cap-height ≈ the wordmark's x-height.

## Giant wordmark (footer)
The footer ends with an oversized wordmark, cropped by the bottom edge and filled with a photograph or texture via `background-clip:text` (a mask). This is the only sanctioned "image inside wordmark" use. Use it only on the website footer, never in banners.
