import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle2,
  ArrowRight,
  Code,
  Palette,
  Database,
  Smartphone,
  Cloud,
  Shield,
  Bot,
  Sparkles,
} from "lucide-react";
import { DecorativeOrbs } from "@/components/decorative-orbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export const metadata: Metadata = {
  title: "AI Agent Development, SaaS & Custom Software Services | Turicks",
  description:
    "Turicks builds AI agents, AI-ingested websites, custom SaaS platforms, mobile apps & enterprise systems. One team, end-to-end. India's AI-native dev partner.",
  keywords: [
    "AI agent development company India",
    "agentic AI development services",
    "custom AI agents",
    "AI-ingested websites",
    "custom SaaS development",
    "SaaS development services India",
    "software development agency",
    "mobile app development",
    "enterprise software development",
    "LangGraph development",
    "UI/UX services",
    "cloud infrastructure",
  ],
  openGraph: {
    title: "AI Agent Development, SaaS & Custom Software Services | Turicks",
    description:
      "Turicks builds AI agents, AI-ingested websites, custom SaaS platforms, mobile apps & enterprise systems. One team, end-to-end.",
    type: "website",
    url: `${SITE_URL}/services`,
    siteName: "Turicks",
    images: [
      {
        url: `${SITE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Development, SaaS & Custom Software | Turicks",
    description:
      "AI agents, AI-ingested websites, SaaS & enterprise systems — built by India's AI-native dev team.",
    images: [`${SITE_URL}/og-image.svg`],
  },
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "We design and deploy production-grade AI agents using LangGraph, CrewAI, and AutoGen. From a single workflow agent to a full multi-agent system — we build agents that actually run your business.",
    features: [
      "LangGraph & CrewAI development",
      "Multi-agent orchestration",
      "RAG-powered knowledge agents",
      "Workflow automation agents",
      "Enterprise-grade deployment",
    ],
    link: "/ai-agent-development",
    badge: "Hot",
  },
  {
    icon: Sparkles,
    title: "AI-Ingested Websites (BizSite AI)",
    description:
      "Websites that generate leads on their own. AI-crafted copy, pre-trained chatbots, and autonomous prospect outreach — all built around your business, deployed in days.",
    features: [
      "AI-generated conversion copy",
      "24/7 pre-trained AI chatbot",
      "Autonomous lead outreach",
      "Analytics & lead tracking",
      "2-week delivery",
    ],
    link: "/ai-ingested-websites",
    badge: "New",
  },
  {
    icon: Code,
    title: "Custom SaaS Development",
    description:
      "We turn your idea into a live, scalable SaaS product. AI-augmented development means your MVP ships in 6 weeks — not 6 months. Then we scale it with you.",
    features: [
      "AI-powered development process",
      "Full-stack development",
      "Cloud-native architecture",
      "Scalable infrastructure",
      "API development & integration",
    ],
    link: null,
    badge: null,
  },
  {
    icon: Database,
    title: "Enterprise Solutions",
    description:
      "Complex integrations, legacy modernization, secure multi-tenant architectures. We handle the hard stuff so your enterprise clients don't even notice the seams.",
    features: [
      "System architecture design",
      "Legacy system modernization",
      "Data migration & integration",
      "Enterprise security & compliance",
      "Multi-team rollouts",
    ],
    link: null,
    badge: null,
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform apps with React Native or native iOS/Android. Built for performance, designed for delight — and shipped fast.",
    features: [
      "iOS & Android development",
      "React Native apps",
      "Cross-platform solutions",
      "Mobile-first design",
      "App store optimization",
    ],
    link: null,
    badge: null,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces backed by user research. We don't just make things look good — we make them work better and convert more.",
    features: [
      "User research & analysis",
      "Wireframing & prototyping",
      "Visual design",
      "Design systems",
      "Usability testing",
    ],
    link: null,
    badge: null,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Reliable, auto-scaling cloud infrastructure with CI/CD pipelines, monitoring, and cost optimization — so your product runs perfectly, always.",
    features: [
      "Automated cloud architecture",
      "DevOps & CI/CD setup",
      "Monitoring & analytics",
      "Cost optimization",
    ],
    link: null,
    badge: null,
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security built in from day one — audits, encryption, access control, and compliance so your clients trust you completely.",
    features: [
      "Security audits",
      "Compliance consulting",
      "Data encryption",
      "Access control systems",
    ],
    link: null,
    badge: null,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your organization, goals, and requirements through detailed consultations.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "Our team designs the solution architecture and user experience, ensuring it aligns with your needs.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build your solution using best practices, modern technologies, and agile methodologies.",
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing ensures your software is reliable, secure, and performs as expected.",
  },
  {
    number: "05",
    title: "Deployment & Launch",
    description:
      "We handle deployment, migration, and launch, ensuring a smooth transition to your new system.",
  },
  {
    number: "06",
    title: "Support & Maintenance",
    description:
      "Ongoing support, updates, and maintenance to keep your software running smoothly.",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Agent Development & Custom SaaS",
    serviceType: [
      "AI Agent Development",
      "Custom SaaS Development",
      "AI-Ingested Websites",
      "Mobile App Development",
      "Enterprise Software",
    ],
    provider: {
      "@type": "Organization",
      name: "Turicks",
      url: SITE_URL,
    },
    areaServed: ["India", "Global"],
    url: `${SITE_URL}/services`,
    description:
      "Turicks builds custom AI agents, AI-ingested websites, SaaS platforms, mobile apps, and enterprise systems — India's AI-native development team.",
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
              <Bot className="h-4 w-4 text-primary" />
              <span>Full-Spectrum Development</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              AI Agent Development, SaaS & Custom Software —{" "}
              <span className="text-primary">We Build Everything</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Turicks is your AI-native build partner. We don&apos;t do one
              thing well — we do <em>everything</em> well. AI agents, full SaaS
              platforms, mobile apps, AI-ingested websites, enterprise systems,
              UI/UX. One team. End-to-end.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-y bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Technologies We Work With
            </h2>
            <p className="mt-2 text-muted-foreground">
              Modern stacks for scalable SaaS, mobile apps, and AI automation.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "LangGraph",
              "CrewAI",
              "AutoGen",
              "LangChain",
              "OpenAI API",
              "Anthropic Claude API",
              "Python",
              "FastAPI",
              "Next.js",
              "React",
              "React Native",
              "Node.js",
              "TypeScript",
              "PostgreSQL",
              "AWS",
              "Docker",
              "Kubernetes",
              "Figma",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-40" />
        <div className="container mx-auto px-4 relative">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What We Build
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Every service, fully delivered — from first line of code to
              production deployment and beyond.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className={`group flex flex-col backdrop-blur ${service.badge ? "border-primary/30 bg-primary/5" : "bg-background/40 border-muted-foreground/15"}`}
                >
                  <CardHeader>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      {service.badge && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {service.link && (
                      <Link
                        href={service.link}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                      >
                        Learn more <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Big Truth */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border bg-background/60 backdrop-blur p-8 md:p-10">
            <div className="mb-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
                <span>Trust Signals</span>
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">The Big Truth</h2>
              <p className="mt-3 text-muted-foreground">
                Clients choose based on understanding, trust, and proof. Price
                matters least when trust is high.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border">
              <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_0.8fr] divide-y sm:divide-y-0 sm:divide-x bg-background/80">
                <div className="p-4 text-sm font-semibold">Factor</div>
                <div className="p-4 text-sm font-semibold">Importance</div>
                {[
                  {
                    factor: "Do they understand my problem?",
                    stars: "⭐⭐⭐⭐⭐",
                  },
                  { factor: "Can I trust them?", stars: "⭐⭐⭐⭐⭐" },
                  { factor: "Do they have proof?", stars: "⭐⭐⭐⭐" },
                  { factor: "Are they cheapest?", stars: "⭐" },
                ].map((row) => (
                  <div
                    key={row.factor}
                    className="grid grid-cols-1 sm:grid-cols-[1.2fr_0.8fr] border-t"
                  >
                    <div className="p-4 text-sm text-foreground/90">
                      {row.factor}
                    </div>
                    <div className="p-4 text-sm">{row.stars}</div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Most agencies specialize in one thing. We specialize in shipping
              the <em>right</em> thing — whether that&apos;s an AI agent, a
              SaaS product, a mobile app, or an AI-powered website. Our clients
              don&apos;t need to manage four vendors. They get one team that
              owns the whole outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Process</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A structured approach to ensure successful project delivery.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <Card key={step.number}>
              <CardHeader>
                <div className="mb-4 text-4xl font-bold text-primary/20">
                  {step.number}
                </div>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Tell Us What You Want to Build
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-muted-foreground">
            AI agent, SaaS platform, AI-powered website, mobile app — or
            something entirely new. If it can be built with software and AI,
            we&apos;ll build it. Book a free strategy call and we&apos;ll map
            out your project in 30 minutes.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/ai-agent-development">
                Explore AI Agents
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
