import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Workflow Automation Services — Smarter Processes, Less Manual Work | Turicks",
  description:
    "AI workflow automation to classify documents, triage tickets, score leads, and automate reporting — responsible AI delivery with audit logs and human-in-the-loop controls.",
  keywords: [
    "AI workflow automation",
    "AI automation services India",
    "document classification AI",
    "AI ticket triage",
    "lead scoring AI",
    "workflow automation India",
  ],
  alternates: { canonical: "/ai-automation" },
};

export default function AiAutomationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          AI Workflow Automation — Smarter Processes, Less Manual Work
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Combine AI and workflow automation to reduce cost, speed up decisions,
          and scale operations — without losing control or auditability.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>
          AI automation applies intelligence to workflows that are difficult to
          codify with simple rules. It is ideal for unstructured inputs,
          ambiguous decisions, and high‑volume operational tasks.
        </p>
        <p>
          We build AI automation systems that integrate with your existing
          tools, maintain auditability, and keep humans in the loop where
          needed. This creates measurable efficiency without losing control.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold">High‑ROI AI automation</h2>
        <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
          <li>Document classification and data extraction</li>
          <li>Support ticket triage and routing</li>
          <li>Lead scoring and qualification</li>
          <li>Automated reporting summaries</li>
          <li>Workflow escalation with context awareness</li>
        </ul>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">
          Responsible AI delivery
        </h2>
        <p>
          We design AI systems with clear guardrails: audit logs, confidence
          thresholds, and fallback rules. This ensures consistent outcomes and
          makes AI automation safe for business‑critical workflows.
        </p>
        <p>
          For deterministic workflows, see{" "}
          <Link href="/software-automation">software automation</Link>. For
          product builds, explore{" "}
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
              What tools do you use for AI automation?
            </p>
            <p>
              We use LLMs, workflow orchestrators, and custom integrations based
              on your requirements and compliance needs.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Can AI automation integrate with our systems?
            </p>
            <p>
              Yes. We connect AI workflows with CRMs, ERPs, helpdesks, and
              internal APIs.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Is AI automation safe for sensitive data?
            </p>
            <p>
              We implement access control, auditability, and data safeguards to
              meet security requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
