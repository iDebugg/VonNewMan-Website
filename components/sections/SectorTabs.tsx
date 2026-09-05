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
      <div role="tablist" aria-label={label} className="flex gap-8 border-b border-line">
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
                "-mb-px border-b-2 pb-3 text-label font-medium transition-colors duration-150",
                selected ? "border-brand text-ink" : "border-transparent text-slate hover:text-ink",
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
            <ButtonLink item={panel.cta} variant="secondary" className="mt-7" />
          </div>
          <ul className="list-none border-t border-ink">
            {panel.items.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 border-b border-line py-5"
              >
                <h4 className="text-subtitle">{item.title}</h4>
                <span className="text-label text-brand">{item.tag}</span>
                <p className="col-span-2 text-body text-slate">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
