import { difference, pillars } from "@/lib/content";
import { cn } from "@/lib/utils/cn";
import { Section } from "@/components/ui/Section";
import { PillarIllustration } from "@/components/ui/PillarIllustration";

/** Each card sits a step lower than the previous one from lg, as in the client's reference. */
const stepOffsets = ["", "lg:mt-10", "lg:mt-20", "lg:mt-30"];

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

      {/* Four pillars as outlined cards, matching the ownership cards in the Approach section:
          square corners, an outline illustration, a tracked capitals title over a thin rule,
          border turning brand green on hover, each card stepped a little lower than the last. */}
      <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:items-start">
        {pillars.map((pillar, index) => (
          <li
            key={pillar.slug}
            className={cn(
              "border border-ink/30 bg-paper p-8 transition-colors duration-200 ease-out-quiet hover:border-brand lg:p-9",
              stepOffsets[index],
            )}
          >
            <PillarIllustration slug={pillar.slug} size={44} className="text-slate" />
            <h3 className="mt-8 text-subtitle uppercase tracking-[0.12em]">{pillar.title}</h3>
            <div className="mt-5 h-px bg-ink/50" aria-hidden="true" />
            <p className="mt-5 text-body text-slate">{pillar.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
