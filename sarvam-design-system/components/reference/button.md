---
title: "Button"
slug: button
group: Actions
summary: "Starts an action: signing up, submitting, playing audio, opening a flow."
related: [copy-button, icon-button, segmented, cta-panel]
---

# Button

Starts an action: signing up, submitting, playing audio, opening a flow.

## Styles
| Variant | Fill | Text | Use |
|---|---|---|---|
| `primary` (default) | `--slate #2a2c33` + inset edge | white, Matter 525 | The one main action in a view |
| `hero-dark` | `--grad-btn-dark` (#3a3f5c → #1e2033) | white, **Season Mix 500** | Hero CTA pair only |
| `hero-light` | `--grad-btn-light` + 1px inset ring | `#1e2033`, Season Mix 500 | Second CTA in the hero pair |
| `secondary` | `--sf-secondary #f5f5f5` → hover `#fff` | `--tx` | A second action beside a primary |
| `outline` | `#fff` + 1px `--st` → hover `--sf` | `--tx`, 14px | "Explore X →", "View all" |
| `on-dark` | `#fff` | `--tx` | Inside a dark CTA panel |

## Sizes
| Size | Height | Padding | Font |
|---|---|---|---|
| `sm` | 36px | 8px 16px | 14px |
| `md` (default) | 40px | 10px 20px (8px 20px with icon) | 15–16px |
| `lg` / hero | 52px | 14px 24px | 16px |

## States
- **Rest:** as above. Dark variants carry `inset 0 1px 0 rgba(255,255,255,.4), inset 0 -2px 0 rgba(0,0,0,.2)`.
- **Hover:** light variants change background. **Dark variants show the cursor glow**: a white `radial-gradient(circle 80px at var(--gx) var(--gy), rgba(255,255,255,.16), transparent)` that follows the pointer and fades in over 300ms.
- **Focus-visible:** `box-shadow: 0 0 0 3px rgba(165,187,252,.6)` (indigo ring) on every variant.
- **Active:** `transform: scale(.96)`, 150ms.
- **Disabled:** `opacity: .4; pointer-events: none`.

## Usage
### Use
- To commit an action: Sign up, Get started, Contact us, Play audio, Generate.
- With a leading 14–16px **solid** icon when the action is media (play, mic, send).
### Not for
- Switching between views of the same content → **Segmented control**.
- Copying code → **Copy button**.
- Navigation inside text → a link.
- An icon-only utility (reset, download) → **Icon button**.

## Rules
- **Must** use at most one `primary` (or `hero-dark`) per view. Every other action is secondary or outline.
- **Must** be a full pill (`border-radius: 9999px`) with a min-height of 40px.
- **Must** give every dark button the cursor glow; light buttons never get it.
- **Must** set labels in Matter 500 (Season Mix only in hero variants).
- **Must** stack full-width below 768px when the button sits inside a card or form.
- **Never** use hard drop shadows, 4px corners or gradient text.
- **Never** colour a button in a brand hue (indigo, saffron). Buttons are slate or neutral.
- **Should** label with a verb and its object, 2–3 words: "Get your API key", "Start building".
- **Should** keep hero CTA pairs inline on mobile when both labels are 12 characters or fewer.

## Accessibility
- Use `<button>` for actions and `<a>` for navigation. Never a `<div>` with a click handler.
- The focus ring is visible on `:focus-visible` for every variant, with 3:1 contrast against the page.
- White on `#2a2c33` is 13.9:1; `#1f1f1f` on `#f5f5f5` is 15:1.
- Touch targets are at least 44×44px on mobile (40px height + padding, or wrap in a 44px hit area).
- Icon-only buttons need `aria-label`. Decorative icons get `aria-hidden="true"`.
- Respect `prefers-reduced-motion`: drop the scale and glow transitions.

## Edge cases
| Scenario | Fix |
|---|---|
| Long label in a narrow card | Allow wrapping to 2 lines only on mobile; otherwise shorten the copy |
| Row of buttons narrower than its contents | `flex-wrap: wrap; gap: 16px` (20px md+) |
| Double click on submit | Set `aria-busy` + disabled until the request resolves |
| Touch device | No hover means no glow; the press scale is the feedback |
| Dark button on a dark panel | Use `on-dark` (white) instead |
| Glow layer intercepts clicks | The glow is `pointer-events: none` |

## API
| Prop | Type | Default |
|---|---|---|
| `variant` | `primary \| hero-dark \| hero-light \| secondary \| outline \| on-dark` | `primary` |
| `size` | `sm \| md \| lg` | `md` |
| `icon` | leading icon (solid, 14–16px) | n/a |
| `href` | renders an `<a>` | n/a |
| `disabled` | `boolean` | `false` |
| `fullWidth` | `boolean` (auto below 768px in cards) | `false` |

## Tokens
| Token | Value |
|---|---|
| `--slate` | #2a2c33 |
| `--sf-secondary` | #f5f5f5 |
| `--st` | #e6e6e6 |
| `--grad-btn-dark` | linear-gradient(#3a3f5c, #1e2033) |
| `--grad-btn-light` | linear-gradient(#fff, #f0f1f5) |
| `--shadow-btn-dark` | inset 0 1px 0 rgba(255,255,255,.4), inset 0 -2px 0 rgba(0,0,0,.2) |
| `--shadow-btn-light` | inset 0 2px 0 rgba(200,200,200,.1), inset 0 -1px 0 rgba(0,0,0,.05) |
| `--glow-cursor` | rgba(255,255,255,.16) |
| `--ease-brand` | cubic-bezier(.2,0,0,1) |
| `--dur-btn` | 350ms |
| `--radius-pill` | 9999px |

## Related
Copy button · Icon button · Segmented control · CTA panel
