import { contact } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icon";
import { ContactForm } from "./ContactForm";

/**
 * Two-panel card: the ways to reach the firm on a forest panel, the form on paper beside it
 * (client direction, 6 September 2026).
 */
export function Contact() {
  const { email, phone, visit, company } = contact.details;
  const rowLabel = "flex items-center gap-2 text-label text-paper/70";
  return (
    <Section id="contact" ground="stone" labelledBy="contact-heading">
      <div className="grid overflow-hidden rounded-nav border border-line lg:grid-cols-[2fr_3fr]">
        <div data-ground="dark" className="min-w-0 bg-forest p-7 text-paper sm:p-10 lg:p-12">
          <h2 id="contact-heading" className="font-display text-display-2">
            {contact.headline}
          </h2>
          <p className="mt-5 text-lede text-paper/80">{contact.lede}</p>

          <dl className="mt-10 grid min-w-0 gap-7 border-t border-line-dark pt-8">
            <div>
              <dt className={rowLabel}>
                <MailIcon />
                {email.label}
              </dt>
              <dd className="mt-1.5 text-title font-medium break-all">
                <a href={email.href} className="underline-offset-4 hover:underline">
                  {email.value}
                </a>
              </dd>
            </div>
            <div>
              <dt className={rowLabel}>
                <PhoneIcon />
                {phone.label}
              </dt>
              <dd className="mt-1.5 text-title font-medium">
                <a href={phone.href} className="tabular underline-offset-4 hover:underline">
                  {phone.value}
                </a>
              </dd>
            </div>
            {/* Visit and Company: labels removed at the client's instruction (6 September 2026).
                Each location carries a pin icon; the company lines stand on their own. */}
            <div>
              <dt className={rowLabel}>
                <PinIcon />
                {visit.label}
              </dt>
              <dd className="mt-1.5 grid gap-1.5 text-title font-medium">
                {visit.rows.map((row) => (
                  <span key={row.place} className="block">
                    {row.value || row.place}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="sr-only">{company.label}</dt>
              <dd className="text-body">
                <span className="block">{company.primary}</span>
                <span className="block text-paper/70">{company.secondary}</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-paper p-8 sm:p-10 lg:p-12">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
