import { approach, ownershipPoints, stages } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
