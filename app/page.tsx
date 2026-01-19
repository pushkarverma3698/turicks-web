"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Building2, Users, Code, Rocket } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, staggerItem } from "@/components/animations/stagger-container";
import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/image-placeholder";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border bg-muted px-4 py-2 text-sm">
            <Rocket className="mr-2 h-4 w-4" />
            <span>Building the future of organizational software</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Tailored SaaS Solutions
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              For Your Organization
            </span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            We build custom software solutions that fit your unique requirements.
            From school management systems to enterprise platforms, we create
            SaaS products that empower your organization.
          </p>
          <motion.div 
            className="flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">View Products</Link>
            </Button>
          </motion.div>
        </FadeIn>
      </section>

      {/* Features Section */}
      <section className="border-y bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-12 text-center">
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
              <Card className="group">
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
              <Card className="group">
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
              <Card className="group">
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

      {/* Products Preview Section */}
      <section className="container mx-auto px-4 py-20">
        <FadeIn className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Our AI-Driven SaaS Products & Marketplace
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our ready-made AI-powered solutions and marketplace designed for specific organizational
            needs.
          </p>
        </FadeIn>
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={staggerItem}>
            <Card className="flex flex-col group">
              <CardHeader>
                <CardTitle>School Management System</CardTitle>
                <CardDescription>
                  Comprehensive platform for managing schools, students, staff,
                  and administrative tasks.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Student & Staff Management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Attendance Tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Grade & Report Management
                  </li>
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/products#school-management">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Card className="flex flex-col group">
              <CardHeader>
                <CardTitle>Enterprise Solutions</CardTitle>
                <CardDescription>
                  Scalable platforms for large organizations with complex
                  requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Custom Workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Integration Capabilities
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Enterprise Security
                  </li>
                </ul>
                <Button asChild variant="outline" className="mt-6 w-full">
                  <Link href="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Card className="flex flex-col group">
              <CardHeader>
                <CardTitle>Custom Solutions</CardTitle>
                <CardDescription>
                  Need something specific? We build tailored solutions based on
                  your exact requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Requirements Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Tailored Development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Full Customization
                  </li>
                </ul>
                <Button asChild variant="outline" className="mt-6 w-full">
                  <Link href="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </StaggerContainer>
      </section>

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
