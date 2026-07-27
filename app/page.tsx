"use client";

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
  ArrowRight,
  Building2,
  Users,
  Code,
  Rocket,
  Shield,
  Sparkles,
  Bot,
  Brain,
  Zap,
  Workflow,
  MessageSquare,
  Cpu,
  Lock,
  Activity,
  Server,
  Globe,
  ExternalLink,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import {
  StaggerContainer,
  staggerItem,
} from "@/components/animations/stagger-container";
import { motion } from "framer-motion";
import { ClientMarquee } from "@/components/client-marquee";
import { ParallaxOrbs } from "@/components/parallax";
import { DecorativeOrbs } from "@/components/decorative-orbs";
import { DecorativeVectors } from "@/components/decorative-vectors";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";
const SHOWCASE_3D_URL = "https://main.dgr0xigg9rbz4.amplifyapp.com";

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

  const founderOSProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "FounderOS",
    description:
      "Enterprise AI agent orchestration platform for deploying production-ready multi-agent systems with state graphs, bounded autonomy, MCP tool integration, and step-by-step tracing.",
    brand: {
      "@type": "Organization",
      name: "Turicks",
    },
    category: "AI Agent Orchestration Engine",
    url: `${SITE_URL}/founderos`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(founderOSProductSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <ParallaxOrbs />
        <DecorativeVectors variant="hero" className="opacity-70" />
        <div className="container mx-auto px-4">
          <FadeIn className="mx-auto max-w-4xl text-center" y={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Cpu className="h-4 w-4" />
              <span>🚀 Powered by FounderOS</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight leading-tight sm:text-5xl md:text-6xl text-balance break-words">
              Production-Ready AI Agents &amp; Immersive Web —{" "}
              <span className="text-primary">Deployed to Production</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl leading-relaxed text-balance">
              87% of AI agent pilots stall before reaching production. We built FounderOS — our proprietary agentic orchestration engine — to guarantee yours succeeds. From autonomous multi-agent systems to immersive 3D web environments, Turicks is the AI-native partner for brands that refuse to be flat.
            </p>
            <motion.div
              className="flex flex-col justify-center gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <a
                  href={SHOWCASE_3D_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Experience Turicks in 3D
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </FadeIn>

          {/* Tech Stack & Engineering Badges */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="rounded-2xl border bg-background/50 p-6 backdrop-blur shadow-lg text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Enterprise Production Tech Stack &amp; Architecture
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
                <span className="rounded-full border bg-muted/60 px-3 py-1.5 flex items-center gap-1.5">
                  <Workflow className="h-3.5 w-3.5 text-primary" /> LangGraph &amp; CrewAI
                </span>
                <span className="rounded-full border bg-muted/60 px-3 py-1.5 flex items-center gap-1.5">
                  <Server className="h-3.5 w-3.5 text-primary" /> Model Context Protocol (MCP)
                </span>
                <span className="rounded-full border bg-muted/60 px-3 py-1.5 flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-primary" /> FounderOS Engine
                </span>
                <span className="rounded-full border bg-muted/60 px-3 py-1.5 flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-primary" /> Bounded Autonomy &amp; HITL
                </span>
                <span className="rounded-full border bg-muted/60 px-3 py-1.5 flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-primary" /> React Three Fiber 3D
                </span>
                <span className="rounded-full border bg-muted/60 px-3 py-1.5 flex items-center gap-1.5">
                  <Code className="h-3.5 w-3.5 text-primary" /> Next.js 15 &amp; Nest.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Turicks (Benefits) */}
      <section className="relative overflow-hidden py-20 bg-muted/20">
        <DecorativeOrbs className="opacity-60" />
        <DecorativeVectors className="opacity-45" />
        <div className="container mx-auto px-4 relative">
          <FadeIn className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Why We&apos;re Different</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Built Different. Deployed to Production.
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We don&apos;t just build prototypes — we own production outcomes with battle-tested systems and zero handoffs.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-3 items-stretch">
            <motion.div variants={staggerItem}>
              <Card className="group h-full bg-background/60 backdrop-blur border-muted-foreground/15">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>FounderOS Ships Agents Fast</CardTitle>
                  <CardDescription className="text-sm leading-relaxed mt-2">
                    Our orchestration platform manages state persistence, MCP tool routing, and permission guardrails out of the box — enabling production agent deployment in 2 weeks.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group h-full bg-background/60 backdrop-blur border-muted-foreground/15">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>From Agent to Ecosystem</CardTitle>
                  <CardDescription className="text-sm leading-relaxed mt-2">
                    Production AI agents, AI-ingested websites (BizSite AI), custom SaaS platforms, and immersive 3D frontends — engineered by one senior team.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group h-full bg-background/60 backdrop-blur border-muted-foreground/15">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>We Run What We Build</CardTitle>
                  <CardDescription className="text-sm leading-relaxed mt-2">
                    FounderOS powers our own software engineering operations daily. You get the benefits of an AI-first development partner that practices what it ships.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      {/* Client Logos Marquee */}
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
                caseStudyUrl: "/case-study-building-a-school-saas-platform",
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
                      &quot;{testimonial.quote}&quot;
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

      {/* FounderOS Showcase Section (NEW) */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-background via-muted/30 to-background border-t">
        <DecorativeOrbs className="opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Cpu className="h-4 w-4" />
              <span>Proprietary Orchestration Engine</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">
              Meet FounderOS. The End of AI Agent Pilot Purgatory.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most agencies build fragile LLM scripts. FounderOS is our proprietary agentic orchestration platform that provides state persistence, bounded autonomy, MCP integrations, and full observability.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <Card className="bg-background/80 border-primary/20 backdrop-blur">
              <CardHeader>
                <Workflow className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Multi-Agent State Graphs</CardTitle>
                <CardDescription className="text-sm mt-2">
                  Supervisor-worker architectures, parallel agent pipelines, and state graph rollbacks powered by LangGraph.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-background/80 border-primary/20 backdrop-blur">
              <CardHeader>
                <Lock className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Bounded Autonomy</CardTitle>
                <CardDescription className="text-sm mt-2">
                  Strict permission guardrails and human-in-the-loop (HITL) approval gates for high-stakes enterprise actions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-background/80 border-primary/20 backdrop-blur">
              <CardHeader>
                <Activity className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Step-by-Step Tracing</CardTitle>
                <CardDescription className="text-sm mt-2">
                  Complete real-time visibility into agent reasoning, tool calls, token budgets, and latency bottlenecks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-background/80 border-primary/20 backdrop-blur">
              <CardHeader>
                <Server className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">MCP Tool Integration</CardTitle>
                <CardDescription className="text-sm mt-2">
                  Native Model Context Protocol (MCP) support to connect agents securely with SQL, CRMs, ERPs, and cloud APIs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/founderos">
                Explore FounderOS Architecture
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/contact">Book an Architecture Review</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="relative overflow-hidden py-20" id="services">
        <DecorativeOrbs className="opacity-50" />
        <DecorativeVectors className="opacity-40" />
        <div className="container mx-auto px-4 relative">
          <FadeIn className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
              <Rocket className="h-4 w-4 text-primary" />
              <span>High-Impact Engineering</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              High-Impact Capabilities. Zero Filler.
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We focus entirely on the technologies shaping the next decade.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={staggerItem}>
              <Card className="group h-full border-primary/30 bg-primary/5">
                <CardHeader>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <Bot className="h-6 w-6 text-primary" />
                    </div>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                      Core
                    </span>
                  </div>
                  <CardTitle className="text-xl">Production AI Agents</CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed">
                    Orchestrated by FounderOS. We build autonomous workers that automate complex back-office workflows, reasoning tasks, and enterprise integrations.
                  </CardDescription>
                  <div className="mt-4 pt-4 border-t">
                    <Link href="/ai-agent-development" className="inline-flex items-center text-xs font-semibold text-primary">
                      Learn about AI agents <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
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
                      Popular
                    </span>
                  </div>
                  <CardTitle className="text-xl">AI-Ingested Websites (BizSite AI)</CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed">
                    Living digital presences that autonomously research your business, generate smart copy, run 24/7 AI chatbots, and engage prospects.
                  </CardDescription>
                  <div className="mt-4 pt-4 border-t">
                    <Link href="/ai-ingested-websites" className="inline-flex items-center text-xs font-semibold text-primary">
                      Explore BizSite AI <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="group h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Custom SaaS Engineering</CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed">
                    Cloud-native architecture, Next.js 15, Nest.js, automated CI/CD, and robust security — shipped in weeks, built for scale.
                  </CardDescription>
                  <div className="mt-4 pt-4 border-t">
                    <Link href="/custom-saas-application-development" className="inline-flex items-center text-xs font-semibold text-primary">
                      Custom SaaS solutions <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="group h-full border-primary/20 bg-muted/20">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Immersive 3D Web Experiences</CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed">
                    Next-generation WebGL and spatial computing interfaces that convert static brochure sites into interactive 3D digital environments.
                  </CardDescription>
                  <div className="mt-4 pt-4 border-t">
                    <a href={SHOWCASE_3D_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-semibold text-primary">
                      View live 3D showcase ↗
                    </a>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="group h-full lg:col-span-2">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Enterprise Workflow Automation</CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed">
                    Modernizing legacy enterprise systems by injecting agentic intelligence, automated approval cycles, role-based access control, and Model Context Protocol (MCP) integrations.
                  </CardDescription>
                  <div className="mt-4 pt-4 border-t">
                    <Link href="/ai-automation" className="inline-flex items-center text-xs font-semibold text-primary">
                      Enterprise automation <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </StaggerContainer>

          <FadeIn className="mt-10 flex justify-center gap-4 flex-col sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link href="/founderos">
                Explore FounderOS Architecture
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* BizSite AI Section */}
      <section className="relative overflow-hidden py-24 bg-background border-t">
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
                your copy, chats with your visitors, and engages leads — all
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
                      and generate high-converting content that sounds like you.
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
                      qualifies leads, answers questions, and books calls 24/7.
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
                      The BizSite AI engine identifies target prospects and
                      sends personalized previews automatically.
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
      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-background to-muted/30 border-t">
        <DecorativeOrbs className="opacity-40" />
        <DecorativeVectors className="opacity-30" />
        <div className="container mx-auto px-4 relative">
          <FadeIn className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
              <Bot className="h-4 w-4 text-primary" />
              <span>Execution Over Education</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Agents That Execute. Not Just Chat.
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
              Stop paying for ChatGPT wrappers. Start deploying autonomous digital workers that integrate into your CRMs, ERPs, and databases using FounderOS.
            </p>
          </FadeIn>
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            <Card className="relative overflow-hidden flex flex-col border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20" />
              <CardHeader className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Production Agent Architecture</CardTitle>
                <CardDescription className="text-base mt-2">
                  Our agents don&apos;t just respond to prompts — they act. Using FounderOS, our agents dynamically select tools, reason through edge cases, and execute multi-step workflows without human babysitting.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4 flex-grow">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">
                        Autonomous Task Execution
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Agents work independently to complete complex workflows without constant human intervention.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">
                        Bounded Policy Guardrails
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Strict permissions and human-in-the-loop authorization gates prevent unintended side effects.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Server className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">
                        Model Context Protocol (MCP)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Seamlessly connect agents to databases, APIs, and business systems with fine-grained security.
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
                      Transform operations with AI agents for customer service, data processing, lead management, fraud analysis, and support ticket triage.
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
                    <CardTitle>Enterprise-Grade Security</CardTitle>
                    <CardDescription>
                      Production-grade agents with secure authentication, data protection, audit trails, and compliance with enterprise security standards.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
              <FadeIn className="mt-auto pt-4 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="flex-1 rounded-full">
                  <Link href="/ai-agent-development">
                    Build My AI Agent
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1 rounded-full">
                  <Link href="/founderos">
                    Explore FounderOS
                  </Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Experience Showcase CTA Section (REPLACES MovingTiles) */}
      <section className="relative overflow-hidden py-24 bg-slate-950 text-white border-t border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-primary/20 to-cyan-900/20 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            <Globe className="h-4 w-4" />
            <span>Interactive 3D Web Environment</span>
          </div>
          <h2 className="text-3xl font-bold md:text-5xl mb-6 tracking-tight text-balance">
            Don&apos;t Take Our Word for It. Experience It in 3D.
          </h2>
          <p className="mx-auto max-w-2xl text-slate-300 text-lg mb-8 leading-relaxed text-balance">
            We engineer immersive 3D digital environments and spatial web experiences that make your brand impossible to ignore. Explore our live interactive 3D showcase site.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-400 text-white font-bold px-10 py-6 text-lg shadow-xl shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <a
                href={SHOWCASE_3D_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enter 3D Web Experience ↗
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary/5 py-20">
        <FadeIn className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Move from Pilot to Production?
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-muted-foreground text-lg">
            Stop experimenting with AI. Start deploying it. Let&apos;s discuss your enterprise workflows and how FounderOS can automate them securely.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Book an Architecture Review
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link href="/founderos">
                Explore FounderOS
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
