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
    default: "AI Agent Development & Custom SaaS Solutions | Turicks",
    template: "%s | Turicks",
  },
  description:
    "Build custom AI agents, AI-ingested websites & production SaaS — faster than you think. India's AI-native dev team. Book your free strategy call today.",
  keywords: [
    "AI agent development company India",
    "agentic AI development",
    "custom AI agents",
    "LangGraph development",
    "multi-agent systems",
    "AI-ingested websites",
    "BizSite AI",
    "autonomous AI agents",
    "SaaS development company India",
    "custom SaaS development",
    "AI automation",
    "software development agency India",
    "custom software solutions",
    "build SaaS MVP",
    "EdTech software development",
    "school management system",
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
    title: "AI Agent Development & Custom SaaS Solutions | Turicks",
    description:
      "Build custom AI agents, AI-ingested websites & production SaaS — faster than you think. India's AI-native dev team. Book your free strategy call today.",
    type: "website",
    url: SITE_URL,
    siteName: "Turicks",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Turicks — AI Agent Development & Custom SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Development & Custom SaaS | Turicks",
    description:
      "Custom AI agents, AI-ingested websites & SaaS platforms — built and deployed by India's AI-native team.",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Turicks",
              url: SITE_URL,
              logo: `${SITE_URL}/apple-icon`,
            }),
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
