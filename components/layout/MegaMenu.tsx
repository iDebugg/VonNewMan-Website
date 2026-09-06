"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import type { MenuItem } from "@/types/content";
import { cn } from "@/lib/utils/cn";
import { ExternalHint, externalLinkProps } from "@/components/ui/ExternalHint";
import { ChevronIcon } from "@/components/ui/Icon";

type MegaMenuProps = {
  label: string;
  items: MenuItem[];
  /** Draw a rule before this item index. */
  dividerBefore?: number;
  align?: "left" | "right";
  icon?: ReactNode;
  /** "link" reads as a nav item; "tinted" reads as a soft button. */
  appearance?: "link" | "tinted";
};

/**
 * Disclosure navigation menu (APG pattern): a button that reveals a list of links with
 * descriptions. Click toggles, Escape closes and returns focus, focus leaving closes,
 * arrow keys move between items.
 */
export function MegaMenu({
  label,
  items,
  dividerBefore,
  align = "left",
  icon,
  appearance = "link",
}: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const links = () =>
    Array.from(rootRef.current?.querySelectorAll<HTMLAnchorElement>("a[role='none'] , ul a") ?? []);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" && open) {
      event.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      const all = links();
      if (all.length === 0) return;
      event.preventDefault();
      if (!open) {
        setOpen(true);
        requestAnimationFrame(() => links()[0]?.focus());
        return;
      }
      const index = all.indexOf(document.activeElement as HTMLAnchorElement);
      const next =
        event.key === "ArrowDown"
          ? all[(index + 1) % all.length]
          : all[(index - 1 + all.length) % all.length];
      next?.focus();
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!rootRef.current?.contains(event.relatedTarget as Node)) setOpen(false);
  };

  // Opens on hover for mouse users (client request, 7 September 2026); click and keyboard still
  // work. A short delay on leave stops the panel snapping shut while crossing the gap.
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onPointerEnter = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setOpen(true);
  };
  const onPointerLeave = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    leaveTimer.current = setTimeout(() => setOpen(false), 160);
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex items-center gap-2 text-lede font-semibold whitespace-nowrap transition-colors duration-150",
          appearance === "link" && "rounded-control py-2 text-paper/90 hover:text-paper",
          appearance === "link" && open && "text-paper",
          appearance === "tinted" &&
            "rounded-nav bg-paper/10 px-4 py-2.5 text-paper hover:bg-paper/20 xl:px-5 xl:py-3",
          appearance === "tinted" && open && "bg-paper/20",
        )}
      >
        {icon}
        {label}
        <ChevronIcon
          size={16}
          className={cn(
            "transition-transform duration-150",
            appearance === "link" && !open && "text-paper/60",
            open && "rotate-180",
          )}
        />
      </button>
      <ul
        id={panelId}
        hidden={!open}
        className={cn(
          "absolute top-full z-60 mt-3 w-[22rem] list-none rounded-nav border border-paper/10 bg-ink/90 p-2 text-paper shadow-panel backdrop-blur-xl",
          align === "right" ? "right-0" : "left-0",
        )}
      >
        {items.map((item, index) => (
          <li
            key={item.href + item.label}
            className={cn(dividerBefore === index && "mt-2 border-t border-paper/10 pt-2")}
          >
            <a
              href={item.href}
              {...(item.external ? externalLinkProps : {})}
              onClick={() => setOpen(false)}
              className="block rounded-control px-3 py-2.5 hover:bg-paper/10"
            >
              <span className="flex items-center gap-2 text-body font-semibold text-paper">
                {item.label}
                {item.external ? <ExternalHint /> : null}
              </span>
              <span className="mt-0.5 block text-caption text-paper/70">{item.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
