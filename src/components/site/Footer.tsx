import { Link } from "@tanstack/react-router";
import { TIER1_CITIES } from "@/data/cities";
import { OCCASIONS } from "@/data/occasions";
import { BUSINESS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Link columns — sitewide discoverability for the programmatic hubs */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <img
            src="/logo.png"
            alt="Forget Me Not Flowers & Gifts by Mariela"
            className="h-20 w-auto"
            width={600}
            height={446}
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Hand-arranged flowers & same-day delivery across the {BUSINESS.region}.
          </p>
          <a
            href={BUSINESS.phonePrimaryTel}
            className="mt-4 inline-block font-serif text-xl text-foreground hover:text-primary"
          >
            {BUSINESS.phonePrimaryDisplay}
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
            Cities We Serve
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {TIER1_CITIES.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/flower-delivery/$city"
                  params={{ city: c.slug }}
                  className="hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/flower-delivery" className="font-medium hover:text-primary">
                All RGV cities →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
            Shop by Occasion
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-muted-foreground">
            {OCCASIONS.slice(0, 9).map((o) => (
              <li key={o.slug}>
                <Link
                  to="/occasions/$occasion"
                  params={{ occasion: o.slug }}
                  className="hover:text-primary"
                >
                  {o.plural}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/occasions" className="font-medium hover:text-primary">
                All occasions →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="/#about" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <Link to="/shop" className="hover:text-primary">
                Shop
              </Link>
            </li>
            <li>
              <a href="/#gallery" className="hover:text-primary">
                Gallery
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
            <li>
              <Link to="/blog" className="hover:text-primary">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Forget Me Not Flowers &amp; Gifts · Serving the{" "}
          {BUSINESS.region}, {BUSINESS.state}
        </div>
      </div>
    </footer>
  );
}
