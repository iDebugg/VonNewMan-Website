import Image from "next/image";
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

const serviceMeta = [
  {
    label: "In-house engineering",
    surface: "bg-ink text-paper",
    icon: "bg-lime text-ink",
    muted: "text-paper/70",
  },
  {
    label: "Atlas capability",
    surface: "bg-lilac text-ink",
    icon: "bg-paper text-brand",
    muted: "text-slate",
  },
  {
    label: "Content studio",
    surface: "bg-clay text-ink",
    icon: "bg-paper text-brand",
    muted: "text-slate",
  },
  {
    label: "Workforce systems",
    surface: "bg-sky text-ink",
    icon: "bg-paper text-brand",
    muted: "text-slate",
  },
  {
    label: "Cloud practice",
    surface: "bg-sage text-ink",
    icon: "bg-paper text-brand",
    muted: "text-slate",
  },
  {
    label: "Managed infrastructure",
    surface: "bg-forest text-paper",
    icon: "bg-lime text-ink",
    muted: "text-paper/70",
  },
  {
    label: "Security practice",
    surface: "bg-sky text-ink",
    icon: "bg-paper text-brand",
    muted: "text-slate",
  },
  {
    label: "Applied innovation",
    surface: "bg-lilac text-ink",
    icon: "bg-paper text-brand",
    muted: "text-slate",
  },
];

const engagementModels = ["Fixed scope", "Managed services", "Licensing", "Team augmentation"];

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

        <ul className="grid list-none gap-4 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {practices.map((practice, index) => {
            const meta = serviceMeta[index]!;
            return (
              <li
                key={practice.slug}
                {...reveal(index, 45)}
                className={`group flex min-h-64 flex-col overflow-hidden rounded-bar p-7 transition-[transform,box-shadow] duration-300 ease-out-quiet hover:-translate-y-1 hover:shadow-panel ${meta.surface}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`grid size-12 place-items-center rounded-nav transition-transform duration-300 ease-out-quiet group-hover:-rotate-6 ${meta.icon}`}
                  >
                    <PracticeIcon slug={practice.slug} size={27} />
                  </span>
                  <span className={`text-caption font-bold ${meta.muted}`}>{meta.label}</span>
                </div>
                <div className="mt-auto pt-10">
                  <h3 className="text-title font-bold">{practice.title}</h3>
                  <p className={`mt-3 max-w-[34ch] text-body ${meta.muted}`}>
                    {summaries[practice.slug]}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <figure className="relative mt-16 min-h-[28rem] overflow-hidden rounded-bar" {...reveal()}>
        <Image
          src="/assets/capabilities-consulting.jpg"
          alt="Engineers and a client reviewing enterprise infrastructure together"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,20,17,.92)_0%,rgba(6,20,17,.64)_42%,rgba(6,20,17,.08)_72%)]"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-7 text-paper sm:p-10 lg:max-w-[42rem] lg:p-12">
          <p className="font-display text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.03] font-bold tracking-[-.03em]">
            We advise, build and operate the systems your organisation depends on.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {engagementModels.map((item) => (
              <span
                key={item}
                className="rounded-full border border-paper/30 bg-ink/25 px-4 py-2 text-caption font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        </figcaption>
      </figure>
    </Section>
  );
}
