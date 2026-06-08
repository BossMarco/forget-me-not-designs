import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { StickyCallBar } from "@/components/site/StickyCallBar";
import { LocalDeliveryBlock } from "@/components/site/LocalDeliveryBlock";
import { OccasionProductStrip } from "@/components/site/OccasionProductStrip";
import { NearbyCities } from "@/components/site/NearbyCities";
import { OccasionHubGrid } from "@/components/site/OccasionHubGrid";
import { LeadForm } from "@/components/site/LeadForm";
import { Toaster } from "@/components/ui/sonner";
import { getCity, isIndexableCity } from "@/data/cities";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { ld, buildBreadcrumb, buildFlorist } from "@/lib/schema";

export const Route = createFileRoute("/flower-delivery/$city/")({
  loader: ({ params }) => {
    const city = getCity(params.city);
    if (!city) throw notFound();
    const indexable = isIndexableCity(city);
    const canonicalSlug = city.parentCitySlug ?? city.slug;
    return { city, indexable, canonicalSlug };
  },

  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { city, indexable, canonicalSlug } = loaderData;
    const title = `Flower Delivery in ${city.name}, TX | Same-Day Florist | ${BUSINESS.shortName}`;
    const desc = `Same-day flower delivery in ${city.name}, TX. Weddings, quinceañeras, birthdays, sympathy & more, hand-arranged by ${BUSINESS.owner}. Call ${BUSINESS.phonePrimaryDisplay}.`;
    const url = `${SITE_URL}/flower-delivery/${city.slug}`;
    const canonical = `${SITE_URL}/flower-delivery/${canonicalSlug}`;

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
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        ld(
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Flower Delivery", path: "/flower-delivery" },
            { name: `${city.name}, TX`, path: `/flower-delivery/${city.slug}` },
          ]),
        ),
        ld(buildFlorist({ city, url })),
      ],
    };
  },

  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 pt-40 pb-24 text-center">
        <h1 className="font-serif text-4xl text-foreground">City not found</h1>
        <p className="mt-4 text-muted-foreground">We couldn&rsquo;t find that location.</p>
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

  component: CityHubPage,
});

function CityHubPage() {
  const { city } = Route.useLoaderData();
  const parent = city.parentCitySlug ? getCity(city.parentCitySlug) : undefined;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Flower Delivery", path: "/flower-delivery" },
          { name: `${city.name}, TX`, path: `/flower-delivery/${city.slug}` },
        ]}
      />

      <header className="mx-auto max-w-7xl px-6 pt-6">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
          {city.county} County · {BUSINESS.region}
        </p>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Flower Delivery in {city.name}, TX
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {city.introHook} Forget Me Not Flowers & Gifts hand-arranges bouquets for every occasion
          and delivers across {city.name} and the {BUSINESS.region}.
        </p>
        {parent ? (
          <p className="mt-3 text-sm text-muted-foreground">
            {city.name} is part of{" "}
            <Link
              to="/flower-delivery/$city"
              params={{ city: parent.slug }}
              className="text-primary hover:underline"
            >
              {parent.name}
            </Link>
            .
          </p>
        ) : null}
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

      {/* Occasions in this city */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Flowers for every occasion in {city.name}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          From weddings and quinceañeras to sympathy and same-day birthdays — choose an occasion to
          see what we offer in {city.name}.
        </p>
        <div className="mt-8">
          <OccasionHubGrid citySlug={city.slug} cityName={city.name} />
        </div>
      </section>

      <LocalDeliveryBlock city={city} />

      <OccasionProductStrip
        categories={["everyday", "romance", "birthday", "congratulations"]}
        seed={`hub:${city.slug}`}
        title={`Popular arrangements for ${city.name}`}
      />

      <NearbyCities city={city} />

      {/* Lead form */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Same-day & custom orders
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Send flowers to {city.name} today
          </h2>
          <p className="mt-4 text-muted-foreground">
            Call {BUSINESS.phonePrimaryDisplay} for same-day orders, or send the form for weddings,
            events, and custom designs.
          </p>
          <div className="mt-8">
            <LeadForm
              defaultOccasion={`Delivery to ${city.name}`}
              source={`hub:${city.slug}`}
              heading={`Send flowers to ${city.name}`}
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
