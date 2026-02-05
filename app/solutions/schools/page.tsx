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
  title: "Software Solutions for Schools - Turicks",
  description:
    "Modern school software to manage admissions, attendance, fees, academics, transport, and parent communication.",
  openGraph: {
    title: "Software Solutions for Schools - Turicks",
    description:
      "Modern school software to manage admissions, attendance, fees, academics, transport, and parent communication.",
    type: "website",
    url: `${SITE_URL}/solutions/schools`,
    siteName: "Turicks",
    images: [{ url: `${SITE_URL}/globe.svg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Solutions for Schools - Turicks",
    description:
      "Modern school software to manage admissions, attendance, fees, academics, transport, and parent communication.",
    images: [`${SITE_URL}/globe.svg`],
  },
  alternates: {
    canonical: "/solutions/schools",
  },
};

const outcomes = [
  "Reduce admin workload with automated workflows",
  "Increase parent engagement with real-time updates",
  "Centralize student data with secure access",
  "Improve fee collection and reporting accuracy",
];

export default function SchoolsSolutionsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Software Solutions for Schools
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Digitize school operations with a complete platform for
              admissions, attendance, fees, academics, transport, and parent
              communication.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Book a Free Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/landing/digitize-your-school-in-14-days">
                  Digitize in 14 Days
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-background/40 backdrop-blur border-muted-foreground/15">
            <CardHeader>
              <CardTitle>Outcomes Schools Care About</CardTitle>
              <CardDescription>
                Problem-first improvements that drive adoption.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {outcomes.map((o) => (
                  <li key={o}>• {o}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-background/40 backdrop-blur border-muted-foreground/15">
            <CardHeader>
              <CardTitle>What We Build</CardTitle>
              <CardDescription>
                Core modules delivered fast, customized for your workflow.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Admissions + onboarding, attendance + timetable, fees +
                receipts, grades + reports, transport, parent communication, and
                admin dashboards.
              </p>
              <p>We integrate with existing systems and migrate data safely.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
