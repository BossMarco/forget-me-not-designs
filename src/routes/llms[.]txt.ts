import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { citiesByCounty, INDEXABLE_CITIES, type County } from "@/data/cities";
import { OCCASIONS } from "@/data/occasions";

// Generated llms.txt — a complete, self-maintaining map of the site for AI/LLM
// crawlers. Lists every occasion hub and every city hub (by county), explains the
// city × occasion structure, and points to the full sitemap. Built from the data
// so it never goes stale as cities/occasions are added.
const COUNTY_ORDER: County[] = ["Hidalgo", "Cameron", "Starr", "Willacy"];

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        const grouped = citiesByCounty();
        const L: string[] = [];

        L.push(`# ${BUSINESS.name}`);
        L.push("");
        L.push(
          `> Local florist by ${BUSINESS.owner} serving the entire ${BUSINESS.region}, Texas — from Rio Grande City to South Padre Island. Hand-arranged flowers with same-day delivery for weddings, quinceañeras, proms, birthdays, baby showers, gender reveals, Mother's Day, Valentine's Day, anniversaries, sympathy & funeral, get well, congratulations and more. Phone ${BUSINESS.phonePrimaryDisplay}.`,
        );
        L.push("");

        L.push("## Main");
        L.push(`- [Home](${SITE_URL}/): studio overview, services, gallery, contact.`);
        L.push(
          `- [Flower Delivery](${SITE_URL}/flower-delivery): every RGV city we serve, by county.`,
        );
        L.push(
          `- [Occasions](${SITE_URL}/occasions): flowers for every occasion across the Valley.`,
        );
        L.push(`- [Shop](${SITE_URL}/shop): browse arrangements by category.`);
        L.push(`- [Full sitemap](${SITE_URL}/sitemap.xml): complete list of all URLs.`);
        L.push("");

        L.push("## Page structure");
        L.push(
          `Every city has a hub at ${SITE_URL}/flower-delivery/{city} and a dedicated page for each occasion at ${SITE_URL}/flower-delivery/{city}/{occasion}. Every occasion also has a Valley-wide hub at ${SITE_URL}/occasions/{occasion}. We serve ${INDEXABLE_CITIES.length} RGV cities/towns across ${OCCASIONS.length} occasions; the complete enumeration of every page is in the sitemap linked above.`,
        );
        L.push("");

        L.push("## Occasions");
        for (const o of OCCASIONS) {
          L.push(`- [${o.plural}](${SITE_URL}/occasions/${o.slug})`);
        }
        L.push("");

        L.push("## Cities we serve");
        for (const county of COUNTY_ORDER) {
          const cities = grouped[county];
          if (!cities.length) continue;
          L.push(`### ${county} County`);
          for (const c of cities) {
            L.push(`- [${c.name}, TX](${SITE_URL}/flower-delivery/${c.slug})`);
          }
          L.push("");
        }

        L.push("## Contact");
        L.push(`- Phone: ${BUSINESS.phonePrimaryDisplay} (or ${BUSINESS.phoneSecondaryDisplay})`);
        L.push("- Hours: Mon–Fri 9am–6pm, Sat 9am–3pm, Sun 9am–5pm (CST)");
        L.push(
          `- Same-day delivery before ${BUSINESS.sameDayCutoff} across most of the ${BUSINESS.region}.`,
        );
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
