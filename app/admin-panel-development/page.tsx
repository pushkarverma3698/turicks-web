import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Panel Development Services | Turicks",
  description:
    "Admin panel development for SaaS and internal tools. We build secure dashboards with analytics, workflows, and role-based access.",
  alternates: { canonical: "/admin-panel-development" },
};

export default function AdminPanelDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Admin Panel Development Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Build secure, powerful admin dashboards that give teams visibility and
          control.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>
          Admin panels are the control center of a SaaS product or internal
          system. A strong admin interface reduces operational burden, improves
          decision-making, and provides real-time visibility.
        </p>
        <p>
          We design admin panels with role-based access, structured workflows,
          and analytics that help teams take action quickly.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold">Admin panel features</h2>
        <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
          <li>User and role management</li>
          <li>Audit logs and activity tracking</li>
          <li>Dashboard analytics and reporting</li>
          <li>Workflow approvals and escalations</li>
          <li>System configuration and feature toggles</li>
        </ul>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">
          Admin panels for SaaS operations
        </h2>
        <p>
          We build admin experiences that match how operators actually work. If
          you need automated workflows, see{" "}
          <Link href="/software-automation">software automation</Link>. If you
          need a full product, explore{" "}
          <Link href="/web-app-development">web app development</Link>.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground">
              Can you build an admin panel for our existing product?
            </p>
            <p>
              Yes. We can redesign or extend existing dashboards and workflows.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Do you include analytics and reporting?
            </p>
            <p>
              Yes. We design dashboards with the metrics your team needs.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">
              How long does admin panel development take?
            </p>
            <p>
              Timelines depend on scope. Most builds take 6 to 12 weeks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
