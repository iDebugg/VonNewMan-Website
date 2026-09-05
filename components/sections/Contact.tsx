import { contact } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { email, phone, visit, company } = contact.details;
  return (
    <Section id="contact" ground="stone" labelledBy="contact-heading">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <h2 id="contact-heading" className="font-display text-display-2">
            {contact.headline}
          </h2>
          <p className="mt-5 max-w-[34rem] text-lede text-slate">{contact.lede}</p>

          <dl className="mt-10 grid gap-6">
            <div>
              <dt className="text-label text-slate">{email.label}</dt>
              <dd className="mt-1 text-body">
                <a href={email.href} className="text-ink underline-offset-4 hover:underline">
                  {email.value}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-label text-slate">{phone.label}</dt>
              <dd className="mt-1 text-body">
                <a href={phone.href} className="text-ink underline-offset-4 hover:underline">
                  {phone.value}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-label text-slate">{visit.label}</dt>
              {/* Two locations, two rows: a place label and, where the source has one, an address. */}
              <dd className="mt-1 grid gap-1 text-body">
                {visit.rows.map((row) => (
                  <span key={row.place} className="grid gap-x-4 sm:grid-cols-[9rem_1fr]">
                    <span className="text-label text-slate sm:pt-0.5">{row.place}</span>
                    {row.value ? <span className="text-ink">{row.value}</span> : null}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-label text-slate">{company.label}</dt>
              <dd className="mt-1 text-body text-ink">
                <span className="block">{company.primary}</span>
                <span className="block text-slate">{company.secondary}</span>
              </dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
