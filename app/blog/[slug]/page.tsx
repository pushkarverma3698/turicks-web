import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

type Params = { slug: string };
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export async function generateStaticParams(): Promise<Params[]> {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const title = `${post.title} - Turicks`;
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title,
      description: post.description,
      type: "article",
      url,
      siteName: "Turicks",
      images: [
        {
          url: `${SITE_URL}/globe.svg`,
        },
      ],
      publishedTime: post.dateISO,
      authors: ["Turicks"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: [`${SITE_URL}/globe.svg`],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

function renderBlocks(content: string) {
  const blocks = content
    .trim()
    .split("\n\n")
    .map((b) => b.trim())
    .filter(Boolean);

  return blocks.map((block, idx) => {
    const lines = block
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    const isList = lines.length > 1 && lines.every((l) => l.startsWith("- "));

    if (isList) {
      return (
        <ul key={idx} className="my-4 list-disc pl-6 text-muted-foreground">
          {lines.map((l) => (
            <li key={l} className="text-foreground/90">
              {l.replace(/^- /, "")}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={idx} className="my-4 text-foreground/90 leading-relaxed">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: [{ "@type": "Organization", name: "Turicks" }],
    publisher: {
      "@type": "Organization",
      name: "Turicks",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/apple-icon`,
      },
    },
    image: `${SITE_URL}/globe.svg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <nav
            className="mb-6 text-sm text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:underline underline-offset-4">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/blog"
                  className="hover:underline underline-offset-4"
                >
                  Blog
                </Link>
              </li>
            </ol>
          </nav>

          <header className="mb-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {post.description}
            </p>
            <time
              dateTime={post.dateISO}
              className="mt-4 block text-sm text-muted-foreground"
            >
              {new Date(post.dateISO).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </header>

          <article aria-label="Blog post content">
            {renderBlocks(post.content)}
          </article>

          <div className="mt-10 border-t pt-6">
            <Link
              href="/blog"
              className="text-primary hover:underline underline-offset-4 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
