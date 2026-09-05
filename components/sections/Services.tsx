import { engagementPanels, practices, services } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <Section id="services" labelledBy="services-heading">
      <SectionHeading
        id="services-heading"
        kicker={services.kicker}
        title={services.headline}
        lede={services.lede}
      />

      <ul className="mt-12 grid list-none border-t border-ink md:grid-cols-2 md:gap-x-12 lg:mt-16">
        {practices.map((practice) => (
          <li key={practice.slug} className="border-b border-line py-6">
            <h3 className="text-title">{practice.title}</h3>
            <p className="mt-2 max-w-[48ch] text-body text-slate">{practice.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {engagementPanels.map((panel) => (
          <div key={panel.title} className="border border-ink p-6 sm:p-7">
            <h3 className="text-subtitle">{panel.title}</h3>
            <p className="mt-2 text-body text-slate">{panel.description}</p>
            <ul className="mt-5 flex list-none flex-wrap text-label font-medium text-ink">
              {panel.items.map((item, index) => (
                <li
                  key={item}
                  className={index === 0 ? "pr-3" : "border-l border-line px-3 last:pr-0"}
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
