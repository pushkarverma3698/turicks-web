"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Building2, Database, Shield, Users, Calendar, FileText, Play, Store, Sparkles } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { VideoPreviewModal } from "@/components/video-preview-modal";
import { DecorativeOrbs } from "@/components/decorative-orbs";

const products = [
  {
    id: "school-management",
    name: "School Management System",
    description: "A comprehensive platform designed specifically for educational institutions to manage students, staff, academics, and administrative tasks all in one place.",
    category: "Education",
    videoUrl: "", // Add YouTube/Vimeo URL here when available (e.g., "https://www.youtube.com/watch?v=VIDEO_ID")
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
    description: "Scalable SaaS solution for large organizations requiring complex workflows, integrations, and enterprise-grade security.",
    category: "Enterprise",
    videoUrl: "", // Add YouTube/Vimeo URL here when available
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
    description: "Complete human resources solution for managing employees, payroll, recruitment, and organizational development.",
    category: "HR & Operations",
    videoUrl: "", // Add YouTube/Vimeo URL here when available
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
  {
    id: "msme-marketplace",
    name: "Marketplace for MSME",
    description: "AI-powered marketplace platform designed specifically for Micro, Small, and Medium Enterprises to connect, trade, and grow their business digitally.",
    category: "Marketplace",
    videoUrl: "", // Add YouTube/Vimeo URL here when available
    features: [
      { icon: Store, text: "Digital Storefront Creation" },
      { icon: Sparkles, text: "AI-Powered Product Recommendations" },
      { icon: Database, text: "Inventory Management" },
      { text: "Multi-vendor Support" },
      { text: "Payment Gateway Integration" },
      { text: "Order Management System" },
      { text: "Analytics & Insights Dashboard" },
      { text: "Mobile App for Buyers & Sellers" },
    ],
    highlights: ["AI-Driven", "MSME Focused", "Scalable"],
  },
];

export default function ProductsPage() {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our SaaS Products
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Explore our ready-made solutions designed for specific organizational
            needs. Each product is built with expertise and can be customized to
            fit your requirements.
          </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-24">
          {products.map((product) => (
            <div key={product.id} id={product.id} className="scroll-mt-20">
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-4">
                  <Badge variant="secondary">{product.category}</Badge>
                  <h2 className="text-3xl font-bold md:text-4xl">{product.name}</h2>
                </div>
                <p className="max-w-3xl text-lg text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="mb-8">
                <ImagePlaceholder 
                  label={`${product.name} - Dashboard/Interface Screenshot. Show the main interface, key features, and user workflow. Should be professional, clean, and showcase the product's capabilities.`}
                  aspectRatio="wide"
                  className="w-full"
                />
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
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        if (product.videoUrl) {
                          setSelectedVideo({ url: product.videoUrl, title: product.name });
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
            <span className="text-sm font-semibold text-primary">Custom Solutions</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Need Something Custom?
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-muted-foreground text-lg">
            Don&apos;t see exactly what you need? We specialize in building <span className="font-semibold text-foreground">AI-driven, automated</span> tailored
            solutions based on your specific requirements. Let&apos;s discuss your
            project.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20">
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
