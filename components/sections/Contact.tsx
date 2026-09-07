import { contact } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";
import { reveal } from "@/lib/utils/reveal";

export function Contact() {
  const { email, phone } = contact.details;
  return (
    <Section id="contact" ground="stone" labelledBy="contact-heading">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5" {...reveal()}>
          <h2 id="contact-heading" className="font-display text-display-2">
            {contact.headline}
          </h2>
          <p className="mt-7 max-w-[42rem] text-lede text-slate">
            A conversation, a demonstration and a 90-day pilot shaped around your goals.
          </p>
          <div className="mt-10 grid gap-2 text-title font-bold">
            <a href={email.href} className="break-all underline-offset-4 hover:underline">
              {email.value}
            </a>
            <a href={phone.href} className="tabular underline-offset-4 hover:underline">
              {phone.value}
            </a>
          </div>
          <p className="mt-10 max-w-[38rem] text-body text-slate">
            Von Newman Technology Consultants Ltd
            <br />
            {contact.details.company.secondary}
          </p>
        </div>
        <div className="rounded-bar bg-paper p-7 shadow-panel sm:p-10 lg:col-span-7" {...reveal(1)}>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
