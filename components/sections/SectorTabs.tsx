"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { SectorPanel } from "@/lib/content";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

type SectorTabsProps = {
  label: string;
  panels: SectorPanel[];
};

/**
 * ARIA tablist with automatic activation: roving tabindex, Left/Right/Home/End, aria-selected,
 * and both panels always in the DOM (the inactive one is hidden).
 */
export function SectorTabs({ label, panels }: SectorTabsProps) {
  const [active, setActive] = useState(panels[0]?.id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activate = (index: number) => {
    const panel = panels[index];
    if (!panel) return;
    setActive(panel.id);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = panels.length - 1;
    const map: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    const next = map[event.key];
    if (next === undefined) return;
    event.preventDefault();
    activate(next);
  };

  return (
    <div>
      {/* Pill switcher: the selected sector is solid brand green. */}
      <div
        role="tablist"
        aria-label={label}
        className="inline-flex rounded-nav border border-line bg-paper p-1"
      >
        {panels.map((panel, index) => {
          const selected = panel.id === active;
          return (
            <button
              key={panel.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`tab-${panel.id}`}
              aria-selected={selected}
              aria-controls={`panel-${panel.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(panel.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={cn(
                "rounded-control px-5 py-2.5 text-label font-medium transition-colors duration-150",
                selected ? "bg-brand text-paper" : "text-slate hover:text-ink",
              )}
            >
              {panel.tab}
            </button>
          );
        })}
      </div>

      {panels.map((panel) => (
        <div
          key={panel.id}
          role="tabpanel"
          id={`panel-${panel.id}`}
          aria-labelledby={`tab-${panel.id}`}
          hidden={panel.id !== active}
          tabIndex={0}
          data-ground="dark"
          className="mt-8 grid gap-10 rounded-nav bg-forest p-7 text-paper sm:p-9 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-12 lg:p-10"
        >
          <div className="min-w-0">
            <h3 className="text-title-lg">{panel.heading}</h3>
            <p className="mt-4 text-lede text-paper/80">{panel.lede}</p>
            <ButtonLink
              item={panel.cta}
              variant="paper-brand"
              size="nav"
              className="mt-7 max-w-full whitespace-normal text-center"
            />
            <div className="relative mt-8 aspect-[2/1] overflow-hidden rounded-nav border border-paper/15">
              <Image
                src={panel.image.src}
                alt={panel.image.alt}
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover object-left-top"
              />
            </div>
          </div>
          {/* The four items as white tiles, the Atlas / Software / Sonar / Delivery tag in the corner. */}
          <ul className="grid min-w-0 list-none content-start gap-4 sm:grid-cols-2">
            {panel.items.map((item) => (
              <li key={item.title} className="relative rounded-control bg-paper p-5 pt-6 text-ink">
                <span className="absolute top-4 right-4 rounded-control bg-brand/10 px-2 py-0.5 text-caption font-medium text-brand">
                  {item.tag}
                </span>
                <h4 className="pr-20 text-subtitle">{item.title}</h4>
                <p className="mt-2 text-label text-slate">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
