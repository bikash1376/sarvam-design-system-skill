export type NavItem = { title: string; slug: string; group: string; file?: string };

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// group → items. `file` maps an item to its source markdown in the skill (relative to sarvam-design-system/).
const groups: [string, (string | [string, string])[]][] = [
  ["Sarvam", [["Introduction", "SKILL.md"]]],
  ["Foundations", [
    ["Color", "foundations/02-color.md"],
    ["Typography", "foundations/03-typography.md"],
    ["Space", "foundations/04-layout-grid-responsive.md"],
    ["Radius", "foundations/05-radius-elevation-surfaces.md"],
    ["Borders and lines", "foundations/05-radius-elevation-surfaces.md"],
    ["Elevation", "foundations/05-radius-elevation-surfaces.md"],
    ["Motion", "foundations/10-motion.md"],
    ["Iconography", "foundations/08-iconography.md"],
    ["Grid", "foundations/04-layout-grid-responsive.md"],
    ["Anti-slop", "foundations/12-anti-slop.md"],
  ]],
  ["Brand", [
    ["Brand essence", "foundations/01-brand-essence.md"],
    ["Logo usage", "foundations/11-logo-usage.md"],
    ["Motifs and glyphs", "foundations/07-motifs-and-glyphs.md"],
    ["Gradients and light", "foundations/06-gradients-and-light.md"],
    ["Soft glow surfaces", "foundations/14-soft-glow-surfaces.md"],
    ["Glyph colour depth", "foundations/15-glyph-color-depth.md"],
    ["Mandala background", "foundations/17-mandala-background.md"],
    ["Imagery", "foundations/09-imagery.md"],
    ["Voice and tone", "foundations/13-voice-and-tone.md"],
    ["Copywriting", "foundations/16-copywriting.md"],
  ]],
  ["Actions", [["Button", "components/reference/button.md"], "Button group", "Icon button", ["Copy button", "components/reference/copy-button.md"]]],
  ["Inputs", ["Input", "Textarea", "Field", "Date picker", "Combobox"]],
  ["Selection", ["Checkbox", "Radio group", "Switch", "Slider", ["Select", "components/reference/language-select.md"], ["Segmented control", "components/reference/segmented.md"]]],
  ["Display", [
    ["Badge", "components/reference/badge.md"], ["Chip", "components/reference/tag.md"], "Status",
    ["Stat", "components/reference/stat.md"], "Avatar", "Kbd", "Relative time", "Truncate", "Item",
    ["Card", "components/reference/feature-card.md"], ["Panel", "components/reference/glow-card.md"], "Data list",
  ]],
  ["Feedback", ["Alert", "Toast", "Empty state", "Skeleton", "Progress"]],
  ["Overlays", ["Dialog", "Sheet", "Popover", "Tooltip", "Dropdown menu", "Command"]],
  ["Navigation", ["Navbar", "Mega menu", "Tabs", "Breadcrumb", "Pagination", "Footer"]],
  ["Marketing", ["Eyebrow", "Section header", "Pillar list", "Testimonial", "Logo marquee", "Integration card", ["CTA banner", "components/reference/cta-panel.md"]]],
  ["Layout", ["Collapsible"]],
  ["Data", ["Table", "Filter bar", "Timeline", "Data grid"]],
  ["Code", [["Code block", "components/reference/code-block.md"], "JSON view", "Log viewer"]],
  ["Media and charts", ["Audio player", "Attachment", "Chart"]],
  ["Animations", ["Animations"]],
  ["AI", ["Message", "Conversation", "Response", "Reasoning", "Tool call", "Activity", ["Prompt input", "components/reference/composer.md"]]],
  ["Formats", [
    ["Social banners", "formats/social-banners.md"],
    ["Embed images", "formats/embed-images.md"],
    ["Hero layouts", "formats/hero-layouts.md"],
    ["Web pages", "formats/web-pages.md"],
  ]],
];

export const DOC_GROUPS = new Set(["Sarvam", "Foundations", "Brand", "Formats"]); // prose pages, not components

export const NAV: { group: string; items: NavItem[] }[] = groups.map(([group, items]) => ({
  group,
  items: items.map((it) => {
    const [title, file] = typeof it === "string" ? [it, undefined] : it;
    const slug = title === "Introduction" ? "" : slugify(title);
    // components without an explicit mapping live at components/reference/<slug>.md
    return { title, slug, group, file: file ?? (DOC_GROUPS.has(group) ? undefined : `components/reference/${slug}.md`) };
  }),
}));

export const ALL = NAV.flatMap((g) => g.items);
export const findItem = (slug: string) => ALL.find((i) => i.slug === slug);
export const hrefOf = (i: NavItem) => (i.slug ? `/${i.slug}` : "/");
