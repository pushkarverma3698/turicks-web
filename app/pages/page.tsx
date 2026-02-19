import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { DecorativeOrbs } from "@/components/decorative-orbs";
import { ArrowRight } from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export const metadata: Metadata = {
  title: "All Pages - Turicks",
  description: "Browse all our services, solutions, and resources.",
};

const pageLinks = [
  { 
    name: "SaaS Development Company", 
    href: "/saas-development-company",
    description: "Partner with us to build scalable SaaS products."
  },
  { 
    name: "Build a SaaS MVP", 
    href: "/build-saas-mvp",
    description: "Launch your Minimum Viable Product quickly and efficiently."
  },
  { 
    name: "SaaS Product Cost (2026)", 
    href: "/cost-to-build-a-saas-product-2026",
    description: "Understand the costs involved in building a SaaS product in 2026."
  },
  {
    name: "Custom SaaS App Development",
    href: "/custom-saas-application-development",
    description: "Tailored SaaS solutions to meet your specific business needs."
  },
  { 
    name: "UI/UX Design Services", 
    href: "/ui-ux-design-services",
    description: "User-centric design services for intuitive and engaging interfaces."
  },
  { 
    name: "Website Development", 
    href: "/website-development",
    description: "Professional website development services for your brand."
  },
  { 
    name: "Software Automation", 
    href: "/software-automation",
    description: "Automate your business processes with custom software."
  },
  { 
    name: "AI Automation", 
    href: "/ai-automation",
    description: "Leverage AI to automate complex tasks and workflows."
  },
  { 
    name: "Mobile App Development", 
    href: "/mobile-app-development",
    description: "Native and cross-platform mobile application development."
  },
  { 
    name: "Web App Development", 
    href: "/web-app-development",
    description: "Robust and scalable web application development."
  },
  { 
    name: "Admin Panel Development", 
    href: "/admin-panel-development",
    description: "Custom admin panels to manage your application and data."
  },
  { 
    name: "Custom Software Solutions", 
    href: "/custom-software-solutions",
    description: "Bespoke software solutions for unique challenges."
  },
  { 
    name: "Software Made Simple", 
    href: "/software-made-simple",
    description: "Simplifying software development for non-technical founders."
  },
];

export default function PagesIndex() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              All Pages
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Explore our comprehensive list of services and resources.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pageLinks.map((page) => (
            <Link key={page.name} href={page.href} className="group">
              <Card className="h-full bg-background/40 backdrop-blur border-muted-foreground/15 transition-all hover:border-primary/50 hover:bg-muted/30">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {page.name}
                    <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
                  </CardTitle>
                  <CardDescription>
                    {page.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
