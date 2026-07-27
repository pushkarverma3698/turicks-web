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
  ArrowRight,
  Bot,
  Brain,
  Zap,
  Workflow,
  Database,
  Shield,
  CheckCircle2,
  Rocket,
  Code,
  Network,
  Cpu,
  Layers,
  Lock,
  Activity,
  Terminal,
  Server,
  ChevronRight,
  Globe,
} from "lucide-react";
import { DecorativeOrbs } from "@/components/decorative-orbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export const metadata: Metadata = {
  title: "FounderOS — Enterprise AI Agent Orchestration Platform | Turicks",
  description:
    "FounderOS is Turicks' proprietary AI agent orchestration engine that bridges the pilot-to-production gap. Deploy multi-agent systems with bounded autonomy, state persistence, MCP tool integration, and full observability.",
  keywords: [
    "FounderOS",
    "AI agent orchestration platform",
    "production AI agents",
    "agentic AI deployment",
    "multi-agent orchestration",
    "Model Context Protocol",
    "LangGraph production deployment",
    "bounded autonomy AI",
    "enterprise AI agent platform",
    "Turicks FounderOS",
  ],
  openGraph: {
    title: "FounderOS — Enterprise AI Agent Orchestration Platform | Turicks",
    description:
      "Bridge the 87% pilot-to-production gap with FounderOS. Deploy autonomous multi-agent systems with enterprise security, bounded autonomy, and step-by-step tracing.",
    type: "website",
    url: `${SITE_URL}/founderos`,
    siteName: "Turicks",
    images: [{ url: `${SITE_URL}/og-image.svg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FounderOS — AI Agent Orchestration Engine | Turicks",
    description:
      "Enterprise AI agent orchestration: multi-agent state graphs, MCP integration, bounded autonomy, and full observability.",
    images: [`${SITE_URL}/og-image.svg`],
  },
  alternates: { canonical: "/founderos" },
};

const architecturePillars = [
  {
    icon: Workflow,
    title: "Multi-Agent State Graph Engine",
    description:
      "Built on graph-based state management (LangGraph, AutoGen, CrewAI). Orchestrates complex agent interactions, supervisor-worker topologies, cyclic reasoning loops, and deterministic fallback routines.",
    capabilities: [
      "Supervisor-Worker agent topologies",
      "State persistence & state rollbacks",
      "Parallel sub-agent execution",
      "Dynamic tool selection & routing",
    ],
  },
  {
    icon: Lock,
    title: "Bounded Autonomy & Policy Guardrails",
    description:
      "Enforces granular permission scoping, role-based execution boundaries, and human-in-the-loop (HITL) authorization gates for high-stakes actions.",
    capabilities: [
      "Human-in-the-loop (HITL) checkpoints",
      "Role-based API permission boundaries",
      "Deterministic policy enforcement",
      "Zero unauthorized state mutations",
    ],
  },
  {
    icon: Activity,
    title: "Deep Tracing & Step-by-Step Observability",
    description:
      "Complete visibility into every step of agent reasoning, LLM token consumption, tool invocations, and latency bottlenecks. Debug production agents like standard code.",
    capabilities: [
      "Real-time step execution tracing",
      "Detailed token & cost analytics",
      "Tool failure retries & auto-healing",
      "Audit-ready interaction logs",
    ],
  },
  {
    icon: Server,
    title: "MCP & Enterprise Tool Integration",
    description:
      "Native support for Model Context Protocol (MCP), connecting autonomous agents seamlessly to legacy CRMs, ERPs, SQL databases, cloud APIs, and internal microservices.",
    capabilities: [
      "Native Model Context Protocol (MCP)",
      "Secure database read/write locks",
      "OAuth2 & API token rotation",
      "Rate-limit compliant queueing",
    ],
  },
];

const featureGrid = [
  {
    title: "Deterministic State Persistence",
    description:
      "Agents don't lose context mid-flight. State graphs store progress in durable storage, enabling multi-day asynchronous execution cycles.",
  },
  {
    title: "Sandboxed Code & Execution",
    description:
      "Isolated execution environments isolate agent side-effects. Code generation and Python data scripts execute in secure, air-gapped sandboxes.",
  },
  {
    title: "Autonomous Recovery & Fallbacks",
    description:
      "When LLM outputs drift or APIs time out, FounderOS triggers automated fallback strategies, context re-prompting, or graceful degradation.",
  },
  {
    title: "Model Agnostic Orchestration",
    description:
      "Swap reasoning models instantly. Route simple sub-tasks to lightweight models and complex reasoning to frontier models automatically.",
  },
];

export default function FounderOSPage() {
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
        name: "FounderOS",
        item: `${SITE_URL}/founderos`,
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "FounderOS",
    description:
      "Enterprise AI agent orchestration platform for deploying production-ready multi-agent systems with bounded autonomy, state persistence, MCP integration, and step-by-step tracing.",
    brand: {
      "@type": "Organization",
      name: "Turicks",
    },
    category: "AI Agent Orchestration Engine",
    url: `${SITE_URL}/founderos`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is FounderOS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FounderOS is Turicks' proprietary AI agent orchestration platform. It enables organizations to build, deploy, and monitor production-ready multi-agent systems with state persistence, bounded autonomy, MCP integration, and real-time observability.",
        },
      },
      {
        "@type": "Question",
        name: "How does FounderOS solve the AI agent pilot-to-production gap?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Over 85% of AI agent pilots fail in production due to unhandled edge cases, non-deterministic drift, security risks, and lack of state persistence. FounderOS provides state graphs, human-in-the-loop approval gates, automated retries, and sandboxed tool execution to guarantee production reliability.",
        },
      },
      {
        "@type": "Question",
        name: "Does FounderOS support Model Context Protocol (MCP)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. FounderOS natively implements the Model Context Protocol (MCP), allowing AI agents to securely interact with databases, internal microservices, CRMs, ERPs, and third-party APIs with fine-grained access control.",
        },
      },
    ],
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background">
        <DecorativeOrbs className="opacity-70" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Cpu className="h-4 w-4" />
              <span>Proprietary Orchestration Engine</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
              FounderOS — The Engine Behind{" "}
              <span className="text-primary">Production-Ready AI Agents</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl leading-relaxed text-balance">
              Over 85% of AI agent pilots fail to reach production. FounderOS bridges the gap with graph-based state management, bounded autonomy, Model Context Protocol (MCP) integrations, and real-time observability.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">
                  Book an Architecture Review
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
                  href="https://main.dgr0xigg9rbz4.amplifyapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Experience Turicks in 3D ↗
                </a>
              </Button>
            </div>
          </div>

          {/* Architecture Diagram Card */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="rounded-3xl border bg-background/80 p-6 md:p-10 backdrop-blur shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between border-b pb-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Terminal className="h-6 w-6 text-primary" />
                    <span className="font-mono text-sm font-bold tracking-wider">
                      FOUNDEROS // ORCHESTRATION_CORE_v2.6
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold px-3 py-1 border border-emerald-500/20">
                    STATUS: ACTIVE_PRODUCTION
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-4">
                  <div className="rounded-2xl border bg-muted/40 p-4 font-mono text-xs space-y-2">
                    <p className="text-primary font-bold">1. INGEST & STATE</p>
                    <p className="text-muted-foreground">
                      Graph initialization, state persistence & session recovery.
                    </p>
                  </div>
                  <div className="rounded-2xl border bg-muted/40 p-4 font-mono text-xs space-y-2">
                    <p className="text-primary font-bold">2. MCP TOOL ROUTER</p>
                    <p className="text-muted-foreground">
                      Dynamic schema discovery, rate-limiting & OAuth security.
                    </p>
                  </div>
                  <div className="rounded-2xl border bg-muted/40 p-4 font-mono text-xs space-y-2">
                    <p className="text-primary font-bold">3. BOUNDED GUARDRAILS</p>
                    <p className="text-muted-foreground">
                      Human-in-the-loop gates & strict deterministic policy check.
                    </p>
                  </div>
                  <div className="rounded-2xl border bg-muted/40 p-4 font-mono text-xs space-y-2">
                    <p className="text-primary font-bold">4. TRACING & LOGS</p>
                    <p className="text-muted-foreground">
                      Step-by-step reasoning trace, token metrics & audit trails.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm font-medium">
              <Layers className="h-4 w-4 text-primary" />
              <span>Core Architecture</span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Engineered for Industrial-Grade AI Deployments
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              FounderOS provides the missing infrastructure layer that turns fragile AI scripts into dependable software systems.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {architecturePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={pillar.title}
                  className="bg-background/60 backdrop-blur border-muted-foreground/15 transition-all hover:border-primary/40"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm font-medium">
                      {pillar.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{cap}</span>
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

      {/* Feature Grid */}
      <section className="py-20 bg-muted/20 border-y">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Built to Handle Unpredictable Real-World Workflows
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Standard chatbots collapse on edge cases. FounderOS thrives on them.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureGrid.map((item) => (
              <Card key={item.title} className="bg-background/80">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-primary/5">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Deploy Production AI Agents with FounderOS
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-muted-foreground text-lg">
            Ready to stop experimenting and start executing? Talk directly to our engineering team about deploying autonomous agents built on FounderOS.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Book Architecture Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link href="/ai-agent-development">Explore AI Agent Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
