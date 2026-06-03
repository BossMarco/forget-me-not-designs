import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Phone } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import {
  CATEGORIES,
  PRODUCTS,
  getCategory,
  type CategorySlug,
} from "@/data/products";

const SITE_URL = "https://forget-me-not-designs.lovable.app";

export const Route = createFileRoute("/shop/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const cat = loaderData?.category;
    const title = cat
      ? `${cat.label} Flowers in Pharr, TX | Forget Me Not Flowers & Gifts`
      : "Shop | Forget Me Not Flowers & Gifts";
    const desc = cat
      ? `${cat.blurb} Hand-arranged in Pharr, TX. Same-day local delivery.`
      : "Browse arrangements from Forget Me Not Flowers & Gifts.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: cat ? `${SITE_URL}/shop/${cat.slug}` : `${SITE_URL}/shop` },
      ],
      links: cat ? [{ rel: "canonical", href: `${SITE_URL}/shop/${cat.slug}` }] : [],
    };
  },
  notFoundComponent: CategoryNotFound,
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 pt-40 pb-24 text-center">
        <h1 className="font-serif text-3xl text-foreground">Something went wrong</h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
        <button
          onClick={reset}
          className="mt-6 rounded-full bg-primary px-5 py-2 text-primary-foreground hover:opacity-90"
        >
          Try again
        </button>
      </main>
      <Footer />
    </div>
  ),
  component: CategoryPage,
});

function CategoryNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 pt-40 pb-24 text-center">
        <h1 className="font-serif text-4xl text-foreground">Category not found</h1>
        <p className="mt-4 text-muted-foreground">
          We couldn&rsquo;t find that collection.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-primary-foreground hover:opacity-90"
        >
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const products = PRODUCTS.filter((p) =>
    p.categories.includes(category.slug as CategorySlug),
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All categories
          </Link>

          <div className="mt-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
                {products.length} arrangements
              </p>
              <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
                {category.label}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {category.blurb}
              </p>
            </div>
            <a
              href="tel:+19563131847"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2 text-sm text-primary hover:bg-primary/5"
            >
              <Phone className="h-4 w-4" />
              (956) 313-1847
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/shop/$category"
                params={{ category: c.slug }}
                className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-wider transition-colors ${
                  c.slug === category.slug
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {c.label}
              </Link>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <a
                key={p.slug}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary/40">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/95 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs uppercase tracking-widest text-foreground">
                      View on Store
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <h3 className="font-serif text-base leading-snug text-foreground transition-colors group-hover:text-primary sm:text-lg">
                    {p.name}
                  </h3>
                  <span className="shrink-0 font-serif text-base text-primary sm:text-lg">
                    {p.price}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
