import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SystemVisual } from "@/components/case-studies/SystemVisual";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/Icon";
import { systems } from "@/lib/content";
import { reveal } from "@/lib/utils/reveal";

type PageProps = { params: Promise<{ slug: string }> };

const deliverySteps = [
  {
    title: "Understand the environment",
    text: "Map the operating model, users, constraints and decisions the system must support.",
  },
  {
    title: "Shape the workflow",
    text: "Turn real responsibilities and information needs into a clear product structure.",
  },
  {
    title: "Engineer and evolve",
    text: "Build the system, connect it to the surrounding estate and improve it through use.",
  },
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
    description: system.description,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const system = systems.find((item) => item.slug === slug);
  if (!system) notFound();
  const currentIndex = systems.findIndex((item) => item.slug === system.slug);
  const previousSystem = systems[(currentIndex - 1 + systems.length) % systems.length]!;
  const nextSystem = systems[(currentIndex + 1) % systems.length]!;

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
                imageClassName="hero-image scale-[1.04] object-cover object-[60%_center]"
              />
            </div>
            <div className="absolute inset-0 bg-forest/95" aria-hidden="true" />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,42,33,.62)_0%,rgba(16,42,33,.28)_48%,rgba(16,42,33,.68)_100%)]"
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto w-full max-w-site">
              <div className="case-hero-copy mx-auto max-w-[62rem] text-center">
                <p className="text-label font-bold tracking-[0.14em] text-mint uppercase">
                  {system.category} · {system.product}
                </p>
                <h1 className="mt-5 font-display text-display-1">{system.title}</h1>
                <p className="mx-auto mt-7 max-w-[52rem] text-lede text-paper/75">
                  {system.description}
                </p>
                <Link
                  href="/#contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3.5 text-label font-bold text-ink transition-transform hover:-translate-y-0.5"
                >
                  Discuss a similar system <ArrowUpRightIcon />
                </Link>
              </div>
            </div>
          </header>

          <section className="bg-brand px-gutter-narrow py-8 text-paper sm:px-gutter lg:px-gutter-wide">
            <dl className="mx-auto grid max-w-site gap-7 sm:grid-cols-3">
              <div>
                <dt className="text-caption font-bold tracking-[0.12em] text-mint uppercase">
                  System
                </dt>
                <dd className="mt-2 text-title">{system.product}</dd>
              </div>
              <div className="sm:border-l sm:border-paper/25 sm:pl-7">
                <dt className="text-caption font-bold tracking-[0.12em] text-mint uppercase">
                  Focus
                </dt>
                <dd className="mt-2 text-title">{system.category}</dd>
              </div>
              <div className="sm:border-l sm:border-paper/25 sm:pl-7">
                <dt className="text-caption font-bold tracking-[0.12em] text-mint uppercase">
                  Engagement
                </dt>
                <dd className="mt-2 text-title">Consulting + engineering</dd>
              </div>
            </dl>
          </section>

          <section
            id="project-overview"
            className="scroll-mt-header bg-paper px-gutter-narrow py-20 sm:px-gutter lg:px-gutter-wide lg:py-28"
          >
            <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5" {...reveal()}>
                <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
                  01 · Overview
                </p>
                <h2 className="mt-5 max-w-[13ch] font-display text-[clamp(1.75rem,2.7vw,2.75rem)] leading-[1.06] font-bold tracking-[-.03em]">
                  The system in context.
                </h2>
              </div>
              <div className="lg:col-span-7" {...reveal(1)}>
                <p className="max-w-[60ch] text-lede text-slate">{system.overview}</p>
                <div className="mt-10 border-l-4 border-lime pl-6">
                  <p className="text-caption font-bold tracking-[0.12em] text-brand uppercase">
                    Our role
                  </p>
                  <p className="mt-3 max-w-[52ch] text-body text-ink">{system.role}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-stone px-gutter-narrow py-20 sm:px-gutter lg:px-gutter-wide lg:py-28">
            <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
              <SystemVisual system={system} className="aspect-[4/3] rounded-bar lg:col-span-5" />
              <div className="lg:col-span-6 lg:col-start-7" {...reveal()}>
                <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
                  02 · Objectives
                </p>
                <h2 className="mt-5 font-display text-display-2">
                  What the system needs to make possible.
                </h2>
                <ul className="mt-8 list-none divide-y divide-ink/15 border-y border-ink/15">
                  {system.objectives.map((objective, index) => (
                    <li key={objective} className="grid grid-cols-[2rem_1fr] gap-4 py-5 text-body">
                      <span className="text-caption font-bold text-brand">0{index + 1}</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section
            id="consulting-context"
            className="scroll-mt-header bg-forest px-gutter-narrow py-10 sm:px-gutter lg:px-gutter-wide lg:py-14"
          >
            <div className="mx-auto grid max-w-site gap-6 lg:grid-cols-12 lg:items-end">
              <div className="relative aspect-[16/7] overflow-hidden rounded-bar lg:col-span-9">
                <Image
                  src="/assets/case-study-consulting.jpg"
                  alt="Technology consultants and engineers reviewing an enterprise system together"
                  fill
                  sizes="(min-width: 1024px) 72vw, 92vw"
                  className="object-cover"
                />
              </div>
              <p
                className="max-w-[28ch] text-body text-paper/75 lg:col-span-3 lg:pb-2"
                {...reveal()}
              >
                The technology is one part of the work. The operating model, decisions and people
                around it matter just as much.
              </p>
            </div>
          </section>

          <section className="bg-paper px-gutter-narrow py-20 sm:px-gutter lg:px-gutter-wide lg:py-28">
            <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5" {...reveal()}>
                <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
                  03 · Capabilities
                </p>
                <h2 className="mt-5 font-display text-display-2">What sits inside the system.</h2>
              </div>
              <ul className="grid list-none gap-px overflow-hidden rounded-bar bg-ink/10 sm:grid-cols-3 lg:col-span-7">
                {system.capabilities.map((capability, index) => (
                  <li key={capability} className="bg-sage p-7 sm:min-h-48">
                    <span className="text-caption font-bold text-brand">0{index + 1}</span>
                    <p className="mt-8 text-title">{capability}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-stone px-gutter-narrow py-20 sm:px-gutter lg:px-gutter-wide lg:py-28">
            <div className="mx-auto max-w-site">
              <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
                04 · Delivery approach
              </p>
              <h2 className="mt-5 max-w-[14ch] font-display text-display-2">
                From operating reality to working system.
              </h2>
              <ol className="mt-12 grid list-none gap-5 md:grid-cols-3">
                {deliverySteps.map((step, index) => (
                  <li key={step.title} className="border-t border-ink pt-6">
                    <span className="text-caption font-bold text-brand">0{index + 1}</span>
                    <h3 className="mt-5 text-title-lg">{step.title}</h3>
                    <p className="mt-3 text-body text-slate">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="bg-lime px-gutter-narrow py-16 sm:px-gutter lg:px-gutter-wide lg:py-20">
            <div className="mx-auto max-w-site text-center">
              <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
                Continue exploring
              </p>
              <h2 className="mt-4 font-display text-display-2">More systems, more context.</h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href={`/case-studies/${previousSystem.slug}`}
                  className="inline-flex items-center gap-3 rounded-full border border-ink px-6 py-3.5 text-label font-bold text-ink hover:bg-paper"
                >
                  <ArrowLeftIcon /> {previousSystem.title}
                </Link>
                <Link
                  href={`/case-studies/${nextSystem.slug}`}
                  className="inline-flex items-center gap-3 rounded-full bg-forest px-6 py-3.5 text-label font-bold text-paper hover:bg-brand"
                >
                  {nextSystem.title} <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter subpage />
    </>
  );
}
