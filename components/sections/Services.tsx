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

      {/* Practice areas as a two-column list: icon square, title and text, hairline between rows. */}
      <ul className="mt-10 grid list-none border-t border-line md:grid-cols-2 md:gap-x-12 lg:mt-14">
        {practices.map((practice) => (
          <li
            key={practice.slug}
            className="group flex gap-5 border-b border-line py-6 lg:gap-6 lg:py-7"
          >
            <span className="grid size-14 shrink-0 place-items-center rounded-nav bg-brand/10 text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-paper">
              <PracticeIcon slug={practice.slug} size={30} strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="text-title">{practice.title}</h3>
              <p className="mt-2 text-body text-slate">{practice.description}</p>
            </div>
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
