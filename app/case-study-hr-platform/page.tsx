import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study: HR Management Platform | Turicks",
  description:
    "Case study on building an HR management platform: employee data, approvals, and analytics.",
  alternates: { canonical: "/case-study-hr-platform" },
};

export default function HrPlatformCaseStudyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Case Study: HR Management Platform
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A scalable HR platform that simplified employee workflows and improved
          visibility for leadership.
        </p>
      </header>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">The challenge</h2>
        <p>
          HR processes were fragmented across spreadsheets and multiple tools.
          Approvals, leave tracking, and reporting required manual effort and
          caused delays.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">The solution</h2>
        <p>
          We built a unified HR management platform with employee records,
          leave workflows, performance tracking, and analytics dashboards.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Outcomes</h2>
        <ul className="list-disc space-y-3 pl-6">
          <li>Reduced HR administrative workload</li>
          <li>Faster approvals and clearer workflows</li>
          <li>Improved leadership reporting and visibility</li>
        </ul>
        <p>
          See our{" "}
          <Link href="/products#hr-management">HR Management System</Link> or
          explore{" "}
          <Link href="/custom-software-solutions">custom software solutions</Link>.
        </p>
      </section>
    </div>
  );
}
