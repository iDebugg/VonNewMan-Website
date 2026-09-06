import { engagementPanels, practices, services } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PracticeIcon } from "@/components/ui/PracticeIcon";

/**
 * Eight practice areas as compact outlined tiles, then the two engagement panels as one forest
 * band beneath (client direction, 7 September 2026).
 */
export function Services() {
  return (
    <Section id="services" labelledBy="services-heading">
      <SectionHeading
        id="services-heading"
        kicker={services.kicker}
        title={services.headline}
        lede={services.lede}
      />

      <ul className="mt-12 grid list-none gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {practices.map((practice) => (
          <li
            key={practice.slug}
            className="group border border-ink/30 bg-paper p-6 transition-colors duration-200 ease-out-quiet hover:border-brand lg:p-7"
          >
            <PracticeIcon
              slug={practice.slug}
              className="text-slate transition-colors duration-200 group-hover:text-brand"
            />
            <h3 className="mt-6 text-subtitle uppercase tracking-[0.12em]">{practice.title}</h3>
            <div className="mt-4 h-px bg-ink/50" aria-hidden="true" />
            <p className="mt-4 text-label text-slate">{practice.description}</p>
          </li>
        ))}
      </ul>

      <div
        data-ground="dark"
        className="mt-10 grid overflow-hidden rounded-nav bg-forest text-paper md:grid-cols-2 md:divide-x md:divide-line-dark lg:mt-12"
      >
        {engagementPanels.map((panel) => (
          <div key={panel.title} className="p-8 lg:p-10">
            <h3 className="text-title-lg">{panel.title}</h3>
            <p className="mt-3 text-body text-paper/80">{panel.description}</p>
            <ul className="mt-6 flex list-none flex-wrap gap-2">
              {panel.items.map((item) => (
                <li
                  key={item}
                  className="rounded-control border border-paper/30 px-3 py-1.5 text-label font-medium text-paper"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
