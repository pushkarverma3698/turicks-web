import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study: Admin Dashboard for SaaS Operations | Turicks",
  description:
    "Case study on building an admin dashboard with analytics, role-based access, and workflow controls.",
  alternates: { canonical: "/case-study-admin-dashboard" },
};

export default function AdminDashboardCaseStudyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Case Study: Admin Dashboard for SaaS Operations
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A modern admin dashboard that improved operational visibility and
          reduced support load.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">The challenge</h2>
        <p>
          The client lacked a centralized admin interface. Support teams had to
          pull data from multiple systems, leading to slow response times and
          inconsistent reporting.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">The solution</h2>
        <p>
          We built an admin dashboard with role-based access, customer activity
          views, and automated alerts. Analytics dashboards gave leadership
          real-time insight into usage and operational metrics.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Outcomes</h2>
        <ul className="list-disc space-y-3 pl-6">
          <li>Faster support resolution with centralized data</li>
          <li>Improved operational visibility for leadership</li>
          <li>Reduced manual reporting with automated dashboards</li>
        </ul>
        <p>
          Learn more about{" "}
          <Link href="/admin-panel-development">admin panel development</Link> or{" "}
          <Link href="/web-app-development">web app development</Link>.
        </p>
      </section>
    </div>
  );
}
