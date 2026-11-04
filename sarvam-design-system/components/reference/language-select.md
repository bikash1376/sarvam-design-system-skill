---
title: "Language select"
slug: language-select
group: Inputs
summary: "Picks an Indian language, showing the native script before the English name."
related: [segmented, audio-player]
---

# Language select

Picks an Indian language, showing the native script before the English name.

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
