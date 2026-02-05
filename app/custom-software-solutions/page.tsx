import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Software Solutions | Turicks",
  description:
    "Custom software solutions for startups and organizations. We build tailored systems that match your workflows and scale with growth.",
  alternates: { canonical: "/custom-software-solutions" },
};

export default function CustomSoftwareSolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Custom Software Solutions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tailored software that fits your business workflows, integrates with
          your systems, and scales with your team.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>
          Custom software solutions are ideal when off‑the‑shelf tools cannot
          handle your workflows or data requirements. We build software that
          aligns with how your organization operates, not the other way around.
        </p>
        <p>
          Our team delivers design, engineering, and cloud infrastructure under
          one roof. This keeps delivery consistent and reduces coordination
          risks.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold">What we build</h2>
        <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
          <li>Custom SaaS platforms for vertical industries</li>
          <li>Internal tools and admin dashboards</li>
          <li>Automation systems and workflow orchestration</li>
          <li>Data platforms and reporting tools</li>
          <li>Secure integrations with existing systems</li>
        </ul>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">
          How we deliver custom software
        </h2>
        <p>
          We start with discovery to map workflows and define success metrics.
          Then we deliver a phased roadmap with clear milestones. This keeps
          budgets predictable and ensures your software ships with measurable
          impact.
        </p>
        <p>
          If your solution is SaaS-based, see{" "}
          <Link href="/custom-saas-application-development">
            custom SaaS application development
          </Link>
          . For automation, explore{" "}
          <Link href="/software-automation">software automation</Link>.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground">
              When should we choose custom software over off‑the‑shelf?
            </p>
            <p>
              Choose custom software when your workflows are unique, when data
              integration is complex, or when control and differentiation matter.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Do you help with maintenance and support?
            </p>
            <p>
              Yes. We provide long-term support, improvements, and monitoring.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Can you integrate with our existing systems?
            </p>
            <p>
              Yes. We build reliable integrations and data pipelines.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
