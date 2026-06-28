import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { StickyCallBar } from "@/components/site/StickyCallBar";
import { POSTS } from "@/data/posts";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { ld, buildBreadcrumb } from "@/lib/schema";

export const Route = createFileRoute("/blog/")({
  head: () => {
    const title = `Flower Blog — Tips, Guides & RGV Inspiration | ${BUSINESS.shortName}`;
    const desc =
      "Flower tips, birthday guides, holiday ideas, and local delivery info for the Rio Grande Valley. Read the Forget Me Not blog.";
    const url = `${SITE_URL}/blog`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        ld(
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ),
      ],
    };
  },

  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-24 pb-24">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">{BUSINESS.region}</p>
        <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
          Flower Tips &amp; Inspiration
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Guides, seasonal ideas, and local delivery tips for the Rio Grande Valley.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md"
            >
              {post.heroImage && (
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
                  <img
                    src={post.heroImage}
                    alt={post.h1}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                </Link>
              )}
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-3 inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {post.categoryLabel}
                </span>
                <h2 className="font-serif text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  <Link to="/blog/$slug" params={{ slug: post.slug }}>
                    {post.h1}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <time dateTime={post.publishDate} className="text-xs text-muted-foreground">
                    {new Date(post.publishDate + "T12:00:00").toLocaleDateString(
                      post.lang === "es" ? "es-MX" : "en-US",
                      { year: "numeric", month: "long", day: "numeric" },
                    )}
                  </time>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    {post.lang === "es" ? "Leer más →" : "Read more →"}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
}
