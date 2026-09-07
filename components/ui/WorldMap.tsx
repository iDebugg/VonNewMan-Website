import { WORLD_MAP_PATH } from "./world-map-path";
import { cn } from "@/lib/utils/cn";

export type MapPin = {
  id: string;
  label: string;
  lon: number;
  lat: number;
  labelSide: "above" | "below" | "left" | "right";
  minor?: boolean;
};

/**
 * The map is cropped to latitudes 80°N to 60°S: Antarctica and the polar cap add height and
 * carry nothing. The generated path is 1000 by 500 for the full 180° of latitude.
 */
const LAT_TOP = 80;
const LAT_BOTTOM = -60;
const FULL_HEIGHT = 500;
const cropY = ((90 - LAT_TOP) / 180) * FULL_HEIGHT;
const cropHeight = ((LAT_TOP - LAT_BOTTOM) / 180) * FULL_HEIGHT;
const viewBox = `0 ${cropY} 1000 ${cropHeight}`;

/** Equirectangular: longitude and latitude map straight to percentages of the cropped box. */
const toPercent = (lon: number, lat: number) => ({
  left: `${((lon + 180) / 360) * 100}%`,
  top: `${((LAT_TOP - lat) / (LAT_TOP - LAT_BOTTOM)) * 100}%`,
});

/**
 * World land as one vector path (Natural Earth, public domain) with pins placed by coordinates.
 * Each pin has a breathing ring; the map itself is decorative and hidden from assistive tech,
 * the pin labels are real text.
 */
export function WorldMap({
  pins,
  className,
  ...rest
}: { pins: MapPin[]; className?: string } & Record<string, unknown>) {
  return (
    <div
      {...(rest as Record<string, never>)}
      className={cn("relative w-full", className)}
      style={{ ...(rest.style as object), aspectRatio: `1000 / ${cropHeight}` }}
    >
      <svg
        viewBox={viewBox}
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
            <span className="relative block size-2.5 sm:size-3.5">
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
                "absolute rounded-control bg-ink/85 px-2.5 py-1 text-caption font-semibold whitespace-nowrap text-paper sm:px-3.5 sm:py-1.5 sm:text-label lg:px-4 lg:py-2 lg:text-body",
                pin.labelSide === "above" && "bottom-full left-1/2 mb-2 -translate-x-1/2 sm:mb-3.5",
                pin.labelSide === "below" && "top-full left-1/2 mt-2 -translate-x-1/2 sm:mt-3.5",
                pin.labelSide === "left" && "top-1/2 right-full mr-2.5 -translate-y-1/2 sm:mr-4",
                pin.labelSide === "right" && "top-1/2 left-full ml-2.5 -translate-y-1/2 sm:ml-4",
                pin.minor && "hidden sm:block",
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
