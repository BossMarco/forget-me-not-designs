import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { INDEXABLE_CITIES } from "@/data/cities";
import { OCCASIONS } from "@/data/occasions";
import { urlsetResponse, type SitemapEntry } from "@/lib/sitemap";

// City hubs + occasion hubs (the two hub axes).
export const Route = createFileRoute("/sitemap-cities.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...INDEXABLE_CITIES.map((c) => ({
            path: `/flower-delivery/${c.slug}`,
            changefreq: "monthly" as const,
            priority: c.tier === 1 ? "0.8" : "0.7",
          })),
          ...OCCASIONS.map((o) => ({
            path: `/occasions/${o.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ];
        return urlsetResponse(entries);
      },
    },
  },
});
