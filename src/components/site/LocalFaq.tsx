import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { OccasionFaq } from "@/data/occasions";
import { interpolate } from "@/lib/local-content";

/** Renders city-interpolated FAQs. Pair with buildFaqPage() for FAQPage JSON-LD. */
export function LocalFaq({
  faqs,
  city,
  heading = "Frequently asked questions",
}: {
  faqs: OccasionFaq[];
  city?: string;
  heading?: string;
}) {
  if (faqs.length === 0) return null;
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{heading}</h2>
      <Accordion type="single" collapsible className="mt-6">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-base text-foreground">
              {interpolate(f.q, { city })}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground">
              {interpolate(f.a, { city })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
