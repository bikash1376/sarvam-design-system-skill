---
title: "Feature card"
slug: feature-card
group: Display
summary: "Presents one product or capability with a solid icon, a title and one line."
related: [glow-card, integration-card, stat]
---

# Feature card

Presents one product or capability with a solid icon, a title and one line.

## Styles
White, 1px `--st`, radius 16px, padding 24px (20px mobile). 24–28px **solid** product-hue icon, then a title in Matter 500 20px (18px mobile), then a body line in Matter 400 15px `--tx-tertiary`. Hover: `--shadow-card-hover` + `translateY(-2px)`.

## Usage
### Use
- Product and API grids (Text to Speech · Speech to Text · Translation · Parse).
### Not for
- A softer, branded set of use cases → **Glow card**.
- Partners → **Integration card**.
- Numbers → **Stat**.

## Rules
- **Must** use the solid icon in the product's hue (see `DECISIONS.md` §6).
- **Must** have one title and at most 25 words of body.
- **Never** mix flat and depth icons in the same grid.
- **Should** lay out 1-up on mobile, 2-up at 768px and 3-up at 1024px and above.

## Accessibility
- If the whole card links, wrap it in one `<a>` with the title as the accessible name. Don't nest links.

## Edge cases
| Scenario | Fix |
|---|---|
| Uneven text lengths in a row | Cards stretch to equal height (grid) |
| No icon for the product | Use a gateway glyph at 32px, not a random icon |

## API
| Prop | Type | Default |
|---|---|---|
| `icon` | solid icon | n/a |
| `title` | `string` | n/a |
| `body` | `string` | n/a |
| `href` | `string` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--radius-2xl` | 16px |
| `--shadow-card-hover` | 0 8px 40px -4px #0000001f |

## Related
Glow card · Integration card · Stat
