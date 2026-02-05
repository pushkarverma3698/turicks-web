import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Automation Services | Turicks",
  description:
    "Software automation services to reduce manual work, improve accuracy, and scale operations with reliable workflows.",
  alternates: { canonical: "/software-automation" },
};

export default function SoftwareAutomationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Software Automation Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Replace repetitive tasks with reliable automation. We design workflow
          automation that improves speed, accuracy, and operational visibility.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>
          Software automation turns manual processes into structured workflows.
          The goal is not just speed. It is consistency, auditability, and
          measurable outcomes. We help organizations automate approvals, data
          entry, reporting, and cross‑system synchronization so teams can focus
          on high‑value work.
        </p>
        <p>
          Our approach starts with workflow mapping. We identify bottlenecks,
          define trigger events, and build automation that integrates cleanly
          with your existing systems. This reduces error rates and makes
          operations predictable.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold">Common automation use cases</h2>
        <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
          <li>Approval routing with role-based logic</li>
          <li>Document processing and data extraction</li>
          <li>Billing, invoicing, and reconciliation workflows</li>
          <li>Operational reporting and alerting</li>
          <li>CRM, ERP, and helpdesk integrations</li>
        </ul>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">
          Software automation vs AI automation
        </h2>
        <p>
          Software automation is rule‑based and predictable. AI automation adds
          context and reasoning. Many teams use a hybrid: software automation
          for deterministic tasks and AI automation for ambiguous inputs. Learn
          more on{" "}
          <Link href="/ai-automation">AI automation services</Link>.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground">
              How long does software automation take?
            </p>
            <p>
              Small workflows can be automated in weeks. Complex multi‑system
              automation can take longer depending on integrations.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Can you integrate with our existing tools?
            </p>
            <p>
              Yes. We integrate with CRMs, ERPs, databases, and APIs.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Do you provide monitoring and support?
            </p>
            <p>
              Yes. We implement logging, alerting, and long‑term maintenance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
