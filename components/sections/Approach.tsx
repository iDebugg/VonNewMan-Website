import { stages } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { reveal } from "@/lib/utils/reveal";

export function Approach() {
  return (
    <Section id="approach" labelledBy="approach-heading">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2
          id="approach-heading"
          className="font-display text-display-2 lg:col-span-8"
          {...reveal()}
        >
          A clear process from discovery to ongoing support.
        </h2>
        <p className="text-lede text-slate lg:col-span-4" {...reveal(1)}>
          Understand the problem, shape the solution, help your teams adopt it and review progress
          against agreed measures.
        </p>
      </div>
      <ol className="mt-16 grid list-none gap-8 lg:grid-cols-4">
        {stages.map((stage, index) => (
          <li key={stage.slug} {...reveal(index)} className="border-t border-ink/25 pt-6">
            <span className="grid size-12 place-items-center rounded-full bg-lime text-label font-bold text-ink tabular">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-7 text-title-lg font-bold">{stage.title}</h3>
            <p className="mt-3 text-body text-slate">
              {
                [
                  "Review your workflows, regulatory context and priorities. Agree what success should look like.",
                  "Shape the solution, workflows and policy rules around your organisation.",
                  "Integrate the system, train your teams and support day-to-day adoption.",
                  "Review progress against agreed measures and prioritise improvements after go-live.",
                ][index]
              }
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-20 rounded-bar bg-stone p-8 sm:p-10 lg:grid lg:grid-cols-[1.2fr_3fr_auto] lg:items-center lg:gap-12">
        <h3 className="font-display text-[clamp(1.625rem,2vw,2.25rem)] leading-[1.08] font-bold tracking-[-.03em]">
          Test the approach.
          <br />
          Start with a 90-day pilot.
        </h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:mt-0">
          <div>
            <strong>Weeks 1–4</strong>
            <p className="text-label text-slate">Define the problem and success measures</p>
          </div>
          <div>
            <strong>Weeks 5–10</strong>
            <p className="text-label text-slate">Build and test the tailored pilot</p>
          </div>
          <div>
            <strong>Weeks 11–13</strong>
            <p className="text-label text-slate">Review results and next steps</p>
          </div>
        </div>
        <ButtonLink
          item={{ label: "Discuss a 90-day pilot", href: "#contact" }}
          className="mt-8 lg:mt-0"
        />
      </div>
    </Section>
  );
}
