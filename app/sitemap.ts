import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

export const dynamic = "force-static";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/products",
    "/services",
    "/about",
    "/contact",
    "/blog",
  ];

  const blogRoutes = getBlogPosts().map((p) => `/blog/${p.slug}`);

  const urls = [...staticRoutes, ...blogRoutes];

  return urls.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/blog/") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : path === "/blog" ? 0.8 : 0.7,
  }));
}
