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
  title: "Turicks - SaaS Development Partner for Startups and EdTech",
  description:
    "We are a SaaS development partner for startups and EdTech companies. From school management systems to custom SaaS platforms, we build software that delivers outcomes.",
  keywords: [
    "SaaS development partner",
    "SaaS development company",
    "EdTech software development",
    "startup SaaS",
    "custom SaaS development",
    "school management system",
    "B2B SaaS",
    "SaaS platform",
    "enterprise software",
  ],
  openGraph: {
    title: "Turicks - SaaS Development Partner for Startups and EdTech",
    description:
      "We are a SaaS development partner for startups and EdTech companies.",
    type: "website",
    url: SITE_URL,
    siteName: "Turicks",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/globe.svg`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turicks - Tailored SaaS Solutions",
    description: "Building tailored SaaS solutions for organizations",
    images: [`${SITE_URL}/globe.svg`],
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
