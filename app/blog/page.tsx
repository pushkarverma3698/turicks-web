import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Turicks",
  description:
    "Insights from Turicks on SaaS product delivery, automation, security, and building tailored software for organizations.",
};

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Blog</h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Practical guides and insights on SaaS products, automation, and building software that fits real
            organizational workflows.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} className="group bg-background/40 backdrop-blur border-muted-foreground/15">
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3">
                  <h2 className="text-xl font-semibold leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
                      {post.title}
                    </Link>
                  </h2>
                </div>
                <CardDescription className="mt-2">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between text-sm">
                <time dateTime={post.dateISO} className="text-muted-foreground">
                  {new Date(post.dateISO).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:underline underline-offset-4 font-medium"
                >
                  Read →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

