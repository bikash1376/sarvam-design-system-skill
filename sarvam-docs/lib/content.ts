// Reads the skill folder (single source of truth) at build time. Never writes to it.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

export const SKILL_DIR = path.resolve(process.cwd(), "..", "sarvam-design-system");

export type Doc = {
  section: "foundations" | "components" | "guides";
  slug: string;
  title: string;
  group: string;
  summary: string;
  related: string[];
  raw: string;   // exact markdown the agent reads
  body: string;  // markdown without frontmatter
  file: string;  // path relative to the skill
};

const read = (rel: string) => fs.readFileSync(path.join(SKILL_DIR, rel), "utf8").replace(/\r\n/g, "\n");

function firstHeading(md: string) {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].replace(/^\d+\s*·\s*/, "").trim() : "Untitled";
}
function firstPara(md: string) {
  const lines = md.replace(/^---[\s\S]*?---/, "").split("\n");
  for (const l of lines) {
    const t = l.trim();
    if (!t || t.startsWith("#") || t.startsWith("|") || t.startsWith("```") || t.startsWith(">")) continue;
    return t.replace(/\*\*/g, "").replace(/`/g, "").slice(0, 180);
  }
  return "";
}

export function foundations(): Doc[] {
  return fs.readdirSync(path.join(SKILL_DIR, "foundations"))
    .filter(f => /^\d+-.+\.md$/.test(f)).sort()
    .map(f => {
      const raw = read(`foundations/${f}`);
      const slug = f.replace(/^\d+-/, "").replace(/\.md$/, "");
      return { section: "foundations", slug, title: firstHeading(raw), group: "Foundations",
        summary: firstPara(raw), related: [], raw, body: raw, file: `foundations/${f}` } as Doc;
    });
}

export const COMPONENT_GROUPS = ["Actions", "Inputs", "Display", "Media", "Navigation", "Layout"];

export function components(): Doc[] {
  const dir = path.join(SKILL_DIR, "components", "reference");
  return fs.readdirSync(dir).filter(f => f.endsWith(".md")).map(f => {
    const raw = read(`components/reference/${f}`);
    const { data, content } = matter(raw);
    return { section: "components", slug: data.slug, title: data.title, group: data.group,
      summary: data.summary, related: data.related || [], raw, body: content.trim().replace(/^#\s+.+\n+.+\n/, ""),
      file: `components/reference/${f}` } as Doc;
  }).sort((a, b) => COMPONENT_GROUPS.indexOf(a.group) - COMPONENT_GROUPS.indexOf(b.group) || a.title.localeCompare(b.title));
}

const GUIDES: [string, string, string][] = [
  ["decisions", "DECISIONS.md", "Decision guide"],
  ["social-banners", "formats/social-banners.md", "Social banners"],
  ["web-pages", "formats/web-pages.md", "Web pages"],
  ["interactive", "components/interactive.md", "Interactive patterns"],
  ["skill", "SKILL.md", "SKILL.md (entry point)"],
  ["qa", "checklists/qa.md", "QA checklist"],
];
export function guides(): Doc[] {
  return GUIDES.map(([slug, file, title]) => {
    const raw = read(file);
    const body = raw.replace(/^---[\s\S]*?---\n/, "");
    return { section: "guides", slug, title, group: "Guides", summary: firstPara(body), related: [], raw, body, file } as Doc;
  });
}

export function allDocs() { return [...guides(), ...foundations(), ...components()]; }
export function getDoc(section: Doc["section"], slug: string) {
  return allDocs().find(d => d.section === section && d.slug === slug);
}

export function toc(md: string) {
  const s = new GithubSlugger();
  const out: { id: string; text: string }[] = [];
  let inFence = false;
  for (const line of md.split("\n")) {
    if (line.startsWith("```")) inFence = !inFence;
    if (inFence) continue;
    const m = line.match(/^##\s+(.+)$/);
    if (m) { const text = m[1].replace(/[`*]/g, "").trim(); out.push({ id: s.slug(text), text }); }
  }
  return out;
}
