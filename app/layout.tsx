import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ColorfulVectors } from "@/components/colorful-vectors";
import { ContactFloater } from "@/components/contact-floater";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Production-Ready AI Agents & FounderOS | Turicks",
    template: "%s | Turicks",
  },
  description:
    "Turicks deploys production-ready AI agents via FounderOS — our orchestration engine for multi-agent state graphs, bounded autonomy, and MCP tool integration. Plus 3D web experiences.",
  keywords: [
    "production-ready AI agents",
    "FounderOS",
    "AI agent orchestration platform",
    "multi-agent system deployment",
    "LangGraph development company",
    "Model Context Protocol",
    "bounded autonomy AI",
    "AI-ingested websites",
    "BizSite AI",
    "3D web experiences",
    "custom SaaS development India",
    "agentic AI orchestration",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Production-Ready AI Agents & FounderOS | Turicks",
    description:
      "Turicks deploys production-ready AI agents via FounderOS — our orchestration engine for multi-agent state graphs, bounded autonomy, and MCP tool integration.",
    type: "website",
    url: SITE_URL,
    siteName: "Turicks",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Turicks — Production-Ready AI Agents & FounderOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Production-Ready AI Agents & FounderOS | Turicks",
    description:
      "Deploy autonomous AI agents powered by FounderOS — state graphs, bounded autonomy, MCP tools, and 3D web experiences.",
    images: [`${SITE_URL}/og-image.svg`],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Turicks",
    url: SITE_URL,
    logo: `${SITE_URL}/apple-icon`,
    description: "AI-native software development partner engineering production-ready AI agents via FounderOS and 3D web experiences.",
  };

  const founderOSProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "FounderOS",
    description:
      "Enterprise AI agent orchestration platform for deploying production-ready multi-agent systems with state graphs, bounded autonomy, MCP integrations, and full tracing.",
    brand: {
      "@type": "Organization",
      name: "Turicks",
    },
    category: "AI Agent Orchestration Engine",
    url: `${SITE_URL}/founderos`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why do AI agent pilots fail in production?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Over 85% of AI agent pilots fail in production due to lack of bounded autonomy, unhandled state drift, missing observability, and unsecure API permissions. FounderOS by Turicks provides graph-based state management, human-in-the-loop gates, and MCP tool integration to guarantee production reliability.",
        },
      },
      {
        "@type": "Question",
        name: "What is FounderOS by Turicks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FounderOS is Turicks' proprietary AI agent orchestration engine. It orchestrates multi-agent systems built on LangGraph, AutoGen, and CrewAI, enforcing policy guardrails, Model Context Protocol (MCP) integrations, and real-time step-by-step tracing.",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(founderOSProductSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <ColorfulVectors />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ContactFloater />
      </body>
    </html>
  );
}
