import { PRODUCTS } from "@/data/products";

// Curated mix for a balanced masonry layout
const GALLERY_SLUGS = [
  "36-red-rose-bouquet-with-1-dozen-chocolate-covered-strawberries",
  "coastal-charm-bouquet",
  "tulip-delight",
  "elegance-is-bliss-korean-wrap-bouquet",
  "love-package-in-box",
  "50-shades-of-love",
];

const spans = ["row-span-2", "", "", "", "row-span-2", ""];

const items = GALLERY_SLUGS.map((s, i) => {
  const p = PRODUCTS.find((p) => p.slug === s);
  return p ? { ...p, span: spans[i] } : null;
}).filter((p): p is NonNullable<typeof p> => Boolean(p));

export function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">The Portfolio</p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              A garden of moments, in bloom.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Real arrangements from the studio &mdash; a small selection of recent work.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:auto-rows-[260px]">
          {items.map((it) => (
            <a
              key={it.slug}
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <img
                src={it.image}
                alt={it.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-5 text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="font-serif text-lg leading-tight">{it.name}</div>
                <div className="mt-1 text-xs uppercase tracking-widest opacity-90">{it.price}</div>
              </figcaption>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
