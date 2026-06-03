import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 shadow-[0_1px_0_oklch(0.9_0.02_305/0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary font-serif text-xl italic">
            f
          </span>
          <div className="leading-tight">
            <div className="font-serif text-lg md:text-xl text-foreground">Forget Me Not</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Flowers &amp; Gifts</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex rounded-full px-5">
            <a href="tel:+19563131847">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-serif text-2xl">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-5">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="text-lg text-foreground/85 hover:text-primary">
                    {l.label}
                  </a>
                ))}
                <Button asChild className="mt-4 rounded-full">
                  <a href="tel:+19563131847">
                    <Phone className="h-4 w-4" />
                    (956) 313-1847
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
