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
  title: "Turicks - Tailored SaaS Solutions for Organizations",
  description:
    "We build custom SaaS products and provide development services for organizations. From school management systems to enterprise solutions, we create software that fits your unique requirements.",
  keywords: [
    "SaaS company",
    "SaaS development company",
    "SaaS development services",
    "custom software development",
    "software development agency",
    "B2B SaaS",
    "SaaS platform",
    "enterprise software",
    "school management system",
    "software solutions",
  ],
  openGraph: {
    title: "Turicks - Tailored SaaS Solutions",
    description: "Building tailored SaaS solutions for organizations",
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
