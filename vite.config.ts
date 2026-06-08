// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Bake the build date in as a literal so sitemap <lastmod> reflects the real
  // last-deploy date (stable until the next build), not the request time.
  vite: {
    define: {
      __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // The Lovable nitro plugin defaults to a Cloudflare target and skips itself
  // entirely outside "Lovable context" (e.g. on Vercel) — which leaves no SSR
  // function and makes every route 404. When building on Vercel, force-enable
  // nitro with the Vercel preset so a serverless function + Build Output API
  // routes are emitted. Outside Vercel we leave it untouched so Lovable's own
  // build keeps using its Cloudflare default.
  ...(process.env.VERCEL
    ? {
        nitro: {
          preset: "vercel",
          output: {
            dir: ".vercel/output",
            publicDir: ".vercel/output/static",
            serverDir: ".vercel/output/functions/__server.func",
          },
          // The Vercel function pipeline drops the Content-Type our sitemap
          // handlers set (works in dev, becomes text/html on Vercel). Force
          // application/xml at the edge via routeRules so sitemaps render and
          // validate correctly.
          routeRules: {
            "/sitemap.xml": {
              headers: { "content-type": "application/xml; charset=utf-8" },
            },
            "/sitemap-core.xml": {
              headers: { "content-type": "application/xml; charset=utf-8" },
            },
            "/sitemap-cities.xml": {
              headers: { "content-type": "application/xml; charset=utf-8" },
            },
            "/sitemap-occasions-1.xml": {
              headers: { "content-type": "application/xml; charset=utf-8" },
            },
            "/sitemap-occasions-2.xml": {
              headers: { "content-type": "application/xml; charset=utf-8" },
            },
            "/llms.txt": {
              headers: { "content-type": "text/plain; charset=utf-8" },
            },
            "/llms-full.txt": {
              headers: { "content-type": "text/plain; charset=utf-8" },
            },
          },
        },
      }
    : {}),
});
