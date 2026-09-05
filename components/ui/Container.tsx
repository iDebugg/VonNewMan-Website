import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-site px-gutter-narrow sm:px-gutter lg:px-gutter-wide",
        className,
      )}
    >
      {children}
    </div>
  );
}
