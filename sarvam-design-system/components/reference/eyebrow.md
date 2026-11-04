---
title: "Eyebrow"
slug: eyebrow
group: Display
summary: "The tagline above a hero headline, framed by fading hairlines."
related: [section-header]
---

# Eyebrow

The tagline above a hero headline, framed by fading hairlines.

## Styles
A centred column: an optional ornament divider (208px, white over the aura), a 1px hairline (`radial-gradient(circle,#6a88e2,transparent)`), the text in Matter 400 14 → 16px, `--sr-indigo-900`, tracking .025em, padding 0 32px, then a second hairline.

## Rules
- **Must** appear once per page, in the hero only.
- **Should** be 2–5 words ("India's Sovereign AI Platform").
- **Never** turn it into a pill or a badge.

## Accessibility
- The hairlines and ornament are decorative (`aria-hidden`).

## Edge cases
| Scenario | Fix |
|---|---|
| Text wider than 340px on mobile | Shorten the copy; don't wrap |

## API
| Prop | Type | Default |
|---|---|---|
| `children` | text | n/a |
| `ornament` | `boolean` | `true` |

## Tokens
| Token | Value |
|---|---|
| `--hairline-indigo` | radial-gradient(circle,#6a88e2 0%,transparent 100%) |
| `--sr-indigo-900` | #212191 |

## Related
Section header
