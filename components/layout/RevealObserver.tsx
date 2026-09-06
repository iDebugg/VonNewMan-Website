"use client";

import { useEffect } from "react";

/**
 * Reveals [data-reveal] elements as they scroll into view, once each. Until this mounts the
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
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.inview = "";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" },
    );
    const observeAll = () =>
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-inview])").forEach((el) => {
        observer.observe(el);
      });
    observeAll();
    // Elements inside tab panels that open later are picked up when they appear.
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, {
      attributes: true,
      attributeFilter: ["hidden"],
      subtree: true,
    });
    // Safety net: if the observer has not fired for something already on screen (hidden tabs,
    // some in-app browsers), show it anyway after a moment so nothing stays invisible.
    const safety = window.setInterval(() => {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-inview])").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) el.dataset.inview = "";
      });
    }, 1500);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.clearInterval(safety);
      delete root.dataset.js;
    };
  }, []);
  return null;
}
