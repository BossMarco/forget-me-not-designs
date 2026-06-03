import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const items = [
  { src: g1, alt: "Bridal bouquet with white peonies and lavender", span: "row-span-2" },
  { src: g2, alt: "Vibrant birthday arrangement in glass vase", span: "" },
  { src: g4, alt: "Wedding floral arch with purple and white blooms", span: "" },
  { src: g3, alt: "Lavender gift basket with candles", span: "" },
  { src: g6, alt: "Event centerpiece with hydrangeas and lavender", span: "row-span-2" },
  { src: g5, alt: "Wrapped bouquet of purple and pink roses", span: "" },
];

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
            Over <span className="font-serif text-foreground">700 arrangements</span> and counting —
            a small selection of recent work from the studio.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:auto-rows-[260px]">
          {items.map((it, idx) => (
            <figure
              key={idx}
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
