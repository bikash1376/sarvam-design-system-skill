import { notFound } from "next/navigation";
import Link from "next/link";
import Shell from "@/components/Shell";
import Markdown from "@/components/Markdown";
import DocView from "@/components/DocView";
import { Preview } from "@/components/Previews";
import { allDocs, getDoc, toc, type Doc } from "@/lib/content";

export const dynamicParams = false;
export function generateStaticParams() {
  return allDocs().map(d => ({ section: d.section, slug: d.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ section: Doc["section"]; slug: string }> }) {
  const { section, slug } = await params;
  const d = getDoc(section, slug);
  return { title: d?.title, description: d?.summary };
}

export default async function Page({ params }: { params: Promise<{ section: Doc["section"]; slug: string }> }) {
  const { section, slug } = await params;
  const doc = getDoc(section, slug);
  if (!doc) notFound();
  const previewId = section === "components" ? slug : section === "foundations" ? `f:${slug}` : "";
  const items = toc(doc.body);
  const docs = allDocs();
  const related = doc.related.map(r => docs.find(d => d.section === "components" && d.slug === r)).filter(Boolean) as Doc[];

  const human = (
    <>
      <p className="crumb">{doc.section === "components" ? `Components · ${doc.group}` : doc.group}</p>
      <h1 className="title">{doc.title}</h1>
      {doc.summary && <p className="summary">{doc.summary}</p>}
      {previewId && <Preview id={previewId} />}
      <Markdown source={doc.body} />
      {related.length > 0 && (
        <div className="md"><h2 id="related">Related</h2>
          <div className="indexgrid">{related.map(r => <Link key={r.slug} href={`/components/${r.slug}/`}><b>{r.title}</b><span>{r.summary}</span></Link>)}</div></div>
      )}
    </>
  );

  return (
    <Shell current={{ section, slug }} tocItems={items}>
      <DocView human={human} agent={doc.raw} file={`sarvam-design-system/${doc.file}`} />
    </Shell>
  );
}
