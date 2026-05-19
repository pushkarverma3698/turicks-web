"use client";

import Link from "next/link";
import Image from "next/image";
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
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Code,
  Rocket,
  Smartphone,
  Palette,
  Cloud,
  Shield,
  Sparkles,
  Bot,
  Brain,
  Zap,
  BarChart3,
  Workflow,
  MessageSquare,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import {
  StaggerContainer,
  staggerItem,
} from "@/components/animations/stagger-container";
import { motion } from "framer-motion";
import { ClientMarquee } from "@/components/client-marquee";
import { Parallax, ParallaxOrbs } from "@/components/parallax";
import { DecorativeOrbs } from "@/components/decorative-orbs";
import { DecorativeVectors } from "@/components/decorative-vectors";
import { MovingTiles } from "@/components/moving-tiles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export default function Home() {
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
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Turicks",
    url: SITE_URL,
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <ParallaxOrbs />
        <DecorativeVectors variant="hero" className="opacity-70" />
        <div className="container mx-auto px-4">
          <FadeIn className="mx-auto max-w-3xl text-center" y={0}>
            <div className="mb-6 inline-flex items-center rounded-full border bg-muted/60 px-4 py-2 text-sm">
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              <span>India&apos;s AI-Native Build Partner</span>
            </div>
            <h1 className="mb-6 pb-3 text-4xl font-bold tracking-tight leading-tight sm:text-5xl md:text-6xl text-balance break-words overflow-visible">
              AI Agents, SaaS & Custom Software —{" "}
              <span className="text-primary">Built to Win</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              From autonomous AI agents to full SaaS platforms and AI-ingested
              websites — we design, build, and launch everything your business
              needs to grow. No agencies, no handoffs. One team, end-to-end.
            </p>
            <motion.div
              className="flex flex-col justify-center gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore What We Build</Link>
              </Button>
            </motion.div>
          </FadeIn>

          {/* Spline-like "gallery" panel (visual, no 3D) */}
          <div className="mx-auto mt-12 max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl border bg-muted/30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20" />
              <div className="relative grid gap-6 p-6 md:grid-cols-3 md:p-8">
                <div className="rounded-2xl border bg-background/60 p-5 backdrop-blur">
                  <p className="text-sm font-semibold">Web App</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Modern web applications with clean UI, strong performance,
                    and scalable architecture.
                  </p>
                  <div className="mt-4">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border bg-muted/30">
                      <Image
                        src="/gif/web.gif"
                        alt="Web application preview"
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 300px, 100vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border bg-background/60 p-5 backdrop-blur">
                  <p className="text-sm font-semibold">UI/UX Services</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Wireframes, prototypes, design systems, and polished UI.
                  </p>
                  <div className="mt-4">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border bg-muted/30">
                      <Image
                        src="/gif/ui-ux.gif"
                        alt="UI and UX design preview"
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 300px, 100vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border bg-background/60 p-5 backdrop-blur">
                  <p className="text-sm font-semibold">Mobile App</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    iOS/Android apps with smooth UX, secure auth, and
                    offline-friendly workflows.
                  </p>
                  <div className="mt-4">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border bg-muted/30">
                      <Image
                        src="/gif/app.gif"
                        alt="Mobile application preview"
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 300px, 100vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <DecorativeVectors className="opacity-45" />
        <div className="container mx-auto px-4 relative">
          <FadeIn className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4" />
              <span>Benefits</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Choose Turicks?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We don&apos;t just write code — we own outcomes. AI-native,
              fast-moving, and built for founders who need results.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-3 items-stretch">
            <motion.div variants={staggerItem}>
              <Card className="group h-full bg-background/40 backdrop-blur border-muted-foreground/15">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Ship in Weeks, Not Months</CardTitle>
                  <CardDescription>
                    Our AI-augmented dev process cuts delivery time by 70%.
                    SaaS MVPs in 6 weeks. AI agent prototypes in 2 weeks.
                    No bloat, no delays — just working software, fast.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group h-full bg-background/40 backdrop-blur border-muted-foreground/15">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>We Build Everything</CardTitle>
                  <CardDescription>
                    AI agents, full SaaS platforms, mobile apps, AI-ingested
                    websites, enterprise systems — one team, zero gaps.
                    Your clients don&apos;t need four vendors. They need us.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group h-full bg-background/40 backdrop-blur border-muted-foreground/15">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI-Native by Default</CardTitle>
                  <CardDescription>
                    We use AI agents internally on every project — 70% faster
                    iterations, better code, smarter products. You get the
                    benefits of an AI-first team without managing one yourself.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      {/* Client logos marquee */}
      <ClientMarquee
        title={null}
        logos={[
          "HFN",
          "ContactME",
          "ArcsInfotech",
          "HybrowLabs",
          "WeWork",
          "MadOverGames",
          "VitalConnect24",
          "Jugnoo",
          "NrichLearning",
        ]}
        logoColorHex="7C3AED"
        speedSeconds={45}
      />

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
              <Workflow className="h-4 w-4" />
              <span>Process</span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Idea → Design → Build → Launch → Support
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              A clear, proven delivery flow that minimizes risk and accelerates
              outcomes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Idea",
                description: "Discovery workshops, goals, and success metrics.",
              },
              {
                title: "Design",
                description: "UX flows, UI systems, and rapid prototyping.",
              },
              {
                title: "Build",
                description: "Agile development with clean architecture.",
              },
              {
                title: "Launch",
                description: "QA, deployment, and go‑live readiness.",
              },
              {
                title: "Support",
                description: "Monitoring, iteration, and ongoing improvement.",
              },
            ].map((step, idx) => (
              <Card key={step.title} className="h-full bg-background/50">
                <CardHeader>
                  <div className="text-sm font-semibold text-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Client Success Stories</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Real outcomes from organizations that trusted Turicks to build their future.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Turicks delivered our school management platform in 6 weeks with zero delays. The system now manages 2,000+ students and has saved us 40+ hours per week on administrative work.",
                name: "Rajesh Kapoor",
                org: "LoremSchool India",
                role: "Operations Director",
                caseStudyUrl: "/case-study-school-management",
              },
              {
                quote:
                  "Their team translated our complex HR workflows into an intuitive platform. Onboarding went from 2 weeks to 2 days. Payroll accuracy improved to 99.9%.",
                name: "Priya Sharma",
                org: "TechCorp Solutions",
                role: "Head of Human Resources",
                caseStudyUrl: "/case-study-hr-platform",
              },
              {
                quote:
                  "We needed an admin dashboard that could handle 100K+ transactions daily. Turicks built it, we scaled it. Performance, security, reliability — they nailed all three.",
                name: "Vikram Desai",
                org: "Enterprise Management Group",
                role: "CTO",
                caseStudyUrl: "/case-study-admin-dashboard",
              },
            ].map((testimonial) => (
              <Link key={testimonial.name} href={testimonial.caseStudyUrl} className="group no-underline">
                <Card className="bg-background/60 h-full group-hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardDescription className="text-base group-hover:text-foreground transition-colors">
                      "{testimonial.quote}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground/70">{testimonial.org}</div>
                    <div className="mt-3 inline-flex items-center text-xs font-medium text-primary group-hover:translate-x-1 transition-transform">
                      Read case study <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlights Section */}
      <section className="relative overflow-hidden py-20" id="services">
        <DecorativeOrbs className="opacity-50" />
        <DecorativeVectors className="opacity-40" />
        <div className="container mx-auto px-4 relative">
          <FadeIn className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
              <Rocket className="h-4 w-4" />
              <span>Capabilities</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Everything Your Business Needs — Under One Roof
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Whether you need an AI agent, a SaaS product, a mobile app, or an
              AI-powered website — we&apos;ve built it before and we&apos;ll
              build it for you.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <motion.div variants={staggerItem}>
              <Card className="group h-full border-primary/30 bg-primary/5">
                <CardHeader>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <Bot className="h-6 w-6 text-primary" />
                    </div>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                      Hot
                    </span>
                  </div>
                  <CardTitle>AI Agent Development</CardTitle>
                  <CardDescription>
                    Autonomous agents built on LangGraph, CrewAI & AutoGen —
                    from a single workflow agent to full multi-agent systems.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group h-full border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                      New
                    </span>
                  </div>
                  <CardTitle>AI-Ingested Websites</CardTitle>
                  <CardDescription>
                    Your website, run by AI. Smart copy, 24/7 AI chatbot, and
                    autonomous lead outreach — all pre-trained on your business.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Custom SaaS Development</CardTitle>
                  <CardDescription>
                    From MVP to enterprise scale — cloud-native, AI-augmented,
                    and shipped in weeks, not months.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Mobile Applications</CardTitle>
                  <CardDescription>
                    iOS and Android apps that users love. React Native for speed
                    without compromise, or native for peak performance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Enterprise Solutions</CardTitle>
                  <CardDescription>
                    Complex workflows, legacy modernization, and multi-team
                    rollouts — we handle scale and complexity so you don&apos;t
                    have to.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>UI/UX Design</CardTitle>
                  <CardDescription>
                    Interfaces that convert. Research-backed, prototype-tested,
                    and polished to the last pixel.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Cloud & DevOps</CardTitle>
                  <CardDescription>
                    CI/CD, monitoring, auto-scaling, and cost-optimized
                    deployments — infra that just works.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Security & Compliance</CardTitle>
                  <CardDescription>
                    Enterprise-grade security by design — auth, encryption,
                    audits, and compliance built in from day one.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </StaggerContainer>
          <FadeIn className="mt-10 flex justify-center gap-4 flex-col sm:flex-row">
            <Button asChild size="lg">
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/ai-agent-development">
                Build AI Agents
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="container mx-auto px-4 py-20">
        <FadeIn className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Featured Product</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            School Management System
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground mb-8">
            A complete platform for schools to manage students, staff,
            attendance, fees, academics, and communication—built to be fast,
            secure, and customizable.
          </p>
        </FadeIn>
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <Parallax from={0} to={-40}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border bg-muted/20">
                <Image
                  src="/School/MOCKUPS-D1.png"
                  alt="School Management System dashboard preview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Parallax>
          </div>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
            <CardHeader className="relative">
              <CardTitle className="text-2xl">What you get</CardTitle>
              <CardDescription>
                A feature-rich school platform that can be deployed quickly and
                customized for your workflows.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <ul className="grid gap-3 sm:grid-cols-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Student & staff management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Attendance & timetable
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Fees & receipts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Grades, reports & analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Parent communication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Secure role-based access
                </li>
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="sm:flex-1">
                  <Link href="/products#school-management">
                    View details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="sm:flex-1"
                >
                  <Link href="/contact">Request a demo</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="sm:flex-1"
                >
                  <Link href="/landing/digitize-your-school-in-14-days">
                    Digitize in 14 days
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BizSite AI Section */}
      <section className="relative overflow-hidden py-24 bg-background">
        <DecorativeOrbs className="opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeIn className="order-2 lg:order-1" x={-20}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                <span>Next-Gen Service · BizSite AI</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl leading-tight text-balance">
                Your Website, Powered by AI —{" "}
                <span className="text-primary">Generates Leads While You Sleep</span>
              </h2>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Forget static brochure sites. BizSite AI builds you a living,
                breathing digital presence that researches your market, writes
                your copy, chats with your visitors, and hunts down leads — all
                on autopilot.
              </p>
              
              <StaggerContainer className="grid gap-6 mb-10">
                <motion.div variants={staggerItem} className="flex gap-4 p-4 rounded-2xl border bg-background/50 backdrop-blur-sm transition-colors hover:bg-muted/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">AI Writes Your Copy</h3>
                    <p className="text-sm text-muted-foreground">
                      Our agents research your industry, study your competitors,
                      and generate high-converting content that sounds like you —
                      before you&apos;ve written a single word.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div variants={staggerItem} className="flex gap-4 p-4 rounded-2xl border bg-background/50 backdrop-blur-sm transition-colors hover:bg-muted/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">24/7 AI Sales Assistant</h3>
                    <p className="text-sm text-muted-foreground">
                      Every BizSite AI site ships with a pre-trained chatbot that
                      knows your offerings inside out. It qualifies leads, answers
                      questions, and books calls — at 2am if needed.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div variants={staggerItem} className="flex gap-4 p-4 rounded-2xl border bg-background/50 backdrop-blur-sm transition-colors hover:bg-muted/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Autonomous Outreach</h3>
                    <p className="text-sm text-muted-foreground">
                      The BizSite AI engine identifies your ideal prospects and
                      sends them personalized previews automatically, starting
                      conversations while you focus on closing.
                    </p>
                  </div>
                </motion.div>
              </StaggerContainer>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/ai-ingested-websites">
                    Get Your AI-Powered Website
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link href="/contact">See a Live Demo</Link>
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn className="order-1 lg:order-2 relative" x={20}>
              <div className="relative aspect-square lg:aspect-[4/5] xl:aspect-square">
                {/* Decorative background element */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] blur-2xl opacity-50 animate-pulse" />

                <div className="relative h-full w-full overflow-hidden rounded-[2rem] border bg-gradient-to-br from-blue-50 to-indigo-50 shadow-2xl transition-transform hover:scale-[1.02] duration-500 p-8 flex items-center justify-center">
                  <img
                    src="/bizsite-ai-workflow.svg"
                    alt="BizSite AI Workflow - AI Research, Copy Generation, 24/7 Chatbot, Autonomous Outreach"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* AI Agents Development Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-background to-muted/30">
        <DecorativeOrbs className="opacity-40" />
        <DecorativeVectors className="opacity-30" />
        <div className="container mx-auto px-4 relative">
          <FadeIn className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
              <Bot className="h-4 w-4" />
              <span>AI-Powered Development</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Autonomous AI Agents That Actually Work in Production
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
              Not demos. Not prototypes. Real agents that run your workflows,
              make decisions, and integrate into your existing systems — built
              and deployed by the team that uses AI agents internally every day.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm font-medium">
              <span className="flex items-center gap-2 rounded-full border bg-muted px-4 py-2">
                <Zap className="h-4 w-4 text-primary" /> 70% faster delivery
              </span>
              <span className="flex items-center gap-2 rounded-full border bg-muted px-4 py-2">
                <Bot className="h-4 w-4 text-primary" /> 15+ agents deployed
              </span>
              <span className="flex items-center gap-2 rounded-full border bg-muted px-4 py-2">
                <Rocket className="h-4 w-4 text-primary" /> Agent MVP in 2 weeks
              </span>
            </div>
          </FadeIn>
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            <Card className="relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20" />
              <CardHeader className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">What Are AI Agents?</CardTitle>
                <CardDescription className="text-base">
                  AI agents are autonomous systems powered by large language
                  models (LLMs) that independently accomplish complex business
                  tasks. Unlike traditional automation, they manage workflow
                  execution, make contextual decisions, and dynamically select
                  tools based on real-time needs. The agentic AI market is
                  projected to grow from $5.4 billion in 2024 to over $50
                  billion by 2030.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4 flex-grow">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">
                        Autonomous Task Execution
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Agents work independently to complete complex workflows
                        without constant human intervention, operating 24/7 with
                        consistent performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">
                        Intelligent Decision Making
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Leverage advanced reasoning to handle ambiguous
                        situations where rule-based systems fall short.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">
                        Custom Development
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Built specifically for your organization&apos;s unique
                        processes, integrations, and business logic.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Workflow className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">
                        Dynamic Tool Integration
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Seamlessly orchestrate APIs, databases, and business
                        applications with intelligent tool selection based on
                        real-time context.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">
                        Real-time Context Awareness
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Adapt to changing business conditions with context-aware
                        decision-making that understands intent and environment.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6 flex flex-col">
              <FadeIn>
                <Card className="group bg-background/60 backdrop-blur border-muted-foreground/15">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Business Applications</CardTitle>
                    <CardDescription>
                      Transform operations with AI agents for customer service,
                      data processing, lead management, fraud analysis, and
                      support ticket automation.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
              <FadeIn>
                <Card className="group bg-background/60 backdrop-blur border-muted-foreground/15">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>In-House AI Development</CardTitle>
                    <CardDescription>
                      Our development process is enhanced by in-house AI agents,
                      resulting in 70% faster iteration cycles, 75% less
                      development time, and 40% faster evaluation timelines. We
                      practice what we build.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
              <FadeIn>
                <Card className="group bg-background/60 backdrop-blur border-muted-foreground/15">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Enterprise-Ready</CardTitle>
                    <CardDescription>
                      Production-grade agents with secure authentication, data
                      protection, audit trails, and compliance with industry
                      standards.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
              <FadeIn className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="flex-1">
                  <Link href="/ai-agent-development">
                    Build My AI Agent
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1">
                  <Link href="/contact">
                    Discuss Your Project
                  </Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <div id="highlights">
        <MovingTiles
          title="More Product Highlights"
        subtitle="A few more platforms we can deliver and customize for your organization."
        speedSeconds={55}
        topRow={[
          {
            label: "Homepage",
            path: "/",
            media: {
              type: "image",
              src: "/web%20designs/1.png",
            },
          },
          {
            label: "Products",
            path: "/products",
            media: {
              type: "image",
              src: "/web%20designs/2.webp",
            },
          },
          {
            label: "Services",
            path: "/services",
            media: {
              type: "image",
              src: "/web%20designs/3.webp",
            },
          },
          {
            label: "About",
            path: "/about",
            media: {
              type: "image",
              src: "/web%20designs/4.webp",
            },
          },
          {
            label: "Contact",
            path: "/contact",
            media: {
              type: "image",
              src: "/web%20designs/5.png",
            },
          },
        ]}
        bottomRow={[
          {
            label: "School Product",
            path: "/products#school-management",
            media: {
              type: "image",
              src: "/web%20designs/6.png",
            },
          },
          {
            label: "Enterprise Product",
            path: "/products#enterprise-platform",
            media: {
              type: "image",
              src: "/web%20designs/7.avif",
            },
          },
          {
            label: "HR Product",
            path: "/products#hr-management",
            media: {
              type: "image",
              src: "/web%20designs/8.webp",
            },
          },
          {
            label: "Design Kit",
            path: "/products",
            media: {
              type: "image",
              src: "/web%20designs/9.webp",
            },
          },
          {
            label: "Design Files",
            path: "/products",
            media: {
              type: "image",
              src: "/web%20designs/10.webp",
            },
          },
        ]}
      />
      </div>

      {/* CTA Section */}
      <section className="border-t bg-primary/5 py-20">
        <FadeIn className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-muted-foreground">
            Tell us what you need — AI agents, a SaaS platform, an AI-powered
            website, or a full product. We&apos;ll tell you exactly how to build
            it and how fast. No fluff, just results.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                See Everything We Build
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
