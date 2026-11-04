"use client";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Copy01Icon, Search01Icon, Calendar03Icon, ArrowRight01Icon, Mic01Icon, Attachment01Icon, SentIcon, Tick02Icon,
  Cancel01Icon, Alert02Icon, InformationCircleIcon, File01Icon, MoreHorizontalIcon, PlayIcon, PauseIcon, Loading03Icon,
  CheckmarkCircle02Icon, CancelCircleIcon, ArrowDown01Icon, Settings02Icon, Delete02Icon, PencilEdit02Icon, Share08Icon,
  Download04Icon, AiBrain01Icon, Wrench01Icon, VolumeHighIcon, RefreshIcon, Key01Icon, Home01Icon,
} from "@hugeicons/core-free-icons";
import { Toaster, toast } from "sonner";
import { motion, animate, useInView, useMotionValue, useTransform, AnimatePresence } from "motion/react";
import { useRef } from "react";
import { TextMorph } from "torph/react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { SButton, sbtn } from "@/components/sarvam/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from "@/components/ui/command";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Skeleton } from "@/components/ui/skeleton";
import { Kbd } from "@/components/ui/kbd";

const I = ({ icon, size = 16, className }: { icon: typeof Copy01Icon; size?: number; className?: string }) => (
  <HugeiconsIcon icon={icon} size={size} strokeWidth={1.8} className={className} />
);
const EASE_BRAND = [0.2, 0, 0, 1] as const;
/** Height-auto disclosure: opens like a dropdown, closes the same way. */
function Expand({ open, children, className }: { open: boolean; children: React.ReactNode; className?: string }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="expand"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ height: { duration: 0.3, ease: EASE_BRAND }, opacity: { duration: 0.2 } }}
          className={cn("overflow-hidden", className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
/** Chevron that rotates with its disclosure. */
const Chevron = ({ open, size = 14 }: { open: boolean; size?: number }) => (
  <motion.span className="grid place-items-center" animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25, ease: EASE_BRAND }}><I icon={ArrowDown01Icon} size={size} /></motion.span>
);
/** Icon cross-fade + scale when an icon swaps (copy → check). */
function SwapIcon({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span key={k} className="grid place-items-center" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} transition={{ duration: 0.15 }}>{children}</motion.span>
    </AnimatePresence>
  );
}
const Row = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("flex flex-wrap items-center gap-3", className)}>{children}</div>
);
const Cap = ({ children }: { children: React.ReactNode }) => <p className="mb-2 text-[12px] text-[var(--tx-tertiary)]">{children}</p>;
const field = "h-11 w-full rounded-xl border border-[var(--st)] bg-white px-4 text-[15px] outline-none placeholder:text-[var(--tx-tertiary)] hover:border-[var(--sr-grey-400)] focus-visible:border-[var(--sr-indigo-400)] focus-visible:shadow-[0_0_0_3px_rgba(165,187,252,.35)]";
const pop = "sarvam rounded-2xl border border-[var(--st)] bg-white shadow-[var(--shadow-elev-md)]";

/* ───────── Actions ───────── */
function ButtonDemo() {
  return (
    <div className="space-y-6">
      <div><Cap>Variants</Cap><Row><SButton>Get API key</SButton><SButton variant="secondary">Docs</SButton><SButton variant="outline">Explore models <I icon={ArrowRight01Icon} /></SButton></Row></div>
      <div><Cap>Hero pair</Cap><Row><SButton variant="hero-dark" size="lg">Start building</SButton><SButton variant="hero-light" size="lg">Talk to us</SButton></Row></div>
      <div className="rounded-2xl p-6" style={{ background: "var(--grad-cta-panel)" }}><Cap><span className="text-white/70">On dark</span></Cap><SButton variant="on-dark">Get 100 credits free</SButton></div>
      <div><Cap>Sizes and states</Cap><Row><SButton size="sm">Small</SButton><SButton>Medium</SButton><SButton size="lg">Large</SButton><SButton disabled>Disabled</SButton></Row></div>
    </div>
  );
}
function ButtonGroupDemo() {
  return (
    <div className="space-y-6">
      <Row><SButton variant="outline">Contact us</SButton><SButton>Get started</SButton></Row>
      <div role="group" aria-label="File actions" className="inline-flex overflow-hidden rounded-full shadow-[inset_0_0_0_1px_var(--st)]">
        {[[Copy01Icon, "Copy"], [Download04Icon, "Download"], [Share08Icon, "Share"]].map(([ic, l], i) => (
          <button key={l as string} className={cn("flex h-10 items-center gap-2 px-4 text-[14px] hover:bg-[var(--sf)]", i && "border-l border-[var(--st-secondary)]")}><I icon={ic as typeof Copy01Icon} />{l as string}</button>
        ))}
      </div>
    </div>
  );
}
function CopyDemo() {
  const [done, setDone] = useState(false);
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[var(--st)] bg-[#fafafa] px-4 py-3">
      <code className="s-mono text-[13px]">pip install sarvamai</code>
      <button onClick={() => { navigator.clipboard?.writeText("pip install sarvamai"); setDone(true); setTimeout(() => setDone(false), 1500); }}
        className="flex h-8 items-center gap-1.5 rounded-full px-3 text-[13px] hover:bg-[var(--sf-secondary)]" aria-label="Copy command">
        <SwapIcon k={done ? "ok" : "copy"}><I icon={done ? Tick02Icon : Copy01Icon} size={14} /></SwapIcon><TextMorph duration={250}>{done ? "Copied" : "Copy"}</TextMorph>
      </button>
    </div>
  );
}

/* ───────── Inputs ───────── */
function FieldWrap({ label, help, error, children, optional }: { label: string; help?: string; error?: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label className="block max-w-sm">
      <span className="mb-2 block text-[14px] [font-weight:var(--fw-medium)]">{label}{optional && <span className="ml-1 text-[var(--tx-tertiary)] [font-weight:var(--fw-regular)]">(optional)</span>}</span>
      {children}
      {(error || help) && <span className={cn("mt-1.5 block text-[13px]", error ? "text-[var(--sr-red-500)]" : "text-[var(--tx-tertiary)]")}>{error ?? help}</span>}
    </label>
  );
}
function InputDemo() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FieldWrap label="Work email"><input className={field} placeholder="you@company.in" type="email" autoComplete="email" /></FieldWrap>
      <FieldWrap label="Search models"><div className="relative"><I icon={Search01Icon} className="absolute top-3.5 left-3.5 text-[var(--tx-tertiary)]" /><input className={cn(field, "pl-10")} placeholder="Bulbul, Saaras…" type="search" /></div></FieldWrap>
      <FieldWrap label="API key" error="This key was revoked. Create a new one."><input className={cn(field, "border-[var(--sr-red-400)]")} defaultValue="sarvam_demo_9f2a…" aria-invalid /></FieldWrap>
      <FieldWrap label="Organisation"><input className={cn(field, "cursor-not-allowed opacity-40")} disabled placeholder="Disabled" /></FieldWrap>
    </div>
  );
}
function TextareaDemo() {
  const [v, setV] = useState("");
  return (
    <FieldWrap label="Message" help={`${v.length}/500`}>
      <textarea className={cn(field, "h-auto min-h-24 py-3 leading-[1.55]")} rows={4} maxLength={500} value={v} onChange={(e) => setV(e.target.value)} placeholder="Tell us what you're building" />
    </FieldWrap>
  );
}
function FieldDemo() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FieldWrap label="Company" help="As it appears on invoices."><input className={field} defaultValue="Acme Fintech" /></FieldWrap>
      <FieldWrap label="Phone" optional><input className={field} placeholder="+91" /></FieldWrap>
    </div>
  );
}
function DatePickerDemo() {
  const [d, setD] = useState<Date | undefined>(new Date(2026, 10, 4));
  return (
    <FieldWrap label="Demo date">
      <Popover>
        <PopoverTrigger className={cn(field, "flex items-center justify-between text-left")}>{d ? format(d, "d MMM yyyy") : "Pick a date"}<I icon={Calendar03Icon} className="text-[var(--tx-tertiary)]" /></PopoverTrigger>
        <PopoverContent className={cn(pop, "w-auto p-3")}><Calendar mode="single" selected={d} onSelect={setD} weekStartsOn={1} /></PopoverContent>
      </Popover>
    </FieldWrap>
  );
}
const LANGS = [["hi", "हिन्दी · Hindi"], ["bn", "বাংলা · Bengali"], ["ta", "தமிழ் · Tamil"], ["te", "తెలుగు · Telugu"], ["mr", "मराठी · Marathi"], ["gu", "ગુજરાતી · Gujarati"], ["kn", "ಕನ್ನಡ · Kannada"], ["ml", "മലയാളം · Malayalam"], ["pa", "ਪੰਜਾਬੀ · Punjabi"], ["od", "ଓଡ଼ିଆ · Odia"], ["en", "English"]];
function ComboboxDemo() {
  const [v, setV] = useState("hi");
  return (
    <div className="max-w-sm">
      <Cap>Language · type to filter</Cap>
      <Command className="rounded-2xl border border-[var(--st)]">
        <CommandInput placeholder="Search 11 languages…" />
        <CommandList className="max-h-52">
          <CommandEmpty>No language matches.</CommandEmpty>
          <CommandGroup>{LANGS.map(([k, l]) => <CommandItem key={k} onSelect={() => setV(k)} className="rounded-lg">{l}{v === k && <I icon={Tick02Icon} className="ml-auto" />}</CommandItem>)}</CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

/* ───────── Selection ───────── */
function CheckboxDemo() {
  return (
    <fieldset className="space-y-3"><legend className="mb-2 text-[14px] [font-weight:var(--fw-medium)]">Languages to support</legend>
      {["Hindi", "Tamil", "Bengali"].map((l, i) => <label key={l} className="flex items-center gap-2.5 text-[15px]"><Checkbox defaultChecked={i < 2} />{l}</label>)}
      <label className="flex items-center gap-2.5 text-[15px] opacity-40"><Checkbox disabled />Odia (coming soon)</label>
    </fieldset>
  );
}
function RadioDemo() {
  const plans = [["starter", "Starter", "₹0 · 100 free credits to try every API"], ["pro", "Pro", "Pay as you go, higher rate limits"], ["ent", "Enterprise", "Private deployment and SLAs"]];
  const [v, setV] = useState("pro");
  return (
    <div className="space-y-2" role="group" aria-labelledby="plan-q">
      <p id="plan-q" className="mb-3 text-[14px] [font-weight:var(--fw-medium)]">Choose a plan</p>
      <RadioGroup value={v} onValueChange={(x) => setV(String(x))} className="gap-2">
        {plans.map(([k, l, d]) => (
          <label key={k} className={cn("flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors", v === k ? "border-[var(--slate)]" : "border-[var(--st)] hover:bg-[var(--sf)]")}>
            <RadioGroupItem value={k} className="mt-0.5" />
            <span><span className="block text-[15px] [font-weight:var(--fw-medium)]">{l}</span><span className="block text-[13px] text-[var(--tx-tertiary)]">{d}</span></span>
          </label>
        ))}
      </RadioGroup>
    </div>
  );
}
function SwitchDemo() {
  return (
    <div className="max-w-sm divide-y divide-[var(--st-secondary)]">
      {[["Autoplay audio", true], ["Email alerts", false], ["Dark code theme", false]].map(([l, on]) => (
        <label key={l as string} className="flex items-center justify-between py-3 text-[15px]">{l as string}<Switch defaultChecked={on as boolean} /></label>
      ))}
    </div>
  );
}
function SliderDemo() {
  const [pace, setPace] = useState(1);
  const [pitch, setPitch] = useState(0);
  return (
    <div className="max-w-sm space-y-6">
      {[["Pace", pace, setPace, 0.5, 2, 0.1, `${pace.toFixed(1)}×`], ["Pitch", pitch, setPitch, -0.75, 0.75, 0.05, pitch.toFixed(2)]].map(([l, v, set, min, max, step, txt]) => (
        <div key={l as string}>
          <div className="mb-3 flex justify-between text-[14px]"><span>{l as string}</span><span className="s-mono text-[13px] text-[var(--tx-tertiary)]">{txt as string}</span></div>
          <Slider value={[v as number]} min={min as number} max={max as number} step={step as number}
            onValueChange={(x) => (set as (n: number) => void)(Array.isArray(x) ? x[0] : (x as number))} />
        </div>
      ))}
    </div>
  );
}
function SelectDemo() {
  return (
    <div className="max-w-xs">
      <Cap>Output language</Cap>
      <Select defaultValue="hi" items={LANGS.map(([value, label]) => ({ value, label }))}>
        <SelectTrigger className="h-11 w-full rounded-full bg-[var(--sf-secondary)] px-4 shadow-[var(--shadow-select)] border-0"><SelectValue /></SelectTrigger>
        <SelectContent className={pop}>{LANGS.map(([k, l]) => <SelectItem key={k} value={k}>{l}</SelectItem>)}</SelectContent>
      </Select>
    </div>
  );
}
function Segmented({ items, value, onChange }: { items: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div role="tablist" className="inline-flex rounded-full bg-[var(--sf-secondary)] p-1">
      {items.map((i) => (
        <button key={i} role="tab" aria-selected={value === i} onClick={() => onChange(i)}
          className={cn("relative rounded-full px-4 py-1.5 text-[13px] transition-colors", value === i ? "text-[var(--tx)]" : "text-[var(--tx-tertiary)] hover:text-[var(--tx)]")}>
          {value === i && <motion.span layoutId={`seg-${items.join("-")}`} className="absolute inset-0 rounded-full bg-white shadow-[var(--shadow-seg-active)]" transition={{ type: "spring", bounce: 0.15, duration: 0.4 }} />}
          <span className="relative">{i}</span>
        </button>
      ))}
    </div>
  );
}
function SegmentedDemo() {
  const [v, setV] = useState("Python");
  return <div className="space-y-4"><Segmented items={["Python", "JavaScript", "cURL"]} value={v} onChange={setV} /><p className="text-[13px] text-[var(--tx-tertiary)]">Showing the {v} example.</p></div>;
}

/* ───────── Display ───────── */
function BadgeDemo() {
  return (
    <Row>
      <span className="inline-flex h-7 items-center gap-2 rounded-full bg-white px-3 text-[13px] shadow-[var(--shadow-glow-indigo)]"><span className="size-1.5 rounded-full bg-[var(--sr-indigo-500)]" />New · Sarvam 105B</span>
      {[["Speech", "--sr-indigo"], ["Text", "--sr-orange"], ["Vision", "--sr-green"], ["Voice", "--sr-pink"]].map(([l, h]) => (
        <span key={l} className="rounded-full px-2.5 py-0.5 text-[12px] [font-weight:var(--fw-medium)]" style={{ background: `var(${h}-100)`, color: `var(${h}-${h.includes("green") ? "700" : "800"})` }}>{l}</span>
      ))}
    </Row>
  );
}
function ChipDemo() {
  const [sel, setSel] = useState(["Hindi"]);
  return (
    <Row>
      {["Hindi", "Tamil", "Bengali", "Marathi", "Telugu"].map((c) => {
        const on = sel.includes(c);
        return <motion.button layout key={c} onClick={() => setSel((s) => on ? s.filter((x) => x !== c) : [...s, c])} aria-pressed={on} whileTap={{ scale: 0.95 }}
          transition={{ layout: { duration: 0.25, ease: EASE_BRAND } }}
          className={cn("flex h-8 items-center gap-1.5 rounded-full px-3 text-[13px] transition-colors", on ? "bg-[var(--slate)] text-white" : "bg-[var(--sf-secondary)] hover:bg-[var(--sf-tertiary)]")}>
          <motion.span layout="position">{c}</motion.span>
          <AnimatePresence initial={false}>{on && <motion.span initial={{ opacity: 0, scale: 0.4, width: 0 }} animate={{ opacity: 1, scale: 1, width: 12 }} exit={{ opacity: 0, scale: 0.4, width: 0 }} className="grid place-items-center"><I icon={Cancel01Icon} size={12} /></motion.span>}</AnimatePresence>
        </motion.button>;
      })}
    </Row>
  );
}
const TONE: Record<string, string> = { live: "--sr-green-600", working: "--sr-indigo-500", warn: "--sr-yellow-600", failed: "--sr-red-500", idle: "--sr-grey-500" };
function StatusDot({ tone, label }: { tone: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[13px]">
      <span className="relative size-2" aria-hidden>
        <span className="absolute inset-0 rounded-full" style={{ background: `var(${TONE[tone]})` }} />
        {tone === "working" && <motion.span className="absolute inset-0 rounded-full" style={{ background: `var(${TONE[tone]})` }} animate={{ scale: [1, 2.2], opacity: [0.6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }} />}
      </span>
      {label}
    </span>
  );
}
function StatusDemo() {
  return <Row className="gap-6"><StatusDot tone="live" label="All systems normal" /><StatusDot tone="working" label="Transcribing" /><StatusDot tone="warn" label="Degraded" /><StatusDot tone="failed" label="Failed" /><StatusDot tone="idle" label="Idle" /></Row>;
}
function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const v = useMotionValue(0);
  const rounded = useTransform(v, (x) => Math.round(x));
  useEffect(() => {
    if (!inView) return;
    const c = animate(v, to, { duration: 1.2, ease: [0.25, 1, 0.5, 1] });
    return () => c.stop();
  }, [inView, to, v]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}
function StatDemo() {
  return (
    <div className="grid gap-6 rounded-3xl p-8 text-white sm:grid-cols-3" style={{ background: "var(--grad-stats-band)" }}>
      {([[22, "", "Indian languages"], [105, "B", "parameters in Sarvam 105B"], [11, "", "Bulbul voices"]] as const).map(([n, suf, l]) => (
        <div key={l} className="text-center"><p className="s-display text-[48px]"><CountUp to={n} />{suf}</p><p className="text-[13px] text-white/80">{l}</p></div>
      ))}
    </div>
  );
}
function AvatarDemo() {
  return (
    <Row className="gap-4">
      {[24, 32, 40, 56].map((s) => <Avatar key={s} style={{ width: s, height: s }}><AvatarFallback className="bg-[var(--sr-indigo-100)] text-[var(--sr-indigo-900)] text-[12px]">AK</AvatarFallback></Avatar>)}
      <div className="flex -space-x-2">{["PR", "VS", "MK", "AN"].map((n) => <Avatar key={n} className="size-8 ring-2 ring-white"><AvatarImage src="" alt="" /><AvatarFallback className="bg-[var(--sr-indigo-100)] text-[11px] text-[var(--sr-indigo-900)]">{n}</AvatarFallback></Avatar>)}<span className="grid size-8 place-items-center rounded-full bg-[var(--sf-secondary)] text-[11px] ring-2 ring-white">+12</span></div>
    </Row>
  );
}
function KbdDemo() {
  return <Row className="text-[14px]">Search docs <span className="flex gap-1"><Kbd>⌘</Kbd><Kbd>K</Kbd></span><span className="ml-4">Close</span><Kbd>Esc</Kbd></Row>;
}
function RelTimeDemo() {
  const [now, setNow] = useState<number | null>(null); // client-only: avoids SSR/CSR time mismatch
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 30000); return () => clearInterval(t); }, []);
  if (now === null) return <ul className="h-[76px]" aria-busy />;
  const rtf = new Intl.RelativeTimeFormat("en-IN", { numeric: "auto" });
  const items: [string, number][] = [["Key created", -20], ["Batch finished", -60 * 14], ["Deployed", -60 * 60 * 26]];
  return (
    <ul className="space-y-2 text-[14px]">
      {items.map(([l, s]) => {
        const d = new Date(now + s * 1000);
        const txt = Math.abs(s) < 45 ? "just now" : Math.abs(s) < 3600 ? rtf.format(Math.round(s / 60), "minute") : Math.abs(s) < 86400 ? rtf.format(Math.round(s / 3600), "hour") : rtf.format(Math.round(s / 86400), "day");
        return <li key={l} className="flex justify-between max-w-sm"><span>{l}</span><time dateTime={d.toISOString()} title={d.toLocaleString("en-IN")} className="text-[13px] text-[var(--tx-tertiary)]">{txt}</time></li>;
      })}
    </ul>
  );
}
function TruncateDemo() {
  const key = "sarvam_demo_7c3e9a12b4d5f6a7b8c9d0e1f2a9f2";
  return (
    <div className="max-w-xs space-y-4">
      <p className="truncate text-[14px]" title="transcripts-customer-support-hindi-batch-2026-11-04.json">transcripts-customer-support-hindi-batch-2026-11-04.json</p>
      <p className="s-mono text-[13px]" title={key}>{key.slice(0, 8)}…{key.slice(-4)}</p>
      <p className="line-clamp-2 text-[14px] text-[var(--tx-tertiary)]">Saaras V3 transcribes and translates speech in 22 Indian languages, handles code-mixed audio and returns timestamps for every word.</p>
    </div>
  );
}
function ItemRow({ icon, title, desc, trailing }: { icon: typeof Copy01Icon; title: string; desc: string; trailing?: React.ReactNode }) {
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className="group flex min-h-14 items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-[var(--sf-secondary)]">
      <span className="grid size-8 place-items-center rounded-lg bg-[var(--sf-secondary)]"><I icon={icon} /></span>
      <span className="min-w-0 flex-1"><span className="block text-[15px] [font-weight:var(--fw-medium)]">{title}</span><span className="block truncate text-[13px] text-[var(--tx-tertiary)]">{desc}</span></span>
      {trailing ?? <span className="text-[var(--tx-tertiary)] transition-transform duration-200 group-hover:translate-x-0.5"><I icon={ArrowRight01Icon} /></span>}
    </a>
  );
}
function ItemDemo() {
  return (
    <div className="max-w-md">
      <ItemRow icon={VolumeHighIcon} title="Bulbul V3" desc="Text to speech · 11 languages" />
      <ItemRow icon={Mic01Icon} title="Saaras V3" desc="Speech to text and translation" />
      <ItemRow icon={Key01Icon} title="Production key" desc="Created 2 days ago" trailing={<StatusDot tone="live" label="Active" />} />
    </div>
  );
}
function CardDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[["Speech to text", "Transcribe calls and meetings in 22 languages.", "/skill/icons-depth/stt.svg"], ["Text to speech", "Natural voices for every Indian language.", "/skill/icons-depth/tts.svg"]].map(([t, b, ic]) => (
        <motion.div key={t} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.25, ease: EASE_BRAND }} className="rounded-2xl bg-white p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ic} alt="" className="size-10" />
          <p className="mt-6 text-[20px] [font-weight:var(--fw-medium)]">{t}</p>
          <p className="mt-2 text-[14px] text-[var(--tx-tertiary)]">{b}</p>
        </motion.div>
      ))}
    </div>
  );
}
/** White four-point star: turns 180° slowly, eases to a stop, rests, repeats (static under reduced motion). */
function CtaStar() {
  return (
    <div className="relative mx-auto my-6 grid size-16 place-items-center" aria-hidden>
      <span className="absolute inset-0 rounded-full bg-white/25 blur-xl" />
      <motion.svg
        viewBox="0 0 64 64" className="relative size-14 drop-shadow-[0_0_12px_rgba(255,255,255,.55)]"
        animate={{ rotate: [0, 180] }}
        transition={{ duration: 2.4, ease: [0.25, 1, 0.5, 1], repeat: Infinity, repeatDelay: 3 }}
      >
        <path fill="#fff" d="M32 2c2.2 12.5 7.6 22.6 17.6 26.4 3.6 1.4 8 2.4 12.4 3.6-4.4 1.2-8.8 2.2-12.4 3.6C39.6 39.4 34.2 49.5 32 62c-2.2-12.5-7.6-22.6-17.6-26.4C10.8 34.2 6.4 33.2 2 32c4.4-1.2 8.8-2.2 12.4-3.6C24.4 24.6 29.8 14.5 32 2Z" />
      </motion.svg>
    </div>
  );
}
function PanelDemo() {
  return (
    <div className="relative overflow-hidden rounded-3xl px-6 pt-16 pb-14 text-center" style={{ background: "var(--grad-cta-panel)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/skill/mandala/sarvam-mandala-outline-white.png" alt="" aria-hidden className="pointer-events-none absolute left-1/2 top-[48%] w-[140%] max-w-none -translate-x-1/2 opacity-[.12]" />
      <h3 className="s-display relative mx-auto max-w-xl text-[36px] leading-[1.2] text-white">Start transcribing in minutes<br />Powered by Saaras V3</h3>
      <CtaStar />
      <SButton variant="on-dark" className="relative">Get API key</SButton>
    </div>
  );
}
function DataListDemo() {
  return (
    <dl className="max-w-md divide-y divide-[var(--st-secondary)] text-[14px]">
      {[["Model", "Saaras V3"], ["Languages", "22 + English"], ["Input", "Audio up to 30s (sync), 1h (batch)"], ["Key", "sarvam_demo_…a9f2"]].map(([k, v]) => (
        <div key={k} className="grid grid-cols-[140px_1fr] py-3"><dt className="text-[var(--tx-tertiary)]">{k}</dt><dd className={k === "Key" ? "s-mono text-[13px]" : ""}>{v}</dd></div>
      ))}
    </dl>
  );
}

/* ───────── Feedback ───────── */
function AlertBox({ tone, title, body }: { tone: "info" | "warning" | "error" | "success"; title: string; body: string }) {
  const h = { info: "indigo", warning: "yellow", error: "red", success: "green" }[tone];
  const ic = { info: InformationCircleIcon, warning: Alert02Icon, error: CancelCircleIcon, success: CheckmarkCircle02Icon }[tone];
  return (
    <motion.div variants={{ h: { opacity: 0, y: 8 }, s: { opacity: 1, y: 0 } }} role={tone === "error" ? "alert" : "status"} className="flex gap-3 rounded-xl border p-4" style={{ background: `var(--sr-${h}-50)`, borderColor: `var(--sr-${h}-200)` }}>
      <span style={{ color: `var(--sr-${h}-${tone === "error" ? 500 : 700})` }}><I icon={ic} /></span>
      <div><p className="text-[15px] [font-weight:var(--fw-medium)]">{title}</p><p className="mt-0.5 text-[14px] text-[var(--tx-tertiary)]">{body}</p></div>
    </motion.div>
  );
}
function AlertDemo() {
  return (
    <motion.div className="space-y-3" initial="h" whileInView="s" viewport={{ once: true }} variants={{ s: { transition: { staggerChildren: 0.06 } } }}>
      <AlertBox tone="info" title="Saaras V2 retires on 31 Dec 2026" body="Move to Saaras V3. Requests keep working until then." />
      <AlertBox tone="error" title="Payment failed" body="Update your card to keep your API keys active." />
      <AlertBox tone="success" title="Domain verified" body="You can now send from voice@acme.in." />
    </motion.div>
  );
}
function ToastDemo() {
  return (
    <div>
      <Row>
        <SButton variant="secondary" onClick={() => toast("API key copied")}>Copy key</SButton>
        <SButton variant="secondary" onClick={() => toast("Key deleted", { action: { label: "Undo", onClick: () => toast("Restored") } })}>Delete key</SButton>
      </Row>
      <Toaster position="bottom-right" toastOptions={{ unstyled: true, classNames: { toast: "sarvam flex items-center gap-3 rounded-xl bg-[var(--slate)] px-4 py-3 text-[14px] text-white shadow-[var(--shadow-elev-lg)]", actionButton: "ml-auto underline underline-offset-2" } }} />
    </div>
  );
}
function EmptyDemo() {
  return (
    <div className="mx-auto max-w-[360px] py-8 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img src="/skill/glyphs/model-04.svg" alt="" aria-hidden className="mx-auto size-12" initial={{ opacity: 0, y: 8, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }} />
      <p className="s-display mt-5 text-[20px]">No API keys yet</p>
      <p className="mt-2 text-[14px] text-[var(--tx-tertiary)]">Create a key to call Sarvam models from your code.</p>
      <SButton className="mt-6">Create key</SButton>
    </div>
  );
}
function SkeletonDemo() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="space-y-4">
      <SButton size="sm" variant="secondary" onClick={() => setLoading((l) => !l)}>{loading ? "Show content" : "Show loading"}</SButton>
      <div className="max-w-md" aria-busy={loading}>
        <AnimatePresence mode="wait" initial={false}>
        {loading ? (
          <motion.div key="sk" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="flex gap-3"><Skeleton className="size-10 rounded-full bg-[var(--sf-tertiary)]" /><div className="flex-1 space-y-2"><Skeleton className="h-4 w-1/2 rounded bg-[var(--sf-tertiary)]" /><Skeleton className="h-3 w-4/5 rounded bg-[var(--sf-tertiary)]" /></div></motion.div>
        ) : (
          <motion.div key="ct" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="flex gap-3"><span className="grid size-10 place-items-center rounded-full bg-[var(--sr-indigo-100)] text-[12px]">AK</span><div><p className="text-[15px] [font-weight:var(--fw-medium)]">Aditi Kulkarni</p><p className="text-[13px] text-[var(--tx-tertiary)]">Ran 12 batch jobs this week</p></div></motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}
function ProgressDemo() {
  const [p, setP] = useState(12);
  useEffect(() => { const t = setInterval(() => setP((x) => (x >= 100 ? 0 : x + 4)), 300); return () => clearInterval(t); }, []);
  return (
    <div className="max-w-sm space-y-6">
      <div><div className="mb-2 flex justify-between text-[14px]"><span>Transcribing call-0417.wav</span><TextMorph className="s-mono text-[13px] text-[var(--tx-tertiary)]">{`${p}%`}</TextMorph></div>
        <div role="progressbar" aria-valuenow={p} aria-valuemin={0} aria-valuemax={100} className="h-1 rounded-full bg-[var(--sr-grey-200)]"><motion.div className="h-full rounded-full bg-[var(--slate)]" animate={{ width: `${p}%` }} transition={{ duration: 0.3, ease: EASE_BRAND }} /></div></div>
      <div><div className="mb-2 flex justify-between text-[14px]"><span>Credits used</span><span className="s-mono text-[13px] text-[var(--tx-tertiary)]">62 / 100</span></div>
        <div className="h-1 rounded-full bg-[var(--sr-grey-200)]"><div className="h-full w-[62%] rounded-full bg-[var(--slate)]" /></div></div>
    </div>
  );
}

/* ───────── Overlays ───────── */
function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger className={sbtn({ variant: "outline" })}>Delete key</DialogTrigger>
      <DialogContent className="sarvam rounded-3xl p-6 sm:max-w-[480px]">
        <DialogTitle className="s-display text-[22px]">Delete production key?</DialogTitle>
        <DialogDescription className="text-[14px] text-[var(--tx-tertiary)]">Apps using this key stop working at once. This can&apos;t be undone.</DialogDescription>
        <DialogFooter className="mt-4 gap-3 border-0 bg-transparent p-0"><DialogClose className={sbtn({ variant: "secondary" })}>Cancel</DialogClose><DialogClose className={sbtn({})}>Delete key</DialogClose></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger className={sbtn({ variant: "outline" })}>Open log entry</SheetTrigger>
      <SheetContent className="sarvam w-[420px] p-6">
        <SheetTitle className="s-display text-[22px]">Request 7f3a…</SheetTitle>
        <SheetDescription className="text-[14px] text-[var(--tx-tertiary)]">Saaras V3 · 200 OK · 412 ms</SheetDescription>
        <div className="mt-6"><DataListDemo /></div>
      </SheetContent>
    </Sheet>
  );
}
function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger className={sbtn({ variant: "outline" })}>Share</PopoverTrigger>
      <PopoverContent className={cn(pop, "w-80 p-4")}>
        <p className="text-[15px] [font-weight:var(--fw-medium)]">Share this playground</p>
        <p className="mt-1 text-[13px] text-[var(--tx-tertiary)]">Anyone with the link can view it.</p>
        <div className="mt-4"><CopyDemo /></div>
      </PopoverContent>
    </Popover>
  );
}
function TooltipDemo() {
  return (
    <Row>
      {[[RefreshIcon, "Regenerate"], [Download04Icon, "Download audio"], [Settings02Icon, "Voice settings"]].map(([ic, l]) => (
        <Tooltip key={l as string}>
          <TooltipTrigger aria-label={l as string} className="grid size-10 place-items-center rounded-full hover:bg-[var(--sf-secondary)]"><I icon={ic as typeof Copy01Icon} /></TooltipTrigger>
          <TooltipContent className="sarvam rounded-lg bg-[var(--slate)] px-2.5 py-1.5 text-[13px] text-white">{l as string}</TooltipContent>
        </Tooltip>
      ))}
    </Row>
  );
}
function DropdownDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger aria-label="Key actions" className="grid size-10 place-items-center rounded-full shadow-[inset_0_0_0_1px_var(--st)] hover:bg-[var(--sf)]"><I icon={MoreHorizontalIcon} /></DropdownMenuTrigger>
      <DropdownMenuContent className={cn(pop, "min-w-52 p-1")}>
        <DropdownMenuItem className="rounded-lg"><I icon={PencilEdit02Icon} />Rename<DropdownMenuShortcut>R</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuItem className="rounded-lg"><I icon={Copy01Icon} />Copy key</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="rounded-lg text-[var(--sr-red-500)]"><I icon={Delete02Icon} />Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
function CommandDemo() {
  return (
    <Command className="max-w-lg rounded-2xl border border-[var(--st)] shadow-[var(--shadow-elev-md)]">
      <CommandInput placeholder="Search docs and actions" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Models"><CommandItem><I icon={VolumeHighIcon} />Bulbul V3</CommandItem><CommandItem><I icon={Mic01Icon} />Saaras V3</CommandItem></CommandGroup>
        <CommandGroup heading="Actions"><CommandItem><I icon={Key01Icon} />Create API key<CommandShortcut>⌘N</CommandShortcut></CommandItem><CommandItem><I icon={Home01Icon} />Go to dashboard</CommandItem></CommandGroup>
      </CommandList>
    </Command>
  );
}

/* ───────── Navigation / Layout ───────── */
function TabsDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="line" className="gap-6 border-b border-[var(--st)] bg-transparent p-0">
        {["overview", "api", "pricing"].map((t) => <TabsTrigger key={t} value={t} className="rounded-none px-0 pb-2 text-[15px] capitalize">{t === "api" ? "API" : t}</TabsTrigger>)}
      </TabsList>
      <TabsContent value="overview" className="pt-4 text-[14px] text-[var(--tx-tertiary)]">Bulbul V3 speaks 11 Indian languages with natural prosody.</TabsContent>
      <TabsContent value="api" className="pt-4 text-[14px] text-[var(--tx-tertiary)]">POST /text-to-speech with text, language and speaker.</TabsContent>
      <TabsContent value="pricing" className="pt-4 text-[14px] text-[var(--tx-tertiary)]">See FACTS.md for current pricing.</TabsContent>
    </Tabs>
  );
}
function BreadcrumbDemo() {
  return (
    <Breadcrumb><BreadcrumbList className="text-[14px]">
      <BreadcrumbItem><BreadcrumbLink href="#">Docs</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbLink href="#">API</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>Speech to text</BreadcrumbPage></BreadcrumbItem>
    </BreadcrumbList></Breadcrumb>
  );
}
function PaginationDemo() {
  const [p, setP] = useState(3);
  const pages = [1, 2, 3, 4, 5, "…", 13];
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <span className="text-[13px] text-[var(--tx-tertiary)]">{(p - 1) * 20 + 1}–{p * 20} of 248</span>
      <nav aria-label="Pagination" className="flex items-center gap-1">
        <SButton size="sm" variant="outline" disabled={p === 1} onClick={() => setP(p - 1)}>Previous</SButton>
        {pages.map((n, i) => typeof n === "number"
          ? <button key={i} onClick={() => setP(n)} aria-current={p === n ? "page" : undefined} className={cn("relative size-9 rounded-full text-[14px] transition-colors", p === n ? "text-white" : "hover:bg-[var(--sf-secondary)]")}>
              {p === n && <motion.span layoutId="page-pill" className="absolute inset-0 rounded-full bg-[var(--slate)]" transition={{ type: "spring", bounce: 0.15, duration: 0.4 }} />}
              <span className="relative">{n}</span>
            </button>
          : <span key={i} className="px-1 text-[var(--tx-tertiary)]">…</span>)}
        <SButton size="sm" variant="outline" disabled={p === 13} onClick={() => setP(p + 1)}>Next</SButton>
      </nav>
    </div>
  );
}
function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-between py-4 text-left text-[16px] [font-weight:var(--fw-medium)]">{q}<Chevron open={open} size={16} /></button>
      <Expand open={open}><p className="pb-5 text-[15px] text-[var(--tx-tertiary)]">{a}</p></Expand>
    </div>
  );
}
function CollapsibleDemo() {
  const qs = [["Which languages does Saaras support?", "22 Indian languages plus English, including code-mixed speech."], ["Can I deploy Sarvam models on-prem?", "Yes. Enterprise plans include private deployment."]];
  return <div className="divide-y divide-[var(--st-secondary)]">{qs.map(([q, a]) => <FaqRow key={q} q={q} a={a} />)}</div>;
}

/* ───────── Data ───────── */
const ROWS = [["Saaras V3", "Speech to text", "22", "Live"], ["Bulbul V3", "Text to speech", "11", "Live"], ["Sarvam-M", "Reasoning LLM", "10", "Live"], ["Sarvam 105B", "Foundation LLM", "22", "Preview"]];
function TableDemo() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[var(--st)]">
      <table className="w-full text-[14px]">
        <caption className="sr-only">Sarvam models</caption>
        <thead className="bg-[var(--sf-secondary)]"><tr>{["Model", "Task", "Languages", "Status"].map((h, i) => <th key={h} scope="col" className={cn("s-eyebrow px-4 py-3 text-left", i === 2 && "text-right")}>{h}</th>)}</tr></thead>
        <tbody>{ROWS.map((r) => <tr key={r[0]} className="border-t border-[var(--st-secondary)]">{r.map((c, i) => <td key={i} className={cn("h-12 px-4", i === 2 && "text-right tabular-nums", i === 1 && "text-[var(--tx-tertiary)]")}>{i === 3 ? <StatusDot tone={c === "Live" ? "live" : "working"} label={c} /> : c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}
function FilterBarDemo() {
  const [q, setQ] = useState("");
  const [f, setF] = useState<string[]>(["Hindi"]);
  const shown = ROWS.filter((r) => r[0].toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative max-w-xs flex-1"><I icon={Search01Icon} className="absolute top-3.5 left-3.5 text-[var(--tx-tertiary)]" /><input value={q} onChange={(e) => setQ(e.target.value)} className={cn(field, "pl-10")} placeholder="Search models" /></div>
        <AnimatePresence mode="popLayout">
          {f.map((x) => <motion.button layout key={x} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onClick={() => setF(f.filter((y) => y !== x))} className="flex h-8 items-center gap-1.5 rounded-full bg-[var(--sf-secondary)] px-3 text-[13px]">Language: {x}<I icon={Cancel01Icon} size={12} /></motion.button>)}
          {(f.length > 0 || q) && <motion.button layout key="clear" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { setF([]); setQ(""); }} className="text-[13px] underline underline-offset-2">Clear all</motion.button>}
        </AnimatePresence>
        {f.length === 0 && <button onClick={() => setF(["Hindi"])} className="text-[13px] text-[var(--tx-tertiary)] hover:text-[var(--tx)]">+ Language</button>}
      </div>
      <p className="text-[13px] text-[var(--tx-tertiary)]"><TextMorph>{`${shown.length} results`}</TextMorph></p>
    </div>
  );
}
function TimelineDemo() {
  const items = [["4 Nov 2026", "Sarvam 105B preview", "Open weights for the 105B foundation model.", true], ["21 Oct 2026", "Bulbul V3", "Two new voices for Odia and Punjabi.", false], ["2 Oct 2026", "Saaras V3", "Word-level timestamps in batch mode.", true]];
  return (
    <ol className="relative ml-1 border-l border-[var(--st)]">
      {items.map(([d, t, b, m]) => (
        <li key={t as string} className="relative pb-6 pl-6 last:pb-0">
          <span className="absolute top-1.5 -left-[4.5px] size-2 rounded-full" style={{ background: m ? "var(--slate)" : "var(--sr-grey-400)" }} />
          <time className="s-mono text-[12px] text-[var(--tx-tertiary)]">{d as string}</time>
          <p className="text-[15px] [font-weight:var(--fw-medium)]">{t as string}</p>
          <p className="text-[14px] text-[var(--tx-tertiary)]">{b as string}</p>
        </li>
      ))}
    </ol>
  );
}
function DataGridDemo() {
  const [sel, setSel] = useState<string[]>([]);
  const all = sel.length === ROWS.length;
  return (
    <div>
      <Expand open={sel.length > 0}><div className="mb-3 flex items-center justify-between rounded-xl bg-[var(--sr-indigo-50)] px-4 py-2 text-[13px]"><TextMorph>{`${sel.length} selected`}</TextMorph><button className="text-[var(--sr-red-500)]">Revoke</button></div></Expand>
      <div className="overflow-x-auto rounded-2xl border border-[var(--st)] text-[13px]">
        <div className="grid grid-cols-[40px_1fr_1fr_80px] bg-[var(--sf-secondary)] px-2 py-2.5 s-eyebrow"><Checkbox aria-label="Select all" checked={all} onCheckedChange={() => setSel(all ? [] : ROWS.map((r) => r[0]))} /><span>Model</span><span>Task</span><span className="text-right">Langs</span></div>
        {ROWS.map((r) => {
          const on = sel.includes(r[0]);
          return <div key={r[0]} className={cn("grid h-10 grid-cols-[40px_1fr_1fr_80px] items-center border-t border-[var(--st-secondary)] px-2 transition-colors duration-200", on && "bg-[var(--sr-indigo-50)]")}><Checkbox aria-label={`Select ${r[0]}`} checked={on} onCheckedChange={() => setSel(on ? sel.filter((x) => x !== r[0]) : [...sel, r[0]])} /><span>{r[0]}</span><span className="text-[var(--tx-tertiary)]">{r[1]}</span><span className="text-right tabular-nums">{r[2]}</span></div>;
        })}
      </div>
    </div>
  );
}

/* ───────── Code ───────── */
function CodeBlockDemo() {
  const [lang, setLang] = useState("Python");
  const code: Record<string, string> = {
    Python: `from sarvamai import SarvamAI\n\nclient = SarvamAI(api_subscription_key="sk_…")\nres = client.text.translate(\n    input="नमस्ते, कैसे हो आप?",\n    source_language_code="hi-IN",\n    target_language_code="en-IN",\n)`,
    JavaScript: `import { SarvamAIClient } from "sarvamai";\n\nconst client = new SarvamAIClient({ apiSubscriptionKey: "sk_…" });\nconst res = await client.text.translate({\n  input: "नमस्ते, कैसे हो आप?",\n  source_language_code: "hi-IN",\n  target_language_code: "en-IN",\n});`,
    cURL: `curl https://api.sarvam.ai/translate \\\n  -H "api-subscription-key: sk_…" \\\n  -d '{"input":"नमस्ते, कैसे हो आप?","source_language_code":"hi-IN","target_language_code":"en-IN"}'`,
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--st)] bg-[#fafafa]">
      <div className="flex items-center justify-between bg-[var(--sf-tertiary)] px-3 py-2"><Segmented items={Object.keys(code)} value={lang} onChange={setLang} /><button onClick={() => navigator.clipboard?.writeText(code[lang])} className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] hover:bg-white"><I icon={Copy01Icon} size={14} />Copy</button></div>
      <pre className="overflow-x-auto p-5 s-mono text-[13px] leading-[1.8] text-[var(--tx)]">{code[lang]}</pre>
    </div>
  );
}
function JsonNode({ k, v, depth }: { k?: string; v: unknown; depth: number }) {
  const [open, setOpen] = useState(depth < 2);
  const keyEl = k !== undefined && <span className="text-[#3333cc]">&quot;{k}&quot;</span>;
  if (v && typeof v === "object") {
    const entries = Object.entries(v as object);
    return (
      <div style={{ paddingLeft: depth ? 16 : 0 }}>
        <button onClick={() => setOpen(!open)} className="text-left">{open ? "▾" : "▸"} {keyEl}{k !== undefined && ": "}{Array.isArray(v) ? "[" : "{"}{!open && <span className="text-[var(--tx-tertiary)]">… {entries.length} {Array.isArray(v) ? "items" : "keys"} {Array.isArray(v) ? "]" : "}"}</span>}</button>
        <Expand open={open}>{entries.map(([ck, cv]) => <JsonNode key={ck} k={Array.isArray(v) ? undefined : ck} v={cv} depth={depth + 1} />)}<div>{Array.isArray(v) ? "]" : "}"}</div></Expand>
      </div>
    );
  }
  const color = typeof v === "string" ? "#496d21" : typeof v === "number" ? "#a5460f" : "#212191";
  return <div style={{ paddingLeft: 16 }}>{keyEl}{k !== undefined && ": "}<span style={{ color }}>{typeof v === "string" ? `"${v}"` : String(v)}</span></div>;
}
function JsonViewDemo() {
  const data = { request_id: "7f3a91c2", transcript: "नमस्ते, मुझे अपना ऑर्डर ट्रैक करना है", language_code: "hi-IN", diarized: false, timestamps: { words: ["नमस्ते", "मुझे"], start: [0.0, 0.62] } };
  return <div className="overflow-x-auto rounded-2xl border border-[var(--st)] bg-[#fafafa] p-5 s-mono text-[13px] leading-[1.8]"><JsonNode v={data} depth={0} /></div>;
}
function LogViewerDemo() {
  const base = [["12:04:01", "INFO", "batch 2041 started · 128 files"], ["12:04:09", "INFO", "call-0001.wav transcribed in 1.8s"], ["12:04:12", "WARN", "call-0007.wav low audio level, retrying"], ["12:04:15", "ERROR", "call-0013.wav unsupported codec (amr)"]];
  const [lines, setLines] = useState(base);
  useEffect(() => { const t = setInterval(() => setLines((l) => [...l.slice(-7), [new Date().toTimeString().slice(0, 8), "INFO", `call-${String(Math.floor(Math.random() * 999)).padStart(4, "0")}.wav transcribed`]]), 1500); return () => clearInterval(t); }, []);
  const lvl: Record<string, string> = { INFO: "var(--sr-indigo-300)", WARN: "var(--sr-yellow-400)", ERROR: "var(--sr-red-300)" };
  return (
    <div role="log" aria-live="polite" className="rounded-2xl bg-[var(--black)] p-5 s-mono text-[12px] leading-[1.7] text-[#d4d4d4]">
      {lines.map(([t, l, m], i) => <motion.div layout key={`${t}-${m}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="grid grid-cols-[70px_56px_1fr] gap-2"><span className="text-[var(--sr-grey-600)]">{t}</span><span style={{ color: lvl[l] }}>{l}</span><span className="truncate">{m}</span></motion.div>)}
    </div>
  );
}

/* ───────── Media and charts ───────── */
function AttachmentDemo() {
  const [p, setP] = useState(30);
  useEffect(() => { const t = setInterval(() => setP((x) => (x >= 100 ? 100 : x + 7)), 400); return () => clearInterval(t); }, []);
  return (
    <div className="flex flex-wrap gap-3">
      {[["support-call-hindi.wav", "Audio · 4.2 MB", 100], ["invoice-2041.pdf", "PDF · 812 KB", p]].map(([n, m, pr]) => (
        <div key={n as string} className="flex w-72 items-center gap-3 rounded-xl border border-[var(--st)] p-2.5 pr-3">
          <span className="grid size-10 place-items-center rounded-lg bg-[var(--sf-secondary)]"><I icon={File01Icon} /></span>
          <div className="min-w-0 flex-1"><p className="truncate text-[14px]">{n as string}</p>
            {(pr as number) < 100 ? <div className="mt-1.5 h-1 rounded-full bg-[var(--sr-grey-200)]"><motion.div className="h-full rounded-full bg-[var(--slate)]" animate={{ width: `${pr}%` }} transition={{ duration: 0.35, ease: EASE_BRAND }} /></div> : <p className="text-[12px] text-[var(--tx-tertiary)]">{m as string}</p>}</div>
          <button aria-label={`Remove ${n}`} className="text-[var(--tx-tertiary)] hover:text-[var(--tx)]"><I icon={Cancel01Icon} size={14} /></button>
        </div>
      ))}
    </div>
  );
}
function ChartDemo() {
  const data = [12, 18, 15, 22, 30, 41, 38, 52, 47, 61, 58, 72];
  const [hover, setHover] = useState<number | null>(null);
  const max = 80;
  return (
    <div>
      <div className="mb-3 flex justify-between text-[13px]"><span className="[font-weight:var(--fw-medium)]">API calls · last 12 days</span>{hover !== null && <span className="tabular-nums text-[var(--tx-tertiary)]">Day {hover + 1}: {data[hover]}k</span>}</div>
      <div className="relative h-48">
        {[0, 20, 40, 60, 80].map((g) => <div key={g} className="absolute inset-x-8 border-t border-[var(--st-secondary)]" style={{ bottom: `${(g / max) * 100}%` }}><span className="absolute -left-8 -translate-y-1/2 text-[11px] text-[var(--tx-tertiary)]">{g}k</span></div>)}
        <div className="absolute inset-x-8 bottom-0 top-0 flex items-end gap-1.5">
          {data.map((d, i) => <motion.div key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} className="flex-1 rounded-t-md transition-colors" initial={{ height: 0 }} whileInView={{ height: `${(d / max) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: i * 0.04 }} style={{ background: hover === i ? "var(--sr-indigo-700)" : "var(--sr-indigo-500)" }} />)}
        </div>
      </div>
    </div>
  );
}

/* ───────── AI ───────── */
function Glyph({ size = 24 }: { size?: number }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/skill/logos/sarvam-logo-black.svg" alt="" aria-hidden style={{ width: size, height: size }} />;
}
function MessageBlock({ role, children }: { role: "user" | "assistant"; children: React.ReactNode }) {
  if (role === "user") return <motion.div initial={{ opacity: 0, scale: 0.6, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 420, damping: 28 }} style={{ transformOrigin: "100% 100%" }} className="flex justify-end"><div className="max-w-[80%] rounded-[20px] rounded-br-md bg-[var(--sf-secondary)] px-4 py-3 text-[15px]">{children}</div></motion.div>;
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }} className="group flex gap-3">
      <Glyph />
      <div className="min-w-0 flex-1 text-[15px] leading-[1.6]">{children}
        <div className="mt-2 flex gap-1 text-[var(--tx-tertiary)]">{[[Copy01Icon, "Copy"], [VolumeHighIcon, "Listen"], [RefreshIcon, "Retry"]].map(([ic, l]) => <button key={l as string} aria-label={l as string} className="grid size-7 place-items-center rounded-full hover:bg-[var(--sf-secondary)]"><I icon={ic as typeof Copy01Icon} size={14} /></button>)}</div>
      </div>
    </motion.div>
  );
}
function MessageDemo() {
  return <div className="space-y-5"><MessageBlock role="user">मेरे ऑर्डर का स्टेटस क्या है?</MessageBlock><MessageBlock role="assistant">आपका ऑर्डर #4821 कल शाम 6 बजे तक पहुँच जाएगा। Your order #4821 arrives by 6 pm tomorrow.</MessageBlock></div>;
}
function PromptBox({ onSend }: { onSend?: (t: string) => void }) {
  const [v, setV] = useState("");
  return (
    <form onSubmit={(e) => { e.preventDefault(); if (v.trim()) { onSend?.(v); setV(""); } }} className="rounded-3xl border border-[var(--st)] bg-white p-3 shadow-[var(--shadow-card)]">
      <textarea value={v} onChange={(e) => setV(e.target.value)} rows={2} placeholder="Ask anything, in any Indian language" className="w-full resize-none bg-transparent px-2 text-[15px] outline-none placeholder:text-[var(--tx-tertiary)]" />
      <div className="flex items-center justify-between">
        <div className="flex gap-1">{[[Attachment01Icon, "Attach"], [Mic01Icon, "Speak"]].map(([ic, l]) => <button type="button" key={l as string} aria-label={l as string} className="grid size-9 place-items-center rounded-full hover:bg-[var(--sf-secondary)]"><I icon={ic as typeof Copy01Icon} /></button>)}</div>
        <button type="submit" aria-label="Send" disabled={!v.trim()} className="grid size-9 place-items-center rounded-full bg-[var(--slate)] text-white disabled:opacity-40"><I icon={SentIcon} /></button>
      </div>
    </form>
  );
}
function TypingDots() {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} className="flex items-center gap-3" aria-label="Sarvam is typing">
      <Glyph />
      <span className="flex gap-1">
        {[0, 1, 2].map((d) => <motion.span key={d} className="size-1.5 rounded-full bg-[var(--sr-grey-500)]" animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }} />)}
      </span>
    </motion.div>
  );
}
function ConversationDemo() {
  const [msgs, setMsgs] = useState<{ id: number; role: "user" | "assistant"; text: string }[]>([]);
  const [typing, setTyping] = useState(false);
  const send = (text: string, reply: string) => {
    setMsgs((m) => [...m, { id: Date.now(), role: "user", text }]);
    setTyping(true);
    setTimeout(() => { setTyping(false); setMsgs((m) => [...m, { id: Date.now() + 1, role: "assistant", text: reply }]); }, 900);
  };
  return (
    <div className="mx-auto max-w-[720px] space-y-6">
      <AnimatePresence mode="popLayout" initial={false}>
        {msgs.length === 0 && !typing ? (
          <motion.div key="empty" exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }} className="py-6 text-center">
            <p className="s-display text-[28px]">How can I help today?</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">{["Translate to Tamil", "Summarise this call", "Write a Hindi tagline"].map((x) => <motion.button key={x} whileTap={{ scale: 0.95 }} onClick={() => send(x, "Sure. Paste the text and I'll start.")} className="rounded-full bg-[var(--sf-secondary)] px-3 py-1.5 text-[13px] hover:bg-[var(--sf-tertiary)]">{x}</motion.button>)}</div>
          </motion.div>
        ) : null}
        {msgs.map((m) => <motion.div layout key={m.id}><MessageBlock role={m.role}>{m.text}</MessageBlock></motion.div>)}
        {typing && <TypingDots key="typing" />}
      </AnimatePresence>
      <motion.div layout><PromptBox onSend={(t) => send(t, "Got it. Working on that now.")} /></motion.div>
    </div>
  );
}
function ResponseDemo() {
  const full = "Saaras V3 transcribes speech in 22 Indian languages and handles code-mixed audio like Hinglish.";
  const [n, setN] = useState(0);
  useEffect(() => { if (n < full.length) { const t = setTimeout(() => setN(n + 3), 30); return () => clearTimeout(t); } }, [n, full.length]);
  return (
    <div className="flex gap-3">
      <Glyph />
      <div className="text-[15px] leading-[1.6]">
        <h3 className="text-[17px] [font-weight:var(--fw-medium)]">Speech to text</h3>
        <p className="mt-1">{full.slice(0, n)}{n < full.length && <motion.span className="ml-0.5 inline-block h-[1em] w-0.5 bg-[var(--tx)] align-middle" aria-hidden animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }} />}<sup className="ml-0.5 text-[var(--sr-indigo-700)]">1</sup></p>
        <div className="mt-3 flex gap-2"><a href="#" className="rounded-full bg-[var(--sf-secondary)] px-3 py-1 text-[12px]">1 · docs.sarvam.ai/saaras</a><button onClick={() => setN(0)} className="text-[12px] text-[var(--tx-tertiary)] underline">Replay</button></div>
      </div>
    </div>
  );
}
function ReasoningDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex items-center gap-1.5 text-[14px] text-[var(--tx-tertiary)] hover:text-[var(--tx)]"><I icon={AiBrain01Icon} size={14} />Thought for 6s<Chevron open={open} /></button>
      <Expand open={open}><div className="mt-3 border-l-2 border-[var(--st)] pl-4 text-[14px] text-[var(--tx-tertiary)]">The user asks in Hindi, so answer in Hindi first. The order ID is in the CRM tool result. Delivery date is tomorrow, 6 pm.</div></Expand>
      <p className="mt-3 text-[15px]">आपका ऑर्डर कल शाम 6 बजे तक पहुँच जाएगा।</p>
    </div>
  );
}
function ToolCallDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-lg overflow-hidden rounded-xl border border-[var(--st)]">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex h-11 w-full items-center gap-2 px-3 text-left">
        <I icon={Wrench01Icon} size={16} /><span className="s-mono text-[13px]">crm.lookup_order</span><span className="ml-auto flex items-center gap-3"><StatusDot tone="live" label="Done · 412 ms" /><Chevron open={open} /></span>
      </button>
      <Expand open={open}><div className="grid gap-3 border-t border-[var(--st-secondary)] bg-[#fafafa] p-3 s-mono text-[12px] sm:grid-cols-2"><div><p className="mb-1 text-[var(--tx-tertiary)]">Input</p>{`{ "order_id": "4821" }`}</div><div><p className="mb-1 text-[var(--tx-tertiary)]">Output</p>{`{ "eta": "2026-11-05T18:00" }`}</div></div></Expand>
    </div>
  );
}
/** Step icon in a fixed, centred 16px slot: spinner while working, check when done, dot when pending. */
function StepIcon({ state }: { state: "pending" | "working" | "done" }) {
  return (
    <span className="grid size-4 shrink-0 place-items-center" aria-hidden>
      {state === "done" ? (
        <span className="grid place-items-center text-[var(--sr-green-600)]"><I icon={Tick02Icon} /></span>
      ) : state === "working" ? (
        <motion.span className="grid place-items-center text-[var(--sr-indigo-500)]" animate={{ rotate: 360 }} transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}><I icon={Loading03Icon} /></motion.span>
      ) : (
        <span className="block size-2 rounded-full bg-[var(--sr-grey-300)]" />
      )}
    </span>
  );
}
function ActivityDemo() {
  const steps = ["Listening", "Transcribing (Saaras V3)", "Looking up order", "Speaking (Bulbul V3)"];
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((x) => (x >= steps.length ? 0 : x + 1)), 1100); return () => clearInterval(t); }, [steps.length]);
  return (
    <ol role="log" className="max-w-sm space-y-3">
      {steps.map((s, k) => (
        <li key={s} className="flex items-center gap-3 text-[14px] leading-5">
          <StepIcon state={k < i ? "done" : k === i ? "working" : "pending"} />
          <span className={k > i ? "text-[var(--tx-tertiary)]" : ""}>{s}</span>
          {k < i && <span className="ml-auto s-mono text-[12px] text-[var(--tx-tertiary)]">{(0.4 + k * 0.3).toFixed(1)}s</span>}
        </li>
      ))}
    </ol>
  );
}
function PromptInputDemo() {
  const [sent, setSent] = useState<string | null>(null);
  return <div className="space-y-3"><PromptBox onSend={setSent} />{sent && <p className="text-[13px] text-[var(--tx-tertiary)]">Sent: {sent}</p>}</div>;
}
const SAMPLES: Record<string, { label: string; text: string }> = {
  hi: { label: "हिन्दी", text: "नमस्ते! मैं आपकी कैसे मदद कर सकती हूँ?" },
  ta: { label: "தமிழ்", text: "வணக்கம்! நான் உங்களுக்கு எப்படி உதவ முடியும்?" },
  bn: { label: "বাংলা", text: "নমস্কার! আমি আপনাকে কীভাবে সাহায্য করতে পারি?" },
  en: { label: "English", text: "Hello! How can I help you today?" },
};
const COLS = 32, DOT_ROWS = 10, DURATION = 5.2;
/** Audio player (skill: audio-player.md): slate play pill + dot-matrix visualiser lit bottom-up + language select. */
function AudioDemo() {
  const [lang, setLang] = useState("hi");
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0); // seconds
  const [levels, setLevels] = useState<number[]>(() => Array(COLS).fill(0));
  const raf = useRef<number | null>(null);
  const start = useRef(0);

  useEffect(() => {
    if (!playing) return;
    start.current = performance.now() - t * 1000;
    const tick = (now: number) => {
      const el = (now - start.current) / 1000;
      if (el >= DURATION) { setPlaying(false); setT(0); setLevels(Array(COLS).fill(0)); return; }
      setT(el);
      // speech-like envelope: syllable bursts with pauses
      setLevels(Array.from({ length: COLS }, (_, c) => {
        const phase = el * 7 + c * 0.55;
        const burst = 0.35 + 0.65 * Math.abs(Math.sin(el * 2.3));
        return Math.max(0.08, Math.min(1, (Math.sin(phase) * 0.5 + 0.5) * burst * (0.55 + 0.45 * Math.sin(c * 1.7 + el * 2))));
      }));
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  const head = Math.floor((t / DURATION) * COLS);
  const fmt = (x: number) => `0:${String(Math.floor(x)).padStart(2, "0")}`;

  return (
    <div className="space-y-5">
      <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-[var(--stroke-track)] bg-white p-1 shadow-[var(--shadow-track)]">
        <SButton onClick={() => setPlaying((x) => !x)} aria-label={playing ? "Pause" : "Play"} className="w-[104px] gap-2">
          <SwapIcon k={playing ? "pause" : "play"}><I icon={playing ? PauseIcon : PlayIcon} size={16} /></SwapIcon>
          <TextMorph duration={250}>{playing ? "Pause" : "Play"}</TextMorph>
        </SButton>
        <button
          aria-label="Seek"
          onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); setT(((e.clientX - r.left) / r.width) * DURATION); }}
          className="hidden h-10 items-center sm:flex"
        >
          <span className="grid gap-[1.5px]" style={{ gridTemplateColumns: `repeat(${COLS}, 2.5px)`, gridTemplateRows: `repeat(${DOT_ROWS}, 2.5px)` }}>
            {Array.from({ length: DOT_ROWS * COLS }, (_, k) => {
              const row = Math.floor(k / COLS), col = k % COLS;
              const lit = playing ? levels[col] * DOT_ROWS >= DOT_ROWS - row : row === DOT_ROWS - 1;
              const played = col < head;
              return <span key={k} className="size-[2.5px] rounded-full transition-colors duration-75" style={{ background: lit ? (played || !playing ? "var(--dot-active)" : "#c4c4c4") : "var(--dot-idle)" }} />;
            })}
          </span>
        </button>
        <span className="s-mono w-9 text-[12px] text-[var(--tx-tertiary)] tabular-nums">{fmt(playing ? t : 0)}</span>
        <Select value={lang} onValueChange={(v) => { setLang(String(v)); setPlaying(false); setT(0); }} items={Object.entries(SAMPLES).map(([value, x]) => ({ value, label: x.label }))}>
          <SelectTrigger className="h-10 w-auto gap-1.5 rounded-full border-0 bg-[var(--sf-secondary)] px-4 text-[14px] shadow-[var(--shadow-select)]"><SelectValue /></SelectTrigger>
          <SelectContent className={pop}>{Object.entries(SAMPLES).map(([k, x]) => <SelectItem key={k} value={k}>{x.label}</SelectItem>)}</SelectContent>
        </Select>
      </div>
      <AnimatePresence mode="wait">
        <motion.p key={lang} initial={{ opacity: 0, y: 4 }} animate={{ opacity: playing ? 1 : 0.7, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }} className="text-[15px] text-[var(--tx-secondary)]">
          {SAMPLES[lang].text}
        </motion.p>
      </AnimatePresence>
      <p className="text-[12px] text-[var(--tx-tertiary)]">Bulbul V3 · preview. The visualiser follows the voice level; click it to seek.</p>
    </div>
  );
}

export const COMPONENT_PREVIEWS: Record<string, () => React.ReactNode> = {
  button: ButtonDemo, "button-group": ButtonGroupDemo, "copy-button": CopyDemo,
  input: InputDemo, textarea: TextareaDemo, field: FieldDemo, "date-picker": DatePickerDemo, combobox: ComboboxDemo,
  checkbox: CheckboxDemo, "radio-group": RadioDemo, switch: SwitchDemo, slider: SliderDemo, select: SelectDemo, "segmented-control": SegmentedDemo,
  badge: BadgeDemo, chip: ChipDemo, status: StatusDemo, stat: StatDemo, avatar: AvatarDemo, kbd: KbdDemo, "relative-time": RelTimeDemo,
  truncate: TruncateDemo, item: ItemDemo, card: CardDemo, panel: PanelDemo, "data-list": DataListDemo,
  alert: AlertDemo, toast: ToastDemo, "empty-state": EmptyDemo, skeleton: SkeletonDemo, progress: ProgressDemo,
  dialog: DialogDemo, sheet: SheetDemo, popover: PopoverDemo, tooltip: TooltipDemo, "dropdown-menu": DropdownDemo, command: CommandDemo,
  tabs: TabsDemo, breadcrumb: BreadcrumbDemo, pagination: PaginationDemo, collapsible: CollapsibleDemo,
  table: TableDemo, "filter-bar": FilterBarDemo, timeline: TimelineDemo, "data-grid": DataGridDemo,
  "code-block": CodeBlockDemo, "json-view": JsonViewDemo, "log-viewer": LogViewerDemo,
  attachment: AttachmentDemo, chart: ChartDemo,
  message: MessageDemo, conversation: ConversationDemo, response: ResponseDemo, reasoning: ReasoningDemo,
  "tool-call": ToolCallDemo, activity: ActivityDemo, "prompt-input": PromptInputDemo, "audio-player": AudioDemo,
};

