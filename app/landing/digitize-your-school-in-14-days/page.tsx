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
  title: "Digitize Your School in 14 Days - Turicks",
  description:
    "Launch a school management system in 14 days with onboarding, attendance, fees, parent communication, and admin dashboards.",
  openGraph: {
    title: "Digitize Your School in 14 Days - Turicks",
    description:
      "Launch a school management system in 14 days with onboarding, attendance, fees, parent communication, and admin dashboards.",
    type: "website",
    url: `${SITE_URL}/landing/digitize-your-school-in-14-days`,
    siteName: "Turicks",
    images: [{ url: `${SITE_URL}/globe.svg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitize Your School in 14 Days - Turicks",
    description:
      "Launch a school management system in 14 days with onboarding, attendance, fees, parent communication, and admin dashboards.",
    images: [`${SITE_URL}/globe.svg`],
  },
  alternates: {
    canonical: "/landing/digitize-your-school-in-14-days",
  },
};

const timeline = [
  { day: "Day 1-2", focus: "Onboarding + data import" },
  { day: "Day 3-5", focus: "Attendance + timetable" },
  { day: "Day 6-8", focus: "Fees + receipts" },
  { day: "Day 9-11", focus: "Reports + dashboards" },
  { day: "Day 12-14", focus: "Parent communication + launch" },
];

export default function DigitizeSchoolLandingPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
              <span>Free Demo + Free School Consultation</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Digitize Your School in 14 Days
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Launch a modern school management system fast—attendance, fees,
              academics, and parent communication—without disrupting your staff.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Book a Free Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="bg-background/40 backdrop-blur border-muted-foreground/15">
            <CardHeader>
              <CardTitle>Free Demo</CardTitle>
              <CardDescription>
                See the platform live with your workflows.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We personalize the demo for admissions, attendance, fees, and
              reporting.
            </CardContent>
          </Card>
          <Card className="bg-background/40 backdrop-blur border-muted-foreground/15">
            <CardHeader>
              <CardTitle>Free School Consultation</CardTitle>
              <CardDescription>
                We map your processes and recommend a rollout.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You receive a clear plan and deployment timeline with zero
              obligation.
            </CardContent>
          </Card>
          <Card className="bg-background/40 backdrop-blur border-muted-foreground/15">
            <CardHeader>
              <CardTitle>14‑Day Launch</CardTitle>
              <CardDescription>
                Rapid onboarding with step‑by‑step delivery.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We keep your staff productive while the system goes live.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            14‑Day Rollout Plan
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A simple, proven sequence that gets schools live quickly and safely.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {timeline.map((step) => (
            <Card
              key={step.day}
              className="bg-background/40 backdrop-blur border-muted-foreground/15"
            >
              <CardHeader>
                <CardTitle>{step.day}</CardTitle>
                <CardDescription>{step.focus}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
