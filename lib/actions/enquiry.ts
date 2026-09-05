import { contact, site } from "@/lib/content";

/** The contact form's fields. Shared by the client validator and any future server sender. */
export type Enquiry = {
  name: string;
  org: string;
  email: string;
  sector: string;
  interest: string;
  message: string;
};

export type EnquiryField = keyof Enquiry;
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

/** Error copy. Added 5 September 2026 (design plan open decision 4, option 2). */
export const enquiryErrors = {
  nameRequired: "Enter your name",
  emailRequired: "Enter your work email address",
  emailInvalid: "Enter an email address in the correct format, like name@organisation.com",
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readEnquiry(data: FormData): Enquiry {
  const value = (name: EnquiryField) => String(data.get(name) ?? "").trim();
  return {
    name: value("name"),
    org: value("org"),
    email: value("email"),
    sector: value("sector"),
    interest: value("interest"),
    message: value("message"),
  };
}

export function validateEnquiry(enquiry: Enquiry): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!enquiry.name) errors.name = enquiryErrors.nameRequired;
  if (!enquiry.email) errors.email = enquiryErrors.emailRequired;
  else if (!emailPattern.test(enquiry.email)) errors.email = enquiryErrors.emailInvalid;
  return errors;
}

/** Name of the honeypot field. Real visitors never see it; bots that fill it are dropped. */
export const honeypotField = "company_website";

/**
 * How an enquiry leaves the site. The mailto sender is the only implementation today; a
 * provider-backed Server Action can implement the same interface later without touching the form.
 */
export type EnquirySender = {
  kind: "mailto" | "server";
  send: (enquiry: Enquiry) => Promise<{ ok: true; href?: string } | { ok: false; error: string }>;
};

export const mailtoSender: EnquirySender = {
  kind: "mailto",
  async send(enquiry) {
    const subject = `${contact.mailto.subjectPrefix} ${
      enquiry.org || enquiry.name || contact.mailto.subjectFallback
    }`;
    const body = [
      `Name: ${enquiry.name}`,
      `Organisation: ${enquiry.org}`,
      `Email: ${enquiry.email}`,
      `Sector: ${enquiry.sector}`,
      `Interested in: ${enquiry.interest}`,
      "",
      enquiry.message,
    ].join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return { ok: true, href };
  },
};
