import { findItem } from "@/lib/nav";
import { getDoc, type DocContent } from "@/lib/content";
import { DocView } from "./doc-view";
import { Sections } from "./sections";
import { Toc, type TocItem } from "./toc";
import { Preview } from "@/components/previews";

function tocFor(doc: DocContent): TocItem[] {
  const s = doc.sections;
  const component = doc.kind === "component";
  const items: TocItem[] = [{ id: "preview", label: component ? "Preview" : "Overview" }];
  if (component) {
    if (s.use.length || s.notFor.length) items.push({ id: "usage", label: "Usage" });
    if (s.rules.length) items.push({ id: "rules", label: "Rules" });
    if (s.a11y.length) items.push({ id: "accessibility", label: "Accessibility" });
  } else if (s.tokens.length) items.push({ id: "tokens", label: "Tokens" });
  if (s.related.length) items.push({ id: "related", label: "Related" });
  return items;
}

export function DocPage({ slug }: { slug: string }) {
  const item = findItem(slug)!;
  const doc = getDoc(item);
  return (
    <>
      <DocView
        doc={doc}
        human={
          <div className="space-y-12">
            <div id="preview" className="scroll-mt-36"><Preview slug={slug} foundation={doc.kind !== "component"} /></div>
            <Sections doc={doc} />
          </div>
        }
      />
      <Toc items={tocFor(doc)} title={`${doc.title}${doc.kind === "component" ? " component" : " guidance"}`} source={doc.source} />
    </>
  );
}
