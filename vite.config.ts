// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
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
        },
      }
    : {}),
});
