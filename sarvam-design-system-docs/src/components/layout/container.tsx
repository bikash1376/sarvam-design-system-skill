import { cn } from "@/lib/utils";

/** Site-wide container: 1416px max content width, centred, 24px gutters (16px on mobile). Use on every page. */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("container-site", className)} {...props} />;
}
