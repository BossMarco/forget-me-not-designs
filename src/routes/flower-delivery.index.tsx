import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { StickyCallBar } from "@/components/site/StickyCallBar";
import { CityHubGrid } from "@/components/site/CityHubGrid";
import { LeadForm } from "@/components/site/LeadForm";
import { Toaster } from "@/components/ui/sonner";
import { INDEXABLE_CITIES } from "@/data/cities";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { ld, buildBreadcrumb, buildFlorist } from "@/lib/schema";

export const Route = createFileRoute("/flower-delivery/")({
  head: () => {
    const title = `Flower Delivery Across the Rio Grande Valley | ${BUSINESS.shortName}`;
    const desc = `Same-day flower delivery to ${INDEXABLE_CITIES.length}+ Rio Grande Valley cities — McAllen, Edinburg, Brownsville, Harlingen, South Padre Island & more. Call ${BUSINESS.phonePrimaryDisplay}.`;
    const url = `${SITE_URL}/flower-delivery`;
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
            { name: "Flower Delivery", path: "/flower-delivery" },
          ]),
        ),
        ld(buildFlorist({ url })),
      ],
    };
  },
  component: FlowerDeliveryIndex,
});

function FlowerDeliveryIndex() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Flower Delivery", path: "/flower-delivery" },
        ]}
      />

      <header className="mx-auto max-w-7xl px-6 pt-6">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">{BUSINESS.region}</p>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Flower Delivery Across the Rio Grande Valley
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From Rio Grande City to South Padre Island, Forget Me Not Flowers & Gifts hand-arranges
          and delivers fresh flowers across {INDEXABLE_CITIES.length}+ RGV cities and towns.
          Same-day delivery is available in most of the Valley before {BUSINESS.sameDayCutoff}.
        </p>
        <a
          href={BUSINESS.phonePrimaryTel}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          <Phone className="h-4 w-4" /> Call {BUSINESS.phonePrimaryDisplay}
        </a>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <CityHubGrid />
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Don&rsquo;t see your town?
          </h2>
          <p className="mt-4 text-muted-foreground">
            We deliver throughout the {BUSINESS.region}. Call {BUSINESS.phonePrimaryDisplay} or send
            the form and we&rsquo;ll confirm delivery to your address.
          </p>
          <div className="mt-8">
            <LeadForm source="flower-delivery-index" heading="Check delivery to your area" />
          </div>
        </div>
      </section>

      <Footer />
      <StickyCallBar />
      <Toaster />
    </div>
  );
}
