import Image from "next/image";
import { atlas, sonar } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { reveal } from "@/lib/utils/reveal";
import { CountUp } from "./CountUp";

export function Products() {
  return (
    <section id="products" aria-labelledby="products-heading" className="scroll-mt-24">
      <Section labelledBy="products-heading" className="overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2
            id="products-heading"
            className="font-display text-display-2 lg:col-span-8"
            {...reveal()}
          >
            Products that prove how we engineer.
          </h2>
          <p className="text-lede text-slate lg:col-span-4" {...reveal(1)}>
            We own Atlas and Sonar end to end, so the product can move with the organisation.
          </p>
        </div>
        <article id="atlas" className="mt-20 scroll-mt-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 xl:col-span-7" {...reveal()}>
              <p className="text-label font-bold tracking-[.12em] text-brand">VON NEWMAN ATLAS</p>
              <h3 className="mt-4 font-display text-[clamp(2.5rem,4vw,4.125rem)] leading-[1] font-bold tracking-[-.032em]">
                Learning that moves people forward.
              </h3>
              <p className="mt-6 max-w-[48rem] text-lede text-slate">{atlas.description}</p>
              <dl className="mt-9 flex gap-10">
                <div>
                  <dd>
                    <CountUp value="25" className="text-figure font-bold tabular" />
                  </dd>
                  <dt className="text-label text-slate">pathways</dt>
                </div>
                <div>
                  <dd>
                    <CountUp value="209" className="text-figure font-bold tabular" />
                  </dd>
                  <dt className="text-label text-slate">courses</dt>
                </div>
              </dl>
              <ButtonLink item={atlas.actions[0]!} className="mt-8" />
            </div>
            <div className="relative lg:col-span-6 xl:col-span-5" {...reveal(1)}>
              <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-lilac" />
              <Image
                src={atlas.image.src}
                alt={atlas.image.alt}
                width={atlas.image.width}
                height={atlas.image.height}
                sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 50vw, 100vw"
                className="w-full rounded-bar shadow-panel"
              />
            </div>
          </div>
        </article>
      </Section>
      <Section ground="forest" labelledBy="sonar-heading" className="overflow-hidden">
        <article id="sonar" className="scroll-mt-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5" {...reveal()}>
              <p className="text-label font-bold tracking-[.12em] text-lime">VON NEWMAN SONAR</p>
              <h3
                id="sonar-heading"
                className="mt-4 font-display text-[clamp(2.5rem,4vw,4.125rem)] leading-[1] font-bold tracking-[-.032em]"
              >
                See your entire estate. Control every naira.
              </h3>
              <p className="mt-6 text-lede text-paper/75">{sonar.description}</p>
              <ol className="mt-10 grid list-none gap-5 border-l border-lime/40 pl-6">
                <li>
                  <strong className="block text-title">Discover resources</strong>
                  <span className="text-body text-paper/65">
                    Continuously map infrastructure across accounts and regions.
                  </span>
                </li>
                <li>
                  <strong className="block text-title">Assign ownership</strong>
                  <span className="text-body text-paper/65">
                    Connect assets to teams, services and policy.
                  </span>
                </li>
                <li>
                  <strong className="block text-title">Review configuration</strong>
                  <span className="text-body text-paper/65">
                    Turn unmanaged resources into reviewed Terraform.
                  </span>
                </li>
              </ol>
              <ButtonLink item={sonar.actions[0]!} className="mt-9" />
            </div>
            <div className="lg:col-span-7" {...reveal(1)}>
              <Image
                src="/assets/sonar-terraform.jpg"
                alt="Sonar workflow for reviewing and importing an infrastructure resource to Terraform"
                width={1400}
                height={1131}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="w-full rounded-bar bg-paper shadow-panel"
              />
              <p className="mt-4 text-caption text-paper/55">
                Sonar interface: importing an unmanaged AWS resource into Terraform.
              </p>
            </div>
          </div>
        </article>
      </Section>
    </section>
  );
}
