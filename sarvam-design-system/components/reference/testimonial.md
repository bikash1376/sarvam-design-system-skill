---
title: "Testimonial"
slug: testimonial
group: Display
summary: "Shows a customer quote with a logo, avatar, name and role."
related: [feature-card]
---

# Testimonial

Shows a customer quote with a logo, avatar, name and role.

## Styles
White card, radius 16px, 1px border, padding 32px (40px desktop). Partner logo centred at the top (≤32px tall). Quote in Matter 425 20–22px `--tx-secondary`, lh 1.5, clamped to 4 lines. Footer: a 40px round avatar, name (Matter 525 15px), role (13px `--tx-tertiary`), and a secondary "Read full story" pill at the right (it drops below on mobile).

## Rules
- **Must** use the approved quote in `FACTS.md` (Tata Capital, Shallu Kaushik, CDO). If it doesn't fit, **drop the section**. Never invent quotes, names or roles, and never show `[Name]` placeholders.
- **Never** use AI-generated faces.
- **Should** keep the quote under 50 words.

## Accessibility
- Use `<figure>` + `<blockquote>` + `<figcaption>`.

## Edge cases
| Scenario | Fix |
|---|---|
| No avatar | Show initials on `--sf-tertiary` |

## API
| Prop | Type | Default |
|---|---|---|
| `quote`, `name`, `role`, `logo`, `avatar`, `href` | n/a | n/a |

## Tokens
| Token | Value |
|---|---|
| `--tx-secondary` | #3d3d3d |

## Related
Feature card
