"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Building2, Users, Code, Rocket, Smartphone, Palette, Cloud, Shield, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, staggerItem } from "@/components/animations/stagger-container";
import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/image-placeholder";
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
              <span>AI-driven SaaS products + custom software for organizations</span>
            </div>
            <h1 className="mb-6 pb-3 text-4xl font-bold tracking-tight leading-tight sm:text-5xl md:text-6xl text-balance break-words overflow-visible">
              Tailored SaaS Solutions
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent pb-[0.1em]">
                For Your Organization
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Production-ready software you can buy, plus custom development for your exact workflows. Fast delivery, clean UX, and long-term support.
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
                  <p className="mt-1 text-sm text-muted-foreground">Modern web applications with clean UI, strong performance, and scalable architecture.</p>
                  <div className="mt-4">
                    <ImagePlaceholder
                      label="Web app preview (dashboard / workflow)"
                      aspectRatio="wide"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="rounded-2xl border bg-background/60 p-5 backdrop-blur">
                  <p className="text-sm font-semibold">UI/UX Services</p>
                  <p className="mt-1 text-sm text-muted-foreground">Wireframes, prototypes, design systems, and polished UI.</p>
                  <div className="mt-4">
                    <ImagePlaceholder
                      label="UI kit / prototype preview"
                      aspectRatio="wide"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="rounded-2xl border bg-background/60 p-5 backdrop-blur">
                  <p className="text-sm font-semibold">Mobile App</p>
                  <p className="mt-1 text-sm text-muted-foreground">iOS/Android apps with smooth UX, secure auth, and offline-friendly workflows.</p>
                  <div className="mt-4">
                    <ImagePlaceholder
                      label="Mobile app preview (screens / flow)"
                      aspectRatio="wide"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos marquee */}
      <ClientMarquee
        title={null}
        logos={[
          "Shopify",
          "Webflow",
          "Snapchat",
          "Giphy",
          "Infosys",
          "Scaler Academy",
          "Dribbble",
          "Genpact",
          "Nagarro",
          "SAP",
          "Newgen Software",
        ]}
        logoColorHex="7c3aed"
        speedSeconds={45}
      />

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
                    Every solution is built specifically for your organization&apos;s
                    unique needs and workflows.
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
                    Specialized knowledge in building SaaS products for education,
                    healthcare, and enterprise sectors.
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
                    software continues to serve your organization.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </StaggerContainer>
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Services we provide</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              End-to-end delivery—from strategy and design to development, cloud deployment, and long-term support.
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
                  <CardDescription>AI-driven web apps with modern architecture and clean UX.</CardDescription>
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
                  <CardDescription>Wireframes, prototypes, and polished interfaces users love.</CardDescription>
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
                  <CardDescription>iOS/Android apps to extend your platform to every user.</CardDescription>
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
                  <CardDescription>CI/CD, monitoring, scaling, and cost-optimized deployments.</CardDescription>
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
                  <CardDescription>Best practices for auth, data protection, audits, and hardening.</CardDescription>
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
                  <CardDescription>Complex workflows, integrations, and multi-team rollouts.</CardDescription>
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
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A complete platform for schools to manage students, staff, attendance, fees, academics, and communication—built to be fast, secure, and customizable.
          </p>
        </FadeIn>
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <Parallax from={0} to={-40}>
              <ImagePlaceholder
                label="School Management System - Screenshot of dashboard (students/attendance/fees overview). Use a clean UI capture when available."
                aspectRatio="wide"
                className="w-full"
              />
            </Parallax>
          </div>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
            <CardHeader className="relative">
              <CardTitle className="text-2xl">What you get</CardTitle>
              <CardDescription>
                A feature-rich school platform that can be deployed quickly and customized for your workflows.
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
                <Button asChild size="lg" variant="outline" className="sm:flex-1">
                  <Link href="/contact">Request a demo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <MovingTiles
        title="More Product Highlights"
        subtitle="A few more platforms we can deliver and customize for your organization."
        speedSeconds={55}
        topRow={[
          { label: "Homepage", path: "/", caption: "Hero + services + product highlights" },
          { label: "Products", path: "/products", caption: "SaaS products with detailed sections" },
          { label: "Services", path: "/services", caption: "Development, UI/UX, DevOps, Security" },
          { label: "About", path: "/about", caption: "Your story + team section" },
          { label: "Contact", path: "/contact", caption: "Book a demo / get in touch" },
        ]}
        bottomRow={[
          { label: "School Product", path: "/products#school-management", caption: "Featured product section" },
          { label: "Enterprise Product", path: "/products#enterprise-platform", caption: "Enterprise management platform" },
          { label: "HR Product", path: "/products#hr-management", caption: "HR suite preview" },
          { label: "MSME Marketplace", path: "/products#msme-marketplace", caption: "Marketplace preview" },
          { label: "Team Section", path: "/about#team", caption: "Team cards preview" },
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
