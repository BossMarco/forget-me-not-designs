import { Phone } from "lucide-react";
import { PRODUCTS, type CategorySlug } from "@/data/products";
import { rotate } from "@/lib/local-content";

/** Product gallery filtered to an occasion's categories. On these lead-gen pages
 *  the cards are call-to-order triggers (jump to the inquiry form / call), not
 *  outbound links — we keep the conversion on-site. Order is rotated by `seed`
 *  so the same occasion shows a different lead image per city. */
export function OccasionProductStrip({
  categories,
  seed,
  title = "Popular arrangements",
  limit = 8,
}: {
  categories: CategorySlug[];
  seed: string;
  title?: string;
  limit?: number;
}) {
  const matches = PRODUCTS.filter((p) => p.categories.some((c) => categories.includes(c)));
  const products = rotate(seed, matches).slice(0, limit);
  if (products.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{title}</h2>
        <a
          href="#inquire"
          className="group text-sm text-primary transition-colors hover:text-primary/80"
        >
          Don't see it? Ask for a custom design{" "}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <a key={p.slug} href="#inquire" className="group flex flex-col">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary/40">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/95 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-primary">
                  <Phone className="h-3 w-3" /> Call to order
                </span>
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
    </section>
  );
}
