"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { SectorPanel } from "@/lib/content";
import { cn } from "@/lib/utils/cn";
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
          className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <h3 className="text-title-lg">{panel.heading}</h3>
            <p className="mt-4 text-lede text-slate">{panel.lede}</p>
            <ButtonLink item={panel.cta} className="mt-7" />
          </div>
          {/* The four items as compact tiles, the Atlas / Software / Sonar / Delivery tag in the corner. */}
          <ul className="grid list-none gap-4 sm:grid-cols-2">
            {panel.items.map((item) => (
              <li
                key={item.title}
                className="relative border border-ink/20 bg-paper p-5 pt-6 transition-colors duration-200 ease-out-quiet hover:border-brand"
              >
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
