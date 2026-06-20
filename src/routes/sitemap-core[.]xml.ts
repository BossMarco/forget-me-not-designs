import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CATEGORIES } from "@/data/products";
import { POSTS } from "@/data/posts";
import { urlsetResponse, type SitemapEntry } from "@/lib/sitemap";

// Core static pages: home, shop + categories, and the two programmatic hubs.
export const Route = createFileRoute("/sitemap-core.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/flower-delivery", changefreq: "weekly", priority: "0.9" },
          { path: "/occasions", changefreq: "weekly", priority: "0.9" },
          { path: "/shop", changefreq: "weekly", priority: "0.8" },
          ...CATEGORIES.map((c) => ({
            path: `/shop/${c.slug}`,
            changefreq: "weekly" as const,
            priority: "0.7",
          })),
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          ...POSTS.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];
        return urlsetResponse(entries);
      },
    },
  },
});
