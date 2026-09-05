type ClassValue = string | number | false | null | undefined;

/** Joins class names, dropping falsy values. No dependency needed for this project's usage. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
