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
} from "lucide-react";
import { DecorativeOrbs } from "@/components/decorative-orbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export const metadata: Metadata = {
  title: "AI Agent Development Company India | Custom Autonomous Agents | Turicks",
  description:
    "Build custom AI agents with LangGraph, CrewAI & AutoGen. Single agents to multi-agent systems — production-grade, deployed in 2 weeks. India's AI-native agent development team.",
  keywords: [
    "AI agent development company India",
    "custom AI agents",
    "agentic AI development",
    "LangGraph development",
    "CrewAI development",
    "multi-agent systems",
    "autonomous AI workflows",
    "AI agent development services",
    "RAG agents",
    "workflow automation agents",
  ],
  openGraph: {
    title: "AI Agent Development Company India | Custom Autonomous Agents | Turicks",
    description:
      "Build custom AI agents with LangGraph, CrewAI & AutoGen. Production-grade, deployed in 2 weeks. India's AI-native team.",
    type: "website",
    url: `${SITE_URL}/ai-agent-development`,
    siteName: "Turicks",
    images: [{ url: `${SITE_URL}/og-image.svg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Development | Custom Autonomous Agents | Turicks",
    description:
      "LangGraph, CrewAI & AutoGen — custom AI agents deployed in 2 weeks by India's AI-native dev team.",
    images: [`${SITE_URL}/og-image.svg`],
  },
  alternates: { canonical: "/ai-agent-development" },
};

const agentTypes = [
  {
    icon: Zap,
    title: "Single-Task Agents",
    description:
      "Focused, reliable agents that handle one workflow exceptionally well. Document classification, data extraction, report generation, support ticket triage, lead scoring — deployed fast and run continuously.",
    examples: [
      "Document classification & data extraction",
      "Support ticket triage and routing",
      "Lead scoring and qualification",
      "Automated report generation",
      "Email drafting and response agents",
    ],
  },
  {
    icon: Network,
    title: "Multi-Agent Orchestration",
    description:
      "Supervisor + worker patterns, parallel agent pipelines, and complex decision trees across departments. One agent coordinates others — the whole is dramatically more capable than the sum of its parts.",
    examples: [
      "Supervisor-worker agent architectures",
      "Parallel processing pipelines",
      "Cross-department automation systems",
      "Complex decision tree automation",
      "Agent handoff and escalation logic",
    ],
  },
  {
    icon: Database,
    title: "RAG-Powered Knowledge Agents",
    description:
      "Agents that answer questions from your internal documents, CRM data, or knowledge base in real time. No more digging through wikis or pinging teammates — your team asks, the agent answers accurately.",
    examples: [
      "Internal knowledge base Q&A",
      "CRM-integrated sales agents",
      "Document intelligence agents",
      "Policy & compliance Q&A bots",
      "Customer-facing support agents",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation Agents",
    description:
      "End-to-end business process automation — from trigger to action, across your entire stack. The agent monitors, decides, and acts. Humans only step in when it matters.",
    examples: [
      "CRM & ERP workflow automation",
      "Invoice processing & approval flows",
      "Onboarding automation agents",
      "Monitoring & alerting agents",
      "Cross-system data sync agents",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery (Day 1–3)",
    description:
      "We map your target workflow, define what the agent needs to do, and choose the right framework (LangGraph, CrewAI, or AutoGen) for your use case.",
  },
  {
    number: "02",
    title: "Architecture (Day 4–7)",
    description:
      "Agent graph design, tool definitions, memory strategy, and integration planning. You see the blueprint before a single line of code is written.",
  },
  {
    number: "03",
    title: "Development (Week 2)",
    description:
      "We build the agent, wire up tools and APIs, and test against real data from your environment. No synthetic test cases — real workflows from day one.",
  },
  {
    number: "04",
    title: "Hardening & Review",
    description:
      "Audit logs, confidence thresholds, fallback rules, and error handling. We make the agent safe for production — not just impressive in a demo.",
  },
  {
    number: "05",
    title: "Deployment & Handoff",
    description:
      "Hosted, monitored, and handed off with full documentation. You know exactly how it works, how to extend it, and where to reach us.",
  },
];

const faqs = [
  {
    q: "What is the difference between an AI agent and a chatbot?",
    a: "A chatbot responds to questions. An AI agent takes actions — it can use tools, access APIs, read documents, make decisions, and complete multi-step workflows autonomously. A chatbot tells you the weather. An agent books your flight.",
  },
  {
    q: "Which framework do you use — LangGraph, CrewAI, or AutoGen?",
    a: "We choose based on your use case. LangGraph is best for complex stateful workflows with branching logic. CrewAI excels at role-based multi-agent collaboration. AutoGen is ideal for code-executing and conversational agents. We've built production systems with all three.",
  },
  {
    q: "How long does it take to build an AI agent?",
    a: "A single-task agent MVP typically takes 2 weeks from discovery to deployment. Multi-agent systems with complex integrations take 4–8 weeks. We give you a clear timeline after the discovery call.",
  },
  {
    q: "What does a custom AI agent cost?",
    a: "Single-task agents start around ₹2–5 lakhs. Multi-agent enterprise systems range from ₹8–25 lakhs depending on complexity, integrations, and scope. We provide a detailed estimate after understanding your requirements.",
  },
  {
    q: "Can agents integrate with our existing tools — CRM, ERP, Slack, etc.?",
    a: "Yes. That's the whole point. We build agents that connect to your existing stack via APIs and webhooks. If it has an API, the agent can use it.",
  },
  {
    q: "Do you provide ongoing maintenance after deployment?",
    a: "Yes. We offer support contracts for monitoring, updates, and improvements. Agent performance is tracked and we alert you to any issues before they affect your workflow.",
  },
];

export default function AiAgentDevelopmentPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI Agent Development",
        item: `${SITE_URL}/ai-agent-development`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <DecorativeOrbs className="opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Bot className="h-4 w-4" />
              <span>AI Agent Development</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight leading-tight sm:text-5xl md:text-6xl text-balance">
              Custom AI Agents —{" "}
              <span className="text-primary">Autonomous, Production-Grade, Deployed in 2 Weeks</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Not experiments. Not demos. Real agents that handle your workflows,
              make decisions, and integrate into your existing systems — built by
              the team that runs AI agents internally every single day.
            </p>
            <div className="mb-10 flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="flex items-center gap-2 rounded-full border bg-muted px-4 py-2">
                <Zap className="h-4 w-4 text-primary" /> Agent MVP in 2 weeks
              </span>
              <span className="flex items-center gap-2 rounded-full border bg-muted px-4 py-2">
                <Bot className="h-4 w-4 text-primary" /> 15+ agents deployed
              </span>
              <span className="flex items-center gap-2 rounded-full border bg-muted px-4 py-2">
                <Rocket className="h-4 w-4 text-primary" /> 70% faster delivery
              </span>
              <span className="flex items-center gap-2 rounded-full border bg-muted px-4 py-2">
                <Shield className="h-4 w-4 text-primary" /> Production-safe
              </span>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your AI Agent Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">See Agent Examples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Agents */}
      <section className="relative overflow-hidden py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">What We Build</Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Four Types of AI Agents We Deploy
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From a focused single-task agent to a full multi-agent system — we
              design and build the right architecture for your problem.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {agentTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card key={type.title} className="group bg-background/60 backdrop-blur">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{ex}</span>
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

      {/* Stack */}
      <section className="border-y bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Frameworks & Stack
            </h2>
            <p className="mt-2 text-muted-foreground">
              We pick the right tool for the job — not the trendy one.
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
              "Pinecone",
              "Weaviate",
              "PostgreSQL",
              "AWS",
              "Docker",
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">Our Process</Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Discovery to Deployed in 2 Weeks
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A structured, transparent process so you always know what&apos;s
              happening and what comes next.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <Card key={step.number} className="bg-background/60">
                <CardHeader>
                  <div className="mb-2 text-4xl font-bold text-primary/20">
                    {step.number}
                  </div>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Turicks */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-background to-muted/30">
        <DecorativeOrbs className="opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">Why Turicks</Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              The Team That Actually Uses AI Agents
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We don&apos;t just build agents for clients. We run our own
              development process with them. That&apos;s why we build better
              ones.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Rocket,
                title: "AI-Powered Dev Process",
                description:
                  "We use AI agents internally — 70% faster iteration, 75% less development time. Your agent benefits from our lived experience.",
              },
              {
                icon: Code,
                title: "LangGraph-First Team",
                description:
                  "We've built production LangGraph systems — not just followed tutorials. We know where the gotchas are before you hit them.",
              },
              {
                icon: Brain,
                title: "India-Based, World-Class",
                description:
                  "Enterprise-quality AI engineering at startup-friendly pricing. Gurugram-based team with direct communication — no middlemen.",
              },
              {
                icon: Shield,
                title: "Production-Safe by Default",
                description:
                  "Every agent ships with audit logs, confidence thresholds, and fallback rules. We don't ship agents that break in the real world.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="group bg-background/60 backdrop-blur">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Questions About AI Agent Development
            </h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border bg-background/60 backdrop-blur p-6"
              >
                <h3 className="mb-3 font-semibold text-foreground">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Build Your First AI Agent?
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-muted-foreground">
            Tell us your workflow. We&apos;ll tell you exactly which agent
            architecture fits, what it costs, and how fast we can ship it.
            Free 30-minute strategy call — no commitment.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your AI Agent Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">See All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
