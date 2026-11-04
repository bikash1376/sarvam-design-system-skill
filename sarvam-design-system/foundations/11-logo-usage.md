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

## Lockups
```
Partner (centred, quieter):   sarvam  ·  PARTNER        (Matter Semi Mono / partner's own logo)
Product (event/webinar):       sarvam  │  [glyph] VOICE AGENTS
```
- Divider: a 1px vertical rule at 60% of wordmark height in `--st`/`--tx-tertiary`, or a middle dot `·`.
- Gap = 1× wordmark height on each side of the divider.
- Product names in lockups use **Matter Semi Mono, uppercase, tracking 0.08em**, with cap-height ≈ wordmark x-height.

## Giant wordmark (footer)
The footer ends with an oversized wordmark, cropped by the bottom edge and filled with a photograph or texture via `background-clip:text` (a mask). This is the only sanctioned "image inside wordmark" use. Use it only on the website footer, never in banners.
