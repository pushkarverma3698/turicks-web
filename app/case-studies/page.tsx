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
  title: "Case Studies - Turicks",
  description:
    "Real outcomes from Turicks projects: school ERP, operations automation, and custom SaaS builds.",
  openGraph: {
    title: "Case Studies - Turicks",
    description:
      "Real outcomes from Turicks projects: school ERP, operations automation, and custom SaaS builds.",
    type: "website",
    url: `${SITE_URL}/case-studies`,
    siteName: "Turicks",
    images: [{ url: `${SITE_URL}/globe.svg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - Turicks",
    description:
      "Real outcomes from Turicks projects: school ERP, operations automation, and custom SaaS builds.",
    images: [`${SITE_URL}/globe.svg`],
  },
  alternates: {
    canonical: "/case-studies",
  },
};

const caseStudies = [
  {
    title: "School ERP Rollout",
    problem:
      "Attendance and fee management were handled manually, leading to delays and errors.",
    approach:
      "We built a parent + admin + transport platform with automated reports and role-based access.",
    stack: "Next.js, PostgreSQL, Node.js, AWS",
    result: "Reduced admin time by 60% and improved fee collection accuracy.",
    testimonial:
      "“We finally have one system for the whole school. The admin workload dropped immediately.”",
  },
  {
    title: "Operations Automation",
    problem:
      "Approvals and reporting took days across multiple teams and tools.",
    approach:
      "We implemented AI-driven workflow automation and centralized dashboards.",
    stack: "Next.js, Python, OpenAI, Postgres",
    result: "Cut approval cycle time from 5 days to 24 hours.",
    testimonial: "“The automation saved our operations team hours every week.”",
  },
  {
    title: "Custom SaaS MVP",
    problem:
      "A founder needed an MVP fast to validate demand and secure funding.",
    approach:
      "We shipped a scoped MVP in 6 weeks with analytics and onboarding flows.",
    stack: "Next.js, Prisma, Supabase",
    result: "Achieved 120+ beta users in the first month.",
    testimonial: "“We went from idea to live product faster than expected.”",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Case Studies
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Problem → approach → result. These examples show the outcomes we
              deliver.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <Card
              key={cs.title}
              className="bg-background/40 backdrop-blur border-muted-foreground/15"
            >
              <CardHeader>
                <CardTitle>{cs.title}</CardTitle>
                <CardDescription>{cs.result}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">
                    Problem:
                  </span>{" "}
                  {cs.problem}
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Approach:
                  </span>{" "}
                  {cs.approach}
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Tech Stack:
                  </span>{" "}
                  {cs.stack}
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Testimonial:
                  </span>{" "}
                  {cs.testimonial}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
