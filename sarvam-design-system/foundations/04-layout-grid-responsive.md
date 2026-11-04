# 04 · Layout, Grid and Responsive Behaviour

Sarvam's layout is **centred, airy and container-based**: a percentage-width container that becomes a capped column on very wide screens, with big, consistent vertical rhythm.

## Breakpoints (Tailwind v4 defaults, as used on sarvam.ai)
| Name | Min width | Target device | Design artboard |
|---|---|---|---|
| base | 0 | Phones | **375px** |
| `sm` | 640px | Large phones, small tablets portrait | n/a |
| `md` | **768px** | Tablet portrait. **This is the main layout switch.** | **768px** |
| `lg` | 1024px | Tablet landscape, small laptops (nav height changes) | n/a |
| `xl` | 1280px | Laptop | n/a |
| `2xl` | 1536px | Large desktop (content caps at 1400px) | n/a |
| design desktop | n/a | n/a | **1440px** |

Design mobile-first. `md` is where most layouts switch from stacked to multi-column. `lg` is where secondary navigation and denser grids appear.

## Containers
```css
.container { width: 88%; margin-inline: auto; }              /* <768: 375 → 330px content, ~22px gutters */
@media (min-width: 768px)  { .container { width: 83.333%; } }  /* 10/12: 768 → 640, 1440 → 1200 (120px margins) */
@media (min-width: 1536px) { .container { max-width: 1400px; } }
```
- Narrow text column (section intros, articles): `max-width: 672px` (42rem).
- Hero text: `max-width: 896px` (56rem) for h1, ~640px for sub-copy.
- The nav uses the same container, so the logo always aligns with the content edge (x = 120 at 1440).

## Grid per breakpoint
| | Mobile 375 | Tablet 768 | Desktop 1440 |
|---|---|---|---|
| Content width | 330px (88%) | 640px (83.3%) | 1200px (83.3%) |
| Columns | 4 | 8 | 12 |
| Column gap | 16px | 20px | 24px |
| Card grid | 1-up (2-up for small stat/feature tiles) | 2-up | 3-up · 4-up only ≥1280 and only if each card ≥260px |
| Split (text + media) | Stacked: text first, media second | Stacked, or 50/50 for compact content | 5/7 or 6/6 side-by-side |
| Section title align | Centre | Centre | Centre (left only inside split layouts) |

## Equal cards (non-bento grids)
Every card in a non-bento grid has the **same width and the same height**. This is a layout rule, not a content preference.

```css
.cards{display:grid;grid-template-columns:repeat(var(--cols),minmax(0,1fr));gap:24px;align-items:stretch}
.cards>*{min-width:0;height:100%;display:flex;flex-direction:column}
.cards .card-footer{margin-top:auto}
```

- Use `minmax(0,1fr)`, never bare `1fr`: items default to `min-width:auto`, so one long tag widens its column and the row goes uneven.
- Never `align-items:start`; never let content set width; never `flex:1` in a wrapping row.
- 4-up only at ≥1280px with ≥260px per card. Between 1024–1279 use 3-up.
- Keep heights close with content budgets (title ≤ 4 words, body ≤ 20 words) and clamp text, not stretch it.
- Bento is the only exception, and only with genuinely uneven tiles (see `formats/web-pages.md`).

## Vertical rhythm (spacing that scales)
| Token | Mobile | ≥768 | Use |
|---|---|---|---|
| `--section-gap` | **96px** | **128px** | Between major sections |
| `--section-inner` | **32px** | **48px** | Section title → content |
| Hero top padding | 144px (pt-36) | 160px (pt-40) | Under the fixed nav |
| Title → subtitle | 10px | 14px | h1 → lead |
| Subtitle → CTAs | 20px | 32px | lead → button row |
| Card padding | 20–24px | 24–32px | inside cards |
| Card grid gap | 12–16px | 20–24px | between cards |
| Button group gap | 16px | 20px | CTA rows |

**Spacing scale:** 4px base. Allowed steps are 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128, 160. Don't use off-scale values such as 15, 18, 22 or 50px for spacing.

## How components reflow (the adaptive rules)
| Component | Mobile (<768) | Tablet (768–1023) | Desktop (≥1024) |
|---|---|---|---|
| **Nav** | Wordmark + "Log In" pill + hamburger; full-screen sheet menu | Same as mobile | Wordmark left · 4 text links centred · Log In (dark) + Contact Us (light) pills right; height 68px |
| **Hero** | Centred, h1 44px (home) / **32px (product)**, `<br>` in lead removed, CTAs **stacked, centred, auto-width** (never full-width) | h1 64 / 52px, CTAs inline | Same |
| **Logo marquee** | 36px logos, 40px gap, edge-fade mask 8% | Same | 45px logos, 60px gap |
| **Product tabs** (e.g. playground) | Tabs collapse into a dropdown/select pill | Scrollable pill row | Full tab bar |
| **Feature cards** | 1-up stack; small tiles 2-up | 2-up | 3-up |
| **Split feature** (image + list) | Image on top, list below, CTA full-width | Image on top or 50/50 | Image 5/12 left, list 7/12 right |
| **Stats row** | 2×2 grid, dividers horizontal | 3–4 inline | 3–4 inline with vertical 1px dividers |
| **Accordion/stepper** (01–05 tabs) | Horizontal swipe carousel of cards | Same | Expanding columns (one open, others collapsed to numbered slivers) |
| **Testimonial** | Quote 18px, avatar row stacked | Quote 20px | Quote 22–24px, avatar left + "Read full story" right |
| **Blog / update cards** | Horizontal scroll or 1-up | 2-up | 3-up |
| **CTA panel** (dark) | Radius 16px, padding 40/24px, h2 28px | Radius 24px | Radius 32px, padding 80px, h2 36–40px |
| **Footer** | Wordmark + tagline, then link columns 2-up, then legal | 3-up columns | Brand column + 5 link columns in one row; giant image-filled "sarvam" wordmark below |
| **Buttons** | `w-full` in stacked contexts (cards, forms) | auto width | auto width |

### Rules for adapting (not just shrinking)
1. **Reorder for the reader.** On mobile, text comes before media, and the primary CTA is visible without scrolling past an image.
2. **Shorten, don't squeeze.** Remove decorative `<br>`s, hide secondary CTAs and tertiary links (`max-md:hidden`), and collapse tabs into a select.
3. **Swap density.** 3-up grids become a horizontal snap-scroll row before they become a long 1-up stack when the items are browsable (blogs, logos, templates).
4. **Keep the rhythm.** Section gaps only drop from 128 to 96px. Mobile should still feel airy.
5. **Touch targets are ≥44px** on mobile (buttons have min-height 40px plus padding; the hero CTA is 44px).
6. **Motion:** reveal animations are desktop-only (`md+`). On mobile, show content immediately. Respect `prefers-reduced-motion`.
7. **Fluid between breakpoints:** use `clamp()` for type and `%`/`fr` for widths so 900px or 1200px screens look intentional.

## Z-layers
nav 50 · sheet menu 60 · modal 70 · toast 80. Aura backgrounds sit at `z-index:-1` behind the hero.
