import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CATEGORIES, PRODUCTS } from "@/data/products";

const SITE_URL = "https://forget-me-not-designs.lovable.app";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Arrangements | Forget Me Not Flowers & Gifts" },
      {
        name: "description",
        content:
          "Browse hand-arranged bouquets, gift baskets, and seasonal florals from Forget Me Not Flowers & Gifts in Pharr, TX. Order by phone or online.",
      },
      { property: "og:title", content: "Shop Arrangements | Forget Me Not Flowers & Gifts" },
      {
        property: "og:description",
        content: "Browse our full catalog of hand-arranged florals and gifts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/shop" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/shop" }],
  }),
  component: ShopIndex,
});

function ShopIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">The Shop</p>
            <h1 className="font-serif text-4xl text-foreground sm:text-5xl">Browse by occasion</h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every piece is hand-arranged in our Pharr, TX studio. To order, tap any arrangement to
              continue on our store &mdash; or call us directly.
            </p>
            <a
              href="tel:+19563131847"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2 text-sm text-primary hover:bg-primary/5"
            >
              <Phone className="h-4 w-4" />
              (956) 313-1847
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => {
              const count = PRODUCTS.filter((p) => p.categories.includes(c.slug)).length;
              const cover = PRODUCTS.find((p) => p.categories.includes(c.slug));
              return (
                <Link
                  key={c.slug}
                  to="/shop/$category"
                  params={{ category: c.slug }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] hover:border-primary/30"
                >
                  {cover && (
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={cover.image}
                        alt={c.label}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                    </div>
                  )}
                  <div className="flex items-end justify-between gap-3 p-6">
                    <div>
                      <h2 className="font-serif text-2xl text-foreground">{c.label}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{count} arrangements</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
