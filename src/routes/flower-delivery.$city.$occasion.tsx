import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Phone, Check, MapPin } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { StickyCallBar } from "@/components/site/StickyCallBar";
import { LocalDeliveryBlock } from "@/components/site/LocalDeliveryBlock";
import { OccasionProductStrip } from "@/components/site/OccasionProductStrip";
import { LocalFaq } from "@/components/site/LocalFaq";
import { NearbyCities } from "@/components/site/NearbyCities";
import { OccasionHubGrid } from "@/components/site/OccasionHubGrid";
import { LeadForm } from "@/components/site/LeadForm";
import { Toaster } from "@/components/ui/sonner";
import { getCity, isIndexableCity } from "@/data/cities";
import { getOccasion } from "@/data/occasions";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { interpolate, pickVariant } from "@/lib/local-content";
import { ld, buildBreadcrumb, buildService, buildFaqPage } from "@/lib/schema";

export const Route = createFileRoute("/flower-delivery/$city/$occasion")({
  loader: ({ params }) => {
    const city = getCity(params.city);
    const occasion = getOccasion(params.occasion);
    if (!city || !occasion || !isIndexableCity(city)) throw notFound();

    const localData = city[occasion.localFocus];
    const indexable = occasion.localFocus === "landmarks" || localData.length > 0;
    return { city, occasion, indexable };
  },

  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { city, occasion, indexable } = loaderData;
    const vars = { city: city.name };
    // The occasion metaTitleTemplate already carries a value-prop tail (e.g.
    // "Bridal Bouquets & Centerpieces"), so we don't append the brand here —
    // keeps the title closer to the ~60-char SERP cutoff.
    const title = interpolate(occasion.metaTitleTemplate, vars);
    const desc = interpolate(occasion.metaDescTemplate, vars);
    const url = `${SITE_URL}/flower-delivery/${city.slug}/${occasion.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        ...(indexable ? [] : [{ name: "robots", content: "noindex,follow" }]),
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        ld(
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Flower Delivery", path: "/flower-delivery" },
            { name: `${city.name}, TX`, path: `/flower-delivery/${city.slug}` },
            {
              name: occasion.label,
              path: `/flower-delivery/${city.slug}/${occasion.slug}`,
            },
          ]),
        ),
        ld(buildService({ occasion, city, url })),
        ld(buildFaqPage(occasion.faqs, { city: city.name })),
      ],
    };
  },

  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 pt-40 pb-24 text-center">
        <h1 className="font-serif text-4xl text-foreground">Page not found</h1>
        <p className="mt-4 text-muted-foreground">We couldn&rsquo;t find that city or occasion.</p>
        <Link
          to="/flower-delivery"
          className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-primary-foreground hover:opacity-90"
        >
          Browse all cities
        </Link>
      </main>
      <Footer />
    </div>
  ),

  component: CityOccasionPage,
});

function CityOccasionPage() {
  const { city, occasion } = Route.useLoaderData();
  const vars = { city: city.name };
  const seed = `${city.slug}:${occasion.slug}`;

  const h1 = interpolate(occasion.h1Template, vars);
  const intro = interpolate(pickVariant(seed, occasion.introVariants), vars);
  const localItems = city[occasion.localFocus];
  const localHeading = interpolate(occasion.localHeading, vars);
  const offers = occasion.whatWeOffer.map((o) => interpolate(o, vars));

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Flower Delivery", path: "/flower-delivery" },
          { name: `${city.name}, TX`, path: `/flower-delivery/${city.slug}` },
          {
            name: occasion.label,
            path: `/flower-delivery/${city.slug}/${occasion.slug}`,
          },
        ]}
      />

      {/* Hero + intro */}
      <header className="mx-auto max-w-7xl px-6 pt-6">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
          {city.county} County · {BUSINESS.region}
        </p>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          {h1}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {city.introHook}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={BUSINESS.phonePrimaryTel}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> Call {BUSINESS.phonePrimaryDisplay}
          </a>
          <a
            href="#inquire"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/5"
          >
            Request a quote
          </a>
        </div>
      </header>

      {/* What we offer */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              {occasion.label} flowers, designed by {BUSINESS.owner}
            </h2>
            <ul className="mt-6 space-y-3">
              {offers.map((o) => (
                <li key={o} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Occasion-specific local data — the per-page uniqueness anchor */}
          <div className="rounded-3xl border border-border/70 bg-card p-7">
            <h3 className="font-serif text-xl text-foreground">{localHeading}</h3>
            {localItems.length > 0 ? (
              <ul className="mt-4 space-y-2.5">
                {localItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Wherever your {occasion.label.toLowerCase()} takes place in {city.name}, we deliver
                and set up on time. Tell us the address and we&rsquo;ll handle the rest.
              </p>
            )}
            <a
              href="#inquire"
              className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              Tell us about your {occasion.label.toLowerCase()} in {city.name} →
            </a>
          </div>
        </div>
      </section>

      <OccasionProductStrip
        categories={occasion.productCategories}
        seed={seed}
        title={`${occasion.label} arrangements`}
      />

      <LocalDeliveryBlock city={city} />

      <LocalFaq
        faqs={occasion.faqs}
        city={city.name}
        heading={`${occasion.label} flowers in ${city.name} — FAQ`}
      />

      <NearbyCities city={city} occasionSlug={occasion.slug} />

      {/* Other occasions in this city */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
          More flowers in {city.name}
        </h2>
        <div className="mt-6">
          <OccasionHubGrid citySlug={city.slug} cityName={city.name} />
        </div>
      </section>

      {/* Lead form */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Same-day & custom orders
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Order {occasion.label.toLowerCase()} flowers in {city.name}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Call {BUSINESS.phonePrimaryDisplay} for the fastest service, or send the form and
            we&rsquo;ll reply within one business day.
          </p>
          <div className="mt-8">
            <LeadForm
              defaultOccasion={`${occasion.label} — ${city.name}`}
              source={seed}
              heading={`Request ${occasion.label} flowers`}
            />
          </div>
        </div>
      </section>

      <Footer />
      <StickyCallBar />
      <Toaster />
    </div>
  );
}
