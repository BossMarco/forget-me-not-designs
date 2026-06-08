import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { TIER1_CITIES } from "@/data/cities";
import { OCCASIONS } from "@/data/occasions";
import { urlsetResponse, matrixEntries } from "@/lib/sitemap";

// Primary matrix sitemap: flagship (Tier-1) cities × all occasions.
// Submit this first so the strongest pages get indexed before the long tail.
export const Route = createFileRoute("/sitemap-occasions-1.xml")({
  server: {
    handlers: {
      GET: async () => urlsetResponse(matrixEntries(TIER1_CITIES, OCCASIONS, "0.7")),
    },
  },
});
