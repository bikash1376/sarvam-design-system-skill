---
title: "Mega menu"
slug: mega-menu
group: Navigation
summary: "The full-width panel that opens under the navbar when you hover Products or Developers: grouped links with icon tiles, plus one featured card."
related: [navbar, item, card, eyebrow]
---

# Mega menu

The full-width panel that opens under the navbar when you hover Products or Developers: grouped links with icon tiles, plus one featured card.

## Styles
- **Panel:** full viewport width, directly under the nav's bottom hairline, `--sf-white`, no radius, no shadow. The page behind is dimmed with `rgba(20,20,20,.18)` and blurred 4px. Content aligns to the page container (10/12, max 1400px), with padding 48px top and 56px bottom.
- **Layout:** a 12-column grid. Link groups take the left 8 columns; the **featured card** takes the right 4.
  - **Products:** one group ("Products") in 2 columns of rows.
  - **Developers:** two groups side by side ("APIs" with descriptions, "Resources" with title-only rows) and a text link "View all models" in `--sr-indigo-800` under the APIs group.
- **Group label:** Geist 500 12px, uppercase via CSS, tracking 1px, `--tx-secondary`, 24px above the first row.
- **Row:** 48px **icon tile** (white, 1px `--st`, radius 10px) + 16px gap + title (Matter 425, 18px, `--tx`) over description (Matter 425, 15px, `--tx-tertiary`). Rows are 72px apart (height 56px + 16px gap). Title-only rows centre the title on the tile.
- **Icon colour:** each product keeps its own hue, a 22px line icon at stroke 1.6 in the 700–800 step of its ramp (indigo for voice and STT, green for work agents, orange for coding, TTS and docs, maroon for translation). Voice Agents uses the Devanagari "अ" glyph instead of an icon.
- **Featured card:** white, 1px `--st-secondary`, radius 16px, padding 8px. Inside, an image well (radius 12px, 16:9) with a brand gradient and a white Matter 525 title (32px) centred, then a caption row (Matter 16px `--tx`) with a ↗ arrow at the right.
  - Products features the Dashboard (`--grad-sunrise`).
  - Developers features the Startup Program (periwinkle → indigo glow).
- **Trigger state:** the hovered nav link is `--tx`; the others stay `--tx-secondary`.

## States
- **Open:** after hovering a trigger for 80ms (hover intent), or on click or Enter. The panel height animates `0 → auto` and fades in 250ms (`--ease-brand`). Rows stagger in by 30ms, and the dim layer fades in 200ms.
- **Switching** (Products → Developers while open): the panel stays open. Its content cross-fades (out `y -4`, in `y 6 → 0`, 200ms) and its height animates to the new content.
- **Close:** 150ms after the pointer leaves both the trigger and the panel, on Esc (focus returns to the trigger), or on clicking the dim layer.
- **Row hover:** the background turns `--sf-secondary` (radius 12px) and the icon tile lifts 1px.

## Usage
### Use
- Top navigation with more than about 5 destinations under one heading: product families, APIs, resources.
- When each destination needs a one-line explanation to be chosen correctly.
### Not for
- Fewer than 5 links → a simple **Dropdown menu**.
- Mobile (< 1024px) → the hamburger **sheet**, with the same groups as stacked sections.
- Actions (log in, contact) → keep them as nav buttons, never inside the panel.

## Rules
- **Must** keep every row to an icon tile, a title and at most one line of description (≤ 5 words, e.g. "Conversational AI", "Bulbul V3"). Because the panel is scanned, not read.
- **Must** show exactly one featured card. Because two promos compete and neither gets clicked.
- **Must** use real product names and model versions from `FACTS.md`. Never invent a product to fill a column.
- **Must** open on hover only after a short intent delay, and also on click and keyboard. Because hover alone excludes touch and keyboard users, and no delay makes the panel flicker when the pointer crosses the nav.
- **Should** give each product its own icon hue and keep it consistent everywhere that product appears.
- **Never** put more than 2 link groups plus the featured card in one panel, or nest menus inside the panel.
- **Never** use a drop shadow under the panel. The dimmed page does that job.

## Accessibility
- Each trigger is a `<button aria-expanded aria-controls>` inside `<nav aria-label="Main">`. The panel is a labelled region, not `role="menu"` (it holds plain links).
- Tab moves from the trigger into the panel's links in reading order. Esc closes and returns focus to the trigger.
- Hover intent never removes keyboard access. Enter or Space on a trigger toggles its panel.
- The dim layer is `aria-hidden`. Icons are decorative (`aria-hidden`); titles carry the meaning.
- Under reduced motion, the panel opens without a height animation (opacity only).

## Edge cases
| Scenario | Fix |
|---|---|
| Pointer moves diagonally from the trigger to the far column | Keep the panel open while the pointer is over the trigger, the panel, or the gap between them |
| Viewport shorter than the panel | The panel scrolls inside (max-height 100vh − nav height) |
| Product with an image logo (Kivi) | Show the logo cropped into the 48px tile instead of a line icon |
| Window narrows below 1024px while open | Close the panel and switch to the hamburger sheet |

## API
| Prop | Type | Default |
|---|---|---|
| `menus` | `{ id, label, groups: { label, columns?: 1 \| 2, items: { title, description?, icon, hue, href }[], footerLink? }[], feature: { title, caption, gradient, href } }[]` | required |
| `openDelay` | `number` (ms) | `80` |
| `closeDelay` | `number` (ms) | `150` |

## Tokens
| Token | Value |
|---|---|
| `--sf-white` | #ffffff |
| `--sf-secondary` | #f5f5f5 |
| `--st` | #e6e6e6 |
| `--tx` | #1f1f1f |
| `--tx-secondary` | #3d3d3d |
| `--tx-tertiary` | #666666 |
| `--grad-sunrise` | linear-gradient(180deg, #a5460f 0%, #e6651b 35%, #f38858 60%, #d2dff9 100%) |
| `--ease-brand` | cubic-bezier(.2, 0, 0, 1) |

## Related
Navbar · Item · Card · Eyebrow
