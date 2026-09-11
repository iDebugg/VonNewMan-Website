import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SystemVisual } from "@/components/case-studies/SystemVisual";
import { ArrowDownIcon, ArrowRightIcon } from "@/components/ui/Icon";
import { systems } from "@/lib/content";
import { cn } from "@/lib/utils/cn";
import { reveal } from "@/lib/utils/reveal";

const studyTones = {
  "atlas-cms": {
    media: "bg-lilac",
    marker: "bg-violet",
    label: "bg-lilac text-brand",
  },
  "atlas-lms": {
    media: "bg-sage",
    marker: "bg-lime",
    label: "bg-sage text-forest",
  },
  compass: {
    media: "bg-clay",
    marker: "bg-coral",
    label: "bg-clay text-ink",
  },
  "hr-performance": {
    media: "bg-sky",
    marker: "bg-cyan",
    label: "bg-sky text-forest",
  },
  sonar: {
    media: "bg-forest",
    marker: "bg-cyan",
    label: "bg-forest text-paper",
  },
} as const;

export const metadata: Metadata = {
  title: "Case studies | Von Newman Technology Consultants",
  description:
    "Explore how Von Newman approaches learning delivery, content operations, infrastructure visibility, election operations and workforce performance.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader subpage darkHero />
      <main id="top" className="flex-1">
        <section
          data-ground="dark"
          className="relative isolate flex min-h-[48rem] flex-col overflow-hidden bg-forest text-paper lg:min-h-svh"
        >
          <Image
            src="/assets/case-studies-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            aria-hidden="true"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,27,20,.97)_0%,rgba(3,27,20,.89)_43%,rgba(3,27,20,.48)_72%,rgba(3,27,20,.3)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(186,244,66,.12),transparent_28%)]"
          />

          <div className="relative mx-auto flex w-full max-w-site flex-1 items-center px-gutter-narrow pt-36 pb-16 sm:px-gutter lg:px-gutter-wide lg:pt-44">
            <div className="max-w-[48rem]" {...reveal()}>
              <p className="text-label font-bold tracking-[0.14em] text-mint uppercase">Our work</p>
              <h1 className="mt-5 max-w-[16ch] font-display text-display-1 text-paper">
                Systems built for real organisational needs.
              </h1>
              <p className="mt-7 max-w-[35rem] text-lede text-paper/82">
                Explore how we approach learning delivery, content operations, infrastructure
                visibility, election operations and workforce performance.
              </p>
              <a
                href="#all-case-studies"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3.5 text-label font-bold text-ink transition-[background-color,transform] duration-150 hover:-translate-y-0.5 hover:bg-paper"
              >
                Explore the case studies <ArrowDownIcon />
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-site flex-wrap justify-between gap-4 border-t border-paper/20 px-gutter-narrow py-6 text-caption font-bold tracking-[.12em] text-paper/75 sm:px-gutter lg:px-gutter-wide">
            <span>CONSULTING AND ENGINEERING</span>
            <span>LAGOS / ABUJA / CALABAR / LONDON</span>
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
                  The problem, the product and the thinking behind it.
                </h2>
              </div>
              <p
                className="max-w-[42ch] text-body text-slate lg:col-span-4 lg:col-start-9"
                {...reveal(1)}
              >
                Each case study explains why the system was created, how it works and the role Von
                Newman played in bringing it to life.
              </p>
            </div>

            <ul className="grid list-none gap-7 pt-14 md:grid-cols-2 lg:gap-8 lg:pt-16">
              {systems.map((system, index) => {
                const tone = studyTones[system.slug];

                return (
                  <li
                    id={system.slug}
                    key={system.slug}
                    className="scroll-mt-28"
                    {...reveal(index)}
                  >
                    <Link
                      href={`/case-studies/${system.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-bar border border-ink/10 bg-paper transition-[transform,box-shadow,border-color] duration-300 ease-out-quiet hover:-translate-y-1 hover:border-ink/20 hover:shadow-panel"
                    >
                      <div
                        className={cn("relative m-2 overflow-hidden rounded-[1.2rem]", tone.media)}
                      >
                        <SystemVisual
                          system={system}
                          className="aspect-[16/8]"
                          imageClassName="object-center transition-transform duration-700 ease-out-quiet group-hover:scale-[1.025]"
                        />
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute top-4 left-4 h-1.5 w-10 rounded-full",
                            tone.marker,
                          )}
                        />
                      </div>

                      <div className="flex min-h-64 flex-1 flex-col px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7">
                        <div className="flex items-center justify-between gap-4">
                          <p
                            className={cn(
                              "rounded-full px-3 py-1.5 text-caption font-bold tracking-[0.08em] uppercase",
                              tone.label,
                            )}
                          >
                            {system.category}
                          </p>
                          <span
                            aria-hidden="true"
                            className="text-caption font-semibold text-ink/42 tabular"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="mt-5 font-display text-title-lg text-ink">{system.title}</h3>
                        <p className="mt-3 line-clamp-3 max-w-[56ch] text-body text-slate">
                          {system.description}
                        </p>

                        <div className="mt-auto flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
                          <span className="text-caption font-semibold tracking-[0.08em] text-slate uppercase">
                            Product case study
                          </span>
                          <span
                            aria-hidden="true"
                            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-label font-bold text-paper transition-[background-color,transform] duration-150 group-hover:-translate-y-0.5 group-hover:bg-brand"
                          >
                            Read case study <ArrowRightIcon />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter subpage />
    </>
  );
}
