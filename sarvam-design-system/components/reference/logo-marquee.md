---
title: "Logo marquee"
slug: logo-marquee
group: Display
summary: "Social proof: a scrolling row of customer logos."
related: [section-header]
---

# Logo marquee

Social proof: a scrolling row of customer logos.

## Styles
Label "INDIA BUILDS WITH SARVAM" (Matter 525 12px caps, tracking 2px, `--tx-tertiary`). Logos are grayscale, brightness .8, opacity .5, height 30–45px, gap 60px (40px mobile), with a linear auto-scroll at about 100px/s and an 8% edge-fade mask. Hover restores colour.

## Rules
- **Must** use the real SVGs in `assets/logos/customers/` (15 logos: Aadhaar, Axis Bank, CRED, CRED Resolve, Decentro, IDFC, IndiaMART, Infosys, LIC, Mahindra Finance, NABARD, SBI Life, Skill India, Tata Capital, Urban Company).
- **Never** render placeholder boxes or "[Customer logo]" text.
- **Never** stretch or recolour logos beyond the grayscale treatment.

## Accessibility
- Pause on hover and focus. Stop under `prefers-reduced-motion`. Provide a static list for screen readers.

## Edge cases
| Scenario | Fix |
|---|---|
| Fewer than 8 logos | Show them as a static centred row |

## API
| Prop | Type | Default |
|---|---|---|
| `logos` | image[] | n/a |
| `speed` | px/s | `100` |

## Tokens
| Token | Value |
|---|---|
| mask | linear-gradient(to right,transparent,#000 8%,#000 92%,transparent) |

## Related
Section header
