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
  title: "Build Your Own School ERP Like Big Brands - Turicks",
  description:
    "Custom school ERP development for institutions that need full control over workflows, data, analytics, and integrations.",
  openGraph: {
    title: "Build Your Own School ERP Like Big Brands - Turicks",
    description:
      "Custom school ERP development for institutions that need full control over workflows, data, analytics, and integrations.",
    type: "website",
    url: `${SITE_URL}/solutions/school-erp-like-big-brands`,
    siteName: "Turicks",
    images: [{ url: `${SITE_URL}/globe.svg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your Own School ERP Like Big Brands - Turicks",
    description:
      "Custom school ERP development for institutions that need full control over workflows, data, analytics, and integrations.",
    images: [`${SITE_URL}/globe.svg`],
  },
  alternates: {
    canonical: "/solutions/school-erp-like-big-brands",
  },
};

export default function SchoolErpLikeBrandsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Build Your Own School ERP Like Big Brands
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Own your data, workflows, and analytics. We build custom school
              ERPs that fit your institution, not the other way around.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Talk to an ERP Specialist</Link>
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
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="bg-background/40 backdrop-blur border-muted-foreground/15">
            <CardHeader>
              <CardTitle>Problem</CardTitle>
              <CardDescription>
                Off-the-shelf tools don’t match your workflows.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Schools end up with data silos, manual workarounds, and limited
              reporting.
            </CardContent>
          </Card>
          <Card className="bg-background/40 backdrop-blur border-muted-foreground/15">
            <CardHeader>
              <CardTitle>Approach</CardTitle>
              <CardDescription>We model your processes first.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Workflows, roles, approvals, and reports are designed around your
              institution.
            </CardContent>
          </Card>
          <Card className="bg-background/40 backdrop-blur border-muted-foreground/15">
            <CardHeader>
              <CardTitle>Outcome</CardTitle>
              <CardDescription>
                Faster operations and full control.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Better visibility, simpler compliance, and systems that scale with
              you.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
