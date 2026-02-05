import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Turicks",
  description:
    "UI/UX design services for SaaS and web applications. We create research-backed flows, wireframes, and polished interfaces that improve conversion and retention.",
  alternates: { canonical: "/ui-ux-design-services" },
};

export default function UiUxDesignServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          UI/UX Design Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We design SaaS and web products that are easy to adopt, fast to use,
          and built for measurable growth.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>
          Great UI/UX is not decoration. It is a growth lever. A clear
          onboarding flow increases activation. A frictionless workflow improves
          retention. Our UI/UX design services focus on outcomes: time to value,
          conversion, and user confidence.
        </p>
        <p>
          We start with research and workflow mapping, then deliver wireframes,
          prototypes, and high-fidelity UI. The design system scales across your
          product, keeping new features consistent and easy to maintain.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold">What our UI/UX includes</h2>
        <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
          <li>User research and workflow mapping</li>
          <li>Wireframes and clickable prototypes</li>
          <li>Design systems and component libraries</li>
          <li>High-fidelity UI with accessibility best practices</li>
          <li>Usability testing and iteration</li>
        </ul>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">
          UI/UX for SaaS products
        </h2>
        <p>
          SaaS UX is different from marketing sites. It must guide users through
          complex workflows without overwhelming them. We focus on role-based
          navigation, progressive disclosure, and task-driven dashboards.
        </p>
        <p>
          If you are building a product, see our{" "}
          <Link href="/saas-development-company">
            SaaS development services
          </Link>{" "}
          or review{" "}
          <Link href="/build-saas-mvp">how to build a SaaS MVP</Link>.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground">
              Do you offer UI/UX design for existing products?
            </p>
            <p>
              Yes. We audit workflows, identify friction points, and redesign
              key screens to improve adoption and retention.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Can you work with our developers?
            </p>
            <p>
              Absolutely. We deliver structured design systems and handoff-ready
              assets so engineering can implement quickly.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              How long does a UI/UX engagement take?
            </p>
            <p>
              A typical sprint takes 2 to 4 weeks depending on scope and number
              of workflows.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Do you also build the product?
            </p>
            <p>
              Yes. We provide end-to-end product delivery, including design and
              engineering.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
