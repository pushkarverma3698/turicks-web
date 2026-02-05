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
  title: "Launch Your SaaS MVP in 6 Weeks - Turicks",
  description:
    "Build and launch a SaaS MVP in 6 weeks with clear scope, weekly milestones, and measurable outcomes.",
  openGraph: {
    title: "Launch Your SaaS MVP in 6 Weeks - Turicks",
    description:
      "Build and launch a SaaS MVP in 6 weeks with clear scope, weekly milestones, and measurable outcomes.",
    type: "website",
    url: `${SITE_URL}/solutions/saas-mvp-in-6-weeks`,
    siteName: "Turicks",
    images: [{ url: `${SITE_URL}/globe.svg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch Your SaaS MVP in 6 Weeks - Turicks",
    description:
      "Build and launch a SaaS MVP in 6 weeks with clear scope, weekly milestones, and measurable outcomes.",
    images: [`${SITE_URL}/globe.svg`],
  },
  alternates: {
    canonical: "/solutions/saas-mvp-in-6-weeks",
  },
};

const timeline = [
  { week: "Week 1", focus: "Discovery, scope, and UX flows" },
  { week: "Week 2", focus: "Design system + core screens" },
  { week: "Week 3", focus: "Core features + data model" },
  { week: "Week 4", focus: "Integrations + auth + roles" },
  { week: "Week 5", focus: "QA, analytics, and polish" },
  { week: "Week 6", focus: "Launch + handover + roadmap" },
];

export default function SaasMvpInSixWeeksPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Launch Your SaaS MVP in 6 Weeks
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              A structured, fast-moving MVP build designed to validate demand,
              impress investors, and win your first customers.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Start MVP Planning</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/case-studies">See Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {timeline.map((t) => (
            <Card
              key={t.week}
              className="bg-background/40 backdrop-blur border-muted-foreground/15"
            >
              <CardHeader>
                <CardTitle>{t.week}</CardTitle>
                <CardDescription>{t.focus}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
