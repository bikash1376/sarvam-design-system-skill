---
title: "Code block"
slug: code-block
group: Display
summary: "Shows a code snippet with language tabs and a copy button."
related: [copy-button, segmented]
---

# Code block

Shows a code snippet with language tabs and a copy button.

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
