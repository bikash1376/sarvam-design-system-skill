import "server-only";
import fs from "node:fs";
import path from "node:path";
import { DOC_GROUPS, type NavItem } from "./nav";

// Single source of truth: the skill folder next to this project. Read-only.
const SKILL = path.resolve(process.cwd(), "..", "sarvam-design-system");

export type Rule = { level: "Must" | "Should" | "Never"; text: string; because?: string };
export type Row = [string, string];
export type Sections = {
  anatomy?: string; // Styles / Sizes / States / Variants as markdown
  use: string[];
  notFor: string[];
  rules: Rule[];
  a11y: string[];
  edge: Row[];
  api: { prop: string; type: string; def: string }[];
  tokens: Row[];
  related: string[];
  rest?: string; // any other sections (foundations) as markdown
};
export type DocContent = {
  title: string;
  description: string;
  kind: "system-index" | "foundation" | "component";
  origin: "measured" | "derived";
  sections: Sections;
  agentPath: string;
  agentMd: string;
  source?: string;
};

const read = (rel: string) => {
  try { return fs.readFileSync(path.join(SKILL, rel), "utf8").replace(/\r\n/g, "\n"); } catch { return ""; }
};
const strip = (s: string) => s.replace(/`/g, "").trim();
const bullets = (md = "") => md.split("\n").filter((l) => /^\s*[-*] /.test(l)).map((l) => l.replace(/^\s*[-*] /, "").trim());
const tableRows = (md = "") =>
  md.split("\n").filter((l) => l.trim().startsWith("|") && !/^\|\s*-/.test(l.trim()))
    .slice(1)
    .map((l) => l.trim().replace(/^\||\|$/g, "").split(/(?<!\\)\|/).map((c) => c.replace(/\\\|/g, "|").trim()));

function splitH2(body: string) {
  const out: Record<string, string> = {};
  const order: string[] = [];
  let cur = "_intro";
  out[cur] = "";
  for (const line of body.split("\n")) {
    const m = line.match(/^##\s+(.+?)\s*$/);
    if (m) { cur = m[1]; order.push(cur); out[cur] = ""; } else out[cur] += line + "\n";
  }
  return { out, order };
}

// Tokens per foundation, read from tokens.css by prefix
const TOKEN_CSS = read("tokens/tokens.css");
const ALL_TOKENS: Row[] = [...TOKEN_CSS.matchAll(/(--[a-z0-9_-]+)\s*:\s*([^;]+);/g)]
  .map((m) => [m[1], m[2].split("/*")[0].replace(/\s+/g, " ").trim()] as Row)
  .filter((r, i, a) => a.findIndex((x) => x[0] === r[0]) === i);
const FOUNDATION_TOKENS: Record<string, RegExp> = {
  color: /^--(tx|sf|st|slate|black|sr-|br-|heritage)/,
  typography: /^--(font|fs|lh|ls|fw)/,
  space: /^--(space|section)/,
  radius: /^--radius/,
  "borders-and-lines": /^--(st|stroke|hairline|shadow-stroke)/,
  elevation: /^--(shadow|ring)/,
  motion: /^--(ease|dur)/,
  grid: /^--(width|container|nav)/,
  iconography: /^--(tx-tertiary|tx$)/,
};

export function getDoc(item: NavItem): DocContent {
  const raw0 = item.file ? read(item.file) : "";
  const summary = raw0.match(/^---[\s\S]*?\nsummary:\s*"?(.*?)"?\n[\s\S]*?\n---\n/)?.[1];
  const related = raw0.match(/^---[\s\S]*?\nrelated:\s*\[(.*?)\]/)?.[1];
  const raw = raw0.replace(/^---[\s\S]*?\n---\n/, "").trim();
  let body = raw.replace(/^#\s+.*\n+/, "").trim();
  if (summary && body.startsWith(summary)) body = body.slice(summary.length).trim();

  const kind: DocContent["kind"] = item.group === "Sarvam" ? "system-index" : DOC_GROUPS.has(item.group) ? "foundation" : "component";
  const { out, order } = splitH2(body);
  const firstPara = out._intro.trim().split("\n\n").find((p) => p && !/^[#|>`\-*\d<]/.test(p.trim()));
  // pages that share one foundation file get their own one-liner
  const OWN: Record<string, string> = {
    space: "A 4px base, generous section rhythm, and space instead of boxes.",
    grid: "Twelve columns at 10/12 of the viewport, capped at 1400px; 88% on mobile.",
    radius: "Pills for actions, 16px for cards, 12px for inputs, 24px for panels.",
    "borders-and-lines": "One quiet grey hairline for every edge; slate only for selection.",
    elevation: "Soft ambient shadows and inset edges, never hard drop shadows.",
  };
  const description =
    OWN[item.slug] ?? summary ?? firstPara?.replace(/\*\*|`/g, "").replace(/\s+/g, " ").slice(0, 180) ??
    `${item.title} for Sarvam interfaces.`;

  const anatomyKeys = ["Styles", "Sizes", "States", "Variants"];
  const known = new Set([...anatomyKeys, "Usage", "Rules", "Accessibility", "Edge cases", "API", "Tokens", "Related"]);

  const usage = out["Usage"] ?? "";
  const use = bullets(usage.split(/###\s+Not for/)[0]);
  const notFor = bullets(usage.split(/###\s+Not for/)[1]);
  const rules: Rule[] = bullets(out["Rules"]).map((l) => {
    const m = l.match(/^\*\*(Must|Should|Never)\*\*\s*(.*)$/);
    const level = (m?.[1] ?? "Should") as Rule["level"];
    const txt = m?.[2] ?? l;
    const [text, because] = txt.split(/\s+Because\s+/);
    return { level, text: text.trim(), because: because?.trim() };
  });

  let tokens: Row[] = tableRows(out["Tokens"]).map((r) => [strip(r[0]), r[1]] as Row);
  if (kind === "foundation" && FOUNDATION_TOKENS[item.slug]) tokens = ALL_TOKENS.filter(([n]) => FOUNDATION_TOKENS[item.slug].test(n));

  const sections: Sections = {
    anatomy: anatomyKeys.filter((k) => out[k]).map((k) => `### ${k}\n${out[k].trim()}`).join("\n\n") || undefined,
    use, notFor, rules,
    a11y: bullets(out["Accessibility"]),
    edge: tableRows(out["Edge cases"]).map((r) => [r[0], r[1]] as Row),
    api: tableRows(out["API"]).map((r) => ({ prop: strip(r[0]), type: strip(r[1] ?? ""), def: strip(r[2] ?? "") })),
    tokens,
    related: related ? related.split(",").map((s) => s.trim()).filter(Boolean)
      : (out["Related"] ?? "").split("·").map((s) => s.trim()).filter(Boolean),
    rest: [out._intro.trim(), ...order.filter((k) => !known.has(k)).map((k) => `## ${k}\n${out[k].trim()}`)].filter(Boolean).join("\n\n") || undefined,
  };

  // "measured" = specified from sarvam.ai; "derived" = built for Sarvam on shadcn, following the brand rules
  // components written for this system (scripts/component_specs.py); everything else is from sarvam.ai
  const DERIVED = new Set(["button-group", "input", "textarea", "field", "date-picker", "combobox", "checkbox", "radio-group", "switch", "slider",
    "status", "avatar", "kbd", "relative-time", "truncate", "item", "data-list", "alert", "toast", "empty-state", "skeleton", "progress",
    "dialog", "sheet", "popover", "tooltip", "dropdown-menu", "command", "tabs", "breadcrumb", "pagination", "collapsible", "table",
    "filter-bar", "timeline", "data-grid", "json-view", "log-viewer", "attachment", "chart", "message", "conversation", "response",
    "reasoning", "tool-call", "activity", "borders-and-lines"]);
  const origin = DERIVED.has(item.slug) ? "derived" : "measured";

  const agentPath = `/sarvam/${item.slug || "index"}.md`;
  const agentMd = [
    `# ${item.title}`, "", `> ${description}`, "",
    `kind: ${kind}`, `group: ${item.group}`, `origin: ${origin === "measured" ? "measured from sarvam.ai" : "derived (shadcn + Sarvam brand rules)"}`,
    "version: 1", "last-updated: 2026-11-04",
    item.file ? `source: sarvam-design-system/${item.file}` : "status: planned",
    "", body || "_No spec yet._", "",
  ].join("\n");

  return { title: item.title, description, kind, origin, sections, agentPath, agentMd, source: item.file };
}
