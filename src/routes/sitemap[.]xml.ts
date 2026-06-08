import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { sitemapIndexResponse } from "@/lib/sitemap";

// Sitemap index — points to the split child sitemaps. Keeping each page type in
// its own sitemap makes indexation easier to monitor and lets us submit tiers in
// phases (Tier-1 matrix first, Tier-2/3 later).
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () =>
        sitemapIndexResponse([
          "/sitemap-core.xml",
          "/sitemap-cities.xml",
          "/sitemap-occasions-1.xml",
          "/sitemap-occasions-2.xml",
        ]),
    },
  },
});
