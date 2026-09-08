import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SystemVisual } from "@/components/case-studies/SystemVisual";
import { systems } from "@/lib/content";
import { cn } from "@/lib/utils/cn";
import { reveal } from "@/lib/utils/reveal";

const studyTones = {
  "atlas-cms": "bg-lilac",
  "atlas-lms": "bg-sage",
  compass: "bg-clay",
  "hr-performance": "bg-sky",
  sonar: "bg-forest text-paper",
} as const;

export const metadata: Metadata = {
  title: "Case studies | Von Newman Technology Consultants",
  description: "Explore systems designed, built, evolved or advised on by Von Newman teams.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader subpage />
      <main id="top" className="flex-1 pt-header">
        <section className="overflow-hidden bg-sky px-gutter-narrow pt-20 pb-16 sm:px-gutter lg:px-gutter-wide lg:pt-28 lg:pb-24">
          <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6" {...reveal()}>
              <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
                Our work
              </p>
              <h1 className="mt-5 max-w-[9ch] font-display text-display-1">Case studies.</h1>
              <p className="mt-7 max-w-[38rem] text-lede text-slate">
                Explore the systems behind our consulting and engineering work, and how each one
                addresses a practical organisational need.
              </p>
              <a
                href="#all-case-studies"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-forest px-6 py-3.5 text-label font-bold text-paper hover:bg-brand"
              >
                Explore the work <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="relative lg:col-span-6" {...reveal(1)}>
              <div className="absolute top-1/2 left-1/2 size-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime" />
              <div className="relative grid translate-y-4 grid-cols-2 gap-4">
                <SystemVisual
                  system={systems[0]!}
                  priority
                  className="aspect-[4/3] -rotate-2 rounded-bar shadow-panel"
                />
                <SystemVisual
                  system={systems[4]!}
                  priority
                  className="mt-16 aspect-[4/3] rotate-2 rounded-bar shadow-panel"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="all-case-studies"
          aria-labelledby="case-studies-heading"
          className="scroll-mt-header bg-paper px-gutter-narrow py-20 sm:px-gutter lg:px-gutter-wide lg:py-28"
        >
          <div className="mx-auto max-w-site">
            <div className="grid gap-6 border-b border-ink pb-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7" {...reveal()}>
                <p className="text-label font-bold tracking-[0.14em] text-brand uppercase">
                  Systems and platforms
                </p>
                <h2 id="case-studies-heading" className="mt-4 font-display text-display-2">
                  Work shaped around real operations.
                </h2>
              </div>
              <p
                className="max-w-[42ch] text-body text-slate lg:col-span-4 lg:col-start-9"
                {...reveal(1)}
              >
                Each study explains what the system does, the organisational context it supports and
                the role our team played.
              </p>
            </div>

            <ul className="grid list-none gap-8 pt-14 md:grid-cols-2 lg:pt-16">
              {systems.map((system, index) => (
                <li id={system.slug} key={system.slug} className="scroll-mt-28" {...reveal(index)}>
                  <article
                    className={cn(
                      "group h-full overflow-hidden rounded-bar border border-ink/10 p-2",
                      studyTones[system.slug],
                    )}
                  >
                    <div className="flex min-h-64 flex-col p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <p
                          className={cn(
                            "text-caption font-bold tracking-[0.1em] uppercase",
                            system.slug === "sonar" ? "text-mint" : "text-brand",
                          )}
                        >
                          {system.category}
                        </p>
                        <span
                          aria-hidden="true"
                          className={cn(
                            "text-caption tabular",
                            system.slug === "sonar" ? "text-paper/50" : "text-ink/40",
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-4 min-h-[3.75rem] font-display text-title-lg">
                        {system.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-2 line-clamp-3 max-w-[52ch] text-body",
                          system.slug === "sonar" ? "text-paper/72" : "text-slate",
                        )}
                      >
                        {system.description}
                      </p>
                      <Link
                        href={`/case-studies/${system.slug}`}
                        className={cn(
                          "mt-auto inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-label font-bold transition-transform hover:-translate-y-0.5",
                          system.slug === "sonar"
                            ? "bg-lime text-ink"
                            : "bg-forest text-paper hover:bg-brand",
                        )}
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <div className="relative overflow-hidden rounded-[1.2rem] bg-paper shadow-[0_20px_55px_-32px_rgba(16,42,33,.55)]">
                      <SystemVisual
                        system={system}
                        className="aspect-[16/8]"
                        imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      />
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter subpage />
    </>
  );
}
