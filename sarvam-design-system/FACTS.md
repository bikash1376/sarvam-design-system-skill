# Facts library: published Sarvam facts only

**Use only what is on this page.** Every fact here was published on sarvam.ai (checked Nov 2026). If a claim you need isn't here, **rewrite the copy so it doesn't need a number**. Never ship placeholders: no `[VERIFY: …]`, `[metric]`, `[Customer logo 3]`, `[Name]`, "Lorem ipsum" or "TBD". Shipping a bracket is a build failure (see `checklists/qa.md`).

## Company
- Name: **Sarvam AI** on first mention, then **Sarvam**. Tagline: **AI for all from India**.
- Positioning: India's full-stack sovereign AI platform / "India's Sovereign AI Platform" (hero eyebrow on sarvam.ai).
- Legal entity: © 2026 Axonwise Private Limited. Address: 732, Chinmaya Mission Hospital Road, Indiranagar Stage 1, Bengaluru, Karnataka 560038.
- Compliance shown on sarvam.ai: ISO 27001, AICPA SOC 2 Type I, DPDP compliant.

## Platform-wide numbers (sarvam.ai home)
| Metric | Value |
|---|---|
| Tokens served | **10B+** |
| Median latency (platform) | **<100ms** |
| Uptime SLA | **99.9%** |

## Speech to Text: Saaras V4 (sarvam.ai/apis/speech-to-text)
| Fact | Value |
|---|---|
| Model | **Saaras V4**, the latest speech-to-text model |
| Languages | **22 Indian languages** + Indian English, with **automatic language detection** |
| Median latency | **<250ms** |
| Minutes transcribed | **100M+** |
| Uptime | **>99.5%** |
| Output modes (5) | Transcribe · Translate · Transliteration (translit) · Verbatim · Codemix |
| APIs | REST (files under 30s, synchronous) · Batch (files up to 2 hours, diarization + timestamps) · Streaming (WebSocket, real time; Realtime Streaming beta adds interim transcripts) |
| Diarization | Up to **20 speakers** per file (Batch API) |
| Formats | **10+**: MP3, WAV, AAC, OGG, Opus, FLAC, M4A, AMR, WMA, WebM (streaming: WAV / raw PCM, 16kHz) |
| Other features | Key term prompting (bias toward names, brands, terms) · telephony-optimised (8kHz, noise, multiple speakers) · code-mixing |
| Integrations | LiveKit / Pipecat: "deploy a voice agent in under 10 minutes" |
| Free offer | **"Get 100 credits free"** |
| Cross-sell line | "Turn Saaras into a voice agent that takes calls, as low as **₹3 a minute**." |
| Use cases listed | Voice agents · post-call analytics · subtitling & captioning · customer support · sales & lead qualification · edtech tutors · social & companion bots |
| Hero copy | H1 "Speech to Text, perfected for India" · sub "Trust every transcript, even with background noise, multiple accents, or mid-sentence language switches." · CTAs "Get Started for Free" / "Contact Us" |

Language list (native + English + code), for language grids:
हिन्दी Hindi hi-IN · বাংলা Bengali bn-IN · தமிழ் Tamil ta-IN · తెలుగు Telugu te-IN · मराठी Marathi mr-IN · ગુજરાતી Gujarati gu-IN · ಕನ್ನಡ Kannada kn-IN · മലയാളം Malayalam ml-IN · অসমীয়া Assamese as-IN · اردو Urdu ur-IN · संस्कृतम् Sanskrit sa-IN · नेपाली Nepali ne-IN · डोगरी Dogri doi-IN · बड़ो Bodo brx-IN · ਪੰਜਾਬੀ Punjabi pa-IN · ଓଡ଼ିଆ Odia or-IN · कोंकणी Konkani kok-IN · मैथिली Maithili mai-IN · سنڌي Sindhi sd-IN · कॉशुर Kashmiri ks-IN · মৈতৈলোন্ Manipuri mni-IN · ᱥᱟᱱᱛᱟᱲᱤ Santali sat-IN

## Text to Speech: Bulbul (sarvam.ai/apis/text-to-speech)
- Models: **Bulbul V4**, **Bulbul V4 Flash** (expressive, natural), Bulbul V3.
- Product tile copy: "Natural voices across **11 Indic languages**".

## Voice Agents (sarvam.ai/products/voice-agents)
| Fact | Value |
|---|---|
| Real-time latency | **<500ms** |
| Conversations | **350M+** |
| Hero | "Voice agents that sound human and deliver results" |
| Flow | Describe → Test → Get a number → Go live ("Build. Test. Go live.") |

## Other product tiles (home)
- Speech to Text: "High-accuracy ASR across 12 Indic languages" (older tile; on the STT page itself use **22**).
- Translation: "State-of-the-art translation across **23 languages**".
- Parse: "Turn PDFs and images into structured formats".
- Models: Sarvam 105B, Sarvam Translate, Sarvam Vision.

## Customers (real logos in `assets/logos/customers/`)
Show these in "India builds with Sarvam" logo bars. Use the files as-is: grayscale, brightness .8, opacity .5.
`aadhaar` · `axis-bank` · `cred` · `cred-resolve` · `decentro` · `idfc` · `india-mart` · `infosys` · `lic` · `mahindra-finance` · `nabard` · `sbi-life` · `skill-india` · `tata-capital` · `urban-company`

## Testimonial (published on sarvam.ai)
- **Tata Capital**, Shallu Kaushik, Chief Digital Officer. Quote (excerpt): "Our partnership with Sarvam has enabled us to scale highly personalized, product and segment-specific conversations across the customer lifecycle."
- No other named quotes are published. If a page needs a testimonial, use this one or **drop the section**. Never invent a quote, name or role.

## If a fact is missing
1. Look here first, then on the product's page on sarvam.ai.
2. Still missing? Write qualitative copy ("Handles noisy, real-world call audio"). Don't add a number.
3. Never show the gap to the reader. If the uncertainty matters, note it in your reply to the person who asked.

> **Marketing claims vs demo data.** Every *claim* on the page (a number, a customer, a quote, a certification) must come from this file. Sample data inside a mock UI, screenshot or transcript is different: it must be *believable* — Indian names, ₹ amounts, realistic times — and is covered in `16-copywriting.md` §8. Claims may never be invented; demo data may never be a bracket, "John Doe" or "$1,234.56".
