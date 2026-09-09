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
type Size = "md" | "sm" | "nav" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-lime text-ink hover:bg-paper",
  secondary: "border border-ink text-ink hover:bg-stone",
  tinted: "bg-brand/10 text-brand hover:bg-brand/15",
  brand: "bg-lime text-ink hover:bg-paper",
  "paper-brand": "bg-paper text-brand hover:bg-brand hover:text-paper",
  glass: "bg-paper/10 text-paper hover:bg-paper/20",
  inverse: "bg-paper text-ink hover:bg-stone",
  "inverse-outline": "border border-paper/70 text-paper hover:border-paper hover:bg-paper/10",
  link: "border border-brand/35 bg-brand/8 text-brand hover:border-brand hover:bg-brand hover:text-paper",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3",
  sm: "px-4 py-2",
  nav: "rounded-nav px-5 py-3 text-[0.875rem] leading-5 font-semibold",
  lg: "rounded-nav px-6 py-3.5 text-body font-semibold",
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
        "inline-flex items-center justify-center gap-2 rounded-full text-label font-bold whitespace-nowrap transition-[background-color,color,transform] duration-150 ease-out-quiet hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        (size === "nav" || size === "lg") && "rounded-nav",
        className,
      )}
    >
      {item.label}
      {item.external ? <ExternalHint /> : null}
    </a>
  );
}
