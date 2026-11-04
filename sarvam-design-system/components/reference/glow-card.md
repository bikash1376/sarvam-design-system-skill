---
title: "Glow card"
slug: glow-card
group: Display
summary: "A white card with a soft pastel glow rising from its bottom edge."
related: [feature-card]
---

# Glow card

A white card with a soft pastel glow rising from its bottom edge.

## Styles
A white card (radius 16px, 1px `--st-secondary`) with an inline soft-glow SVG behind its content: one hue per card, from `foundations/14-soft-glow-surfaces.md`. Content sits in the top half: a solid icon, a title (Matter 525 20px) and a body line.

## Usage
### Use
- Use-case sets, benefit grids and "why us" tiles that should feel soft and branded.
### Not for
- Dense product grids → **Feature card**.

## Rules
- **Must** use one hue per card and a different contour per neighbour (hill, valley, ramp, dome).
- **Must** keep the glow in the bottom 25–45% and text in the top half.
- **Never** use CSS linear or radial gradients for the glow.
- **Should** lower the glow (`lift -4…-8`) when the card is wider than it is tall.

## Accessibility
- The glow SVG is `aria-hidden`. Text stays on white, so contrast is unaffected.

## Edge cases
| Scenario | Fix |
|---|---|
| Several glows on one page | Give each a unique filter id |
| Text runs into the glow | Raise min-height or lower the glow |

## API
| Prop | Type | Default |
|---|---|---|
| `glow` | preset or `{color, contour}` | `lilac-hill` |
| `icon`, `title`, `body` | n/a | n/a |

## Tokens
| Token | Value |
|---|---|
| lilac / sage / honey / rose / peach | #BBC3F1 / #D7EAC1 / #FFE0AA / #E0A6BF / #FDE7DC |

## Related
Feature card
