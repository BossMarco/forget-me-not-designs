import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

// Hand-picked, visually varied selection
const FEATURED_SLUGS = [
  "mothers-day-24-roses-and-chocolate-strawberries",
  "elegance-is-bliss-korean-wrap-bouquet",
  "just-lovely-korean-wrap-bouquet",
  "coastal-charm-bouquet",
  "tulip-delight",
  "50-shades-of-love",
  "with-love-package",
  "daisy-delights-fruit-bouquet",
];

const items = FEATURED_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(
  (p): p is NonNullable<typeof p> => Boolean(p),
);

export function Featured() {
  return (
    <section id="featured" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal
          as="div"
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
              Featured Arrangements
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              A few signature pieces from the studio.
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            Browse the full shop
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {items.map((p, i) => (
            <Reveal
              key={p.slug}
              as="a"
              delay={(i % 4) * 90}
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
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-background/95 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
