import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DecorativeOrbs } from "@/components/decorative-orbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export const metadata: Metadata = {
  title: "Tech Partner for Non-Technical Founders - Turicks",
  description:
    "A product and engineering partner for non-technical founders to design, build, and scale SaaS products.",
  openGraph: {
    title: "Tech Partner for Non-Technical Founders - Turicks",
    description:
      "A product and engineering partner for non-technical founders to design, build, and scale SaaS products.",
    type: "website",
    url: `${SITE_URL}/solutions/tech-partner-for-non-technical-founders`,
    siteName: "Turicks",
    images: [{ url: `${SITE_URL}/globe.svg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Partner for Non-Technical Founders - Turicks",
    description:
      "A product and engineering partner for non-technical founders to design, build, and scale SaaS products.",
    images: [`${SITE_URL}/globe.svg`],
  },
  alternates: {
    canonical: "/solutions/tech-partner-for-non-technical-founders",
  },
};

const steps = [
  {
    title: "Product Strategy",
    description:
      "We convert your vision into a roadmap with clear scope and measurable outcomes.",
  },
  {
    title: "Design & Prototype",
    description:
      "We design user flows, UI, and clickable prototypes for early validation.",
  },
  {
    title: "Build & Launch",
    description:
      "We ship production-grade MVPs with clean UX, analytics, and scalable architecture.",
  },
  {
    title: "Grow & Optimize",
    description:
      "We iterate based on usage data and expand features based on ROI.",
  },
];

export default function TechPartnerForFoundersPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Tech Partner for Non-Technical Founders
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Launch your SaaS without hiring a full in-house team. We handle
              product, design, and engineering.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/solutions/saas-mvp-in-6-weeks">
                  MVP in 6 Weeks
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <Card
              key={step.title}
              className="bg-background/40 backdrop-blur border-muted-foreground/15"
            >
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
