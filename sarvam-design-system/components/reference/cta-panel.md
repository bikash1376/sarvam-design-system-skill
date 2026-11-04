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
Measured on sarvam.ai: `--grad-cta-panel` (`linear-gradient(180deg,#13121e 0%,#a5bbfc 116.55%)`: near-black navy at the top, periwinkle glowing from the bottom), **radius 24px** (16px mobile), padding 80px 40px (48px 24px mobile), centred. h2 Season Mix 425 36px white over 2 lines ("Start transcribing in minutes / Powered by Saaras V4"), a small glowing white dot, concentric 1px arcs at 8% white, and a **primary slate button** with cursor glow.

## Rules
- **Must** appear at most once per page, right before the footer.
- **Must** use the primary slate button (as on sarvam.ai), not a white button.
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
| `--grad-cta-panel` | linear-gradient(180deg,#13121e 0%,#a5bbfc 116.55%) |
| `--radius-3xl` | 24px |

## Related
Button · Footer
