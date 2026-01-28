import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export const metadata: Metadata = {
  title: "SaaS Products - Turicks",
  description:
    "Explore Turicks SaaS products including school management systems, enterprise platforms, HR tools, and AI-driven marketplaces.",
  keywords: [
    "SaaS products",
    "school management system",
    "enterprise platform",
    "HR management system",
    "AI marketplace",
  ],
  openGraph: {
    title: "SaaS Products - Turicks",
    description:
      "Explore Turicks SaaS products including school management systems, enterprise platforms, HR tools, and AI-driven marketplaces.",
    type: "website",
    url: `${SITE_URL}/products`,
    siteName: "Turicks",
    images: [
      {
        url: `${SITE_URL}/globe.svg`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Products - Turicks",
    description:
      "Explore Turicks SaaS products including school management systems, enterprise platforms, HR tools, and AI-driven marketplaces.",
    images: [`${SITE_URL}/globe.svg`],
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return children;
}
