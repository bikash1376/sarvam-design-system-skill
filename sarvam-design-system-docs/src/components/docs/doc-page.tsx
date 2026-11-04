import { findItem } from "@/lib/nav";
import { getDoc } from "@/lib/content";
import { DocView } from "./doc-view";
import { Sections } from "./sections";
import { Preview } from "@/components/previews";

export function DocPage({ slug }: { slug: string }) {
  const doc = getDoc(findItem(slug)!);
  return (
    <DocView
      doc={doc}
      human={
        <div className="space-y-12">
          <Preview slug={slug} foundation={doc.kind !== "component"} />
          <Sections doc={doc} />
        </div>
      }
    />
  );
}
