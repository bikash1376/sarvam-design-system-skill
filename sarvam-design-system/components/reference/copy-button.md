---
title: "Copy button"
slug: copy-button
group: Actions
summary: "Copies a code snippet or value to the clipboard and confirms it."
related: [button, code-block, icon-button]
---

# Copy button

Copies a code snippet or value to the clipboard and confirms it.

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
