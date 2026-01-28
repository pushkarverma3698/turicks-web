import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export const metadata: Metadata = {
  title: "Contact Turicks - Book a Demo or Request a Quote",
  description:
    "Contact Turicks to discuss custom SaaS development, AI agents, and tailored software solutions. Book a demo or request a project estimate.",
  keywords: [
    "contact Turicks",
    "book a demo",
    "request a quote",
    "custom SaaS development",
    "AI agents",
    "software solutions",
  ],
  openGraph: {
    title: "Contact Turicks - Book a Demo or Request a Quote",
    description:
      "Contact Turicks to discuss custom SaaS development, AI agents, and tailored software solutions.",
    type: "website",
    url: `${SITE_URL}/contact`,
    siteName: "Turicks",
    images: [
      {
        url: `${SITE_URL}/globe.svg`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Turicks - Book a Demo or Request a Quote",
    description:
      "Contact Turicks to discuss custom SaaS development, AI agents, and tailored software solutions.",
    images: [`${SITE_URL}/globe.svg`],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
