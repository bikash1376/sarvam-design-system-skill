---
title: "Eyebrow"
slug: eyebrow
group: Display
summary: "A short label above a heading that says which thing you're looking at: a product, a programme, a tier. A disambiguator, not decoration."
related: [section-header, badge, logo-marquee]
---

# Eyebrow

A short label above a heading that says which thing you're looking at: a product, a programme, a tier. A disambiguator, not decoration.

> **Principle:** an eyebrow appears only when the reader has to be told *what* they are looking at. It never repeats on every heading. Default answer: **no eyebrow**. (Distilled from a crawl of ~30 sarvam.ai pages.)

## Styles
One grammar everywhere:
- **Geist 500, 12px, uppercase via CSS** (write the copy in sentence case), tracking 2px (≈ .16em), colour **`#666666`** (`--tx-eyebrow`). Card kickers inside a labelled module may drop to 10–11px.
- One line, **≤ 6 words**, no full stop, no colon.
- Sits alone on its line, **12–16px above** its heading, with the same alignment as the heading (all left or all centred on a page, never mixed).
- Home and brand hero only: it may be framed by the ornament divider and fading indigo hairlines (`--hairline-indigo`), with Geist 400 13→16px in sentence case.
- On a dark surface use `rgba(255,255,255,.62)`, or leave it out. Use indigo text only when the label stands in for a product logo.

## Variants
| Variant | Where | Example |
|---|---|---|
| `hero` | Directly above the hero h1, naming the page's family or tier | "India's Sovereign AI Platform" · "Indus Cowork" · "Startup program" |
| `section` | Above a mid-page section owned by **one named product or module** on a page where other owners also appear (≤ 2 per page) | "Indus Cowork" → "Intelligence, built around you." · "India builds with Sarvam" (logo bar) · "Connected to your work" |
| `kicker` | 10–11px inside a labelled module's cards | "Skills" · "Scheduled tasks" · "Knowledge base" |

**Hero eyebrow by page type**
| Page | Eyebrow |
|---|---|
| Home / brand | Brand statement or category: "India's Sovereign AI Platform" |
| Product page | The product's exact name: "Indus Cowork", "Document AI", "Coding Agents" |
| Sub-product or agent page | Product + relationship: "Work Agents by Sarvam" |
| API or model page | **None.** The h1 is the name ("Bulbul V3") |
| Programme or partnership | Programme name: "Startup program", "Partnerships" |
| Careers | "Careers at Sarvam AI" |
| Contact, blog, events, stories, legal, docs | **None** |

**Decision flow**
```
Above the hero h1?
├─ yes → Is the h1 short or creative, and the kind of page unclear without a label?
│        ├─ yes → hero eyebrow naming the product / programme / tier
│        └─ no  → no eyebrow (the h1 already says what it is)
└─ no  → Is this section owned by one named product or module, on a page where other owners appear?
         ├─ yes → section eyebrow naming the owner (≤ 2 per page)
         └─ no  → no eyebrow: the h2 and subhead carry the section   ← default
```

## Usage
### Use
- Above the hero h1 when the headline is a claim and the reader needs the family: the eyebrow names the family, the h1 names the claim ("Use cases" → "Voice agents that sound human").
- Above a section that belongs to one product on a cross-product page (the homepage's Indus Cowork module, the "India builds with Sarvam" logo bar).
### Not for
- Generic sections (features, benefits, use cases, how it works, deployment, comparisons) → h2 + subhead alone.
- A label column above every h2, FAQs, testimonials, pricing tiers or tables, CTA panels, footer CTAs, blog or post cards, resource indexes, legal and docs pages.
- Labels inside demo chrome ("OUTPUT", "CODE SWITCH", "01 / Posture") → **micro-labels** in Matter Semi Mono.
- Rounded tinted labels inside content → **Badge** or **Chip**. Plan names → table or plan headers. Field names → **Field** labels.

## Rules
- **Must** keep the hero to 0 or 1 eyebrow, and all mid-page sections combined to **≤ 2**. Because a label on every section becomes a column the eye learns to skip.
- **Must** make every eyebrow name an owner, product, programme or tier. Because if you delete it and nothing is lost, it was filler. Run that test on each one.
- **Never** put eyebrows on two adjacent sections.
- **Never** use an eyebrow on an API or model page hero. Because the h1 ("Bulbul V3") is already the name.
- **Must** set every eyebrow in the same micro-typography (Geist 500, 12px, uppercase via CSS, 2px tracking, `#666666`). Never monospace, never a pill.
- **Never** let the eyebrow repeat the h1, or end in a full stop or colon.
- **Should** write it in sentence case in the source and uppercase it with CSS, so copy stays readable and accessible.
- **Never** restyle demo-chrome micro-labels as eyebrows, or eyebrows as micro-labels.

## Accessibility
- Use a `<p>` (not a heading) placed before the heading, so screen readers don't read an extra level. Uppercase comes from CSS (`text-transform`), so the text is read normally.
- The hairlines and ornament are decorative (`aria-hidden`).
- `#666666` on `#fcfcfc` is 5.6:1. On dark surfaces use white at 62% or more.

## Edge cases
| Scenario | Fix |
|---|---|
| Wider than 340px on mobile | Shorten to ≤ 4 words; never wrap to two lines |
| Every section "needs" a label | Remove them all; give the h2s clearer subheads |
| Product module on its own product page | No section eyebrow: the page already names the owner |
| Dark CTA panel | No eyebrow |

## API
| Prop | Type | Default |
|---|---|---|
| `children` | `string` (sentence case) | required |
| `variant` | `hero \| section \| kicker` | `section` |
| `ornament` | `boolean` (hero, home/brand only) | `false` |
| `align` | `left \| center` (match the heading) | `center` |

## Tokens
| Token | Value |
|---|---|
| `--font-eyebrow` | "Geist", "Inter", system-ui, -apple-system, sans-serif |
| `--tx-eyebrow` | #666666 |
| `--fs-eyebrow` | 12px |
| `--ls-eyebrow` | 2px |
| `--hairline-indigo` | radial-gradient(circle, #6a88e2 0%, transparent 100%) |

## Related
Section header · Badge · Logo marquee
