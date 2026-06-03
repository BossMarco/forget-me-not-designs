# Forget Me Not Flowers & Gifts — Website Plan

A romantic, editorial-feeling florist site. Watercolor-inspired palette (lavender, sage, cream), serif display typography paired with a clean sans, and generous whitespace so the floral photography carries the visual weight.

Note: the referenced branding image was not attached to this chat. I'll work from your color/typography description (elegant purples, soft lavenders, sage greens, cream). If you re-upload the logo, I'll swap it in for the placeholder mark.

## Design direction

- **Palette (oklch tokens in `src/styles.css`)**
  - Background: warm cream `oklch(0.985 0.008 85)`
  - Foreground/ink: deep aubergine `oklch(0.28 0.05 305)`
  - Primary: lavender-purple `oklch(0.62 0.13 300)`
  - Accent: sage `oklch(0.72 0.06 150)`
  - Muted: soft lilac `oklch(0.95 0.02 305)`
- **Typography:** Cormorant Garamond (display serif) + Inter (body), loaded via Google Fonts.
- **Motion:** Subtle fade/slide-in on scroll, gentle image hover zoom, smooth-scroll anchor links. Implemented with Framer Motion + CSS.
- **Imagery:** Generate 4–6 hero/gallery florals via the image tool (lavender bouquets, romantic wedding arrangements, gift baskets) saved under `src/assets/`.

## Site structure (single landing route)

`src/routes/index.tsx` composed of section components in `src/components/site/`:

1. **Navbar** — sticky, translucent on scroll, logo wordmark, nav links (Home, About, Services, Gallery, Contact), prominent `Call Now` button linking to `tel:+19563131847`.
2. **Hero** — full-width hero image, headline "Elegantly Crafted Florals for Life's Special Moments", subhead, CTA "Send a Message" that smooth-scrolls to `#contact`, secondary "Call (956) 313-1847".
3. **About** — two-column: portrait/floral image + Mariela's intro and mission statement.
4. **Services** — 3 cards: Everyday Arrangements, Weddings & Events, Curated Gift Baskets. Icon + short description + soft hover lift.
5. **Gallery** — responsive masonry/grid of 8–10 floral images with hover zoom; subtle "700+ arrangements crafted" stat strip.
6. **Contact** — left: phone (large), hours, address/delivery zones, social placeholders. Right: inquiry form (name, email, phone, event date, message) using shadcn `Input`/`Textarea`/`Button` with toast feedback (no backend — submission shows a confirmation toast; ready to wire to Lovable Cloud later if desired).
7. **Footer** — wordmark, quick links, copyright.

## Technical notes

- TanStack Start single route at `/` with proper `head()` SEO (title, description, OG tags).
- New components under `src/components/site/{Navbar,Hero,About,Services,Gallery,Contact,Footer}.tsx`.
- Design tokens added to `src/styles.css` `@theme inline` + `:root` (purple/sage/cream). Google Fonts imported at top of `styles.css`.
- Smooth scroll via `html { scroll-behavior: smooth }` and anchor IDs on sections.
- Fully responsive (mobile nav becomes a Sheet drawer).
- Generated florals stored in `src/assets/` and referenced via ES imports.
- No backend in this pass; the form is client-only with a success toast.

## Out of scope (ask if you want these)

- Real form delivery (email/SMS) — needs Lovable Cloud + an email provider.
- CMS for the gallery — currently static images.
- Online ordering/checkout.
