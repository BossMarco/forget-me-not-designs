import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

const SITE_URL = "https://forget-me-not-designs.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forget Me Not Flowers & Gifts | Premium Local Florist" },
      {
        name: "description",
        content:
          "Elegantly crafted florals for life's special moments. Everyday arrangements, weddings, events, and curated gift baskets. Call (956) 313-1847.",
      },
      { property: "og:title", content: "Forget Me Not Flowers & Gifts | Premium Local Florist" },
      {
        property: "og:description",
        content: "Premium local florist by Mariela — weddings, events, and curated gift baskets.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Florist",
          name: "Forget Me Not Flowers & Gifts",
          description:
            "Premium local florist by Mariela — hand-arranged bouquets, weddings, events, and curated gift baskets.",
          telephone: "+1-956-313-1847",
          url: SITE_URL,
          areaServed: "Rio Grande Valley",
          address: {
            "@type": "PostalAddress",
            addressRegion: "TX",
            addressCountry: "US",
          },
          openingHours: "Mo-Sa 09:00-18:00",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
