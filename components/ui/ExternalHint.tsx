import { ExternalIcon } from "./Icon";

/** Marks a link that leaves the site: an icon for sighted readers, text for screen readers. */
export function ExternalHint() {
  return (
    <>
      <ExternalIcon className="inline-block shrink-0 align-[-0.1em]" />
      <span className="sr-only"> (opens in a new tab)</span>
    </>
  );
}

export const externalLinkProps = { target: "_blank", rel: "noopener" } as const;
