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
  headline: "What needs to work better?",
  lede: "Tell us about the problem, the people it affects and the outcome you need. We will bring the relevant consultants and engineers into the conversation.",
  details: {
    email: { label: "Email", value: site.email, href: `mailto:${site.email}` as const },
    phone: { label: "Phone", value: site.phoneDisplay, href: site.phoneHref },
    /** Two locations, rendered as two labelled rows (design plan open decision 2a, option A). */
    /** Label was "Visit"; "Address" at the client's instruction, 6 September 2026. */
    visit: {
      label: "Address",
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
  submitLabel: "Prepare enquiry email",
  /**
   * Source strings for the mailto handoff. Kept verbatim unless a real send provider is wired
   * at phase 5 (design plan open decision 4).
   */
  mailto: {
    note: "Opens your email app with a draft. Review it and send it from there.",
    afterSubmit: "Opens your email app with a draft. Review it and send it from there.",
    subjectPrefix: "Enquiry from",
    subjectFallback: "website",
  },
} as const;

export const sectorOptions: SelectOption[] = [
  { value: "Public sector", label: "Public sector" },
  { value: "Financial services", label: "Financial services" },
  { value: "Private sector, other", label: "Other private-sector organisation" },
  { value: "Not sure yet", label: "Not sure yet" },
];

export const interestOptions: SelectOption[] = [
  {
    value: "A conversation about a problem we could solve",
    label: "Discuss a business or technology problem",
  },
  { value: "A demonstration of Atlas", label: "See an Atlas demo" },
  { value: "A demonstration of Sonar", label: "See a Sonar demo" },
  { value: "A custom software build", label: "Build custom software" },
  {
    value: "Cloud, network or security services",
    label: "Discuss cloud, network or security services",
  },
  { value: "A 90-day pilot", label: "Discuss a 90-day pilot" },
];

export const formFields: FormField[] = [
  { kind: "text", name: "name", label: "Your name", autoComplete: "name", required: true },
  { kind: "text", name: "org", label: "Organisation", autoComplete: "organization" },
  { kind: "email", name: "email", label: "Work email", autoComplete: "email", required: true },
  { kind: "select", name: "sector", label: "Sector", options: sectorOptions },
  {
    kind: "select",
    name: "interest",
    label: "How can we help?",
    options: interestOptions,
  },
  {
    kind: "textarea",
    name: "message",
    label: "Tell us about your project",
    placeholder: "What needs to improve, who is affected, and what outcome are you looking for?",
  },
];
