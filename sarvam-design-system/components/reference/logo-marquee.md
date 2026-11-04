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

## Variants
| Variant | Motion | Hover |
|---|---|---|
| `scrolling` (default) | Constant drift left, ~40px/s, seamless loop (Motion `useAnimationFrame` on `x`) | The row eases to a stop (spring); the hovered logo goes from grey 50% to dark grey (`brightness(.35)`) and scales to **1.06** in 250ms. Leaving resumes the drift |
| `static` | None: a grid of logos (3 / 4 / 6 columns at mobile / tablet / desktop) | The hovered logo shows its **original colour** (`grayscale(0)`), opacity 1, scale 1.04, 300ms |

Both start grayscale at ~50% opacity so the logos read as one quiet band. Use `static` when there are 12 logos or fewer and the section is short; use `scrolling` for longer lists. Under reduced motion, `scrolling` falls back to `static`.

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
