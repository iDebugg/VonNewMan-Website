"use client";

import { useEffect, useState } from "react";

type LocalClockProps = {
  timeZone: string;
  zoneLabel?: string;
};

type Reading = { time: string; zone: string };

function read(timeZone: string, zoneLabel: string | undefined, now = new Date()): Reading {
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);
  const zone =
    zoneLabel ??
    new Intl.DateTimeFormat("en-GB", { timeZone, timeZoneName: "short" })
      .formatToParts(now)
      .find((part) => part.type === "timeZoneName")?.value ??
    "";
  return { time, zone };
}

/**
 * Live local time. The server renders a value at build or request time; the client replaces it
 * on mount and then once per minute, on the minute. suppressHydrationWarning covers the gap.
 */
export function LocalClock({ timeZone, zoneLabel }: LocalClockProps) {
  const [reading, setReading] = useState<Reading>(() => read(timeZone, zoneLabel));

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    const tick = () => setReading(read(timeZone, zoneLabel));
    tick();
    const msToNextMinute = 60_000 - (Date.now() % 60_000);
    const timeout = setTimeout(() => {
      tick();
      interval = setInterval(tick, 60_000);
    }, msToNextMinute);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [timeZone, zoneLabel]);

  return (
    <p aria-live="off" className="flex items-baseline gap-3">
      <time
        dateTime={reading.time}
        suppressHydrationWarning
        className="font-display text-clock tabular"
      >
        {reading.time}
      </time>
      <span suppressHydrationWarning className="text-label text-paper/70">
        {reading.zone}
      </span>
    </p>
  );
}
