export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary font-serif text-xl italic">
            f
          </span>
          <div className="leading-tight">
            <div className="font-serif text-base text-foreground">
              Forget Me Not Flowers &amp; Gifts
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              by Mariela
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="/#about" className="hover:text-primary">
            About
          </a>
          <a href="/#services" className="hover:text-primary">
            Services
          </a>
          <a href="/shop" className="hover:text-primary">
            Shop
          </a>
          <a href="/#gallery" className="hover:text-primary">
            Gallery
          </a>
          <a href="/#contact" className="hover:text-primary">
            Contact
          </a>
          <a href="tel:+19563131847" className="hover:text-primary">
            (956) 313-1847
          </a>
        </nav>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Forget Me Not Flowers &amp; Gifts
        </div>
      </div>
    </footer>
  );
}
