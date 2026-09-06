import type { ReactNode } from "react";
import type { LinkItem } from "@/types/content";
import { cn } from "@/lib/utils/cn";
import { ExternalHint, externalLinkProps } from "./ExternalHint";

type Variant =
  | "primary"
  | "secondary"
  | "tinted"
  | "brand"
  | "paper-brand"
  | "glass"
  | "inverse"
  | "inverse-outline"
  | "link";
type Size = "md" | "sm" | "nav";

const variants: Record<Variant, string> = {
  primary: "bg-forest text-paper hover:bg-ink",
  secondary: "border border-ink text-ink hover:bg-stone",
  tinted: "bg-brand/10 text-brand hover:bg-brand/15",
  brand: "bg-brand text-paper hover:bg-paper hover:text-ink",
  "paper-brand": "bg-paper text-brand hover:bg-brand hover:text-paper",
  glass: "bg-paper/10 text-paper hover:bg-paper/20",
  inverse: "bg-paper text-ink hover:bg-stone",
  "inverse-outline": "border border-paper/70 text-paper hover:border-paper hover:bg-paper/10",
  link: "px-0 text-brand underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3",
  sm: "px-4 py-2",
  nav: "rounded-nav px-5 py-3 text-body font-semibold",
};

type ButtonLinkProps = {
  item: LinkItem;
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
};

/** Every call to action on the site is a link. Buttons are reserved for real form submits. */
export function ButtonLink({ item, variant = "primary", size = "md", className }: ButtonLinkProps) {
  return (
    <a
      href={item.href}
      {...(item.external ? externalLinkProps : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-control text-label font-semibold whitespace-nowrap transition-colors duration-150 ease-out-quiet",
        variants[variant],
        variant === "link" ? "py-3" : sizes[size],
        size === "nav" && "rounded-nav",
        className,
      )}
    >
      {item.label}
      {item.external ? <ExternalHint /> : null}
    </a>
  );
}
