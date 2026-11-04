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
A centred column: an optional ornament divider (208px, white over the aura), a 1px hairline (`radial-gradient(circle,#6a88e2,transparent)`), the text in Matter 425 14 → 16px, `--sr-indigo-900`, tracking .025em, padding 0 32px, then a second hairline.

## Variants
| Variant | Spec | Where |
|---|---|---|
| `hero` | ornament + hairlines + Matter 425 16px indigo-900, tracking .025em | **Home / brand hero only** |
| `section-label` | Matter 525 **12px** UPPERCASE, tracking 2px, `#666`, no hairlines | "INDIA BUILDS WITH SARVAM" above the logo bar; a product-module label |
| `micro` | Matter Semi Mono 10–11px UPPERCASE, indigo | Annotations inside demos: OUTPUT, CODE SWITCH, PROPER NOUN |

## Rules
- **Must** use `hero` at most once per page, on home/brand pages only. Product pages show the ornament without eyebrow text.
- **Must** use `section-label` at most 1–2 times per page.
- **Never** put a label above every section title. sarvam.ai product pages have none.
- **Never** set section labels in Semi Mono or above 12px.
- **Should** keep hero eyebrows to 2–5 words ("India's Sovereign AI Platform").
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
