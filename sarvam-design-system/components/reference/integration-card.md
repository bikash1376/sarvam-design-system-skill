---
title: "Integration card"
slug: integration-card
group: Display
summary: "Shows a partner or integration with a tinted logo well, a description and tags."
related: [tag, feature-card]
---

# Integration card

Shows a partner or integration with a tinted logo well, a description and tags.

## Styles
Measured on sarvam.ai/integrations:
```
card  : #fff · 1px #f0f0f0 · radius 16px · padding 24px · flex column, space-between
        hover: shadow 0 8px 40px -4px rgb(0 0 0/.12), border #e6e6e6 · active scale(.99)
well  : h 144px (176px md+) · radius 16px · 1px #f0f0f0 · bg linear-gradient(to bottom right, {hue}-100, #fff)
title : Matter 525 18px / 1.3, 2-line clamp, 16px below the well
desc  : Matter 425 13px / 1.6, #3d3d3d, 3-line clamp
tags  : bottom row, gap 6px (category tag + capability tags)
```

## Usage
### Use
- Integration directories, SDK and framework listings, template galleries.
### Not for
- Sarvam's own products → **Feature card**.

## Rules
- **Must** tint the well with the category hue, matching its category tag.
- **Must** show partner logos in their original colours, centred, at about 40% of the well width.
- **Never** recolour or crop a partner logo.

## Accessibility
- The logo `alt` is the partner name; the title repeats it, so `alt=""` is acceptable if the title is adjacent.

## Edge cases
| Scenario | Fix |
|---|---|
| A wide wordmark logo | Cap the height at 44px and the width at 60% |
| Description too long | 3-line clamp; full text on the detail page |

## API
| Prop | Type | Default |
|---|---|---|
| `logo` | image | n/a |
| `title`, `description` | `string` | n/a |
| `category` | `{label, hue}` | n/a |
| `capabilities` | `string[]` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--st-secondary` | #f0f0f0 |
| `--sr-indigo-100` | #e8effc |
| `--shadow-card-hover` | 0 8px 40px -4px #0000001f |

## Related
Tag · Feature card
