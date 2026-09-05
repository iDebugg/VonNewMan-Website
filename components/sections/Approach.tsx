import { approach, ownershipPoints, stages } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Approach() {
  return (
    <Section id="approach" ground="stone" labelledBy="approach-heading">
      <SectionHeading id="approach-heading" title={approach.headline} lede={approach.lede} />

      {/* A real sequence: one track, four markers. Vertical on small screens, horizontal from lg. */}
      <ol className="mt-12 grid list-none gap-10 border-l-2 border-line pl-6 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:border-t-2 lg:border-l-0 lg:pt-6 lg:pl-0">
        {stages.map((stage) => (
          <li key={stage.slug} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[calc(1.5rem+7px)] size-3 bg-brand lg:-top-[calc(1.5rem+7px)] lg:left-0"
            />
            <h3 className="text-title">{stage.title}</h3>
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
