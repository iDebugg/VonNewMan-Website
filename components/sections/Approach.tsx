import { approach, ownershipPoints, stages } from "@/lib/content";
import { cn } from "@/lib/utils/cn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Card grounds for stages 1 to 4: paper deepening towards the brand tint. */
const stageTints = ["bg-paper", "bg-brand/5", "bg-brand/10", "bg-brand/15"];

export function Approach() {
  return (
    <Section id="approach" ground="stone" labelledBy="approach-heading">
      <SectionHeading id="approach-heading" title={approach.headline} lede={approach.lede} />

      {/* A real sequence as numbered cards. The tint deepens from stage 1 to 4, so colour carries
          direction; the hairline joins the numbered circles across the row (vertical on phones). */}
      <ol className="mt-12 grid list-none gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-8">
        {stages.map((stage, index) => (
          <li
            key={stage.slug}
            className={cn(
              "relative rounded-nav border border-line p-6 lg:p-7",
              stageTints[index] ?? "bg-paper",
              "before:absolute before:-bottom-6 before:left-11 before:h-6 before:w-px before:bg-line [&:last-child]:before:hidden",
              "lg:before:hidden lg:after:absolute lg:after:top-12 lg:after:-right-8 lg:after:h-px lg:after:w-8 lg:after:bg-line lg:after:content-[''] lg:[&:last-child]:after:hidden",
            )}
          >
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-full bg-brand font-display text-title text-paper tabular"
            >
              {index + 1}
            </span>
            <h3 className="mt-5 text-title">{stage.title}</h3>
            <p className="mt-2 text-body text-slate">{stage.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <figure className="border border-ink p-7 sm:p-9">
          <blockquote className="font-display text-statement">{approach.quote}</blockquote>
          <figcaption className="mt-5 text-label text-slate">{approach.quoteCaption}</figcaption>
        </figure>
        <ul className="grid list-none content-start gap-6">
          {ownershipPoints.map((point) => (
            <li key={point.title}>
              <h3 className="text-subtitle">{point.title}</h3>
              <p className="mt-1 text-body text-slate">{point.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
