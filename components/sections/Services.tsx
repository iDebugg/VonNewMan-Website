import { practices } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { PracticeIcon } from "@/components/ui/PracticeIcon";
import { reveal } from "@/lib/utils/reveal";

const summaries: Record<string, string> = {
  "software-development": "Custom applications, integrations and workflow automation.",
  "lms-engineering": "Learning platforms, content systems and cloud delivery.",
  doc2video: "Policies and manuals transformed into accessible digital learning.",
  "hr-performance": "Workforce tools that connect performance, skills and learning.",
  cloud: "Cloud architecture, migration, operations and recovery.",
  "network-infrastructure": "Reliable networks, identity and end-user infrastructure.",
  cybersecurity: "Secure architecture, access control and audit-ready delivery.",
  "advanced-technology": "Applied AI, data platforms and specialist engineering.",
};

const accents = ["bg-sage", "bg-sky", "bg-lilac", "bg-clay"];

export function Services() {
  return (
    <Section id="services" labelledBy="services-heading">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" {...reveal()}>
          <h2 id="services-heading" className="font-display text-display-2">
            Consulting and engineering across your digital estate.
          </h2>
          <p className="mt-6 max-w-[34rem] text-lede text-slate">
            Strategy, software, learning and infrastructure delivered as one joined-up practice.
          </p>
        </div>
        <ul className="grid list-none gap-px overflow-hidden rounded-bar bg-ink/15 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {practices.map((practice, index) => (
            <li
              key={practice.slug}
              {...reveal(index, 45)}
              className="group min-h-52 bg-paper p-7 transition-colors duration-300 hover:bg-stone"
            >
              <span
                className={`grid size-14 place-items-center rounded-full ${accents[index % accents.length]} text-brand`}
              >
                <PracticeIcon slug={practice.slug} size={28} />
              </span>
              <h3 className="mt-8 text-title font-bold">{practice.title}</h3>
              <p className="mt-2 max-w-[34ch] text-body text-slate">{summaries[practice.slug]}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 flex flex-wrap gap-3 border-t border-ink/15 pt-7 text-label font-bold">
        {["Fixed scope", "Managed services", "Licensing", "Team augmentation"].map((item) => (
          <span key={item} className="rounded-full bg-stone px-4 py-2">
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
