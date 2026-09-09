import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { reveal } from "@/lib/utils/reveal";

export function Difference() {
  return (
    <Section id="difference" ground="stone" labelledBy="difference-heading">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <h2
          id="difference-heading"
          className="font-display text-display-2 lg:col-span-7"
          {...reveal()}
        >
          Consultants who understand the problem. Engineers who build the solution.
        </h2>
        <div className="lg:col-span-4 lg:col-start-9" {...reveal(1)}>
          <p className="text-lede text-slate">
            Our consultants and engineers work together to turn operational needs into working
            systems. We also build Atlas and Sonar in-house, bringing that product experience to
            client engagements.
          </p>
          <ButtonLink
            item={{ label: "See how we work", href: "#approach" }}
            variant="primary"
            className="mt-6"
          />
        </div>
      </div>
      <div
        className="mt-14 overflow-hidden rounded-bar bg-paper lg:grid lg:grid-cols-2"
        {...reveal()}
      >
        <div className="relative min-h-[24rem] lg:min-h-[36rem]">
          <Image
            src="/assets/consulting-discovery.jpg"
            alt="Team reviewing a service blueprint"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-between bg-sage p-8 sm:p-12 lg:p-14">
          <div>
            <p className="text-label font-bold tracking-[.12em] text-brand">
              CONSULTING AND ENGINEERING
            </p>
            <h3 className="mt-5 font-display text-[clamp(2rem,3.25vw,3.5rem)] leading-[1.02] font-bold tracking-[-.032em]">
              Start with how your organisation works.
            </h3>
          </div>
          <ul className="mt-12 grid list-none divide-y divide-ink/15 border-y border-ink/15 text-title font-bold">
            <li className="flex items-center justify-between py-5">
              <span>Understand workflows, people and priorities</span>
              <span aria-hidden="true">→</span>
            </li>
            <li className="flex items-center justify-between py-5">
              <span>Design for your systems, policies and constraints</span>
              <span aria-hidden="true">→</span>
            </li>
            <li className="flex items-center justify-between py-5">
              <span>Support your teams after go-live</span>
              <span aria-hidden="true">→</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
