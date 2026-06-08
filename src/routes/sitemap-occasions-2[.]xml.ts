import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { INDEXABLE_CITIES } from "@/data/cities";
import { OCCASIONS } from "@/data/occasions";
import { urlsetResponse, matrixEntries } from "@/lib/sitemap";

// Secondary matrix sitemap: Tier-2/3 cities × all occasions (the long tail).
// Submit ~2–3 weeks after the primary tier to avoid a crawl-budget spike.
const TIER23_CITIES = INDEXABLE_CITIES.filter((c) => c.tier !== 1);

export const Route = createFileRoute("/sitemap-occasions-2.xml")({
  server: {
    handlers: {
      GET: async () => urlsetResponse(matrixEntries(TIER23_CITIES, OCCASIONS, "0.5")),
    },
  },
});
