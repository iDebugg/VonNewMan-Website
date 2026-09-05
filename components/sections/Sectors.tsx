import type { CSSProperties } from "react";
import {
  financialBlocks,
  financialServices,
  pilotPhases,
  sectorPanels,
  sectors,
} from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectorTabs } from "./SectorTabs";

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

        <dl className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {financialBlocks.map((block) => (
            <div key={block.label} className="border-t border-ink pt-4">
              <dt className="text-label text-slate">{block.label}</dt>
              <dd className="mt-3">
                <p className="text-subtitle">{block.title}</p>
                <p className="mt-2 text-body text-slate">{block.description}</p>
              </dd>
            </div>
          ))}
        </dl>

        {/* Proportional timeline: column widths are the phase durations in weeks. */}
        <div className="mt-16">
          <div
            aria-hidden="true"
            className="hidden h-2 sm:grid"
            style={{ gridTemplateColumns: `repeat(${totalWeeks}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: totalWeeks }, (_, week) => (
              <span key={week} className="border-l border-line last:border-r" />
            ))}
          </div>
          <ol
            className="grid list-none gap-8 border-l-2 border-line pl-5 sm:grid-cols-[repeat(var(--weeks),minmax(0,1fr))] sm:gap-x-6 sm:border-l-0 sm:pl-0"
            style={{ "--weeks": totalWeeks } as CSSProperties}
          >
            {pilotPhases.map((phase) => (
              <li
                key={phase.title}
                className="sm:[grid-column:span_var(--span)] sm:border-t-2 sm:border-ink sm:pt-4"
                style={{ "--span": phase.duration } as CSSProperties}
              >
                <p className="text-label text-slate">{phase.weeks}</p>
                <h3 className="mt-2 text-subtitle">{phase.title}</h3>
                <p className="mt-1 text-body text-slate">{phase.description}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-8 max-w-[70ch] text-body text-slate">{financialServices.closing}</p>
      </div>
    </Section>
  );
}
