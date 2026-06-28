import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { citiesByCounty, INDEXABLE_CITIES, type City, type County } from "@/data/cities";

const COUNTY_ORDER: County[] = ["Hidalgo", "Cameron", "Starr", "Willacy"];

function CityLink({ city, occasionSlug }: { city: City; occasionSlug?: string }) {
  const className =
    "group inline-flex items-center justify-between gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-[var(--shadow-soft)]";
  return occasionSlug ? (
    <Link
      to="/flower-delivery/$city/$occasion"
      params={{ city: city.slug, occasion: occasionSlug }}
      className={className}
    >
      {city.name}
      <ArrowUpRight className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  ) : (
    <Link to="/flower-delivery/$city" params={{ city: city.slug }} className={className}>
      {city.name}
      <ArrowUpRight className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

/** All indexable cities grouped by county. If occasionSlug is set, links go to
 *  that occasion's page in each city (matrix); otherwise to each city hub. */
export function CityHubGrid({ occasionSlug }: { occasionSlug?: string }) {
  const grouped = citiesByCounty();
  return (
    <div className="space-y-10">
      {COUNTY_ORDER.map((county) => {
        const cities = grouped[county];
        if (cities.length === 0) return null;
        return (
          <div key={county}>
            <h3 className="font-serif text-xl text-foreground">{county} County</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {cities.map((c) => (
                <CityLink key={c.slug} city={c} occasionSlug={occasionSlug} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const ALL_INDEXABLE_CITY_COUNT = INDEXABLE_CITIES.length;
