import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development Services | Turicks",
  description:
    "Website development services for startups and businesses. We build fast, SEO-friendly websites with modern design and scalable infrastructure.",
  alternates: { canonical: "/website-development" },
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Website Development Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We build fast, SEO-friendly websites that convert visitors and scale
          with your business.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>
          Your website is your first sales call. It must load fast, communicate
          value clearly, and guide visitors to action. Our website development
          services combine modern UX, performance best practices, and a clean
          technical foundation so your site ranks and converts.
        </p>
        <p>
          We build marketing sites, product sites, and B2B landing pages using
          modern frameworks like Next.js. This gives you speed, security, and
          long-term maintainability.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold">What we deliver</h2>
        <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
          <li>Responsive design for desktop and mobile</li>
          <li>SEO-friendly structure and metadata</li>
          <li>Performance optimization and fast load times</li>
          <li>Conversion-focused layouts and CTAs</li>
          <li>Analytics and event tracking setup</li>
        </ul>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">
          Website development for SaaS
        </h2>
        <p>
          SaaS websites must communicate complex value clearly. We create
          product storytelling, feature breakdowns, and trust elements that help
          visitors become qualified leads.
        </p>
        <p>
          If you need a full product build, explore our{" "}
          <Link href="/saas-development-company">
            SaaS development services
          </Link>{" "}
          or read{" "}
          <Link href="/build-saas-mvp">how to build a SaaS MVP</Link>.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground">
              Do you provide copywriting or only development?
            </p>
            <p>
              We can work with your copy or help structure messaging to improve
              conversions and clarity.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Can you optimize our current website?
            </p>
            <p>
              Yes. We audit performance, SEO, and UX, then implement upgrades to
              improve speed and conversion.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              How long does a website project take?
            </p>
            <p>
              Most projects take 2 to 6 weeks depending on scope and approvals.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Can you integrate analytics and tracking?
            </p>
            <p>
              Yes. We set up analytics, event tracking, and conversion goals as
              part of delivery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
