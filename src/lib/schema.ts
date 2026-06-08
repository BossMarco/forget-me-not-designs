import { SITE_URL, BUSINESS } from "./site";
import type { City } from "@/data/cities";
import type { Occasion, OccasionFaq } from "@/data/occasions";
import { interpolate } from "./local-content";

// Pure JSON-LD builders. Each returns a plain object that a route's head() passes
// to { type: "application/ld+json", children: JSON.stringify(...) }.

function openingHoursSpecification() {
  return BUSINESS.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: expandDays(h.days),
    opens: h.open,
    closes: h.close,
  }));
}

function expandDays(short: string): string[] {
  const map: Record<string, string> = {
    Mo: "Monday",
    Tu: "Tuesday",
    We: "Wednesday",
    Th: "Thursday",
    Fr: "Friday",
    Sa: "Saturday",
    Su: "Sunday",
  };
  const order = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  if (short.includes("-")) {
    const [a, b] = short.split("-");
    const start = order.indexOf(a);
    const end = order.indexOf(b);
    return order.slice(start, end + 1).map((d) => map[d]);
  }
  return [map[short]].filter(Boolean);
}

export function buildBreadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

/** Florist / LocalBusiness, optionally scoped to a city via areaServed. */
export function buildFlorist(opts?: { city?: City; url?: string }) {
  const city = opts?.city;
  const areaServed = city
    ? {
        "@type": "City",
        name: `${city.name}, TX`,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: `${city.county} County`,
        },
      }
    : BUSINESS.region;

  return {
    "@context": "https://schema.org",
    "@type": "Florist",
    name: BUSINESS.name,
    description: `Local florist by ${BUSINESS.owner} serving ${
      city ? `${city.name}, TX and ` : ""
    }the ${BUSINESS.region}. Same-day flower delivery for weddings, quinceañeras, birthdays, sympathy and more.`,
    telephone: BUSINESS.phonePrimary,
    url: opts?.url ?? SITE_URL,
    image: `${SITE_URL}/og.png`,
    priceRange: "$$",
    areaServed,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.studioCity,
      addressRegion: BUSINESS.state,
      addressCountry: "US",
    },
    openingHoursSpecification: openingHoursSpecification(),
  };
}

/** Service schema for a city×occasion or occasion-hub page. */
export function buildService(opts: { occasion: Occasion; city?: City; url: string }) {
  const { occasion, city, url } = opts;
  const cityName = city ? `${city.name}, TX` : BUSINESS.region;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${occasion.label} ${occasion.phrase}`,
    name: city ? interpolate(occasion.h1Template, { city: city.name }) : occasion.hubH1,
    url,
    areaServed: city ? { "@type": "City", name: cityName } : BUSINESS.region,
    provider: {
      "@type": "Florist",
      name: BUSINESS.name,
      telephone: BUSINESS.phonePrimary,
      url: SITE_URL,
    },
  };
}

export function buildFaqPage(faqs: OccasionFaq[], vars: { city?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: interpolate(f.q, vars),
      acceptedAnswer: {
        "@type": "Answer",
        text: interpolate(f.a, vars),
      },
    })),
  };
}

/** Convenience: turn an object into a head() script entry. */
export function ld(obj: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(obj) };
}
