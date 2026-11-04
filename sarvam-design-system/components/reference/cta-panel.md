---
title: "CTA panel"
slug: cta-panel
group: Layout
summary: "The single dark moment on a page: a closing call to action before the footer."
related: [button, footer]
---

# CTA panel

The single dark moment on a page: a closing call to action before the footer.

## Styles
`--grad-night` background, radius 32px / 24px / 16px (desktop / tablet / mobile), padding 80px 40px (48px 24px mobile), centred. h2 in Season Mix 400 36–40px white, at most 2 lines, then a 32px white star glyph, concentric 1px arcs at 8% white from the bottom centre, and an `on-dark` button.

## Rules
- **Must** appear at most once per page, right before the footer.
- **Must** use the `on-dark` button.
- **Never** put body paragraphs inside it.

## Accessibility
- White on the night gradient exceeds 12:1. The arcs are decorative.

## Edge cases
| Scenario | Fix |
|---|---|
| Headline longer than 2 lines on mobile | Shorten it; never drop the size below 28px |

## API
| Prop | Type | Default |
|---|---|---|
| `title`, `cta` | n/a | n/a |

## Tokens
| Token | Value |
|---|---|
| `--grad-night` | radial-gradient(60% 90% at 50% 100%,#3d32ab,transparent 70%), linear-gradient(#14142b,#1e2033) |
| `--radius-4xl` | 32px |

## Related
Button · Footer
