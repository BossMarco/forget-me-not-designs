import { Link } from "@tanstack/react-router";
import {
  Heart,
  Cake,
  Crown,
  GraduationCap,
  Baby,
  Sparkles,
  Gift,
  Flower2,
  HeartHandshake,
  PartyPopper,
  CalendarHeart,
  Stethoscope,
  Church,
  Ribbon,
  Star,
} from "lucide-react";
import { OCCASIONS, type Occasion } from "@/data/occasions";

const ICONS: Record<string, typeof Heart> = {
  weddings: Church,
  events: PartyPopper,
  birthday: Cake,
  quinceanera: Crown,
  prom: GraduationCap,
  "baby-shower": Baby,
  "gender-reveal": Sparkles,
  "mothers-day": Flower2,
  "valentines-day": Heart,
  anniversary: CalendarHeart,
  sympathy: Church,
  "get-well": Stethoscope,
  congratulations: Star,
  "just-because": Gift,
  romance: Ribbon,
};

function OccasionCard({
  occasion,
  citySlug,
  cityName,
}: {
  occasion: Occasion;
  citySlug?: string;
  cityName?: string;
}) {
  const Icon = ICONS[occasion.slug] ?? HeartHandshake;
  const label = citySlug ? `${occasion.label} flowers` : occasion.plural;
  const inner = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <span className="font-serif text-lg text-foreground transition-colors group-hover:text-primary">
        {label}
        {cityName ? (
          <span className="block text-xs font-sans uppercase tracking-widest text-muted-foreground">
            in {cityName}
          </span>
        ) : null}
      </span>
    </>
  );
  const className =
    "group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]";
  return citySlug ? (
    <Link
      to="/flower-delivery/$city/$occasion"
      params={{ city: citySlug, occasion: occasion.slug }}
      className={className}
    >
      {inner}
    </Link>
  ) : (
    <Link to="/occasions/$occasion" params={{ occasion: occasion.slug }} className={className}>
      {inner}
    </Link>
  );
}

/** All occasions as a card grid. If citySlug is set, links go to that city's
 *  occasion pages (matrix); otherwise to each occasion hub. */
export function OccasionHubGrid({ citySlug, cityName }: { citySlug?: string; cityName?: string }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {OCCASIONS.map((o) => (
        <OccasionCard key={o.slug} occasion={o} citySlug={citySlug} cityName={cityName} />
      ))}
    </div>
  );
}
