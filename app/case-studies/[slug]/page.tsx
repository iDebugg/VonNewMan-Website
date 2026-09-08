import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SystemVisual } from "@/components/case-studies/SystemVisual";
import { systems } from "@/lib/content";
import { reveal } from "@/lib/utils/reveal";

type PageProps = { params: Promise<{ slug: string }> };

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
  const nextSystem = systems[(currentIndex + 1) % systems.length]!;

  return (
    <>
      <SiteHeader subpage />
      <main id="top" className="flex-1 pt-header">
        <article>
          <header className="bg-stone px-gutter-narrow pt-20 pb-14 sm:px-gutter lg:px-gutter-wide lg:pt-28 lg:pb-20">
            <div className="mx-auto max-w-site">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-label font-bold text-brand hover:underline"
              >
                ← All case studies
              </Link>
              <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7" {...reveal()}>
                  <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
                    {system.category} · {system.product}
                  </p>
                  <h1 className="mt-5 max-w-[12ch] font-display text-display-1">{system.title}</h1>
                </div>
                <p
                  className="max-w-[42ch] text-lede text-slate lg:col-span-4 lg:col-start-9"
                  {...reveal(1)}
                >
                  {system.description}
                </p>
              </div>
            </div>
          </header>

          <section className="bg-paper px-gutter-narrow py-14 sm:px-gutter lg:px-gutter-wide lg:py-20">
            <div className="mx-auto max-w-site">
              <SystemVisual
                system={system}
                priority
                className="aspect-[16/8] rounded-bar shadow-panel"
                imageClassName="object-cover object-top"
              />
            </div>
          </section>

          <section className="bg-paper px-gutter-narrow pb-20 sm:px-gutter lg:px-gutter-wide lg:pb-28">
            <div className="mx-auto grid max-w-site gap-12 border-t border-ink pt-12 lg:grid-cols-12 lg:pt-16">
              <div className="lg:col-span-7" {...reveal()}>
                <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
                  The system
                </p>
                <h2 className="mt-5 max-w-[14ch] font-display text-display-2">
                  Built around the work it needs to support.
                </h2>
                <p className="mt-7 max-w-[62ch] text-lede text-slate">{system.overview}</p>
              </div>
              <aside className="lg:col-span-4 lg:col-start-9" {...reveal(1)}>
                <div className="rounded-bar bg-sage p-7">
                  <p className="text-caption font-bold tracking-[0.12em] text-brand uppercase">
                    Our role
                  </p>
                  <p className="mt-4 text-body text-ink">{system.role}</p>
                </div>
                <div className="mt-5 rounded-bar bg-forest p-7 text-paper">
                  <p className="text-caption font-bold tracking-[0.12em] text-mint uppercase">
                    Capability areas
                  </p>
                  <ul className="mt-5 list-none divide-y divide-paper/15">
                    {system.capabilities.map((capability) => (
                      <li key={capability} className="py-3 text-body">
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </section>

          <section className="bg-lime px-gutter-narrow py-16 sm:px-gutter lg:px-gutter-wide lg:py-20">
            <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
                  Next case study
                </p>
                <h2 className="mt-4 font-display text-display-2">{nextSystem.title}</h2>
              </div>
              <Link
                href={`/case-studies/${nextSystem.slug}`}
                className="inline-flex items-center gap-3 rounded-full bg-forest px-6 py-3.5 text-label font-bold text-paper hover:bg-brand"
              >
                Continue exploring <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter subpage />
    </>
  );
}
