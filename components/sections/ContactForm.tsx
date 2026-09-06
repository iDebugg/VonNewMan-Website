"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { FormField } from "@/lib/content";
import { contact, formFields } from "@/lib/content";
import type { EnquiryErrors, EnquiryField } from "@/lib/actions/enquiry";
import { honeypotField, mailtoSender, readEnquiry, validateEnquiry } from "@/lib/actions/enquiry";
import { cn } from "@/lib/utils/cn";

const control =
  "w-full rounded-control border bg-stone/70 px-3.5 py-3 text-body text-ink placeholder:text-slate focus-visible:border-brand";

function Field({ field, error }: { field: FormField; error?: string }) {
  const id = `f-${field.name}`;
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: field.name,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: cn(control, error ? "border-error" : "border-line"),
  };
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-label font-semibold text-ink">
        {field.label}
      </label>
      {field.kind === "select" ? (
        <select {...shared}>
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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
  const [note, setNote] = useState<string>(contact.mailto.note);
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
          className="inline-flex w-full items-center justify-center rounded-nav bg-forest px-5 py-3.5 text-body font-semibold text-paper transition-colors duration-150 hover:bg-brand"
        >
          {contact.submitLabel}
        </button>
        <p id="form-note" className="text-caption text-slate" aria-live="polite">
          {note}
        </p>
      </div>
    </form>
  );
}
