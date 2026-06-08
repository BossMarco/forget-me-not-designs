import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { getCity, isIndexableCity, type City } from "@/data/cities";

/** "We also serve" internal links to neighboring city hubs (or, if occasionSlug
 *  is set, the same occasion in nearby cities). Powers the hub-and-spoke mesh. */
export function NearbyCities({ city, occasionSlug }: { city: City; occasionSlug?: string }) {
  const nearby = city.nearbyCities.map(getCity).filter((c): c is City => !!c && isIndexableCity(c));
  if (nearby.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
        We also deliver near {city.name}
      </h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {nearby.map((c) =>
          occasionSlug ? (
            <Link
              key={c.slug}
              to="/flower-delivery/$city/$occasion"
              params={{ city: c.slug, occasion: occasionSlug }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <MapPin className="h-3.5 w-3.5" />
              {c.name}
            </Link>
          ) : (
            <Link
              key={c.slug}
              to="/flower-delivery/$city"
              params={{ city: c.slug }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <MapPin className="h-3.5 w-3.5" />
              {c.name}
            </Link>
          ),
        )}
      </div>
    </section>
  );
}
