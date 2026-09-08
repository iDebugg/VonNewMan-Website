"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SystemVisual } from "@/components/case-studies/SystemVisual";
import { systems, systemsShowcase } from "@/lib/content";
import { reveal } from "@/lib/utils/reveal";

export function SystemsShowcase() {
  const railRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const moveTo = useCallback((index: number) => {
    const rail = railRef.current;
    const card = rail?.children.item(index) as HTMLElement | null;
    if (!rail || !card) return;
    rail.scrollTo({ left: card.offsetLeft - rail.offsetLeft, behavior: "smooth" });
    setActive(index);
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => moveTo((active + 1) % systems.length), 4600);
    return () => window.clearInterval(timer);
  }, [active, moveTo, paused]);

  return (
    <div className="mt-20 border-t border-ink pt-12" aria-labelledby="systems-heading">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7" {...reveal()}>
          <p className="flex items-center gap-3 text-label font-bold tracking-[0.12em] uppercase">
            <span aria-hidden="true" className="size-3 rounded-full bg-ink" />
            Selected work
          </p>
          <h3 id="systems-heading" className="mt-5 font-display text-display-2">
            {systemsShowcase.headline}
          </h3>
        </div>
        <div className="lg:col-span-4 lg:col-start-9" {...reveal(1)}>
          <p className="max-w-[46ch] text-body text-slate">{systemsShowcase.intro}</p>
          <Link
            href="/case-studies"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-forest px-5 py-3 text-label font-bold text-paper transition-transform hover:-translate-y-0.5"
          >
            View all <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div
        className="mt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <ul
          ref={railRef}
          aria-label="Selected systems"
          className="flex snap-x snap-mandatory list-none gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {systems.map((system, index) => (
            <li
              key={system.slug}
              className="w-[86%] shrink-0 snap-start sm:w-[62%] lg:w-[38%]"
              {...reveal(index, 45)}
            >
              <article className="group h-full overflow-hidden border border-ink/10 bg-paper">
                <SystemVisual
                  system={system}
                  className="aspect-[16/8]"
                  imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="px-5 py-5 sm:px-6">
                  <h4 className="text-title-lg">{system.title}</h4>
                  <Link
                    href={`/case-studies#${system.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-label font-bold text-brand underline-offset-4 hover:underline"
                  >
                    <span aria-hidden="true" className="size-2 rounded-full border border-brand" />
                    View Project <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-2 flex justify-center">
          <div className="flex items-center gap-2" aria-label="Choose a system">
            {systems.map((system, index) => (
              <button
                key={system.slug}
                type="button"
                aria-label={`Show ${system.title}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => moveTo(index)}
                className={`h-1.5 rounded-full transition-[width,background-color] ${
                  active === index ? "w-10 bg-brand" : "w-4 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
