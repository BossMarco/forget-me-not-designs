import { useState, type FormEvent } from "react";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you — we'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

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

            <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
              <a
                href="https://www.valleygirlflorist.com/flower-care-tips/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border/60 bg-card px-4 py-3 text-center text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
              >
                Flower Care Tips
              </a>
              <a
                href="https://www.valleygirlflorist.com/local-funeral-homes/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border/60 bg-card px-4 py-3 text-center text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
              >
                Funeral Deliveries
              </a>
              <a
                href="https://www.valleygirlflorist.com/local-hospitals/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border/60 bg-card px-4 py-3 text-center text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
              >
                Hospital Deliveries
              </a>
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

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm lg:col-span-7 lg:p-10"
        >
          <h3 className="font-serif text-2xl text-foreground">Send an inquiry</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us about your moment — we&rsquo;ll handle the rest.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" placeholder="(956) 000-0000" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="occasion">Occasion / Event date</Label>
              <Input id="occasion" name="occasion" placeholder="e.g. Wedding, October 12" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us what you're imagining…"
              />
            </div>
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="mt-8 w-full rounded-full sm:w-auto sm:px-10"
          >
            {loading ? "Sending…" : "Send Inquiry"}
          </Button>
        </form>
      </div>
    </section>
  );
}
