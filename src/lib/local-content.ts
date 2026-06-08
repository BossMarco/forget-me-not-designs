import { BUSINESS } from "./site";

// Deterministic, combo-specific content helpers. The same (city, occasion) pair
// always renders the same text, but different pairs get different intros/orderings.
// This is the anti-doorway lever: variation is stable and tied to the combo, not
// random, so every page reads uniquely without duplicate-content churn.

/** Stable 32-bit hash of a string (FNV-1a). */
export function hashString(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Deterministically pick one item from a list using a string seed. */
export function pickVariant<T>(seed: string, variants: T[]): T {
  if (variants.length === 0) {
    throw new Error("pickVariant called with empty list");
  }
  return variants[hashString(seed) % variants.length];
}

/** Deterministically rotate an array by a seed (stable per seed). */
export function rotate<T>(seed: string, items: T[]): T[] {
  if (items.length <= 1) return items.slice();
  const offset = hashString(seed) % items.length;
  return [...items.slice(offset), ...items.slice(0, offset)];
}

export interface InterpolateVars {
  city?: string;
  occasion?: string;
  county?: string;
  [key: string]: string | undefined;
}

/**
 * Replace {city}, {occasion}, {county}, {phone}, {cutoff}, {region} tokens.
 * Business tokens are filled automatically from BUSINESS.
 */
export function interpolate(template: string, vars: InterpolateVars = {}): string {
  const all: Record<string, string> = {
    phone: BUSINESS.phonePrimaryDisplay,
    cutoff: BUSINESS.sameDayCutoff,
    region: BUSINESS.region,
    regionAbbr: BUSINESS.regionAbbr,
    business: BUSINESS.name,
    owner: BUSINESS.owner,
    ...Object.fromEntries(
      Object.entries(vars).filter(([, v]) => v !== undefined) as [string, string][],
    ),
  };
  return template.replace(/\{(\w+)\}/g, (m, key) => (key in all ? all[key] : m));
}
