"use client";

import Link from "next/link";
import Image from "next/image";
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
  TrendingUp,
  BarChart3,
  Workflow,
  Database,
  Globe,
  FileText,
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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <ParallaxOrbs />
        <DecorativeVectors variant="hero" className="opacity-70" />
        <div className="container mx-auto px-4">
          <FadeIn className="mx-auto max-w-3xl text-center" y={0}>
            <div className="mb-6 inline-flex items-center rounded-full border bg-muted/60 px-4 py-2 text-sm">
              <Rocket className="mr-2 h-4 w-4" />
              <span>
                AI-driven SaaS products + custom software for organizations
              </span>
            </div>
            <h1 className="mb-6 pb-3 text-4xl font-bold tracking-tight leading-tight sm:text-5xl md:text-6xl text-balance break-words overflow-visible">
              Tailored SaaS Solutions
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent pb-[0.1em]">
                For Your Organization
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Production-ready software you can buy, plus custom development for
              your exact workflows. Fast delivery, clean UX, and long-term
              support.
            </p>
            <motion.div
              className="flex flex-col justify-center gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products">Browse Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </FadeIn>

          {/* Spline-like “gallery” panel (visual, no 3D) */}
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
              We combine expertise, innovation, and dedication to deliver
              solutions that transform how organizations operate.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            <motion.div variants={staggerItem}>
              <Card className="group bg-background/40 backdrop-blur border-muted-foreground/15">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Custom Development</CardTitle>
                  <CardDescription>
                    Every solution is built specifically for your
                    organization&apos;s unique needs and workflows. We design and
                    build custom SaaS platforms, web applications, and
                    automation-first systems that improve efficiency and user
                    experience.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group bg-background/40 backdrop-blur border-muted-foreground/15">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Industry Expertise</CardTitle>
                  <CardDescription>
                    Specialized knowledge in building SaaS products for
                    education, healthcare, and enterprise sectors. We align
                    UX, security, and compliance requirements with real-world
                    operational needs for scalable software delivery.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Card className="group bg-background/40 backdrop-blur border-muted-foreground/15">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Dedicated Support</CardTitle>
                  <CardDescription>
                    Ongoing maintenance, updates, and support to ensure your
                    software continues to serve your organization. We provide
                    reliable post-launch support, performance monitoring, and
                    continuous improvements.
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
        logoColorHex="7c3aed"
        speedSeconds={45}
      />

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
              Services we provide
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              End-to-end delivery—from strategy and design to development, cloud
              deployment, and long-term support.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={staggerItem}>
              <Card className="group h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Custom SaaS Development</CardTitle>
                  <CardDescription>
                    AI-driven web apps with modern architecture and clean UX.
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
                  <CardTitle>UI/UX Services</CardTitle>
                  <CardDescription>
                    Wireframes, prototypes, and polished interfaces users love.
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
                    iOS/Android apps to extend your platform to every user.
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
                    CI/CD, monitoring, scaling, and cost-optimized deployments.
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
                    Best practices for auth, data protection, audits, and
                    hardening.
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
                    Complex workflows, integrations, and multi-team rollouts.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </StaggerContainer>
          <FadeIn className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/services">
                Explore all services
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
              </div>
            </CardContent>
          </Card>
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
              Custom AI Agents Development
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
              Build intelligent, autonomous AI agents that automate complex
              business workflows, make data-driven decisions, and transform how
              your organization operates. Our in-house AI agents power our
              development process, ensuring faster delivery and higher quality
              solutions.
            </p>
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
                        Seamlessly orchestrate APIs, databases, and business applications with intelligent tool selection based on real-time context.
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
                        Adapt to changing business conditions with context-aware decision-making that understands intent and environment.
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
              <FadeIn className="mt-6">
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">
                    Discuss Your AI Agent Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

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
              src: "/web%20designs/10-ai-figma-plugins-every-ui-ux-designer-must-try-1024x683.webp",
            },
          },
          {
            label: "Products",
            path: "/products",
            media: {
              type: "image",
              src: "/web%20designs/633e976403fd812be5340a14_Ant%20Design%20Mobile%20for%20Figma%201200%20px%20x%201600%20px.webp",
            },
          },
          {
            label: "Services",
            path: "/services",
            media: {
              type: "image",
              src: "/web%20designs/6829459639ea6ea5985b868e_279ac63f970fe3f341219d16447159b5_figma-frames.webp",
            },
          },
          {
            label: "About",
            path: "/about",
            media: {
              type: "image",
              src: "/web%20designs/blog_1754453553.png",
            },
          },
          {
            label: "Contact",
            path: "/contact",
            media: {
              type: "image",
              src: "/web%20designs/Design-system-08062023.png",
            },
          },
        ]}
        bottomRow={[
          {
            label: "School Product",
            path: "/products#school-management",
            media: {
              type: "image",
              src: "/web%20designs/figma-design-systems.png",
            },
          },
          {
            label: "Enterprise Product",
            path: "/products#enterprise-platform",
            media: {
              type: "image",
              src: "/web%20designs/https___dev-to-uploads.s3.amazonaws.com_i_ix55oaldro35drafvuc6.webp",
            },
          },
          {
            label: "HR Product",
            path: "/products#hr-management",
            media: {
              type: "image",
              src: "/web%20designs/Mjs5JFKVxxGZWVhepNzgXEpI.avif",
            },
          },
          {
            label: "Design Kit",
            path: "/products",
            media: {
              type: "image",
              src: "/web%20designs/open-fashion-free-ecommerce-ui-kit-thumb.webp",
            },
          },
          {
            label: "Design Files",
            path: "/products",
            media: {
              type: "image",
              src: "/web%20designs/post_design-files.jpg",
            },
          },
        ]}
      />

      {/* CTA Section */}
      <section className="border-t bg-primary/5 py-20">
        <FadeIn className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Transform Your Organization?
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-muted-foreground">
            Let&apos;s discuss how we can build a solution that fits your unique
            needs and requirements.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </section>
    </div>
  );
}
