import type { CSSProperties } from "react";
import {
  financialBlocks,
  financialServices,
  pilotPhases,
  sectorPanels,
  sectors,
} from "@/lib/content";
import { cn } from "@/lib/utils/cn";
import { Section } from "@/components/ui/Section";
import { FinancialIcon } from "@/components/ui/FinancialIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectorTabs } from "./SectorTabs";
import { reveal } from "@/lib/utils/reveal";

const totalWeeks = pilotPhases.reduce((sum, phase) => sum + phase.duration, 0);

export function Sectors() {
  return (
    <Section id="sectors" ground="stone" labelledBy="sectors-heading">
      <SectionHeading id="sectors-heading" title={sectors.headline} lede={sectors.lede} />
      <div className="mt-12 lg:mt-16">
        <SectorTabs label={sectors.tablistLabel} panels={sectorPanels} />
      </div>

      {/* Financial services: a sector focus inside the sectors section, as in the source. */}
      <div className="mt-20 border-t border-ink pt-14 lg:mt-24">
        <SectionHeading
          id="financial-services-heading"
          kicker={`${financialServices.kicker.primary}: ${financialServices.kicker.secondary}`}
          title={financialServices.headline}
        />

        {/* Four blocks as tiles with the tinted icon square. */}
        <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {financialBlocks.map((block, index) => (
            <div
              key={block.label}
              {...reveal(index)}
              className="group border border-ink/20 bg-paper p-6 transition-colors duration-200 ease-out-quiet hover:border-brand"
            >
              <span className="grid size-12 place-items-center rounded-nav bg-brand/10 text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-paper">
                <FinancialIcon label={block.label} />
              </span>
              <dt className="mt-5 text-label text-brand">{block.label}</dt>
              <dd className="mt-1">
                <p className="text-subtitle">{block.title}</p>
                <p className="mt-2 text-label text-slate">{block.description}</p>
              </dd>
            </div>
          ))}
        </dl>

        {/* Pilot timeline: three green segments sized to the weeks (4, 6 and 3), the phase beneath. */}
        <ol
          className="mt-14 grid list-none gap-6 sm:grid-cols-[repeat(var(--weeks),minmax(0,1fr))] sm:gap-x-3"
          style={{ "--weeks": totalWeeks } as CSSProperties}
        >
          {pilotPhases.map((phase, index) => (
            <li
              key={phase.title}
              data-reveal=""
              className="sm:[grid-column:span_var(--span)]"
              style={
                { "--span": phase.duration, "--reveal-delay": `${index * 120}ms` } as CSSProperties
              }
            >
              <p className="text-label font-medium text-ink">{phase.weeks}</p>
              <div
                aria-hidden="true"
                className={cn(
                  "mt-3 h-2.5 rounded-full bg-brand",
                  index === 0 && "opacity-60",
                  index === 1 && "opacity-80",
                )}
              />
              <h3 className="mt-4 text-subtitle">{phase.title}</h3>
              <p className="mt-1 text-label text-slate">{phase.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-[70ch] text-body text-slate">{financialServices.closing}</p>
      </div>
    </Section>
  );
}
