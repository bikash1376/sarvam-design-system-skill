import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

type HastNode = { type: string; tagName?: string; value?: string; children?: HastNode[] };
const text = (n?: HastNode): string => !n ? "" : n.type === "text" ? n.value || "" : (n.children || []).map(text).join("");

// Rules render as cards with a Must / Never / Should chip (first <strong> in the bullet).
function ruleKind(node?: HastNode) {
  const kids = (node?.children || []).filter(c => !(c.type === "text" && !c.value?.trim()));
  let first = kids[0];
  if (first?.tagName === "p") first = (first.children || [])[0];
  if (first?.tagName !== "strong") return null;
  const t = text(first).toLowerCase();
  return ["must", "never", "should"].find(k => t === k) || null;
}

export default function Markdown({ source }: { source: string }) {
  return (
    <div className="md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={{
          li({ node, children, ...rest }) {
            const kind = ruleKind(node as unknown as HastNode);
            return <li {...rest} className={kind ? `rule ${kind}` : undefined}>{children}</li>;
          },
          a({ href, children }) {
            const ext = href?.startsWith("http");
            return <a href={href} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}>{children}</a>;
          },
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
