"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { FormField } from "@/lib/content";
import { contact, formFields } from "@/lib/content";
import type { EnquiryErrors, EnquiryField } from "@/lib/actions/enquiry";
import { honeypotField, mailtoSender, readEnquiry, validateEnquiry } from "@/lib/actions/enquiry";
import { cn } from "@/lib/utils/cn";

// Fields: brand-green border with 8px corners; focus swaps the page outline for a soft green ring.
const control =
  "w-full rounded-[.65rem] border bg-paper px-4 py-3.5 text-body text-ink transition-[border-color,box-shadow] duration-150 placeholder:text-slate focus-visible:border-brand focus-visible:ring-4 focus-visible:ring-brand/20 focus-visible:outline-none";

function Field({ field, error }: { field: FormField; error?: string }) {
  const id = `f-${field.name}`;
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: field.name,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: cn(control, error ? "border-error" : "border-brand/50"),
  };
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-label font-semibold text-ink">
        {field.label}
      </label>
      {field.kind === "select" ? (
        <div className="relative">
          <select {...shared} className={cn(shared.className, "appearance-none pr-12")}>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-brand"
          >
            <path
              d="m5 7.5 5 5 5-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : field.kind === "textarea" ? (
        <textarea
          {...shared}
          placeholder={field.placeholder}
          className={cn(shared.className, "min-h-32 resize-y")}
        />
      ) : (
        <input
          {...shared}
          type={field.kind}
          autoComplete={field.autoComplete}
          required={field.required}
        />
      )}
      {error ? (
        <p id={errorId} className="text-caption font-medium text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Sending: the source site's mailto handoff with its original strings (design plan open
 * decision 4, option 2). Validation is custom so the messages are ours and tied to the fields;
 * a filled honeypot is dropped silently.
 */
export function ContactForm() {
  // The resting note was removed at the client's instruction (7 September 2026); the after-submit
  // message still appears once the email app has been handed the enquiry.
  const [note, setNote] = useState<string | null>(null);
  const [errors, setErrors] = useState<EnquiryErrors>({});

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get(honeypotField) ?? "")) return;

    const enquiry = readEnquiry(data);
    const nextErrors = validateEnquiry(enquiry);
    setErrors(nextErrors);
    const firstInvalid = (Object.keys(nextErrors) as EnquiryField[])[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#f-${firstInvalid}`)?.focus();
      return;
    }

    const result = await mailtoSender.send(enquiry);
    if (result.ok && result.href) {
      window.location.href = result.href;
      setNote(contact.mailto.afterSubmit);
    }
  };

  const [name, org, email, sector, interest, message] = formFields;

  return (
    <form id="contact-form" noValidate onSubmit={onSubmit} className="relative grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {name ? <Field field={name} error={errors.name} /> : null}
        {org ? <Field field={org} /> : null}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {email ? <Field field={email} error={errors.email} /> : null}
        {sector ? <Field field={sector} /> : null}
      </div>
      {interest ? <Field field={interest} /> : null}
      {message ? <Field field={message} /> : null}
      {/* Honeypot: off-screen, not focusable, ignored by assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`f-${honeypotField}`}>Company website</label>
        <input
          id={`f-${honeypotField}`}
          name={honeypotField}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid gap-4 pt-1">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-lime px-5 py-4 text-body font-bold text-ink transition-[background-color,transform] duration-150 hover:-translate-y-0.5 hover:bg-brand hover:text-paper"
        >
          {contact.submitLabel} <span aria-hidden="true">→</span>
        </button>
        <p id="form-note" className="text-caption text-slate" aria-live="polite">
          {note ?? contact.mailto.note}
        </p>
      </div>
    </form>
  );
}
