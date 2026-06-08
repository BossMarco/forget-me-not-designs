import { SITE_URL } from "./site";
import type { City } from "@/data/cities";
import { isIndexableCity } from "@/data/cities";
import type { Occasion } from "@/data/occasions";

export type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export interface SitemapEntry {
  path: string;
  changefreq?: ChangeFreq;
  priority?: string;
}

/** Mirror of the route-level index rule so the sitemap never lists noindex pages. */
export function isMatrixIndexable(city: City, occasion: Occasion): boolean {
  if (!isIndexableCity(city)) return false;
  if (occasion.localFocus === "landmarks") return true;
  return city[occasion.localFocus].length > 0;
}

export function matrixEntries(
  cities: City[],
  occasions: Occasion[],
  priority: string,
): SitemapEntry[] {
  const out: SitemapEntry[] = [];
  for (const city of cities) {
    for (const occasion of occasions) {
      if (!isMatrixIndexable(city, occasion)) continue;
      out.push({
        path: `/flower-delivery/${city.slug}/${occasion.slug}`,
        changefreq: occasion.seasonalMonth ? "weekly" : "monthly",
        priority,
      });
    }
  }
  return out;
}

const XML_HEADERS = {
  "Content-Type": "application/xml",
  "Cache-Control": "public, max-age=3600",
};

// Build date injected via Vite define (vite.config.ts). The typeof guard keeps it
// safe if the define is ever absent — falls back to the current date.
declare const __BUILD_DATE__: string | undefined;
const LASTMOD =
  typeof __BUILD_DATE__ !== "undefined" && __BUILD_DATE__
    ? __BUILD_DATE__
    : new Date().toISOString().slice(0, 10);

export function urlsetResponse(entries: SitemapEntry[]): Response {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${SITE_URL}${e.path}</loc>`,
      `    <lastmod>${LASTMOD}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );
  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
  return new Response(xml, { headers: XML_HEADERS });
}

export function sitemapIndexResponse(paths: string[]): Response {
  const maps = paths.map((p) =>
    [
      `  <sitemap>`,
      `    <loc>${SITE_URL}${p}</loc>`,
      `    <lastmod>${LASTMOD}</lastmod>`,
      `  </sitemap>`,
    ].join("\n"),
  );
  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...maps,
    `</sitemapindex>`,
  ].join("\n");
  return new Response(xml, { headers: XML_HEADERS });
}
