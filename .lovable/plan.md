## Plan: Import content from valleygirlflorist.com

### 1. Scrape source content (build-time, one pass)

Use Firecrawl (via the lovable connector) to crawl the existing site:
- Homepage + each category page under `/store/occasion/*` and `/store/sympathy/*` (Birthday, Sympathy, Get Well, Anniversary, Just Because, Weddings, etc.)
- Info pages: `/flower-care-tips/`, `/local-funeral-homes/`, `/local-hospitals/`, About / Contact

Extract for each product: name, price, original URL, image URL, category. Save to `src/data/products.ts` (typed array, ~50–150 items). No DB needed.

If Firecrawl connector isn't linked, I'll request it before starting.

### 2. Featured Arrangements section on home

New `src/components/site/Featured.tsx` between Services and Gallery:
- Carousel/grid of 8 hand-picked products (mix of Birthday + popular)
- Each card: image, name, price, "View on Store →" linking out to the original `valleygirlflorist.com` product URL (new tab, `rel="noopener"`)
- Sourced from `products.ts`

### 3. Replace Gallery with real product photos

Swap placeholder generated images in `Gallery.tsx` for 8–10 actual product photos pulled from the scrape. Images uploaded via `lovable-assets` CLI so they're CDN-hosted, not bundled. Alt text = product name.

### 4. Catalog routes (browsable categories)

New routes:
- `src/routes/shop.tsx` — index of all categories, grid of category tiles
- `src/routes/shop.$category.tsx` — dynamic route rendering all products in that category, filtered from `products.ts`

Each product card links out to BloomNet. Add Shop to navbar + footer. Each route gets its own `head()` with unique title/description/og.

### 5. Business info update

From the source site, pull and surface in `Contact.tsx` + `Footer.tsx`:
- Real phone/address/hours (if visible on source)
- Links to existing resource pages (Flower Care Tips, Funeral Homes, Hospital Delivery) — open in new tab to old site, since rebuilding them isn't in scope

### 6. SEO housekeeping

- Update `src/routes/sitemap[.]xml.ts` `entries` to include `/shop` and one entry per category
- Update `public/llms.txt` with the new page list

### Technical notes

- All "Buy Now" CTAs are `<a href target="_blank" rel="noopener noreferrer">` to the original product page on valleygirlflorist.com — no cart/checkout built in this app.
- Products are a static TS file generated once from the scrape; re-running the scrape later refreshes it. No backend, no Lovable Cloud needed for this pass.
- Product images served from Lovable Assets CDN (uploaded via `lovable-assets create`) so the repo stays light.
- Firecrawl connector is a one-time build-time tool here; the published site has no runtime dependency on it.

### Out of scope (call out explicitly)

- Real online ordering / cart / payments (would require Shopify or rebuilding BloomNet integration)
- Live inventory sync (products.ts is a snapshot)
- Rebuilding Flower Care / Funeral Home / Hospital pages — we link out instead
