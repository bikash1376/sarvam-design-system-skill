// Copies the skill's fonts, icons, glyphs and tokens into this site. Read-only on the skill side.
// Runs before `dev` and `build`.
import fs from "node:fs";
import path from "node:path";

const SKILL = path.resolve("..", "sarvam-design-system");
const PUB = path.resolve("public", "skill");

fs.rmSync(PUB, { recursive: true, force: true });
for (const dir of ["fonts", "icons", "icons-solid", "icons-depth", "glyphs", "glyphs-depth", "logos", "mandala", "motifs", "glows", "embeds"]) {
  const from = path.join(SKILL, "assets", dir);
  if (fs.existsSync(from)) fs.cpSync(from, path.join(PUB, dir), { recursive: true });
}

// tokens.css → src/styles/sarvam-tokens.css with font urls pointing at /skill/fonts
// scoped to .sarvam (not :root) so the docs chrome never shifts
const css = fs.readFileSync(path.join(SKILL, "tokens", "tokens.css"), "utf8").replaceAll("../assets/fonts/", "/skill/fonts/").replaceAll(":root", ".sarvam");
fs.mkdirSync(path.resolve("src", "styles"), { recursive: true });
fs.writeFileSync(path.resolve("src", "styles", "sarvam-tokens.css"), "/* GENERATED from sarvam-design-system/tokens/tokens.css by scripts/sync-skill.mjs. Do not edit. */\n" + css);

// icon manifest for the Iconography page
const list = (d) => fs.existsSync(path.join(PUB, d)) ? fs.readdirSync(path.join(PUB, d)).filter((f) => f.endsWith(".svg")) : [];
fs.writeFileSync(path.resolve("src", "styles", "skill-assets.json"),
  JSON.stringify({ icons: list("icons"), iconsSolid: list("icons-solid"), iconsDepth: list("icons-depth"), glyphs: list("glyphs") }, null, 2));
console.log("synced skill assets + tokens");
