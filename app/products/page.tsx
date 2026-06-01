"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Database,
  Shield,
  Users,
  Calendar,
  FileText,
  Play,
  Sparkles,
  Download,
  Code2,
  MessageSquare,
  Target,
  ExternalLink,
} from "lucide-react";
import { VideoPreviewModal } from "@/components/video-preview-modal";
import { DecorativeOrbs } from "@/components/decorative-orbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

const products = [
  {
    id: "school-management",
    name: "School Management System",
    description:
      "A comprehensive platform designed specifically for educational institutions to manage students, staff, academics, and administrative tasks all in one place.",
    category: "Education",
    videoUrl: "", // Add YouTube/Vimeo URL here when available (e.g., "https://www.youtube.com/watch?v=VIDEO_ID")
    images: [
      "/School/MOCKUPS-D1.png",
      "/School/MOCKUPS-D3.png",
      "/School/MOCKUPS-D4.png",
      "/School/MOCKUPS-D5.png",
      "/School/MOCKUPS-D6.png",
    ],
    features: [
      { icon: Users, text: "Student & Staff Management" },
      { icon: Calendar, text: "Attendance Tracking" },
      { icon: FileText, text: "Grade & Report Management" },
      { icon: Database, text: "Academic Records" },
      { icon: Shield, text: "Secure Data Management" },
      { text: "Parent-Teacher Communication" },
      { text: "Fee Management" },
      { text: "Timetable & Scheduling" },
    ],
    highlights: ["Cloud-Based", "Mobile App", "Multi-School Support"],
  },
  {
    id: "enterprise-platform",
    name: "Enterprise Management Platform",
    description:
      "Scalable SaaS solution for large organizations requiring complex workflows, integrations, and enterprise-grade security.",
    category: "Enterprise",
    videoUrl: "", // Add YouTube/Vimeo URL here when available
    images: ["/Admin%20panel/1.png", "/Admin%20panel/2.png"],
    features: [
      { icon: Database, text: "Custom Workflow Builder" },
      { icon: Building2, text: "Department Management" },
      { icon: Shield, text: "Enterprise Security & Compliance" },
      { text: "API Integration Capabilities" },
      { text: "Advanced Analytics & Reporting" },
      { text: "Role-Based Access Control" },
      { text: "Document Management" },
      { text: "Project Management Tools" },
    ],
    highlights: ["Scalable", "Secure", "Customizable"],
  },
  {
    id: "hr-management",
    name: "HR Management System",
    description:
      "Complete human resources solution for managing employees, payroll, recruitment, and organizational development.",
    category: "HR & Operations",
    videoUrl: "", // Add YouTube/Vimeo URL here when available
    images: ["/Hr/1%20(1).png", "/Hr/14%20(1).png", "/Hr/29%20(1).png"],
    features: [
      { icon: Users, text: "Employee Database" },
      { icon: Calendar, text: "Leave & Attendance Management" },
      { text: "Payroll Processing" },
      { text: "Recruitment & Onboarding" },
      { text: "Performance Reviews" },
      { text: "Training & Development" },
    ],
    highlights: ["Comprehensive", "User-Friendly", "Integrated"],
  },
];

// ── Digital / Downloadable Products ──────────────────────────────────────────
type DigitalProduct = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  priceNote: string;
  icon: React.ElementType;
  badge: string;
  highlights: string[];
  gumroadUrl: string;
  featured?: boolean;
};

const digitalProducts: DigitalProduct[] = [
  {
    id: "cinematic-premium-pack",
    name: "Cinematic Premium Pack",
    tagline: "Premium add-ons for cinematic-web (free, open-source)",
    description:
      "Aurora SaaS (gradient + glass), Noir Atelier (monochrome editorial), Ember Startup (warm launch energy) — plus a premium AI build-prompt library and a 30-minute launch guide.",
    price: "$29",
    priceNote: "One-time · Unlimited commercial use",
    icon: Sparkles,
    badge: "Design",
    highlights: ["3 exclusive presets", "AI build-prompt library", "30-min launch guide", "Commercial license"],
    gumroadUrl: "https://turicks.com",  // TODO: replace with live Gumroad URL
  },
  {
    id: "prospecting-icp-pack",
    name: "Prospecting & ICP Scoring Pack",
    tagline: "Qualify B2B leads with AI — URL to email in 3 steps",
    description:
      "4 production prompts: disambiguate URL → extract B2B intelligence → ICP score with hard disqualifiers → draft a personalized outreach email. Works in Claude, ChatGPT, n8n, or LangGraph.",
    price: "$19",
    priceNote: "One-time · Unlimited use",
    icon: Target,
    badge: "Sales",
    highlights: ["4 production prompts", "ICP rubric builder", "n8n + LangGraph guide", "~$0.013/lead to run"],
    gumroadUrl: "https://turicks.com",  // TODO: replace with live Gumroad URL
  },
  {
    id: "brand-voice-critique-kit",
    name: "Brand-Voice Critique Kit",
    tagline: "Catch weak content before it ships",
    description:
      "TypeScript + Python validators (zero dependencies) + LLM critique prompt + banned phrase guide + channel rules. Runs free deterministic checks first — LLM only when needed.",
    price: "$14",
    priceNote: "One-time · Unlimited commercial use",
    icon: MessageSquare,
    badge: "Content",
    highlights: ["TS + Python validators", "LLM critique prompt", "22 banned phrases guide", "Channel rules + limits"],
    gumroadUrl: "https://turicks.com",  // TODO: replace with live Gumroad URL
  },
  {
    id: "langgraph-starter",
    name: "LangGraph Multi-Agent Starter",
    tagline: "Production-grade skeleton — not a toy example",
    description:
      "Registry-driven agents, critic as a node, DB-backed HITL, tenant-isolated Redis cache, Drizzle schema, 13 tests. Every hard architecture decision already made and documented inline.",
    price: "$34",
    priceNote: "One-time · Unlimited commercial use",
    icon: Code2,
    badge: "Engineering",
    featured: true,
    highlights: ["Registry-driven design", "DB-backed HITL pattern", "Tenant-isolated Redis cache", "13 passing tests"],
    gumroadUrl: "https://turicks.com",  // TODO: replace with live Gumroad URL
  },
];

export default function ProductsPage() {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

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
        name: "Products",
        item: `${SITE_URL}/products`,
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        category: product.category,
        url: `${SITE_URL}/products#${product.id}`,
        image: `${SITE_URL}${product.images[0]}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Products & Tools
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              AI tools, prompt packs, and production-ready code from our live systems — plus bespoke SaaS platforms built for specific industries.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Products — Gumroad downloads */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Download className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Digital Downloads</span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl mb-3">AI Tools & Prompt Packs</h2>
          <p className="text-muted-foreground max-w-2xl">
            Extracted from our live production systems. Working code, calibrated prompts — battle-tested, not templated.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {digitalProducts.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.id}
                className={`flex flex-col transition-colors ${
                  product.featured
                    ? "border-2 border-primary hover:border-primary/70"
                    : "border hover:border-primary/40"
                }`}
              >
                {product.featured && (
                  <div className="px-4 pt-3 -mb-1">
                    <Badge className="text-xs bg-primary text-primary-foreground">Most Complete</Badge>
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">{product.badge}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-snug">{product.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{product.tagline}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-4">
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <ul className="space-y-1.5 flex-1">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-bold">{product.price}</span>
                      <span className="text-xs text-muted-foreground">{product.priceNote}</span>
                    </div>
                    <Button asChild className="w-full" size="sm">
                      <Link href={product.gumroadUrl} target="_blank" rel="noopener noreferrer">
                        Get it on Gumroad
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* SaaS Products Grid */}
      <section className="container mx-auto px-4 py-12 border-t mt-4">
        <div className="space-y-24">
          {products.map((product) => (
            <div key={product.id} id={product.id} className="scroll-mt-20">
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-4">
                  <Badge variant="secondary">{product.category}</Badge>
                  <h2 className="text-3xl font-bold md:text-4xl">
                    {product.name}
                  </h2>
                </div>
                <p className="max-w-3xl text-lg text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="grid gap-4 lg:grid-cols-[2fr_1fr] lg:items-stretch">
                  <div className="relative h-full min-h-[210px] lg:min-h-[440px] overflow-hidden rounded-3xl border bg-muted/30">
                    <Image
                      src={product.images[0]}
                      alt={`${product.name} interface preview`}
                      fill
                      className="h-full w-full"
                      style={{ objectFit: "inherit" }}
                      priority={product.id === "school-management"}
                    />
                  </div>
                  <div className="grid gap-4 lg:grid-rows-2 lg:min-h-[440px]">
                    {product.images.slice(1, 3).map((image) => (
                      <div
                        key={image}
                        className="relative h-full min-h-[210px] overflow-hidden rounded-2xl border bg-muted/20"
                      >
                        <Image
                          src={image}
                          alt={`${product.name} screen`}
                          fill
                          className="h-full w-full"
                          style={{ objectFit: "inherit" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {product.features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                          <div key={idx} className="flex items-start gap-3">
                            {Icon ? (
                              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                            ) : (
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                            )}
                            <span className="text-sm">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Highlights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.highlights.map((highlight) => (
                        <Badge key={highlight} variant="outline">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact">
                        Request Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    {product.id === "school-management" ? (
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/landing/digitize-your-school-in-14-days">
                          Digitize Your School in 14 Days
                        </Link>
                      </Button>
                    ) : null}
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        if (product.videoUrl) {
                          setSelectedVideo({
                            url: product.videoUrl,
                            title: product.name,
                          });
                        }
                      }}
                      disabled={!product.videoUrl}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Preview Video
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Contact Sales</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="border-t bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Custom Solutions
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Need Something Custom?
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-muted-foreground text-lg">
            Don&apos;t see exactly what you need? We specialize in building{" "}
            <span className="font-semibold text-foreground">
              AI-driven, automated
            </span>{" "}
            tailored solutions based on your specific requirements. Let&apos;s
            discuss your project.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20"
          >
            <Link href="/services">
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {selectedVideo && (
        <VideoPreviewModal
          open={!!selectedVideo}
          onOpenChange={(open) => !open && setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </div>
  );
}
