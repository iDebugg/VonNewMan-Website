import { WORLD_MAP_PATH, WORLD_MAP_VIEWBOX } from "./world-map-path";
import { cn } from "@/lib/utils/cn";

export type MapPin = {
  id: string;
  label: string;
  lon: number;
  lat: number;
  labelSide: "above" | "below";
};

/** Equirectangular: longitude and latitude map straight to percentages of the box. */
const toPercent = (lon: number, lat: number) => ({
  left: `${((lon + 180) / 360) * 100}%`,
  top: `${((90 - lat) / 180) * 100}%`,
});

/**
 * World land as one vector path (Natural Earth, public domain) with pins placed by coordinates.
 * Each pin has a breathing ring; the map itself is decorative and hidden from assistive tech,
 * the pin labels are real text.
 */
export function WorldMap({ pins, className }: { pins: MapPin[]; className?: string }) {
  return (
    <div className={cn("relative aspect-[2/1] w-full", className)}>
      <svg
        viewBox={WORLD_MAP_VIEWBOX}
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
        className="absolute inset-0 size-full"
      >
        <path d={WORLD_MAP_PATH} fill="currentColor" />
      </svg>
      <ul className="absolute inset-0 list-none">
        {pins.map((pin) => (
          <li
            key={pin.id}
            style={toPercent(pin.lon, pin.lat)}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <span className="relative block size-3">
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-[breathe_2.6s_ease-out_infinite] rounded-full bg-paper/60"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-[breathe_2.6s_ease-out_1.3s_infinite] rounded-full bg-paper/60"
              />
              <span className="absolute inset-0 rounded-full border-2 border-paper bg-brand" />
            </span>
            <span
              className={cn(
                "absolute left-1/2 -translate-x-1/2 rounded-control bg-ink/85 px-2.5 py-1 text-caption font-medium whitespace-nowrap text-paper",
                pin.labelSide === "above" ? "bottom-full mb-2.5" : "top-full mt-2.5",
              )}
            >
              {pin.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
