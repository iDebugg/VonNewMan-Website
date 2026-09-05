import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Container } from "./Container";

type Ground = "paper" | "stone" | "forest" | "ink";

const grounds: Record<Ground, string> = {
  paper: "bg-paper text-ink",
  stone: "bg-stone text-ink",
  forest: "bg-forest text-paper",
  ink: "bg-ink text-paper",
};

type SectionProps = {
  id?: string;
  ground?: Ground;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

/**
 * A page section. Dark grounds set data-ground so the focus ring switches to paper
 * (design plan, focus tokens).
 */
export function Section({ id, ground = "paper", labelledBy, className, children }: SectionProps) {
  const dark = ground === "forest" || ground === "ink";
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-ground={dark ? "dark" : undefined}
      className={cn(
        "scroll-mt-[calc(var(--spacing-header)+2*var(--spacing-header-inset))] py-[clamp(4rem,8vw,7rem)]",
        grounds[ground],
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
