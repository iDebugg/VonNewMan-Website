import Image from "next/image";
import { practices } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { PracticeIcon } from "@/components/ui/PracticeIcon";
import { reveal } from "@/lib/utils/reveal";

const summaries: Record<string, string> = {
  "software-development":
    "Build applications, connect existing systems and automate manual workflows.",
  "lms-engineering":
    "Build and adapt platforms to manage courses, deliver training and track learning.",
  doc2video: "Turn policies and manuals into digital learning that staff can understand and use.",
  "hr-performance":
    "Connect employee performance, skills and learning in workforce management tools.",
  cloud: "Plan cloud architecture, migrate systems and support operations and recovery.",
  "network-infrastructure":
    "Design and manage networks, identity systems and the technology staff use every day.",
  cybersecurity:
    "Strengthen system design, control access and prepare technical evidence for audits.",
  "advanced-technology": "Apply AI and data platforms to defined business problems.",
};

const serviceMeta = [
  {
    label: "APPLICATIONS AND INTEGRATION",
    surface: "bg-ink text-paper",
    icon: "bg-lime text-ink",
    muted: "text-paper/70",
  },
  {
    label: "LEARNING PLATFORMS",
    surface: "bg-lilac text-ink",
    icon: "bg-paper text-brand",
    muted: "text-slate",
  },
  {
    label: "DIGITAL LEARNING CONTENT",
    surface: "bg-clay text-ink",
    icon: "bg-paper text-brand",
    muted: "text-slate",
  },
  {
    label: "PEOPLE AND PERFORMANCE",
    surface: "bg-sky text-ink",
    icon: "bg-paper text-brand",
    muted: "text-slate",
  },
  {
    label: "CLOUD DELIVERY",
    surface: "bg-sage text-ink",
    icon: "bg-paper text-brand",
    muted: "text-slate",
  },
  {
    label: "NETWORKS AND WORKPLACE IT",
    surface: "bg-forest text-paper",
    icon: "bg-lime text-ink",
    muted: "text-paper/70",
  },
  {
    label: "SECURITY AND ACCESS",
    surface: "bg-sky text-ink",
    icon: "bg-paper text-brand",
    muted: "text-slate",
  },
  {
    label: "AI AND DATA",
    surface: "bg-lilac text-ink",
    icon: "bg-paper text-brand",
    muted: "text-slate",
  },
];

const engagementModels = [
  "Fixed-scope projects",
  "Managed services",
  "Product licensing",
  "Team augmentation",
];

export function Services() {
  return (
    <Section id="services" labelledBy="services-heading">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" {...reveal()}>
          <h2 id="services-heading" className="font-display text-display-2">
            Technology services for day-to-day operations and long-term change.
          </h2>
          <p className="mt-6 max-w-[34rem] text-lede text-slate">
            Build software, connect systems, deliver staff learning and strengthen the
            infrastructure your organisation relies on.
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
                    className={`grid size-12 place-items-center rounded-nav transition-transform duration-300 ease-out-quiet group-hover:-rotate-12 group-hover:scale-110 ${meta.icon}`}
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
          alt="Team reviewing infrastructure requirements"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,20,17,.92)_0%,rgba(6,20,17,.64)_42%,rgba(6,20,17,.08)_72%)]"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-7 text-paper sm:p-10 lg:max-w-[46rem] lg:p-12">
          {/* Client wording, 8 September 2026, in the site's British spelling. Longer sentence,
              so the size steps down from the previous statement. */}
          <p className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.15] font-bold tracking-[-.02em]">
            Choose a defined project, ongoing support, product licensing or additional delivery
            capacity to match your procurement needs.
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
