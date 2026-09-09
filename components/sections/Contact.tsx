import { contact } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";
import { reveal } from "@/lib/utils/reveal";

export function Contact() {
  const { email, phone } = contact.details;
  return (
    <Section id="contact" ground="forest" labelledBy="contact-heading">
      <div className="grid gap-6 lg:grid-cols-12">
        <div
          className="relative overflow-hidden rounded-bar bg-lime p-8 text-ink sm:p-10 lg:col-span-5 lg:p-12"
          {...reveal()}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 360 220"
            className="absolute -right-16 -bottom-14 w-80 text-brand/20"
          >
            <path
              d="M28 176 104 92l70 42 72-94 86 56"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="28" cy="176" r="12" fill="currentColor" />
            <circle cx="104" cy="92" r="18" fill="currentColor" />
            <circle cx="174" cy="134" r="10" fill="currentColor" />
            <circle cx="246" cy="40" r="22" fill="currentColor" />
            <circle cx="332" cy="96" r="14" fill="currentColor" />
          </svg>
          <div className="relative">
            <h2 id="contact-heading" className="max-w-[10ch] font-display text-display-2">
              {contact.headline}
            </h2>
            <p className="mt-7 max-w-[34rem] text-lede text-ink/75">{contact.lede}</p>
            <div className="mt-10 grid gap-3 text-body font-bold">
              <a
                href={email.href}
                className="break-all rounded-full border border-ink/15 bg-paper/60 px-5 py-3 transition-colors hover:bg-paper"
              >
                {email.value}
              </a>
              <a
                href={phone.href}
                className="rounded-full border border-ink/15 bg-paper/60 px-5 py-3 transition-colors hover:bg-paper tabular"
              >
                {phone.value}
              </a>
            </div>
            <p className="mt-10 max-w-[38rem] text-label text-ink/65">
              Von Newman Technology Consultants Ltd
              <br />
              {contact.details.company.secondary}
            </p>
          </div>
        </div>
        <div
          className="rounded-bar bg-paper p-7 text-ink shadow-panel sm:p-10 lg:col-span-7 lg:p-12"
          {...reveal(1)}
        >
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
