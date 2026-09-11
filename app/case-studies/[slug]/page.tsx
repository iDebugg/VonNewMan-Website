import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SystemVisual } from "@/components/case-studies/SystemVisual";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/Icon";
import { systems } from "@/lib/content";
import { cn } from "@/lib/utils/cn";
import { reveal } from "@/lib/utils/reveal";

type PageProps = { params: Promise<{ slug: string }> };

const capabilityTones = [
  { surface: "bg-lilac", accent: "bg-violet" },
  { surface: "bg-sage", accent: "bg-lime" },
  { surface: "bg-sky", accent: "bg-cyan" },
  { surface: "bg-clay", accent: "bg-coral" },
] as const;

export function generateStaticParams() {
  return systems.map((system) => ({ slug: system.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const system = systems.find((item) => item.slug === slug);
  if (!system) return {};
  return {
    title: `${system.title} case study | Von Newman`,
    description: system.caseStudy.heroLead,
  };
}

function SectionLabel({ number, children }: { number: number; children: string }) {
  return (
    <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
      {String(number).padStart(2, "0")} · {children}
    </p>
  );
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const system = systems.find((item) => item.slug === slug);
  if (!system) notFound();
  const content = system.caseStudy;
  const hasWorkflow = Boolean(content.workflow);
  const capabilityNumber = hasWorkflow ? 4 : 3;
  const roleNumber = capabilityNumber + 1;
  const outcomesNumber = roleNumber + 1;
  const evidenceNumber = outcomesNumber + 1;
  const relatedSystems = content.related
    .map((relatedSlug) => systems.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof systems)[number] => Boolean(item));

  return (
    <>
      <SiteHeader subpage />
      <main id="top" className="flex-1 pt-header">
        <article>
          <header className="relative flex min-h-[calc(100svh-var(--spacing-header))] items-center overflow-hidden bg-forest px-gutter-narrow py-20 text-paper sm:px-gutter lg:px-gutter-wide">
            <div className="absolute inset-0" aria-hidden="true">
              <SystemVisual
                system={{ ...system, image: system.carouselImage ?? system.image }}
                priority
                className="size-full"
                imageClassName="hero-image scale-[1.04] object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-forest/94" aria-hidden="true" />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,42,33,.58)_0%,rgba(16,42,33,.24)_48%,rgba(16,42,33,.7)_100%)]"
              aria-hidden="true"
            />
            <div className="relative z-10 mx-auto w-full max-w-site">
              <div className="case-hero-copy mx-auto max-w-[64rem] text-center">
                <p className="text-label font-bold tracking-[0.14em] text-mint uppercase">
                  {content.eyebrow}
                </p>
                <h1 className="mt-5 font-display text-display-1">{system.title}</h1>
                <p className="mx-auto mt-7 max-w-[52rem] text-lede text-paper/80">
                  {content.heroLead}
                </p>
                <Link
                  href={content.heroCta.href}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3.5 text-label font-bold text-ink transition-transform hover:-translate-y-0.5"
                >
                  {content.heroCta.label} <ArrowUpRightIcon />
                </Link>
              </div>
            </div>
          </header>

          <section className="bg-brand px-gutter-narrow py-8 text-paper sm:px-gutter lg:px-gutter-wide">
            <dl className="mx-auto grid max-w-site gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(content.glance).map(([label, value], index) => (
                <div key={label} className={index ? "sm:border-l sm:border-paper/25 sm:pl-7" : ""}>
                  <dt className="text-caption font-bold tracking-[0.12em] text-mint uppercase">
                    {label}
                  </dt>
                  <dd className="mt-2 text-subtitle leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="bg-paper px-gutter-narrow py-20 sm:px-gutter lg:px-gutter-wide lg:py-28">
            <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5" {...reveal()}>
                <SectionLabel number={1}>The challenge</SectionLabel>
                <h2 className="mt-5 max-w-[16ch] font-display text-display-2">
                  {content.challenge.heading}
                </h2>
              </div>
              <div
                className="grid gap-5 text-body text-slate lg:col-span-6 lg:col-start-7"
                {...reveal(1)}
              >
                {content.challenge.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-stone px-gutter-narrow py-20 sm:px-gutter lg:px-gutter-wide lg:py-28">
            <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
              <SystemVisual
                system={system}
                className="aspect-[4/3] rounded-bar shadow-panel lg:col-span-5"
              />
              <div className="lg:col-span-6 lg:col-start-7" {...reveal()}>
                <SectionLabel number={2}>The solution</SectionLabel>
                <h2 className="mt-5 font-display text-display-2">{content.solution.heading}</h2>
                <div className="mt-7 grid gap-5 text-body text-slate">
                  {content.solution.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {content.workflow ? (
            <section className="bg-forest px-gutter-narrow py-20 text-paper sm:px-gutter lg:px-gutter-wide lg:py-28">
              <div className="mx-auto max-w-site">
                <p className="text-label font-bold tracking-[0.14em] text-mint uppercase">
                  03 · How it works
                </p>
                <h2 className="mt-5 max-w-[18ch] font-display text-display-2">
                  {content.workflow.heading}
                </h2>
                <ol className="mt-12 grid list-none gap-px overflow-hidden rounded-bar bg-paper/15 sm:grid-cols-2 lg:grid-cols-3">
                  {content.workflow.steps.map((step, index) => (
                    <li
                      key={step.title}
                      className="bg-forest p-7 sm:min-h-52 lg:p-8"
                      {...reveal(index)}
                    >
                      <span className="text-caption font-bold text-lime">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-7 text-title-lg">{step.title}</h3>
                      <p className="mt-3 text-body text-paper/70">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          ) : null}

          {content.capabilities.length ? (
            <section className="overflow-hidden bg-paper px-gutter-narrow py-20 sm:px-gutter lg:px-gutter-wide lg:py-28">
              <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-start">
                <div className="lg:sticky lg:top-28 lg:col-span-4" {...reveal()}>
                  <SectionLabel number={capabilityNumber}>Core capabilities</SectionLabel>
                  <h2 className="mt-5 max-w-[12ch] font-display text-display-2">
                    What sits inside the system.
                  </h2>
                  <div className="mt-9 flex max-w-56 items-center" aria-hidden="true">
                    <span className="size-3 rounded-full bg-brand" />
                    <span className="h-px flex-1 bg-ink/18" />
                    <span className="size-2 rounded-full bg-coral" />
                    <span className="h-px flex-1 bg-ink/18" />
                    <span className="size-3 rounded-full bg-violet" />
                    <span className="h-px flex-1 bg-ink/18" />
                    <span className="size-2 rounded-full bg-cyan" />
                  </div>
                </div>
                <ul className="grid list-none gap-4 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3">
                  {content.capabilities.map((capability, index) => {
                    const tone =
                      capabilityTones[index % capabilityTones.length] ?? capabilityTones[0];

                    return (
                      <li
                        key={capability}
                        className={cn(
                          "group relative flex min-h-44 flex-col overflow-hidden rounded-nav border border-ink/10 p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out-quiet hover:-translate-y-1 hover:border-ink/20 hover:shadow-panel",
                          tone.surface,
                        )}
                        {...reveal(index)}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="grid size-9 place-items-center rounded-full bg-ink text-caption font-bold text-paper tabular">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="flex items-center" aria-hidden="true">
                            <span className="h-px w-8 bg-ink/20" />
                            <span className={cn("size-2 rounded-full", tone.accent)} />
                          </span>
                        </div>
                        <p className="mt-auto max-w-[30ch] pt-8 text-body font-semibold text-ink">
                          {capability}
                        </p>
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-300 ease-out-quiet group-hover:scale-x-100",
                            tone.accent,
                          )}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          ) : null}

          <section className="bg-sky px-gutter-narrow py-20 sm:px-gutter lg:px-gutter-wide lg:py-28">
            <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5" {...reveal()}>
                {content.role.heading === "Von Newman's role" ? (
                  <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
                    {String(roleNumber).padStart(2, "0")}
                  </p>
                ) : (
                  <SectionLabel number={roleNumber}>Von Newman&apos;s role</SectionLabel>
                )}
                <h2 className="mt-5 font-display text-display-2">{content.role.heading}</h2>
              </div>
              <div
                className="grid gap-5 text-body text-slate lg:col-span-6 lg:col-start-7"
                {...reveal(1)}
              >
                {content.role.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-lime px-gutter-narrow py-20 sm:px-gutter lg:px-gutter-wide lg:py-28">
            <div className="mx-auto max-w-site">
              <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
                {String(outcomesNumber).padStart(2, "0")}
              </p>
              <h2 className="mt-5 max-w-[18ch] font-display text-display-2">
                What the system makes possible.
              </h2>
              <ul className="mt-12 grid list-none gap-px overflow-hidden rounded-bar bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
                {content.outcomes.map((outcome, index) => (
                  <li key={outcome} className="bg-lime p-6 text-body lg:p-7">
                    <span className="text-caption font-bold text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-6">{outcome}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-stone px-gutter-narrow py-20 sm:px-gutter lg:px-gutter-wide lg:py-28">
            <div className="mx-auto max-w-site">
              <SectionLabel number={evidenceNumber}>Product evidence</SectionLabel>
              <h2 className="mt-5 font-display text-display-2">See the system in context.</h2>
              {content.evidence.items.length ? (
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                  {content.evidence.items.map((item, index) => (
                    <figure
                      key={item.title}
                      className={
                        index === 0 && content.evidence.items.length > 2 ? "md:col-span-2" : ""
                      }
                    >
                      {item.image ? (
                        <SystemVisual
                          system={{ ...system, image: item.image, visual: undefined }}
                          className="aspect-[16/9] rounded-bar bg-paper shadow-panel"
                        />
                      ) : null}
                      <figcaption className="mt-4 border-t border-ink/20 pt-4">
                        <strong className="text-subtitle">{item.title}</strong>
                        <span className="mt-1 block text-caption text-slate">{item.caption}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <figure className="mt-12 max-w-[48rem]">
                  <SystemVisual system={system} className="aspect-[16/9] rounded-bar bg-paper" />
                  <figcaption className="mt-4 text-caption text-slate">
                    {content.evidence.note}
                  </figcaption>
                </figure>
              )}
            </div>
          </section>

          <section className="bg-forest px-gutter-narrow py-20 text-paper sm:px-gutter lg:px-gutter-wide lg:py-24">
            <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="text-label font-bold tracking-[0.14em] text-mint uppercase">
                  Next step
                </p>
                <h2 className="mt-5 font-display text-display-2">{content.closing.heading}</h2>
                {content.closing.copy ? (
                  <p className="mt-5 max-w-[48rem] text-body text-paper/70">
                    {content.closing.copy}
                  </p>
                ) : null}
                <Link
                  href={content.closing.cta.href}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3.5 text-label font-bold text-ink transition-transform hover:-translate-y-0.5"
                >
                  {content.closing.cta.label} <ArrowUpRightIcon />
                </Link>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="text-label font-bold tracking-[0.14em] text-mint uppercase">
                  Continue exploring
                </p>
                <div className="mt-4 grid gap-3">
                  {relatedSystems.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/case-studies/${related.slug}`}
                      className="flex items-center justify-between rounded-full border border-paper/30 px-5 py-3 text-label font-bold hover:bg-paper hover:text-ink"
                    >
                      {related.title} <ArrowRightIcon />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter subpage />
    </>
  );
}
