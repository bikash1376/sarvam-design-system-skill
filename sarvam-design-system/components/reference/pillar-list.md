---
title: "Pillar list"
slug: pillar-list
group: Display
summary: "Lists brand pillars or benefits, each with a gradient star bullet."
related: [feature-card]
---

# Pillar list

Lists brand pillars or benefits, each with a gradient star bullet.

## Styles
Each row is a 20–24px star bullet (`assets/motifs/star-bullet-*.svg`), gap 12px, a title in Matter 500 20px, and a description in Matter 400 16px `--tx-tertiary`, lh 1.65, aligned under the title. Rows are 24–32px apart.

## Rules
- **Must** use star bullets, not icons or checkmarks.
- **Should** have 3–4 items, alternating star hues or using one hue for all.

## Accessibility
- Use a `<ul>`; the stars are decorative.

## Edge cases
| Scenario | Fix |
|---|---|
| Very long description | Max 2 lines; move detail elsewhere |

## API
| Prop | Type | Default |
|---|---|---|
| `items` | `{title, body, hue}[]` | n/a |

## Tokens
| Token | Value |
|---|---|
| star gradient (green) | #E3F1D8 → #496D21 |

## Related
Feature card
