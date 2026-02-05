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
  title: "Solution Pages - Turicks",
  description:
    "Problem-based solution pages for organizations: school software, ERP builds, SaaS MVPs, and tech partnerships for founders.",
  openGraph: {
    title: "Solution Pages - Turicks",
    description:
      "Problem-based solution pages for organizations: school software, ERP builds, SaaS MVPs, and tech partnerships for founders.",
    type: "website",
    url: `${SITE_URL}/solutions`,
    siteName: "Turicks",
    images: [{ url: `${SITE_URL}/globe.svg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solution Pages - Turicks",
    description:
      "Problem-based solution pages for organizations: school software, ERP builds, SaaS MVPs, and tech partnerships for founders.",
    images: [`${SITE_URL}/globe.svg`],
  },
  alternates: {
    canonical: "/solutions",
  },
};

const solutions = [
  {
    title: "Software Solutions for Schools",
    description:
      "Digitize operations, improve parent communication, and streamline admissions, fees, and attendance.",
    href: "/solutions/schools",
  },
  {
    title: "Build Your Own School ERP Like Big Brands",
    description:
      "A custom ERP roadmap for schools that need full control over workflows, data, and integrations.",
    href: "/solutions/school-erp-like-big-brands",
  },
  {
    title: "Launch Your SaaS MVP in 6 Weeks",
    description:
      "Go from idea to validated MVP with clear scope, fast sprints, and measurable outcomes.",
    href: "/solutions/saas-mvp-in-6-weeks",
  },
  {
    title: "Tech Partner for Non-Technical Founders",
    description:
      "A dedicated product and engineering partner that builds, ships, and scales your SaaS.",
    href: "/solutions/tech-partner-for-non-technical-founders",
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Problem-Based Solutions
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Clients search for outcomes. These pages focus on real business
              problems and how we solve them.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <Card
              key={solution.title}
              className="group bg-background/40 backdrop-blur border-muted-foreground/15"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link href={solution.href}>View solution</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
