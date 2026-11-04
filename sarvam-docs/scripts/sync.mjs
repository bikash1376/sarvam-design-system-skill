// Prebuild: copy the skill's public assets into /public (read-only on the skill side)
// and build a font-free zip of the skill for the Install panel.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const SKILL = path.resolve("..", "sarvam-design-system");
const PUB = path.resolve("public");

const copy = (from, to, filter) => fs.cpSync(path.join(SKILL, from), path.join(PUB, to), { recursive: true, filter });
fs.rmSync(path.join(PUB, "assets"), { recursive: true, force: true });
copy("assets", "assets", src => !src.includes(`${path.sep}reference`));
copy("tokens", "tokens");
copy("tools/soft-glow/generator.html", "tools/soft-glow/generator.html");

// font-free zip (paid fonts stay private: share them only via the private repo)
const zip = path.join(PUB, "sarvam-design-system.zip");
fs.rmSync(zip, { force: true });
execFileSync("python", ["-c", `
import zipfile, pathlib, sys
root = pathlib.Path(sys.argv[1]); out = sys.argv[2]
skip = ("node_modules", "out", "__pycache__")
private = (("assets", "fonts"), ("assets", "reference"))
with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
    for p in root.rglob("*"):
        rel = p.relative_to(root)
        if p.is_file() and not any(s in rel.parts for s in skip) and tuple(rel.parts[:2]) not in private:
            z.write(p, pathlib.Path("sarvam-design-system") / rel)
`, SKILL, zip]);
console.log("synced assets + tokens, zip:", (fs.statSync(zip).size / 1024 / 1024).toFixed(1) + "MB");
