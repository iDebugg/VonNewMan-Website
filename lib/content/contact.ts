import { site } from "./site";

export type SelectOption = { value: string; label: string };

export type FieldBase = {
  name: string;
  label: string;
  required?: boolean;
  autoComplete?: string;
};

export type TextField = FieldBase & { kind: "text" | "email" };
export type SelectField = FieldBase & { kind: "select"; options: SelectOption[] };
export type TextareaField = FieldBase & { kind: "textarea"; placeholder: string };
export type FormField = TextField | SelectField | TextareaField;

export const contact = {
  headline: "Let's build something bespoke.",
  lede: "A conversation, a demonstration of Atlas and Sonar with your context in mind, and a 90-day pilot shaped around your goals. That's all it takes to see the difference a product partner makes.",
  details: {
    email: { label: "Email", value: site.email, href: `mailto:${site.email}` as const },
    phone: { label: "Phone", value: site.phoneDisplay, href: site.phoneHref },
    /** Two locations, rendered as two labelled rows (design plan open decision 2a, option A). */
    visit: {
      label: "Visit",
      rows: [
        { place: "Lagos", value: "No. 3 Jasmine Road, Ikota GRA, Lekki, Lagos" },
        { place: "United Kingdom", value: "" },
      ],
    },
    company: {
      label: "Company",
      primary: site.shortLegalName,
      secondary: `${site.registration}, Nigeria`,
    },
  },
  submitLabel: "Send enquiry",
  /**
   * Source strings for the mailto handoff. Kept verbatim unless a real send provider is wired
   * at phase 5 (design plan open decision 4).
   */
  mailto: {
    note: "Sending opens your email app with the message ready to go. Or write to us directly.",
    afterSubmit: "Your email app should open with the message ready to send.",
    subjectPrefix: "Enquiry from",
    subjectFallback: "website",
  },
} as const;

const toOptions = (labels: readonly string[]): SelectOption[] =>
  labels.map((label) => ({ value: label, label }));

export const sectorOptions = toOptions([
  "Public sector",
  "Financial services",
  "Private sector, other",
  "Not sure yet",
]);

export const interestOptions = toOptions([
  "A conversation about a problem we could solve",
  "A demonstration of Atlas",
  "A demonstration of Sonar",
  "A custom software build",
  "Cloud, network or security services",
  "A 90-day pilot",
]);

export const formFields: FormField[] = [
  { kind: "text", name: "name", label: "Your name", autoComplete: "name", required: true },
  { kind: "text", name: "org", label: "Organisation", autoComplete: "organization" },
  { kind: "email", name: "email", label: "Work email", autoComplete: "email", required: true },
  { kind: "select", name: "sector", label: "Sector", options: sectorOptions },
  {
    kind: "select",
    name: "interest",
    label: "What are you interested in?",
    options: interestOptions,
  },
  {
    kind: "textarea",
    name: "message",
    label: "Tell us a little about it",
    placeholder: "What's the problem, who does it affect, and what would good look like?",
  },
];
