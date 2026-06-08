import about from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-20">
        <div className="relative lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <img
              src={about}
              alt="Florist Mariela arranging purple roses"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
            />
          </div>
          <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-[2rem] border border-primary/20" />
        </div>

        <div className="lg:col-span-7">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-primary">Our Story</p>
          <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Meet Mariela &mdash; the hands behind every bloom.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p className="font-serif text-2xl italic text-foreground/90">
              &ldquo;Our goal is simple: to help you recognize and share life&rsquo;s unforgettable
              moments through the beauty of flowers.&rdquo;
            </p>
            <p>
              Forget Me Not Flowers &amp; Gifts is a small, local studio built on years of careful
              craft. Every arrangement is composed by hand, sourced fresh, and styled to feel
              personal &mdash; never templated.
            </p>
            <p>
              Whether it&rsquo;s a Tuesday surprise or the centerpiece of your wedding day, we treat
              each order with the same quiet attention to detail.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "700+", v: "Designs delivered" },
              { k: "10 yrs", v: "Of floral artistry" },
              { k: "Local", v: "Same-day delivery" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-serif text-3xl text-primary">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
