import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ALL, findItem } from "@/lib/nav";
import { DocPage } from "@/components/docs/doc-page";

export function generateStaticParams() {
  return ALL.filter((i) => i.slug).map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: `${findItem(slug)?.title ?? "Docs"} · Sarvam Design System` };
}

// params are read inside Suspense so navigation stays instant
async function Content({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!findItem(slug)) notFound();
  return <DocPage slug={slug} />;
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <Content params={params} />
    </Suspense>
  );
}
