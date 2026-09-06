import { contact } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { BuildingIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icon";
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
              <dd className="mt-1.5 text-title break-all sm:text-title-lg">
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
              <dd className="mt-1.5 text-title-lg">
                <a href={phone.href} className="tabular underline-offset-4 hover:underline">
                  {phone.value}
                </a>
              </dd>
            </div>
            <div>
              <dt className={rowLabel}>
                <PinIcon />
                {visit.label}
              </dt>
              {/* Two locations, two rows: a place label and, where the source has one, an address. */}
              <dd className="mt-1.5 grid gap-1 text-body">
                {visit.rows.map((row) => (
                  <span key={row.place} className="grid gap-x-4 sm:grid-cols-[9rem_1fr]">
                    <span className="text-label text-paper/70 sm:pt-0.5">{row.place}</span>
                    {row.value ? <span>{row.value}</span> : null}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className={rowLabel}>
                <BuildingIcon />
                {company.label}
              </dt>
              <dd className="mt-1.5 text-body">
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
