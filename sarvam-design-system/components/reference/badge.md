---
title: "Badge"
slug: badge
group: Display
summary: "States a trust, compliance or security claim: SOC 2, ISO 27001, DPDP."
related: [tag, feature-card]
---

# Badge

States a trust, compliance or security claim: SOC 2, ISO 27001, DPDP.

## Styles
**Not a pill.** A 12px-radius rounded rectangle: padding 8px 14px, gap 8px, height 38px, **Matter 14px weight 625**, 16–18px **solid** icon in the same hue, background `{hue}-50`, border 1px `{hue}-200` at 75%, `inset 0 -0.5px 1px {hue}-200`.

| Badge | Hue | Text colour |
|---|---|---|
| SOC 2 Type I | indigo | #556adc |
| ISO 27001 | green | #6ea335 |
| DPDP compliant | orange | #ee7944 |
| Role-based access | pink | #d4508e |
| Full audit trail | yellow | #c08827 (90%) |
| Data residency controls | red | #db715c |

## Usage
### Use
- Compliance and security claims in enterprise sections and trust centres.
### Not for
- Card categories ("Voice Infra") → **Tag (category)**.
- Technology labels ("STT", "Python") → **Tag (capability)**.
- Dates and post types → plain meta text.
- The hero tagline → **Eyebrow**.

## Rules
- **Must** use hue by meaning: indigo = security/info, green = certified/success, orange = data/privacy law, pink = people/access, yellow = audit/logs, red = residency/location.
- **Must** include a solid icon; text-only badges are tags.
- **Never** make it a pill or set it below 14px.
- **Should** wrap in a row with a 10px gap, right-aligned beside the text on desktop and below it on mobile.

## Accessibility
- The text colours meet 3:1 at 14px semibold (large-text threshold). Don't go lighter.
- The icon is decorative (`aria-hidden`); the label carries the meaning.

## Edge cases
| Scenario | Fix |
|---|---|
| More than 6 badges | Show 6 plus a "View trust centre" link |
| Long claim | Keep it to 3 words; link to details |

## API
| Prop | Type | Default |
|---|---|---|
| `hue` | `indigo \| green \| orange \| pink \| yellow \| red` | `indigo` |
| `icon` | solid icon | required |
| `children` | label | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sr-indigo-50` / `-200` / `-600` | #fafcff / #d2dff9 / #556adc |
| `--sr-green-50` / `-200` / `-600` | #f2f8eb / #c8e4b0 / #6ea335 |
| `--radius-xl` | 12px |

## Related
Tag · Feature card
