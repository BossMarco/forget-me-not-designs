import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { StickyCallBar } from "@/components/site/StickyCallBar";
import { OccasionHubGrid } from "@/components/site/OccasionHubGrid";
import { LeadForm } from "@/components/site/LeadForm";
import { Toaster } from "@/components/ui/sonner";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { ld, buildBreadcrumb } from "@/lib/schema";

export const Route = createFileRoute("/occasions/")({
  head: () => {
    const title = `Flowers for Every Occasion in the RGV | ${BUSINESS.shortName}`;
    const desc = `Weddings, quinceañeras, proms, birthdays, sympathy, Mother's Day & more. Hand-arranged flowers delivered across the Rio Grande Valley. Call ${BUSINESS.phonePrimaryDisplay}.`;
    const url = `${SITE_URL}/occasions`;
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
          ]),
        ),
      ],
    };
  },
  component: OccasionsIndex,
});

function OccasionsIndex() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Occasions", path: "/occasions" },
        ]}
      />

      <header className="mx-auto max-w-7xl px-6 pt-6">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Shop by Occasion</p>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Flowers for Every Occasion
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Whatever the moment, {BUSINESS.owner} designs it by hand. Choose an occasion to see
          arrangements, ideas, and local delivery across the {BUSINESS.region}.
        </p>
        <a
          href={BUSINESS.phonePrimaryTel}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          <Phone className="h-4 w-4" /> Call {BUSINESS.phonePrimaryDisplay}
        </a>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <OccasionHubGrid />
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Planning something special?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your event and we&rsquo;ll build a custom proposal.
          </p>
          <div className="mt-8">
            <LeadForm source="occasions-index" heading="Start a custom inquiry" />
          </div>
        </div>
      </section>

      <Footer />
      <StickyCallBar />
      <Toaster />
    </div>
  );
}
