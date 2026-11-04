# 12 · Anti-slop: what makes output look off-brand

AI tools drift toward generic "AI startup" aesthetics. Check every output against this list. If any item is true, fix it before shipping.

## Typography slop
- [ ] Headline set in Inter/Poppins/Montserrat bold, **not Season Mix 425–525**
- [ ] Headline in Title Case or ALL CAPS
- [ ] Bold weight (700+) Season Mix
- [ ] Gradient-filled text
- [ ] Body text in `#000` or a mid-grey below 4.5:1 contrast
- [ ] More than 2 font families (excluding mono/labels)
- [ ] Letter-spaced body copy, or wide tracking on headlines

## Content slop (most common failure)
- [ ] Any bracketed placeholder on the page: `[VERIFY…]`, `[metric]`, `[Customer logo N]`, `[Name]`, `[Role, Company]`, "TBD"
- [ ] Boxes or text standing in for customer logos. Use `assets/logos/customers/`
- [ ] Invented testimonials, names or roles (only the Tata Capital quote in FACTS.md is approved)
- [ ] Numbers not in FACTS.md
- [ ] "John Doe", "Jane Smith", "Acme Corp", "Your Company", "$1,234.56", "user@example.com", "00:00", "+1 (555)…" in demo or mock UI — use believable Indian-context data (`16-copywriting.md` §8)
- [ ] Demo data that changes between two places on the same page (name, amount, date)
- [ ] A meta-annotation about the work's status ("Concept design…", "Placeholder", "Draft") shown to the reader

## Label slop
- [ ] A section label ("CAPABILITIES", "PLAYGROUND", "USE CASES") above **every** h2. sarvam.ai product pages have none
- [ ] Section labels in Matter Semi Mono or bigger than 12px. They are **Geist 500, 12px, 2px tracking, `#666666`**
- [ ] Hero eyebrow pill + split layout + side card + stat line + footnote all in one hero (clutter)

## Colour slop
- [ ] Purple-pink "AI gradient", neon cyan, or glowing blue circuit aesthetic
- [ ] Indian tricolour gradient or stripes
- [ ] Flat saturated colour blocks as section backgrounds
- [ ] Dark mode as the default page theme (Sarvam is light-first)
- [ ] Rainbow of accent colours in one view (max 2 brand hues + neutrals)

## Layout slop
- [ ] Left-aligned section titles with a random "eyebrow + title + subtitle" stack on every section (Sarvam centres titles and uses eyebrows sparingly)
- [ ] Cramped sections (<80px apart on desktop)
- [ ] Bento grid of 9 identical cards with emoji icons
- [ ] Sharp-cornered buttons or cards with 4px radius
- [ ] Hard drop shadows (`0 4px 6px rgba(0,0,0,.3)`)
- [ ] Mobile layout = desktop scaled down (tiny text, 3 columns at 375px)
- [ ] Cards in a non-bento row with different widths or different heights

## Clutter slop (whole page, not just the hero)
The most common failure is not ugliness — it is **too much**. Every item below is a delete.
- [ ] A card wrapped around an entire section
- [ ] A card inside a card
- [ ] Two CTAs where one would do, or three where two would
- [ ] More than one badge, pill or label in a single block
- [ ] Chip soup: more than 6 chips in a cluster, or more than 2 tag rows on a card
- [ ] Floating sample cards, stickers or annotations around a headline
- [ ] "Scroll to explore", arrows pointing at things, corner flags, "new" dots
- [ ] A footnote, disclaimer or meta-line inside a content section
- [ ] Two sections making the same point
- [ ] A decorative label above a section that already has a clear title
- [ ] An element whose absence changes nothing

## Hero slop
- [ ] Floating "LIVE CAPTIONS / NOTES / DUBBED"-style cards orbiting the h1
- [ ] Language chips, logo wall, stats or a trust bar inside the first viewport
- [ ] Disclaimer / verification chips ("Concept design, not an official announcement", "Timing: [VERIFY…]")
- [ ] More than 4 elements: badge · h1 · sub · 1–2 CTAs — nothing else
- [ ] A sub-headline longer than 20 words or taller than 2 lines
- [ ] Split hero with a demo card beside the headline

## Motif slop
- [ ] Footer giant wordmark filled with a gradient. It's filled with photography / Indian painting
- [ ] Clip-art Indian symbols (Taj Mahal, peacock, diya, elephant, rangoli, Ashoka chakra)
- [ ] Mandalas as dense henna patterns
- [ ] Robot heads, brains, holograms, glowing neural nets
- [ ] Logomark and wordmark side by side
- [ ] Wordmark recoloured or given a gradient or shadow
- [ ] Emoji used as icons
- [ ] A partner logo, sub-brand or "in collaboration with" sitting in the nav beside Sarvam
- [ ] A partner recoloured into Sarvam indigo, or Sarvam recoloured to match a partner
- [ ] More than two marks in a co-brand lockup (use text instead)
- [ ] Forcing a Sarvam icon onto a concept it doesn't fit, instead of pulling the right Hugeicons icon

## Copy slop
- [ ] "Revolutionize", "unleash", "supercharge", "cutting-edge", "game-changer", "harness the power of"
- [ ] "Instant", "secure", "effortless", "seamless", "powerful", "world-class" used as claims instead of facts
- [ ] Invented urgency: "Act now", "Limited seats", "Only 3 left", "Don't miss out", "Hurry"
- [ ] Exclamation marks in headlines
- [ ] Invented statistics
- [ ] Abbreviated or wrong product names ("Sarvam VA", "Bulbul AI")
- [ ] "Sarvam AI" used repeatedly (use "Sarvam AI" on first mention, then "Sarvam")
- [ ] A hero sub-headline over 20 words, or an h1 over 7 words
- [ ] A card body over 20 words, or a card title over 4 words
- [ ] A headline that names the technology instead of the change

## Quick "does it feel Sarvam?" test
1. Squint: is it mostly light and calm, with one soft glow of blue/orange?
2. Is the headline a quiet, large Season Mix line, in sentence case?
3. Is there exactly one gateway-derived element, or a deliberate cluster of 2–3 glyphs?
4. Would it sit naturally next to sarvam.ai's homepage?
5. Cover the copy: is the first viewport quiet — badge, headline, one line, one or two buttons?
6. Count the boxes: is there a card around a section, or a card inside a card? Remove it.
7. Count the elements in the busiest section: can you delete one without losing meaning?

**Final polish:** after this checklist, run the taste pass in `references/taste.md` (plain copy, one idea per screen, equal edges, real UI in barely-there cards, the quiet hover layer).
