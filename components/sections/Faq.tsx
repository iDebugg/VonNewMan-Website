import { faq, faqItems } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { reveal } from "@/lib/utils/reveal";

export function Faq() {
  return (
    <Section id="faq" ground="stone" labelledBy="faq-heading">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4" {...reveal()}>
          <h2 id="faq-heading" className="font-display text-display-2">
            {faq.headline}
          </h2>
          <p className="mt-6 text-lede text-slate">{faq.intro}</p>
          <ButtonLink item={{ label: "Ask us a question", href: "#contact" }} className="mt-6" />
        </div>
        <div className="border-t border-ink/20 lg:col-span-7 lg:col-start-6">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              {...reveal(index, 50)}
              className="group border-b border-ink/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 text-title font-bold marker:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="text-2xl font-normal transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[65ch] pb-7 text-body text-slate">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
