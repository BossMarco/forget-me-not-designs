import { Flower2, Heart, Gift } from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Everyday Arrangements",
    desc: "Birthdays, anniversaries, or a just-because surprise — hand-tied bouquets in our signature romantic style.",
    items: ["Bouquets & vases", "Single-stem statements", "Subscription florals"],
  },
  {
    icon: Heart,
    title: "Weddings & Events",
    desc: "Custom consultations to design florals that bring your venue and vision to life — from bridal bouquets to full installations.",
    items: ["Bridal & bridesmaid bouquets", "Ceremony arches", "Reception centerpieces"],
  },
  {
    icon: Gift,
    title: "Curated Gift Baskets",
    desc: "Thoughtful pairings of fresh flowers with locally sourced gifts — candles, sweets, and keepsakes to remember.",
    items: ["Spa & self-care", "New baby & celebrations", "Sympathy & care packages"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">What We Create</p>
          <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
            Florals for every occasion, designed with intention.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] hover:border-primary/30"
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 space-y-2 border-t border-border/70 pt-5">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
