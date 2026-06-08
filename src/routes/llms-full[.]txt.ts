import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { CITIES, citiesByCounty, type County } from "@/data/cities";
import { OCCASIONS } from "@/data/occasions";
import { interpolate } from "@/lib/local-content";

// llms-full.txt — the full text corpus for LLMs that prefer one big ingest.
// Concatenates the complete underlying data (business, every occasion's copy +
// FAQs, every city's local details) so an AI can absorb "all our data" in a
// single fetch. Generated from source data; always current.
const COUNTY_ORDER: County[] = ["Hidalgo", "Cameron", "Starr", "Willacy"];

function list(label: string, items: string[]): string {
  return items.length ? `${label}: ${items.join("; ")}.` : "";
}

export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: {
      GET: async () => {
        const L: string[] = [];
        const region = `the ${BUSINESS.region}`;

        L.push(`# ${BUSINESS.name} — Full Content`);
        L.push("");
        L.push(
          `${BUSINESS.name} is a local florist by ${BUSINESS.owner} serving the entire ${BUSINESS.region} (RGV), Texas — from Rio Grande City to South Padre Island. We hand-arrange flowers and offer same-day delivery before ${BUSINESS.sameDayCutoff} across most of the Valley.`,
        );
        L.push(
          `Phone: ${BUSINESS.phonePrimaryDisplay} or ${BUSINESS.phoneSecondaryDisplay}. Hours: Mon–Fri 9am–6pm, Sat 9am–3pm, Sun 9am–5pm (CST). Studio based in ${BUSINESS.studioCity}, TX. Website: ${SITE_URL}`,
        );
        L.push("");
        L.push(
          `Page structure: each city has a hub at ${SITE_URL}/flower-delivery/{city} and a page per occasion at ${SITE_URL}/flower-delivery/{city}/{occasion}; each occasion has a Valley-wide hub at ${SITE_URL}/occasions/{occasion}. Full URL list: ${SITE_URL}/sitemap.xml`,
        );
        L.push("");
        L.push("=".repeat(70));
        L.push("# OCCASIONS");
        L.push("=".repeat(70));

        for (const o of OCCASIONS) {
          L.push("");
          L.push(`## ${o.label} (${o.phrase})`);
          L.push(`Hub: ${SITE_URL}/occasions/${o.slug}`);
          L.push(interpolate(o.introVariants[0], { city: region }));
          L.push(list("What we offer", o.whatWeOffer.map((w) => interpolate(w, { city: region }))));
          L.push("FAQs:");
          for (const f of o.faqs) {
            L.push(`- Q: ${interpolate(f.q, { city: region })}`);
            L.push(`  A: ${interpolate(f.a, { city: region })}`);
          }
        }

        L.push("");
        L.push("=".repeat(70));
        L.push("# CITIES & TOWNS WE SERVE");
        L.push("=".repeat(70));

        const grouped = citiesByCounty();
        for (const county of COUNTY_ORDER) {
          const cities = grouped[county];
          if (!cities.length) continue;
          L.push("");
          L.push(`## ${county} County`);
          for (const c of cities) {
            L.push("");
            L.push(`### ${c.name}, TX`);
            L.push(`Hub: ${SITE_URL}/flower-delivery/${c.slug}`);
            L.push(c.introHook);
            L.push(c.deliveryNote);
            L.push(
              `Same-day delivery: ${c.sameDay ? "available before " + BUSINESS.sameDayCutoff : "by advance/next-day schedule — call to arrange"}. About ${c.distanceFromStudioMi} miles from our ${BUSINESS.studioCity} studio.`,
            );
            const facts = [
              list("Neighborhoods", c.neighborhoods),
              list("Landmarks", c.landmarks),
              list("Hospitals", c.hospitals),
              list("Funeral homes", c.funeralHomes),
              list("Venues", c.venues),
              list("Schools", c.schools),
            ].filter(Boolean);
            for (const f of facts) L.push(f);
          }
        }

        L.push("");
        return new Response(L.join("\n"), {
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
