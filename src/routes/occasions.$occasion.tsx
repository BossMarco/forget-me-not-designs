import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Phone, Check } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { StickyCallBar } from "@/components/site/StickyCallBar";
import { OccasionProductStrip } from "@/components/site/OccasionProductStrip";
import { LocalFaq } from "@/components/site/LocalFaq";
import { CityHubGrid } from "@/components/site/CityHubGrid";
import { LeadForm } from "@/components/site/LeadForm";
import { Toaster } from "@/components/ui/sonner";
import { getOccasion } from "@/data/occasions";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { interpolate } from "@/lib/local-content";
import { ld, buildBreadcrumb, buildService, buildFaqPage } from "@/lib/schema";

export const Route = createFileRoute("/occasions/$occasion")({
  loader: ({ params }) => {
    const occasion = getOccasion(params.occasion);
    if (!occasion) throw notFound();
    return { occasion };
  },

  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { occasion } = loaderData;
    const title = `${occasion.hubH1} | ${BUSINESS.shortName}`;
    const desc = interpolate(occasion.metaDescTemplate, {
      city: BUSINESS.region,
    });
    const url = `${SITE_URL}/occasions/${occasion.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
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
            { name: "Occasions", path: "/occasions" },
            { name: occasion.plural, path: `/occasions/${occasion.slug}` },
          ]),
        ),
        ld(buildService({ occasion, url })),
        ld(buildFaqPage(occasion.faqs, { city: BUSINESS.region })),
      ],
    };
  },

  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 pt-40 pb-24 text-center">
        <h1 className="font-serif text-4xl text-foreground">Occasion not found</h1>
        <Link
          to="/occasions"
          className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-primary-foreground hover:opacity-90"
        >
          All occasions
        </Link>
      </main>
      <Footer />
    </div>
  ),

  component: OccasionHubPage,
});

function OccasionHubPage() {
  const { occasion } = Route.useLoaderData();
  const offers = occasion.whatWeOffer.map((o) => interpolate(o, { city: BUSINESS.region }));

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Occasions", path: "/occasions" },
          { name: occasion.plural, path: `/occasions/${occasion.slug}` },
        ]}
      />

      <header className="mx-auto max-w-7xl px-6 pt-6">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">{BUSINESS.region}</p>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          {occasion.hubH1}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {interpolate(occasion.introVariants[0], {
            city: `the ${BUSINESS.region}`,
          })}
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

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">What we offer</h2>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {offers.map((o) => (
            <li key={o} className="flex items-start gap-3 text-muted-foreground">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </section>

      <OccasionProductStrip
        categories={occasion.productCategories}
        seed={`occhub:${occasion.slug}`}
        title={`${occasion.label} arrangements`}
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          {occasion.label} flowers by city
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Choose your city for local {occasion.phrase} and same-day delivery details across the{" "}
          {BUSINESS.region}.
        </p>
        <div className="mt-8">
          <CityHubGrid occasionSlug={occasion.slug} />
        </div>
      </section>

      <LocalFaq
        faqs={occasion.faqs}
        city={`the ${BUSINESS.region}`}
        heading={`${occasion.label} flowers — FAQ`}
      />

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Ready to order {occasion.label.toLowerCase()} flowers?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Call {BUSINESS.phonePrimaryDisplay} or send the form — we&rsquo;ll reply within one
            business day.
          </p>
          <div className="mt-8">
            <LeadForm
              defaultOccasion={occasion.label}
              source={`occhub:${occasion.slug}`}
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
