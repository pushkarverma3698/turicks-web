import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Made Simple | Turicks",
  description:
    "Software made simple: clear process, transparent delivery, and outcomes-focused product development.",
  alternates: { canonical: "/software-made-simple" },
};

export default function SoftwareMadeSimplePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Software Made Simple
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Clear scope. Transparent delivery. Reliable outcomes. That is how we
          make software simple for teams that need results.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>
          Building software feels complex when the process is unclear. We remove
          that complexity with a structured approach: discovery, design, build,
          launch, and support. Each phase has clear outputs and measurable
          outcomes so you always know what is being delivered.
        </p>
        <p>
          This page is for teams that want clarity before they commit. If you
          need a product partner, explore{" "}
          <Link href="/saas-development-company">
            SaaS development services
          </Link>
          . If you need automation, see{" "}
          <Link href="/software-automation">software automation</Link>.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold">What “simple” looks like</h2>
        <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
          <li>Clear scope and priorities from day one</li>
          <li>Weekly demos and transparent progress</li>
          <li>Launch-ready architecture with monitoring</li>
          <li>Post‑launch support and iteration</li>
          <li>Business outcomes tied to product features</li>
        </ul>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground">
              Do you handle everything end-to-end?
            </p>
            <p>
              Yes. We cover discovery, design, development, launch, and support.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              How do you keep projects simple?
            </p>
            <p>
              We focus on the core workflow, remove unnecessary features, and
              deliver in phases.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Can we start small and scale later?
            </p>
            <p>
              Absolutely. We recommend MVP-first delivery for most teams.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
