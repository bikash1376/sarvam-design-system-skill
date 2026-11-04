# Reference · ui-ux-pro-max (bundled)

`vendor/ui-ux-pro-max/` is a copy of [nextlevelbuilder/ui-ux-pro-max-skill](https://www.skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max) v2.15.0 (MIT, see `vendor/ui-ux-pro-max/LICENSE`). It lives inside this skill so there is **one skill to install**. Nothing here needs the separate plugin.

## What to use it for
| Need | Use |
|---|---|
| Art direction options for a banner or post (2–3 directions before picking one) | `vendor/ui-ux-pro-max/banner-design/BANNER-DESIGN.md`: workflow and styles |
| Sizes beyond our six core canvases (Facebook cover, X header, YouTube, Pinterest, display ads, print) | `vendor/ui-ux-pro-max/banner-design/references/banner-sizes-and-styles.md` |
| UX, accessibility and layout checks, landing-section patterns, chart choice, motion guidance | `python -I vendor/ui-ux-pro-max/scripts/search.py "<query>" --domain <ux\|landing\|charts\|motion\|typography\|styles> -n 5` |

The search script needs only Python 3 and no extra dependencies. If a query returns no match, broaden it (for example "hero" instead of "social media banner announcement").

## Precedence (non-negotiable)
1. **Sarvam wins on brand.** Colours, fonts, radius, gradients, glyphs, logos and copy rules come only from this skill (`tokens/`, `foundations/`, `DECISIONS.md`, `FACTS.md`). Never adopt a palette, font pairing or style recommendation from ui-ux-pro-max.
2. Use ui-ux-pro-max for **structure and craft**: composition options, platform specs, hierarchy, contrast and readability checks, safe zones.
3. Map any style it suggests onto a Sarvam archetype in `formats/social-banners.md`. "Glassmorphism" becomes glass glyphs and soft glows. "Gradient" becomes the blue→orange spectrum as light. "Bold typography" stays Season Mix 425, never bold.
4. Banner sizing always follows the proportional scale in `formats/social-banners.md` (`--u`).
