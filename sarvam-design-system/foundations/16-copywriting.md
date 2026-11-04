# 16 · Copywriting

> **Write the copy before you design the section.** A beautiful page with long, hedged, placeholder-filled copy reads as a student project. A plain page with sharp copy reads as Sarvam.
>
> Source: sarvam.ai (home, `/token-factory`, `/products/voice-agents`, `/apis/speech-to-text`, `/trust-center`) and Sarvam's LinkedIn posts. Read this with `13-voice-and-tone.md` (voice) and `FACTS.md` (the only source of real numbers).

---

## 1. The one rule

**Say what happens.** Name the change, the mechanism and the next action. Nothing else.

Sarvam's best lines are all mechanism, not mood:

| Real line | Why it works |
|---|---|
| "Pulls the numbers from your data tools and writes the readout with the reason behind the change." | Trigger → action → what you get |
| "Set a daily, weekly, or monthly schedule. The agent runs the task without someone starting it each time." | Says what happens, in order |
| "Built on sovereign compute. Powered by frontier-class models. Delivering population-scale impact." | Three concrete claims, no adjectives doing the work |
| "Not a handoff. A partnership." | Corrects the reader's assumption in six words |
| "Build. Test. Go live." | The actual sequence |

---

## 2. Write in this order

1. **h1 — the change.** What is different for the reader, in 2–7 words.
2. **Sub — the mechanism.** One sentence: how it happens.
3. **CTA — the next action.** What the reader does now, in 2–3 words.
4. **Proof — below the fold.** Numbers, logos, quotes, detail. Never in the hero.

If you cannot write the h1 in seven words, the page does not have a subject yet. Decide the subject, then write.

---

## 3. Word budgets (hard limits)

| Element | Budget | Example |
|---|---|---|
| Eyebrow / badge label | **2–5 words** | "India's Sovereign AI Platform" |
| h1 (hero) | **2–7 words**, 1–2 lines | "Learn in your language." |
| Hero sub-copy | **≤ 20 words**, 1–2 lines at desktop | "Live captions, dubbed lessons and translated notes, in 22 Indian languages." |
| CTA | **2–3 words** | "Start building" · "Talk to our team" |
| Section h2 | **3–8 words** | "Built to run anywhere your business runs" |
| Section intro | **≤ 30 words**, one idea | "Every agent action is logged and traceable." |
| Card title | **≤ 4 words**, max 2 lines | "Translated notes" |
| Card body | **≤ 20 words**, 1–2 sentences | "Class notes and key terms in your language, with the English term kept alongside." |
| Tag | **≤ 3 words** | "Text to speech" |
| Stat label | **≤ 4 words** | "Real-time latency" |
| FAQ answer | **≤ 60 words** | — |

**Over budget = cut, not shrink.** Drop the second clause. Drop the qualifier. Drop the list of features. If the line needs a comma splice to survive, it is two sections fighting for one slot.

---

## 4. The hero holds four things

```
[ badge or eyebrow ]      optional, 2–5 words
[ h1 ]                    2–7 words, 2 lines max
[ sub ]                   ≤ 20 words, 2 lines max
[ 1–2 CTAs ]              one primary, one secondary
```

That is the whole hero. **Nothing else in the first viewport.**

Never in the hero:

| Don't | Why |
|---|---|
| Floating "LIVE CAPTIONS", "NOTES", "DUBBED" cards around the headline | They are decorations that compete with the h1 and look like a template |
| Language-chip clouds or a 22-language row | It is a proof section, not a headline. Move it below the fold |
| Logo marquee, customer logos, trust bar | Same — proof belongs after the claim |
| Stat rows, "10B+ / <100ms / 99.9%" | Proof. Below the fold |
| Disclaimers and meta-annotations ("Concept design, not an official announcement", "Timing: [VERIFY…]") | Reads as unfinished and unprofessional. See §9 |
| A second badge, a scroll hint, a cookie-style pill, a "new" flag | Clutter |
| An image or demo card beside the headline (split hero) | Not a Sarvam pattern |

**Below the fold, not in the first 100vh:** logo walls, language rows, floating caption/notes samples, stat bands. On desktop they must start *after* the first viewport (≥ `100svh` from the top). On mobile they may follow the hero once the hero content ends.

The hero's job is one sentence and one button. Let it do that.

---

## 5. The four copy moves

### 5.1 Name the change, not the technology
| Weak | Better |
|---|---|
| "A concept for how Sarvam's Indic AI could carry lessons into the language each learner thinks in." | "Learn in your language." |
| "Leveraging state-of-the-art ASR models." | "Every word, captioned in your script." |
| "An AI-powered conversational platform." | "Voice agents that take the call." |

### 5.2 "What happens when" instead of adjectives
Replace every adjective with the thing that happens.

```
When [trigger], [system] [does this], so [person] gets [result].
```

| Adjective copy | What-happens copy |
|---|---|
| "Instant, secure, effortless onboarding." | "Upload a recording. Get a transcript with speakers labelled." |
| "Powerful analytics." | "Every call is transcribed, scored and searchable the same day." |
| "Seamless integration." | "Point your endpoint at Sarvam and change one model name." |
| "Effortless scheduling." | "Set a daily or weekly schedule. The agent runs it without anyone starting it." |

If you cannot write the "when", you do not know the product well enough to write the page.

### 5.3 One idea per sentence
Two ideas = two sentences. Three clauses joined by commas = rewrite.

### 5.4 Concrete nouns, real numbers, or no number
Every number in marketing copy comes from `FACTS.md`. If the fact is missing, write qualitative copy ("handles noisy call audio") and **do not invent a figure**.

---

## 6. Banned words → say this instead

| Banned | Use instead |
|---|---|
| Instant · instantly | "in minutes" (only if true) · "one request" · or delete |
| Secure · safe | Name the control: "ISO 27001", "SOC 2 Type I", "encrypted at rest", "data stays in India" |
| Effortless · seamless · frictionless | "one line of code" · "no setup" · "change one model name" |
| Powerful · robust · cutting-edge · next-gen · world-class · best-in-class | Delete. Add the fact that proves it |
| Revolutionary · game-changing · disrupt | Delete |
| Unlock · unleash · supercharge · harness the power of | "use" · "build" · "run" |
| Empower | "let" · "help" |
| Transform · elevate · reimagine | "change" · "move" · "replace" |
| Magic · AI-powered (as a claim) | Say what the model does |
| Future-proof · future-ready | Delete |
| Solution · platform (as filler) | Name the product |

**Invented urgency is banned.** No "Act now", "Limited seats", "Only 3 left", "Don't miss out", "Last chance", "Hurry". If there is a real date or a real cap, state it plainly: "Applications close 30 Nov."

---

## 7. No placeholders — ever

A bracket on the page is a failed build. This includes brackets that "look designed".

Never ship: `[VERIFY: …]`, `[TBD]`, `[metric]`, `[Customer logo]`, `[Name]`, `[Role, Company]`, `Lorem ipsum`, `John Doe`, `Jane Smith`, `Acme Corp`, `Your Company`, `user@example.com`, `$1,234.56`, `00:00`, `99.99%`, `+1 (555) 000-0000`.

Instead:
- **Marketing claims** → `FACTS.md`, or rewrite without the claim.
- **Demo / mock UI data** → believable sample data (§8).
- **Unknown detail** → leave it out. Do not annotate the gap.

---

## 8. Demo data: believable, not fake

Mock UI, screenshots, transcripts and cards still get read as real. Use Indian-context sample data at realistic scale, and never reuse the same name twice on one page.

| Field | Use | Don't use |
|---|---|---|
| Person | Priya Nair · Arjun Menon · Meera Iyer · Rohan Gupta · Kavya Reddy · Imran Sheikh · Ananya Das · Vikram Rao | John Doe · Jane Smith · User 1 |
| Company | "a mid-size NBFC" · "a logistics company" · "a state health helpline" · a real customer only if it is in `FACTS.md` | Acme Corp · Company X |
| Amount | ₹4,250 · ₹18,999 · ₹1,24,500 (Indian grouping) · ₹3.50 a minute | $1,234.56 · $99.00 |
| Phone | +91 98••• ••210 | +1 (555) 010-0000 |
| Time / date | 10:42 am · 12 Mar 2026 | 00:00 · 01/01/2020 |
| Language | Hindi · Tamil · Bengali · Marathi · Telugu · Kannada | "Language 1" |
| Email | priya.nair@example.in | user@example.com |
| Order / ID | #IN-4821 · TXN-90233 | #1234567890 |

Rules:
- Sample data is marked in a code comment, never on the page.
- Keep it short enough to fit the component (a 3-word name, not a 4-line one).
- Amounts, dates and names must agree across the page (same customer, same currency, same tense).

---

## 9. No meta-annotations in the UI

Do not put the design's own status on the page. These are not content:

- "Concept design, not an official announcement"
- "Timing: [VERIFY: launch timing]"
- "Coverage for this concept: [VERIFY: languages at launch]"
- "Illustrative transcript" (fine as a 10px label *inside* a demo frame — never as a hero chip)
- "Placeholder image", "Sample copy", "Draft"

If the work is a concept, say so in your reply to the person who asked, or once in the footer. Not as a pill under the headline.

---

## 10. No emoji

Never as icons, bullets, badges or decoration. Use **words and the Hugeicons set** (`08-iconography.md`). If an icon is missing, add the Hugeicons icon — do not substitute an emoji or a glyph from another family.

---

## 11. Section patterns

| Section | Shape |
|---|---|
| **Product hero** | h1 = the outcome · sub = the mechanism · 2 CTAs · nothing else |
| **Feature card** | Title = the noun (≤ 4 words) · body = what it does, one sentence · tags = the models/APIs |
| **Use case** | "For [role/industry]: [what the agent does] in [channel]." |
| **How it works** | 3–4 numbered steps, each ≤ 8 words, verb-first ("Describe" · "Test" · "Get a number" · "Go live") |
| **Stats** | Number from `FACTS.md` + ≤ 4-word label. No sentence, no adjective |
| **Testimonial** | The published Tata Capital quote only, or drop the section |
| **FAQ** | Question in the customer's words ("How much do voice agents cost?"), answer ≤ 60 words, no marketing throat-clearing |
| **CTA panel** | One line of outcome + one verb CTA. Never two sentences of hype |
| **Footer** | Tagline "AI for all from India" + links. No copy experiment |

---

## 12. Worked examples

### 12.1 Hero: the Unacademy × Sarvam concept (before → after)

**Before** — 37-word subhead, four floating cards, disclaimer chips, language cloud in the first viewport:

> h1: "Learn in your language. Powered by Sarvam."
> sub: "A concept for how Sarvam's Indic AI could carry Unacademy lessons into the language each learner thinks in, with captions, dubbing, translated notes and a study buddy that answers back."
> + LIVE CAPTIONS card · NOTES card · DUBBED card · "CONCEPT DESIGN, NOT AN OFFICIAL ANNOUNCEMENT" · "TIMING: [VERIFY: launch timing]" · 22 language chips · "Coverage for this concept: [VERIFY: languages at launch]"

**After** — four elements, 11-word subhead:

> badge: `unacademy × sarvam`
> h1: **Learn in your language.**
> sub: "Live captions, dubbed lessons and translated notes, in 22 Indian languages."
> CTAs: **Join early access** · **Switch a lesson's language**

Everything removed goes **below the fold**: the live-caption sample becomes a demo frame in the first content section; the language row becomes the proof bar after that. The disclaimer is deleted.

Why it works: the h1 is the promise, the sub names the three mechanisms and the number, the buttons are the two things a reader can actually do.

### 12.2 Feature card (before → after)

> Before: "Live captions — Every word the educator says, captioned in your script as they say it, even when they switch between Hindi and English mid-sentence. It suits students who commute or study in noisy places." (33 words)
>
> After: **Live captions** — "Every word captioned in your script, even when the speaker switches between Hindi and English." (16 words)

The benefit moves to the section intro; the card states the mechanism.

### 12.3 CTA panel (before → after)

> Before: "Ready to unlock the future of AI-powered education? Don't miss out — get started today and transform the way India learns!"
>
> After: **"Start building with Sarvam"** · CTA: **Sign up**

---

## 13. Copy QA (run last)

- [ ] h1 is 2–7 words, sentence case, and states a change (not a technology)
- [ ] Hero has ≤ 4 elements and **no** floating cards, chips, disclaimers or stats
- [ ] Hero sub is ≤ 20 words and names the mechanism
- [ ] No banned word from §6; no invented urgency
- [ ] `grep -E '\[(VERIFY|TBD|metric|Name|Role|Customer)|Lorem|John Doe|Acme|1234'` returns nothing
- [ ] Every marketing number is in `FACTS.md`
- [ ] Demo data is believable, Indian-context, and consistent across the page
- [ ] No emoji anywhere
- [ ] No meta-annotation about the design's status
- [ ] Every section has a job; nothing repeats the section above it
- [ ] Read the page aloud: if a sentence needs a breath in the middle, cut it
