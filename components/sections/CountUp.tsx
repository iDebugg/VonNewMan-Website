"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** The final value as written in the content, e.g. "209" or "90". */
  value: string;
  className?: string;
};

const parse = (value: string) => {
  const match = /^(\d+)(.*)$/.exec(value);
  return match ? { target: Number(match[1]), suffix: match[2] ?? "" } : null;
};

/**
 * Counts from 1 to the number when it scrolls into view, once. The server renders the final
 * value, so no-JS readers and crawlers see the real figure. Reduced motion skips the count.
 */
export function CountUp({ value, className }: CountUpProps) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState<string>(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || !parsed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { target, suffix } = parsed;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const duration = 2600;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const current = Math.max(1, Math.round(1 + (target - 1) * eased));
          setShown(`${current}${suffix}`);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        setShown(`1${suffix}`);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [parsed?.target, parsed?.suffix]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
