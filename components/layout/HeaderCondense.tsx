"use client";

import { useEffect } from "react";

/** Marks the site header as condensed once the page has scrolled. A leaf with no markup. */
export function HeaderCondense() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    if (!header) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      header.dataset.condensed = window.scrollY > 8 ? "true" : "false";
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
