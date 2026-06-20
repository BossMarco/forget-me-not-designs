import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { StickyCallBar } from "@/components/site/StickyCallBar";
import { LocalFaq } from "@/components/site/LocalFaq";
import { LeadForm } from "@/components/site/LeadForm";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Toaster } from "@/components/ui/sonner";
import { getPost } from "@/data/posts";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { ld, buildBreadcrumb, buildFaqPage } from "@/lib/schema";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },

  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    const url = `${SITE_URL}/blog/${post.slug}`;
    const altUrl = `${SITE_URL}/blog/${post.altSlug}`;
    const altLang = post.lang === "en" ? "es" : "en";
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { property: "og:title", content: post.metaTitle },
        { property: "og:description", content: post.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${SITE_URL}/og.png` },
        { property: "article:published_time", content: post.publishDate },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hreflang: post.lang, href: url },
        { rel: "alternate", hreflang: altLang, href: altUrl },
        { rel: "alternate", hreflang: "x-default", href: url },
      ],
      scripts: [
        ld(
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.h1, path: `/blog/${post.slug}` },
          ]),
        ),
        ld({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.metaTitle,
          description: post.metaDescription,
          url,
          image: `${SITE_URL}/og.png`,
          datePublished: post.publishDate,
          dateModified: post.publishDate,
          inLanguage: post.lang,
          author: {
            "@type": "Person",
            name: BUSINESS.owner,
            worksFor: {
              "@type": "Florist",
              name: BUSINESS.name,
              url: SITE_URL,
            },
          },
          publisher: {
            "@type": "Organization",
            name: BUSINESS.name,
            url: SITE_URL,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
          },
        }),
        ld(buildFaqPage(post.faqs, {})),
      ],
    };
  },

  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 pt-40 pb-24 text-center">
        <h1 className="font-serif text-4xl text-foreground">Post not found</h1>
        <Link
          to="/blog"
          className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-primary-foreground hover:opacity-90"
        >
          All posts
        </Link>
      </main>
      <Footer />
    </div>
  ),

  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const altUrl = `${SITE_URL}/blog/${post.altSlug}`;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.h1, path: `/blog/${post.slug}` },
        ]}
      />

      <header className="mx-auto max-w-3xl px-6 pt-6">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {post.categoryLabel}
          </span>
          <time dateTime={post.publishDate} className="text-xs text-muted-foreground">
            {new Date(post.publishDate + "T12:00:00").toLocaleDateString(
              post.lang === "es" ? "es-MX" : "en-US",
              { year: "numeric", month: "long", day: "numeric" },
            )}
          </time>
        </div>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          {post.h1}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <p className="mt-3 text-xs text-muted-foreground">
          <a href={altUrl} className="text-primary hover:underline">
            {post.lang === "es" ? "Read in English" : "Leer en español"}
          </a>
        </p>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-10">
        <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
      </article>

      <LocalFaq
        faqs={post.faqs}
        heading={post.lang === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
      />

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            {post.lang === "es" ? "¿Lista para pedir? Escríbenos." : "Ready to order? Reach out."}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {post.lang === "es"
              ? `Llama al ${BUSINESS.phonePrimaryDisplay} o llena el formulario — respondemos en menos de un día hábil.`
              : `Call ${BUSINESS.phonePrimaryDisplay} or send the form — we reply within one business day.`}
          </p>
          <div className="mt-8">
            <LeadForm
              defaultOccasion={post.lang === "es" ? "Cumpleaños" : "Birthday"}
              source={`blog:${post.slug}`}
              heading={
                post.lang === "es" ? "Pide tus flores de cumpleaños" : "Request birthday flowers"
              }
            />
          </div>
        </div>
      </section>

      <Footer />
      <StickyCallBar />
      <Toaster />
    </div>
  );
}
