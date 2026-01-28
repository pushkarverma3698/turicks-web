import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { DecorativeOrbs } from "@/components/decorative-orbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export const metadata: Metadata = {
  title: "Our Services - Turicks",
  description:
    "We are a software development agency specializing in custom SaaS solutions, web applications, and tailored software for organizations.",
  keywords: [
    "custom SaaS development",
    "web applications",
    "AI automation",
    "UI/UX services",
    "cloud infrastructure",
    "security compliance",
  ],
  openGraph: {
    title: "Our Services - Turicks",
    description:
      "We are a software development agency specializing in custom SaaS solutions, web applications, and tailored software for organizations.",
    type: "website",
    url: `${SITE_URL}/services`,
    siteName: "Turicks",
    images: [
      {
        url: `${SITE_URL}/globe.svg`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Turicks",
    description:
      "We are a software development agency specializing in custom SaaS solutions, web applications, and tailored software for organizations.",
    images: [`${SITE_URL}/globe.svg`],
  },
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    icon: Code,
    title: "AI-Driven Custom SaaS Development",
    description:
      "From concept to deployment, we build automated, scalable SaaS platforms with AI integration tailored to your organization's unique requirements.",
    features: [
      "AI-powered automation",
      "Full-stack development",
      "Cloud-native architecture",
      "Scalable infrastructure",
      "API development & integration",
    ],
  },
  {
    icon: Database,
    title: "Automated Enterprise Solutions",
    description:
      "Complex automated software systems for large organizations with AI-driven workflows, integrations, and security requirements.",
    features: [
      "AI-driven automation",
      "System architecture design",
      "Legacy system modernization",
      "Data migration & integration",
      "Enterprise security & compliance",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps with AI features that extend your software's reach to iOS and Android devices.",
    features: [
      "iOS & Android development",
      "Cross-platform solutions",
      "Mobile-first design",
      "App store optimization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Services",
    description:
      "Product UI/UX for SaaS: research, flows, wireframes, prototypes, and polished interfaces that users love.",
    features: [
      "User research & analysis",
      "Wireframing & prototyping",
      "Visual design",
      "Design systems",
      "Usability testing",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Reliable, secure, and scalable cloud infrastructure with automated deployment to power your applications and data.",
    features: [
      "Automated cloud architecture",
      "DevOps & CI/CD setup",
      "Monitoring & analytics",
      "Cost optimization",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security practices and compliance support with automated monitoring to protect your data and users.",
    features: [
      "Security audits",
      "Compliance consulting",
      "Data encryption",
      "Access control systems",
    ],
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
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              We are a software development agency specializing in building
              custom SaaS solutions and tailored software for organizations.
              Whatever your requirements, we can build it.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-40" />
        <div className="container mx-auto px-4 relative">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What We Offer
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive software development services to bring your ideas to
              life.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group flex flex-col bg-background/40 backdrop-blur border-muted-foreground/15"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary" />
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
                  </CardContent>
                </Card>
              );
            })}
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
            Let&apos;s Build Your Next Dream Solution
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-muted-foreground">
            Let&apos;s discuss your project requirements and how we can help
            bring your vision to life with AI-driven, automated solutions.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
