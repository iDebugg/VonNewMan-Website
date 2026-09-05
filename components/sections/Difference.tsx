import { difference, pillars } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { PillarIllustration } from "@/components/ui/PillarIllustration";

export function Difference() {
  return (
    <Section id="difference" ground="stone" labelledBy="difference-heading">
      <div className="max-w-[46rem]">
        <h2 id="difference-heading" className="font-display text-display-2">
          {difference.headline.map((sentence) => (
            <span key={sentence} className="block">
              {sentence}
            </span>
          ))}
        </h2>
        <p className="mt-6 text-lede text-slate">{difference.lede}</p>
      </div>

      {/* Four pillars as a row of cards (client instruction, 5 September 2026). */}
      <ul className="mt-12 grid list-none gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
        {pillars.map((pillar) => (
          <li
            key={pillar.slug}
            className="rounded-nav border border-line bg-paper p-6 text-center lg:p-7"
          >
            <span className="mx-auto mb-5 grid size-20 place-items-center rounded-full bg-brand/10 text-brand">
              <PillarIllustration slug={pillar.slug} />
            </span>
            <h3 className="text-title">{pillar.title}</h3>
            <p className="mt-3 text-body text-slate">{pillar.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
