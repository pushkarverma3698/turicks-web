import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web App Development Services | Turicks",
  description:
    "Web app development for startups and businesses. We build secure, scalable web applications with modern UX and cloud infrastructure.",
  alternates: { canonical: "/web-app-development" },
};

export default function WebAppDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Web App Development Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Build modern web applications that scale with your business and
          deliver measurable outcomes.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>
          Web apps power most B2B products today. We build fast, secure, and
          maintainable web applications that support complex workflows, multiple
          user roles, and enterprise-grade security.
        </p>
        <p>
          Our team handles product design, full-stack development, and cloud
          deployment so you can focus on growth and customer outcomes.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold">Core capabilities</h2>
        <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
          <li>Multi-tenant SaaS architecture</li>
          <li>Secure authentication and role-based access</li>
          <li>Dashboards, analytics, and reporting</li>
          <li>Integrations with CRMs, ERPs, and payment systems</li>
          <li>Cloud infrastructure and CI/CD pipelines</li>
        </ul>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">
          Web apps for SaaS and automation
        </h2>
        <p>
          If your workflow is complex, a web app provides flexibility and
          control. We build apps that reduce manual work and deliver clear
          operational visibility.
        </p>
        <p>
          Learn more about{" "}
          <Link href="/software-automation">software automation</Link> or{" "}
          <Link href="/custom-saas-application-development">
            custom SaaS development
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground">
              How long does a web app take to build?
            </p>
            <p>
              MVPs typically take 8 to 16 weeks. Growth-ready products take 4 to
              6 months depending on scope.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Can you work with an existing backend?
            </p>
            <p>
              Yes. We can integrate or modernize existing systems.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Do you provide ongoing support?
            </p>
            <p>
              Yes. We offer long-term maintenance and performance monitoring.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
