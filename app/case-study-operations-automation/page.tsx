import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study: Operations Automation Platform | Turicks",
  description:
    "Case study on automating operations workflows with a custom platform: approvals, reporting, and system integrations.",
  alternates: { canonical: "/case-study-operations-automation" },
};

export default function OperationsAutomationCaseStudyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Case Study: Operations Automation Platform
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          How an operations team reduced manual work and improved accuracy with
          a workflow automation platform.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">The challenge</h2>
        <p>
          The client managed approvals, reporting, and reconciliations across
          multiple systems. Manual handoffs created delays and inconsistencies,
          and leadership had limited visibility into workflow status.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">The solution</h2>
        <p>
          We built a centralized automation platform with role-based approvals,
          audit logs, and system integrations. Workflows were standardized and
          automated alerts reduced escalation delays.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Outcomes</h2>
        <ul className="list-disc space-y-3 pl-6">
          <li>Faster approval cycles with automated routing</li>
          <li>Reduced manual errors through validation checks</li>
          <li>Improved reporting with real-time dashboards</li>
        </ul>
        <p>
          Explore related services:{" "}
          <Link href="/software-automation">software automation</Link> and{" "}
          <Link href="/ai-automation">AI automation</Link>.
        </p>
      </section>
    </div>
  );
}
