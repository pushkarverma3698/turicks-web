import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile App Development Services | Turicks",
  description:
    "Mobile app development for iOS and Android. We build secure, scalable apps with great UX and reliable backend integration.",
  alternates: { canonical: "/mobile-app-development" },
};

export default function MobileAppDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Mobile App Development Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We build mobile apps that feel fast, secure, and delightful—backed by
          reliable infrastructure.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>
          A great mobile app is more than UI. It needs stable APIs, secure data
          handling, offline resilience, and performance that users trust. We
          build mobile apps for startups and organizations that need production‑
          ready solutions.
        </p>
        <p>
          Our delivery covers design, development, and backend integration so
          your app works seamlessly with your existing systems and workflows.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold">What we deliver</h2>
        <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
          <li>iOS and Android development</li>
          <li>Secure authentication and role-based access</li>
          <li>Offline-friendly workflows</li>
          <li>Push notifications and messaging</li>
          <li>Analytics and performance monitoring</li>
        </ul>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">
          Mobile apps that connect to SaaS
        </h2>
        <p>
          Many mobile apps are extensions of SaaS platforms. We ensure the app
          integrates cleanly with your backend and keeps data consistent across
          devices.
        </p>
        <p>
          Explore{" "}
          <Link href="/web-app-development">web app development</Link> or{" "}
          <Link href="/custom-saas-application-development">
            custom SaaS application development
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground">
              Do you build native or cross-platform apps?
            </p>
            <p>
              We choose the best approach based on your product needs, timeline,
              and budget.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Can you integrate with our backend?
            </p>
            <p>
              Yes. We design secure APIs and integrate with existing systems.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              How long does mobile app development take?
            </p>
            <p>
              MVPs can take 8 to 16 weeks, depending on features and platform
              requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
