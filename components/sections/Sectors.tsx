import Image from "next/image";
import { financialBlocks, sectorPanels, sectors } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinancialIcon } from "@/components/ui/FinancialIcon";
import { Section } from "@/components/ui/Section";
import { reveal } from "@/lib/utils/reveal";

const financialProducts = ["Atlas", "Sonar", "Sonar", "Consulting + Sonar"];
const financialSurfaces = ["bg-lilac", "bg-forest text-paper", "bg-clay", "bg-sky"];
const financialSummaries = [
  "Atlas delivers induction, conduct and compliance learning to every branch, with completion evidence.",
  "Sonar brings branches, data centres and cloud into one governed view.",
  "Sonar connects dollar-billed cloud to naira budgets and FX exposure.",
  "Consulting and Sonar combine access control, audit trails and examiner-ready evidence.",
];

export function Sectors() {
  return (
    <Section id="sectors" ground="stone" labelledBy="sectors-heading">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2
          id="sectors-heading"
          className="font-display text-display-2 lg:col-span-7"
          {...reveal()}
        >
          {sectors.headline}
        </h2>
        <p
          className="max-w-[42ch] text-lede text-slate lg:col-span-4 lg:col-start-9"
          {...reveal(1)}
        >
          We design around regulation, infrastructure and the way each institution operates.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {sectorPanels.map((panel, index) => (
          <article
            key={panel.id}
            className="overflow-hidden rounded-bar border border-ink/10 bg-paper"
            {...reveal(index)}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-ink">
              <Image
                src={panel.image.src}
                alt={panel.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out-quiet hover:scale-[1.015]"
              />
            </div>
            <div className="p-7 sm:p-9">
              <p className="text-label font-bold text-brand">{panel.tab}</p>
              <h3 className="mt-3 max-w-[16ch] text-title-lg font-bold">{panel.heading}</h3>
              <ul className="mt-7 grid list-none gap-3 border-t border-ink/15 pt-6 sm:grid-cols-2">
                {panel.items.map((item) => (
                  <li key={item.title} className="text-label font-semibold text-ink">
                    {item.title}
                  </li>
                ))}
              </ul>
              <ButtonLink item={panel.cta} className="mt-7" />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 grid gap-10 border-t border-ink pt-12 lg:grid-cols-12">
        <div className="lg:col-span-4" {...reveal()}>
          <h3 className="font-display text-[clamp(2rem,3vw,3.25rem)] leading-[1.03] font-bold tracking-[-.03em]">
            Financial services, built for Nigerian realities.
          </h3>
          <p className="mt-5 max-w-[38ch] text-body text-slate">
            Practical support for regulated institutions across people, infrastructure, cost and
            trust.
          </p>
        </div>
        <dl className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {financialBlocks.map((block, index) => (
            <div
              key={block.label}
              className={`flex min-h-64 flex-col rounded-bar p-7 ${financialSurfaces[index]}`}
              {...reveal(index, 50)}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`grid size-11 place-items-center rounded-full ${index === 1 ? "bg-lime text-ink" : "bg-paper/70 text-brand"}`}
                >
                  <FinancialIcon label={block.label} />
                </span>
                <span
                  className={`rounded-full border px-3 py-1 text-caption font-bold ${index === 1 ? "border-paper/25 text-lime" : "border-ink/15 text-brand"}`}
                >
                  {financialProducts[index]}
                </span>
              </div>
              <div className="mt-auto pt-10">
                <dt
                  className={`text-caption font-bold ${index === 1 ? "text-mint" : "text-brand"}`}
                >
                  {block.label}
                </dt>
                <dd className="mt-2 text-title font-bold">{block.title}</dd>
                <p className={`mt-3 text-label ${index === 1 ? "text-paper/72" : "text-slate"}`}>
                  {financialSummaries[index]}
                </p>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
