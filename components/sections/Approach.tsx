import { approach, ownershipPoints, stages } from "@/lib/content";
import { cn } from "@/lib/utils/cn";
import { Section } from "@/components/ui/Section";
import { OwnershipIcon } from "@/components/ui/OwnershipIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reveal } from "@/lib/utils/reveal";

/** Each card sits a step lower than the previous one from lg, as in the client's reference. */
const stepOffsets = ["", "lg:mt-10", "lg:mt-20", "lg:mt-30"];

export function Approach() {
  return (
    <Section id="approach" ground="stone" labelledBy="approach-heading">
      <SectionHeading id="approach-heading" title={approach.headline} lede={approach.lede} />

      {/* A real sequence, shown as a numbered stepper: circles on one line from lg, a vertical
          milestone list below that (client direction, 5 September 2026). */}
      <ol className="mt-12 grid list-none lg:mt-16 lg:grid-cols-4 lg:gap-x-8">
        {stages.map((stage, index) => (
          <li
            key={stage.slug}
            {...reveal(index)}
            className="relative flex gap-5 pb-10 last:pb-0 before:absolute before:top-10 before:bottom-0 before:left-5 before:w-px before:bg-line [&:last-child]:before:hidden lg:block lg:pb-0 lg:before:hidden lg:after:absolute lg:after:top-5 lg:after:left-12 lg:after:-right-8 lg:after:h-px lg:after:bg-line lg:after:content-[''] lg:[&:last-child]:after:hidden"
          >
            <span
              aria-hidden="true"
              className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-brand font-display text-title text-paper tabular"
            >
              {index + 1}
            </span>
            <div className="pt-1.5 lg:pt-6">
              <h3 className="text-title">{stage.title}</h3>
              <p className="mt-2 text-body text-slate">{stage.description}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* The quote as a centred statement, the four ownership points as cards beneath it. */}
      <figure className="mx-auto mt-20 max-w-[52rem] text-center lg:mt-24" {...reveal()}>
        <blockquote className="font-display text-display-2">{approach.quote}</blockquote>
        <figcaption className="mt-6 text-label text-brand">{approach.quoteCaption}</figcaption>
      </figure>
      {/* Ownership points as outlined cards after the client's reference: square corners, an
          outline icon, a tracked capitals title over a thin rule, border turning brand green on
          hover, each card stepped a little lower than the last. */}
      <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:items-start">
        {ownershipPoints.map((point, index) => (
          <li
            key={point.slug}
            {...reveal(index)}
            className={cn(
              "border border-ink/30 bg-paper p-8 transition-colors duration-200 ease-out-quiet hover:border-brand lg:p-9",
              stepOffsets[index],
            )}
          >
            <OwnershipIcon slug={point.slug} className="text-slate" />
            <h3 className="mt-8 text-subtitle uppercase tracking-[0.12em]">{point.title}</h3>
            <div className="mt-5 h-px bg-ink/50" aria-hidden="true" />
            <p className="mt-5 text-body text-slate">{point.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
