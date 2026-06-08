import { Truck, Clock, MapPin, Phone } from "lucide-react";
import type { City } from "@/data/cities";
import { BUSINESS } from "@/lib/site";

/** City-specific delivery facts. Distinct data per city = unique content. */
export function LocalDeliveryBlock({ city }: { city: City }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-3xl border border-border/70 bg-secondary/30 p-8 sm:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Truck className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-serif text-xl text-foreground">Delivery to {city.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {city.deliveryNote}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {city.sameDay ? (
                <span className="font-medium text-primary">
                  Same-day available before {BUSINESS.sameDayCutoff}
                </span>
              ) : (
                <span className="font-medium text-foreground">
                  Advance & next-day delivery — call to schedule
                </span>
              )}{" "}
              · about {city.distanceFromStudioMi} mi from our {BUSINESS.studioCity} studio
            </p>
          </div>

          <div>
            <Clock className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-serif text-xl text-foreground">Studio hours</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {BUSINESS.hoursHuman.map((h) => (
                <li key={h.label}>
                  <span className="text-foreground">{h.label}</span> · {h.value}
                </li>
              ))}
            </ul>
            <a
              href={BUSINESS.phonePrimaryTel}
              className="mt-3 inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phonePrimaryDisplay}
            </a>
          </div>

          <div>
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-serif text-xl text-foreground">
              Areas we cover in {city.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {city.neighborhoods.length > 0
                ? `Including ${city.neighborhoods.join(", ")}, plus homes, offices, hospitals, schools and venues across ${city.name}, ${city.county} County.`
                : `Homes, offices, hospitals, schools and venues throughout ${city.name}, ${city.county} County.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
