"use client";

import { useEffect } from "react";

/**
 * Reveals [data-reveal] elements once as they scroll into view. Until this mounts the
 * page renders fully visible (the hidden state is scoped to html[data-js]), so crawlers and
 * no-JS readers see everything. A leaf with no markup.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    root.dataset.js = "";
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (!entry.isIntersecting) continue;
          el.dataset.inview = "";
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    const observed = new WeakSet<Element>();
    const observeAll = () =>
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        observer.observe(el);
      });
    observeAll();
    // Elements mounted by tabs or client-side route changes are picked up when they appear.
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, {
      attributes: true,
      attributeFilter: ["hidden"],
      childList: true,
      subtree: true,
    });
    return () => {
      observer.disconnect();
      mutations.disconnect();
      delete root.dataset.js;
    };
  }, []);
  return null;
}
