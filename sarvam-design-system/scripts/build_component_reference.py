"""Writes components/reference/*.md: one reference page per component.

Each page: frontmatter + Styles/Sizes/States + Usage + Rules + Accessibility + Edge cases + API + Tokens + Related.
These pages are the single source for both agents (raw markdown) and the docs site (Human view).
Edit the DOCS dict below, then run:  python scripts/build_component_reference.py
"""
import json, pathlib, textwrap

OUT = pathlib.Path(__file__).resolve().parent.parent / "components" / "reference"

def page(slug, title, group, summary, related, body):
    fm = (f"---\ntitle: {json.dumps(title)}\nslug: {slug}\ngroup: {group}\n"
          f"summary: {json.dumps(summary, ensure_ascii=False)}\nrelated: [{', '.join(related)}]\n---\n\n")
    return fm + f"# {title}\n\n{summary}\n\n" + textwrap.dedent(body).strip() + "\n"

DOCS = []
D = lambda *a: DOCS.append(page(*a))

D("button", "Button", "Actions", "Starts an action: signing up, submitting, playing audio, opening a flow.", ["copy-button", "icon-button", "segmented", "cta-panel"], """
## Styles
| Variant | Fill | Text | Use |
|---|---|---|---|
| `primary` (default) | `--slate #2a2c33` + inset edge | white, Matter 525 | The one main action in a view |
| `hero-dark` | `--grad-btn-dark` (#3a3f5c → #1e2033) | white, **Season Mix 525** | Hero CTA pair only |
| `hero-light` | `--grad-btn-light` + 1px inset ring | `#1e2033`, Season Mix 525 | Second CTA in the hero pair |
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
- **Must** set labels in Matter 525 (Season Mix only in hero variants).
- **Must** stack full-width below 768px only when the button sits inside a card or form.
- **Never** use hard drop shadows, 4px corners or gradient text.
- **Never** colour a button in a brand hue (indigo, saffron). Buttons are slate or neutral.
- **Should** label with a verb and its object, 2–3 words: "Get your API key", "Start building".
- **Must** keep hero CTAs auto-width on mobile: stacked and centred, never stretched full-width (sarvam.ai). Full-width is only for buttons inside cards and forms.
- **Must** use sarvam.ai's CTA wording where it applies: "Get Started for Free", "Contact Us", "Get API key", "Get 100 credits free".

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
| `variant` | `primary \\| hero-dark \\| hero-light \\| secondary \\| outline \\| on-dark` | `primary` |
| `size` | `sm \\| md \\| lg` | `md` |
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
""")

D("copy-button", "Copy button", "Actions", "Copies a code snippet or value to the clipboard and confirms it.", ["button", "code-block", "icon-button"], """
## Styles
| State | Look |
|---|---|
| Default | Ghost: no background, 16px Copy icon + "Copy" in `--tx-tertiary #666`, Matter 425 14px, gap 6px, padding 8px 12px |
| Hover | Background `--sf-secondary #f5f5f5`, radius 12px, text `--tx-secondary #3d3d3d` |
| Copied | Same background; the icon swaps to copy-check and the label reads "Copied" for 2s, then reverts |

## Usage
### Use
- In a code-block header, at the right, after a 1px `--st-secondary` divider.
- Beside an API key, an ID or a cURL command.
### Not for
- Sharing a page → use the platform share sheet.
- Downloading a file → **Icon button** with a download icon.

## Rules
- **Must** confirm with both an icon change and a text change, not colour alone.
- **Must** revert after about 2s.
- **Never** show a toast as well; the inline confirmation is enough.
- **Should** keep the label when space allows; icon-only is allowed in tight headers, with `aria-label`.

## Accessibility
- Announce success with `aria-live="polite"` on the label.
- Keyboard: Enter and Space trigger it, and focus stays on the button after copying.
- If the Clipboard API is unavailable, select the text and show "Press Ctrl+C".

## Edge cases
| Scenario | Fix |
|---|---|
| Clipboard permission denied | Fall back to selecting the text plus a hint |
| Clicked again while "Copied" | Restart the 2s timer; don't stack timers |
| Very long snippet | Copy the raw source, not the highlighted HTML |

## API
| Prop | Type | Default |
|---|---|---|
| `value` | `string` | n/a |
| `label` | `string` | `Copy` |
| `copiedLabel` | `string` | `Copied` |
| `iconOnly` | `boolean` | `false` |

## Tokens
| Token | Value |
|---|---|
| `--sf-secondary` | #f5f5f5 |
| `--tx-tertiary` | #666666 |
| `--tx-secondary` | #3d3d3d |
| `--radius-xl` | 12px |

## Related
Code block · Button · Icon button
""")

D("icon-button", "Icon button", "Actions", "A round utility action with no label: reset, download, copy, close.", ["button", "copy-button"], """
## Styles
| Variant | Look |
|---|---|
| `default` | 40px circle, `--sf` → hover `--sf-secondary`, 1px `--st-secondary`, `shadow-sm`, 18px stroke icon in `--tx-tertiary` |
| `ghost` | No border or background; hover `--sf-secondary` |
| `dark` | `--slate` fill, white icon, cursor glow (counts as a primary) |

## Usage
### Use
- Utilities around a player or playground: reset, download, mute.
- Close buttons on sheets and dialogs.
### Not for
- The main action of a view → **Button**.
- Anything a user might not recognise from the icon alone → **Button** with a label.

## Rules
- **Must** have an `aria-label` and a tooltip on desktop.
- **Must** use a flat stroke icon (style 1), 18–20px.
- **Never** place more than 4 icon buttons in one row.
- **Should** stay 40px (44px on touch).

## Accessibility
- The hit area is at least 44×44px on mobile.
- The focus ring matches Button.
- Toggle buttons (mute) use `aria-pressed`.

## Edge cases
| Scenario | Fix |
|---|---|
| Icon meaning unclear | Switch to a labelled button |
| Destructive action | Confirm in a dialog; never one-tap delete |

## API
| Prop | Type | Default |
|---|---|---|
| `icon` | flat stroke icon | n/a |
| `label` | `string` (aria-label + tooltip) | required |
| `variant` | `default \\| ghost \\| dark` | `default` |
| `pressed` | `boolean` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sf` | #fcfcfc |
| `--sf-secondary` | #f5f5f5 |
| `--st-secondary` | #f0f0f0 |
| `--shadow-elev-sm` | 0 1px 3px #00000014 |

## Related
Button · Copy button
""")

D("segmented", "Segmented control", "Inputs", "Switches between views of the same content: metrics, code languages, voices.", ["button", "language-select", "code-block"], """
## Styles
```
track  : bg #f5f5f5 · radius full · padding 4px · gap 4px · no border
item   : padding 8px 16px · Matter 13–15px · radius full · colour #666 · weight 425
active : bg #fff · colour #1f1f1f · weight 525 · shadow 0 1px 3px rgba(0,0,0,.08)
hover  : inactive colour #3d3d3d
```

## Usage
### Use
- 2–5 mutually exclusive views: "olmOCR Overall · Word Accuracy · Character Accuracy", "Python · JavaScript · cURL".
### Not for
- More than 5 options or a long language list → **Language select**.
- Page-level navigation → nav or product tabs.
- Committing an action → **Button**.

## Rules
- **Must** have exactly one active item.
- **Must** keep labels on one line; the track scrolls horizontally on small screens.
- **Never** use icons only. Labels are short words.
- **Should** animate the active pill (200ms `--ease-brand`).

## Accessibility
- Use `role="tablist"` with `role="tab"` + `aria-selected`, or a radio group.
- Arrow keys move between items; Home and End jump to the ends.
- Active vs inactive differs by weight and background, not colour alone.

## Edge cases
| Scenario | Fix |
|---|---|
| Overflows at 375px | `overflow-x: auto`, hidden scrollbar, snap to items |
| Labels of very different lengths | Allow natural widths; don't force equal widths |
| Content loading after a switch | Keep the selection and show a skeleton in the panel |

## API
| Prop | Type | Default |
|---|---|---|
| `items` | `string[]` | n/a |
| `value` | `string` | first item |
| `onChange` | `(value) => void` | n/a |
| `size` | `sm (13px) \\| md (15px)` | `sm` |

## Tokens
| Token | Value |
|---|---|
| `--sf-secondary` | #f5f5f5 |
| `--shadow-seg-active` | 0 1px 3px rgba(0,0,0,.08) |
| `--tx-tertiary` | #666666 |
| `--tx` | #1f1f1f |

## Related
Language select · Code block · Button
""")

D("language-select", "Language select", "Inputs", "Picks an Indian language, showing the native script before the English name.", ["segmented", "audio-player"], """
## Styles
bg `#f5f5f5`, radius full, height 40px, padding 0 16px, Matter 425 16px, `#000`. Content: **native script name, then English name** ("हिन्दी Hindi"), then a 16px chevron-down in `--tx-tertiary`. Edge: `inset 0 -1px 0 1px rgba(0,0,0,.04)`. Hover: bg `#f0f0f0`.

## Usage
### Use
- Choosing the language for TTS, STT, translation or a demo.
- Inside the **Audio player** pill, at its right end.
### Not for
- 2–4 fixed options → **Segmented control**.

## Rules
- **Must** show the native script first: हिन्दी, தமிழ், বাংলা, తెలుగు, ಕನ್ನಡ, മലയാളം, ગુજરાતી, ਪੰਜਾਬੀ, ଓଡ଼ିଆ, मराठी.
- **Must** render Indic text in a font with coverage (Noto Sans family) at matching size.
- **Never** use flags for languages.
- **Should** order by the product's language list, with Hindi and English first.

## Accessibility
- Use a native `<select>` or a listbox with `aria-expanded` and type-to-search (Latin and native script).
- Each option has `lang` set (`lang="hi"`) so screen readers pronounce it correctly.

## Edge cases
| Scenario | Fix |
|---|---|
| Native name wider than the pill | Truncate the English name first, never the native one |
| Font missing a script | Load the Noto Sans subset for that script |

## API
| Prop | Type | Default |
|---|---|---|
| `languages` | `{code, native, english}[]` | n/a |
| `value` | language code | `hi-IN` |
| `onChange` | `(code) => void` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sf-secondary` | #f5f5f5 |
| `--shadow-select` | inset 0 -1px 0 1px rgba(0,0,0,.04) |

## Related
Audio player · Segmented control
""")

D("composer", "Composer", "Inputs", "The prompt box for agents and playgrounds: type, attach and choose sources.", ["button", "icon-button"], """
## Styles
White, radius 12px, 1px `--st`, `--shadow-card`. Placeholder `--tx-tertiary`. Typing caret is 2px `--sr-indigo-600`, blinking `steps(1)`. Bottom toolbar: a `+` icon button, then "Using" + source chips (Web, Google Drive) in 13px. Send is a 32px round slate button with a white arrow (cursor glow).

## Usage
### Use
- Agent products (Indus, Indus Cowork), playground demos, "Ask anything" entry points.
### Not for
- Single-line search → a search input.
- Forms with several fields → regular inputs.

## Rules
- **Must** auto-grow up to 6 lines, then scroll.
- **Must** send on Enter and add a newline on Shift+Enter.
- **Should** show suggestion chips above it (Research · Data analysis · Presentations).
- **Never** put brand colour on the box; colour lives in the surrounding aura.

## Accessibility
- `<textarea>` with a visible label or `aria-label`.
- The send button is disabled with `aria-disabled` when empty.
- Source chips are toggle buttons (`aria-pressed`).

## Edge cases
| Scenario | Fix |
|---|---|
| Pasted 10k characters | Scroll inside the box; show a character count past the limit |
| Indic IME composition | Don't send on Enter while `isComposing` |
| Mobile keyboard covers it | Stick to the bottom with `env(safe-area-inset-bottom)` |

## API
| Prop | Type | Default |
|---|---|---|
| `placeholder` | `string` | `Ask anything` |
| `sources` | `string[]` | n/a |
| `onSubmit` | `(text) => void` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--radius-xl` | 12px |
| `--shadow-card` | 0 0 40px #0000000f |
| `--sr-indigo-600` | #556adc |

## Related
Button · Icon button
""")

D("badge", "Badge", "Display", "States a trust, compliance or security claim: SOC 2, ISO 27001, DPDP.", ["tag", "feature-card"], """
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
| `hue` | `indigo \\| green \\| orange \\| pink \\| yellow \\| red` | `indigo` |
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
""")

D("tag", "Tag", "Display", "A small pill that labels a category or capability on a card.", ["badge", "integration-card"], """
## Styles
| Variant | Look |
|---|---|
| `category` | Pill, padding 4px 10px, Matter 525 12px, bg `{hue}-100`, text `{hue}-800` |
| `capability` | Pill, padding 4px 10px, Matter 425 12px, bg `--sf-secondary`, 1px `--st`, text `--tx-tertiary` |
| `status` | `category` in green (Live, New) or indigo (Beta) |

## Usage
### Use
- Bottom row of integration, template or blog cards: one category tag first, then capability tags.
### Not for
- Compliance claims → **Badge**.
- Filters the user can toggle → chips (segmented or toggle buttons).

## Rules
- **Must** put the category tag first, with at most one per card.
- **Never** add icons to tags.
- **Should** cap at 4 tags per card.

## Accessibility
- Tags are not interactive unless they link; if they link, they need a focus ring.
- `{hue}-800` on `{hue}-100` passes 4.5:1 at 12px.

## Edge cases
| Scenario | Fix |
|---|---|
| Tags overflow the card | `flex-wrap`, gap 6px; cut to 3 + "+2" |

## API
| Prop | Type | Default |
|---|---|---|
| `variant` | `category \\| capability \\| status` | `capability` |
| `hue` | indigo, orange, green, pink, yellow | `indigo` |

## Tokens
| Token | Value |
|---|---|
| `--sr-indigo-100` / `-800` | #e8effc / #3333cc |
| `--sf-secondary` | #f5f5f5 |
| `--st` | #e6e6e6 |

## Related
Badge · Integration card
""")

D("feature-card", "Feature card", "Display", "Presents one product or capability with a solid icon, a title and one line.", ["glow-card", "integration-card", "stat"], """
## Styles
White, 1px `--st`, radius 16px, padding 24px (20px mobile). 24–28px **solid** product-hue icon, then a title in Matter 525 20px (18px mobile), then a body line in Matter 425 15px `--tx-tertiary`. Hover: `--shadow-card-hover` + `translateY(-2px)`.

## Usage
### Use
- Product and API grids (Text to Speech · Speech to Text · Translation · Parse).
### Not for
- A softer, branded set of use cases → **Glow card**.
- Partners → **Integration card**.
- Numbers → **Stat**.

## Rules
- **Must** use the solid icon in the product's hue (see `DECISIONS.md` §6).
- **Must** have one title and at most 25 words of body.
- **Never** mix flat and depth icons in the same grid.
- **Should** lay out 1-up on mobile, 2-up at 768px and 3-up at 1024px and above.

## Accessibility
- If the whole card links, wrap it in one `<a>` with the title as the accessible name. Don't nest links.

## Edge cases
| Scenario | Fix |
|---|---|
| Uneven text lengths in a row | Cards stretch to equal height (grid) |
| No icon for the product | Use a gateway glyph at 32px, not a random icon |

## API
| Prop | Type | Default |
|---|---|---|
| `icon` | solid icon | n/a |
| `title` | `string` | n/a |
| `body` | `string` | n/a |
| `href` | `string` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--radius-2xl` | 16px |
| `--shadow-card-hover` | 0 8px 40px -4px #0000001f |

## Related
Glow card · Integration card · Stat
""")

D("integration-card", "Integration card", "Display", "Shows a partner or integration with a tinted logo well, a description and tags.", ["tag", "feature-card"], """
## Styles
Measured on sarvam.ai/integrations:
```
card  : #fff · 1px #f0f0f0 · radius 16px · padding 24px · flex column, space-between
        hover: shadow 0 8px 40px -4px rgb(0 0 0/.12), border #e6e6e6 · active scale(.99)
well  : h 144px (176px md+) · radius 16px · 1px #f0f0f0 · bg linear-gradient(to bottom right, {hue}-100, #fff)
title : Matter 525 18px / 1.3, 2-line clamp, 16px below the well
desc  : Matter 425 13px / 1.6, #3d3d3d, 3-line clamp
tags  : bottom row, gap 6px (category tag + capability tags)
```

## Usage
### Use
- Integration directories, SDK and framework listings, template galleries.
### Not for
- Sarvam's own products → **Feature card**.

## Rules
- **Must** tint the well with the category hue, matching its category tag.
- **Must** show partner logos in their original colours, centred, at about 40% of the well width.
- **Never** recolour or crop a partner logo.

## Accessibility
- The logo `alt` is the partner name; the title repeats it, so `alt=""` is acceptable if the title is adjacent.

## Edge cases
| Scenario | Fix |
|---|---|
| A wide wordmark logo | Cap the height at 44px and the width at 60% |
| Description too long | 3-line clamp; full text on the detail page |

## API
| Prop | Type | Default |
|---|---|---|
| `logo` | image | n/a |
| `title`, `description` | `string` | n/a |
| `category` | `{label, hue}` | n/a |
| `capabilities` | `string[]` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--st-secondary` | #f0f0f0 |
| `--sr-indigo-100` | #e8effc |
| `--shadow-card-hover` | 0 8px 40px -4px #0000001f |

## Related
Tag · Feature card
""")

D("glow-card", "Glow card", "Display", "A white card with a soft pastel glow rising from its bottom edge.", ["feature-card"], """
## Styles
A white card (radius 16px, 1px `--st-secondary`) with an inline soft-glow SVG behind its content: one hue per card, from `foundations/14-soft-glow-surfaces.md`. Content sits in the top half: a solid icon, a title (Matter 525 20px) and a body line.

## Usage
### Use
- Use-case sets, benefit grids and "why us" tiles that should feel soft and branded.
### Not for
- Dense product grids → **Feature card**.

## Rules
- **Must** use one hue per card and a different contour per neighbour (hill, valley, ramp, dome).
- **Must** keep the glow in the bottom 25–45% and text in the top half.
- **Never** use CSS linear or radial gradients for the glow.
- **Should** lower the glow (`lift -4…-8`) when the card is wider than it is tall.

## Accessibility
- The glow SVG is `aria-hidden`. Text stays on white, so contrast is unaffected.

## Edge cases
| Scenario | Fix |
|---|---|
| Several glows on one page | Give each a unique filter id |
| Text runs into the glow | Raise min-height or lower the glow |

## API
| Prop | Type | Default |
|---|---|---|
| `glow` | preset or `{color, contour}` | `lilac-hill` |
| `icon`, `title`, `body` | n/a | n/a |

## Tokens
| Token | Value |
|---|---|
| lilac / sage / honey / rose / peach | #BBC3F1 / #D7EAC1 / #FFE0AA / #E0A6BF / #FDE7DC |

## Related
Feature card
""")

D("stat", "Stat", "Display", "Shows a published metric as a large number with a label.", ["feature-card"], """
## Styles
Number in Season Mix 425, 40 → 48 → 56px, `--tx` or `--sr-indigo-900`, tracking −0.02em. Label in Matter 425 14px `--tx-tertiary`. In a row: 1px `--st` dividers between cells (vertical on desktop; a 2×2 grid with horizontal dividers on mobile).

## Variants
| Variant | Spec |
|---|---|
| `band` (product pages) | Full-bleed, about 350px, `--grad-stats-band`; numbers Season Mix 425 48px **white**; labels Matter 16px white |
| `row` | On `--sf`: numbers `--tx` / indigo-900, 1px dividers |

## Usage
### Use
- Published numbers from `FACTS.md` only: STT <250ms median latency · 100M+ mins transcribed · >99.5% uptime; Voice Agents <500ms · 350M+ conversations; platform 10B+ tokens · <100ms · 99.9% SLA.
### Not for
- Any number not in `FACTS.md`. Drop the stat instead. Never show a placeholder.

## Rules
- **Must** take every figure from `FACTS.md`.
- **Must** use 3–4 stats per row.
- **Never** animate count-ups longer than 800ms.

## Accessibility
- Read the number and label as one phrase, e.g. `aria-label="Under 500 milliseconds real-time latency"` for "<500ms".

## Edge cases
| Scenario | Fix |
|---|---|
| Unit symbols ("<", "+", "%") | Keep them in the same font size; don't superscript |

## API
| Prop | Type | Default |
|---|---|---|
| `value` | `string` | n/a |
| `label` | `string` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--fs-metric` | 40px → 48px (md) → 56px (xl) |

## Related
Feature card
""")

D("testimonial", "Testimonial", "Display", "Shows a customer quote with a logo, avatar, name and role.", ["feature-card"], """
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
""")

D("code-block", "Code block", "Display", "Shows a code snippet with language tabs and a copy button.", ["copy-button", "segmented"], """
## Styles
Background `#fafafa`, 1px `--st`, radius 16px. The header on `#f0f0f0` holds language tabs (Python · JavaScript · cURL) and a Copy button at the right. Code in Matter Mono 13px, line height 1.8. Tokens: keyword `#3333cc`, string `#496d21`, function `#212191`, constant `#a5460f`, comment `#666`.

## Rules
- **Must** show Indic strings in native script inside examples (`"नमस्ते"`).
- **Must** use real API shapes from docs.sarvam.ai; mask keys as `YOUR_API_KEY`.
- **Should** cap the height at 340px and scroll inside.

## Accessibility
- Use `<pre><code>`. Tabs follow the Segmented control pattern.

## Edge cases
| Scenario | Fix |
|---|---|
| Long lines on mobile | Scroll horizontally; never wrap code |

## API
| Prop | Type | Default |
|---|---|---|
| `snippets` | `{lang, code}[]` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sw-code-bg` | #fafafa |
| `--sw-code-token-keyword` | #33c |

## Related
Copy button · Segmented control
""")

D("eyebrow", "Eyebrow", "Display", "The tagline above a hero headline, framed by fading hairlines.", ["section-header"], """
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
""")

D("pillar-list", "Pillar list", "Display", "Lists brand pillars or benefits, each with a gradient star bullet.", ["feature-card"], """
## Styles
Each row is a 20–24px star bullet (`assets/motifs/star-bullet-*.svg`), gap 12px, a title in Matter 525 20px, and a description in Matter 425 16px `--tx-tertiary`, lh 1.65, aligned under the title. Rows are 24–32px apart.

## Rules
- **Must** use star bullets, not icons or checkmarks.
- **Should** have 3–4 items, alternating star hues or using one hue for all.

## Accessibility
- Use a `<ul>`; the stars are decorative.

## Edge cases
| Scenario | Fix |
|---|---|
| Very long description | Max 2 lines; move detail elsewhere |

## API
| Prop | Type | Default |
|---|---|---|
| `items` | `{title, body, hue}[]` | n/a |

## Tokens
| Token | Value |
|---|---|
| star gradient (green) | #E3F1D8 → #496D21 |

## Related
Feature card
""")

D("logo-marquee", "Logo marquee", "Display", "Social proof: a scrolling row of customer logos.", ["section-header"], """
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
""")

D("audio-player", "Audio player", "Media", "A compound control: a play button, a dot-matrix visualiser and a language select.", ["button", "language-select"], """
## Styles
```
track : inline-flex · #fff · 1px #e8e8e8 · radius full · padding 4px · gap 8–10px · shadow 0 4px 20px rgba(0,0,0,.05)
play  : primary button + solid play icon + cursor glow · 40px · 15px label
dots  : grid of 2.5px dots, gap 1.5px, 32×10 desktop / 14×10 mobile · idle #e5e5e5 · active #a3a3a3, lit bottom-up by level
lang  : language select (हिन्दी Hindi ⌄)
```

## Usage
### Use
- TTS and STT demos, voice samples, any listenable output.
### Not for
- Long-form audio with seeking → a full media player.

## Rules
- **Must** keep the visualiser grey; colour never comes from the dots.
- **Must** shorten "Play Audio" to "Play" below 768px.
- **Should** toggle the label to "Pause" while playing.

## Accessibility
- The play button has `aria-pressed`, or switches its label between Play and Pause.
- The visualiser is `aria-hidden`.
- Offer a transcript beside every sample.

## Edge cases
| Scenario | Fix |
|---|---|
| Audio fails to load | Disable play and show "Sample unavailable" |
| Language changed while playing | Stop, swap the source, keep the paused state |

## API
| Prop | Type | Default |
|---|---|---|
| `src` | per-language audio map | n/a |
| `language` | code | `hi-IN` |

## Tokens
| Token | Value |
|---|---|
| `--stroke-track` | #e8e8e8 |
| `--shadow-track` | 0 4px 20px 0 rgba(0,0,0,.05) |
| `--dot-idle` / `--dot-active` | #e5e5e5 / #a3a3a3 |

## Related
Button · Language select
""")

D("navbar", "Navbar", "Navigation", "The fixed top navigation, frosted on scroll.", ["footer", "button"], """
## Styles
| | <1024 | ≥1024 |
|---|---|---|
| Height | 64px | 68px |
| Left | Wordmark 16px tall | Wordmark 18px tall |
| Centre | n/a | Products · Developers · Resources · Company (Matter 425 15px, gap 32px) |
| Right | "Log In" secondary pill + hamburger | "Log In" primary + "Contact Us" secondary |
Transparent over the hero; on scroll it becomes `rgba(252,252,252,.8)` + `backdrop-filter: blur(12px)` + a bottom hairline.

## Rules
- **Must** align the wordmark with the content container edge.
- **Must** use only the wordmark, never the logomark next to it.
- **Should** open mega-menus as white 16px cards with `--shadow-elev-md`.

## Accessibility
- Use `<nav aria-label="Main">`. The hamburger has `aria-expanded`. The mobile sheet traps focus and Esc closes it.

## Edge cases
| Scenario | Fix |
|---|---|
| Secondary nav (use-case tabs) | A sticky 45/57px bar under the nav |

## API
| Prop | Type | Default |
|---|---|---|
| `links` | `{label, href, menu?}[]` | n/a |
| `cta` | buttons | n/a |

## Tokens
| Token | Value |
|---|---|
| `--nav-h` / `--nav-h-lg` | 64px / 68px |

## Related
Footer · Button
""")

D("footer", "Footer", "Navigation", "Brand column, link columns and the giant image-filled wordmark.", ["navbar", "cta-panel"], """
## Styles
Desktop: a brand column (wordmark 24px, "AI for all from India", ISO and SOC 2 badges in 56px `--sf-tertiary` squares, socials, address box) + 5 link columns. Headings in Matter Semi Mono 12px caps, links in Matter 14px `--tx-tertiary`. Below it, a full-width wordmark filled with photography, cropped by the bottom edge. Tablet: 3 columns. Mobile: 2 columns.

## Rules
- **Must** use the giant image-filled wordmark only here.
- **Should** follow the dark CTA panel.

## Accessibility
- Use `<footer>` with `<nav aria-label="Footer">`. The giant wordmark is decorative (`aria-hidden`).

## Edge cases
| Scenario | Fix |
|---|---|
| Very long column | Split it into two, or link to an index |

## API
| Prop | Type | Default |
|---|---|---|
| `columns` | `{title, links[]}[]` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--font-label` | Matter Semi Mono |

## Related
Navbar · CTA panel
""")

D("section-header", "Section header", "Layout", "A centred section title with an optional subtitle.", ["eyebrow"], """
## Styles
h2 in Season Mix 525, 28 → 36px, lh 1.2, tracking −0.02em. Optional subtitle in Matter 425 16 → 18px `--tx-tertiary`, max-width 640px, 12–16px below. Content follows 32px (mobile) / 48px (desktop) below. Split variant: left-aligned label + h2 + sub, with an outline CTA at the right.

## Rules
- **Must** be centred, except in split layouts.
- **Must** be sentence case, 2–7 words.
- **Never** put a section label above the title. The title stands alone (sarvam.ai product pages have no labels above h2s).
- **Should** split long titles over 2 balanced lines ("Flexible output / Same audio, multiple formats").

## Accessibility
- One `h1` per page. Section titles are `h2`, in order.

## Edge cases
| Scenario | Fix |
|---|---|
| Orphan word on the last line | `text-wrap: balance` |

## API
| Prop | Type | Default |
|---|---|---|
| `title`, `subtitle` | n/a | n/a |
| `align` | `center \\| split` | `center` |

## Tokens
| Token | Value |
|---|---|
| `--fs-h2` | 28px → 36px |
| `--section-inner` | 32px → 48px |

## Related
Eyebrow
""")

D("cta-panel", "CTA panel", "Layout", "The single dark moment on a page: a closing call to action before the footer.", ["button", "footer"], """
## Styles
Measured on sarvam.ai: `--grad-cta-panel` (`linear-gradient(180deg,#13121e 0%,#a5bbfc 116.55%)`: near-black navy at the top, periwinkle glowing from the bottom), **radius 24px** (16px mobile), padding 80px 40px (48px 24px mobile), centred. h2 Season Mix 425 36px white over 2 lines ("Start transcribing in minutes / Powered by Saaras V4"), a small glowing white dot, concentric 1px arcs at 8% white, and a **primary slate button** with cursor glow.

## Rules
- **Must** appear at most once per page, right before the footer.
- **Must** use the primary slate button (as on sarvam.ai), not a white button.
- **Never** put body paragraphs inside it.

## Accessibility
- White on the night gradient exceeds 12:1. The arcs are decorative.

## Edge cases
| Scenario | Fix |
|---|---|
| Headline longer than 2 lines on mobile | Shorten it; never drop the size below 28px |

## API
| Prop | Type | Default |
|---|---|---|
| `title`, `cta` | n/a | n/a |

## Tokens
| Token | Value |
|---|---|
| `--grad-cta-panel` | linear-gradient(180deg,#13121e 0%,#a5bbfc 116.55%) |
| `--radius-3xl` | 24px |

## Related
Button · Footer
""")


def main():
    import sys; sys.path.insert(0, str(pathlib.Path(__file__).parent))
    from component_specs import SPECS
    DOCS.extend(SPECS)
    OUT.mkdir(parents=True, exist_ok=True)
    for doc in DOCS:
        slug = doc.split("slug: ", 1)[1].split("\n", 1)[0]
        target = OUT / f"{slug}.md"
        if target.exists() and "--force" not in sys.argv and doc not in SPECS:
            continue  # hand-edited legacy page: keep it (pass --force to regenerate)
        target.write_text(doc, encoding="utf8")
    print(f"wrote {len(DOCS)} reference pages to {OUT}")


if __name__ == "__main__":
    main()
