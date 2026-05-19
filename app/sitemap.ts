import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

export const dynamic = "force-static";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/ai-agent-development",
    "/ai-ingested-websites",
    "/services",
    "/products",
    "/about",
    "/contact",
    "/blog",
    "/solutions",
    "/solutions/schools",
    "/solutions/school-erp-like-big-brands",
    "/solutions/saas-mvp-in-6-weeks",
    "/solutions/tech-partner-for-non-technical-founders",
    "/case-studies",
    "/landing/digitize-your-school-in-14-days",
    "/ai-automation",
  ];

  const blogRoutes = getBlogPosts().map((p) => `/blog/${p.slug}`);

  const urls = [...staticRoutes, ...blogRoutes];

  const highPriorityRoutes = new Set([
    "/ai-agent-development",
    "/ai-ingested-websites",
    "/services",
  ]);

  return urls.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/blog/") ? "monthly" : "weekly",
    priority: path === "/"
      ? 1
      : highPriorityRoutes.has(path)
        ? 0.9
        : path === "/blog"
          ? 0.8
          : 0.7,
  }));
}
