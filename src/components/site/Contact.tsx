import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { LeadForm } from "@/components/site/LeadForm";

export function Contact() {
  return (
    <section id="contact" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
            Let&rsquo;s Talk Flowers
          </p>
          <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
            Plan a custom arrangement or event consultation.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Reach out by phone for same-day orders, or send a note below for weddings, events, and
            custom gift baskets.
          </p>

          <div className="mt-10 space-y-6">
            <a
              href="tel:+19563131847"
              className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Call the studio
                </div>
                <div className="font-serif text-2xl text-foreground">(956) 313-1847</div>
                <div className="text-sm text-muted-foreground">or (956) 682-2119</div>
              </div>
            </a>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-card p-5">
                <Clock className="h-5 w-5 text-primary" />
                <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                  Hours
                </div>
                <div className="mt-1 space-y-0.5 text-sm">
                  <div className="text-foreground">Mon&ndash;Fri &middot; 9am&ndash;6pm</div>
                  <div className="text-foreground">Sat &middot; 9am&ndash;3pm</div>
                  <div className="text-muted-foreground">Sun &middot; 9am&ndash;5pm</div>
                </div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card p-5">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                  Delivery
                </div>
                <div className="mt-1 text-sm text-foreground">Pharr, McAllen, Mission,</div>
                <div className="text-sm text-foreground">Weslaco &amp; the RGV</div>
                <div className="mt-1 text-xs text-muted-foreground">Same-day before 3pm CST</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                aria-label="Instagram"
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <LeadForm source="home-contact" />
        </div>
      </div>
    </section>
  );
}
