"use client";

import { useEffect, useRef, useState } from "react";
import type { LinkItem } from "@/types/content";
import type { MobileGroup } from "@/lib/content";
import { menuButtonLabels } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ExternalHint, externalLinkProps } from "@/components/ui/ExternalHint";
import { CloseIcon, MenuIcon } from "@/components/ui/Icon";

type MobileNavProps = {
  groups: MobileGroup[];
  cta: LinkItem;
};

/**
 * Full-screen navigation sheet built on <dialog>. showModal() gives the focus trap, Escape
 * handling and focus restoration natively; scroll lock is applied to the root element.
 */
export function MobileNav({ groups, cta }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="ml-auto lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={menuButtonLabels.open}
        onClick={() => setOpen(true)}
        className="inline-grid size-11 place-items-center rounded-nav border border-paper/20 text-paper group-data-[condensed=true]:border-line group-data-[condensed=true]:text-ink"
      >
        <MenuIcon />
      </button>
      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label="Menu"
        onClose={() => setOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
        className="fixed inset-0 m-0 h-svh max-h-none w-screen max-w-none bg-paper p-0 text-ink backdrop:bg-transparent"
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="flex h-header items-center justify-end px-gutter-narrow sm:px-gutter">
            <button
              type="button"
              aria-label={menuButtonLabels.close}
              onClick={() => setOpen(false)}
              className="inline-grid size-11 place-items-center rounded-control border border-line text-ink"
            >
              <CloseIcon />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 px-gutter-narrow pb-8 sm:px-gutter">
            {groups.map((group) => (
              <div key={group.label} className="pt-6">
                <p className="text-label text-slate">{group.label}</p>
                <ul className="mt-2 list-none border-t border-line">
                  {group.items.map((item) => (
                    <li key={item.href + item.label} className="border-b border-line">
                      <a
                        href={item.href}
                        {...(item.external ? externalLinkProps : {})}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 py-3.5 text-title font-medium text-ink"
                      >
                        {item.label}
                        {item.external ? <ExternalHint /> : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="pt-8">
              <ButtonLink item={cta} className="w-full" />
            </div>
          </nav>
        </div>
      </dialog>
    </div>
  );
}
