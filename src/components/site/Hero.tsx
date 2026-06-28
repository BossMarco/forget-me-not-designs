import { Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-20">
        <div className="lg:col-span-6 animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary/50" />A Local Florist Studio
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Elegantly Crafted
            <span className="block italic text-primary">Florals</span>
            for Life&rsquo;s Special Moments.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hand-arranged bouquets, weddings, and curated gifts by Mariela &mdash; designed to help
            you recognize and share the moments that matter most.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-7 h-12 text-base">
              <a href="#contact">
                Send a Message
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7 h-12 text-base border-primary/30 text-primary hover:bg-primary/5"
            >
              <a href="tel:+19563131847">
                <Phone className="h-4 w-4" />
                (956) 313-1847
              </a>
            </Button>
          </div>
        </div>

        <Reveal as="div" delay={140} y={20} className="relative lg:col-span-6">
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-xl overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <img
              src={hero}
              alt="Lavender and white floral bouquet by Forget Me Not Flowers & Gifts"
              width={1600}
              height={1200}
              className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card px-6 py-4 shadow-[var(--shadow-soft)] sm:block">
            <div className="font-serif text-3xl text-primary">700+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Arrangements crafted
            </div>
          </div>
          <div className="absolute -right-4 top-10 hidden rotate-3 rounded-full border border-primary/20 bg-background/80 px-5 py-2 text-xs uppercase tracking-[0.25em] text-primary backdrop-blur md:block">
            Same-Day Delivery
          </div>
        </Reveal>
      </div>
    </section>
  );
}
