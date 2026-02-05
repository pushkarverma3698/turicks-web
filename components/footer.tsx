import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const pageLinks = [
    { name: "SaaS Development Company", href: "/saas-development-company" },
    { name: "Build a SaaS MVP", href: "/build-saas-mvp" },
    { name: "SaaS Product Cost (2026)", href: "/cost-to-build-a-saas-product-2026" },
    {
      name: "Custom SaaS App Development",
      href: "/custom-saas-application-development",
    },
    { name: "UI/UX Design Services", href: "/ui-ux-design-services" },
    { name: "Website Development", href: "/website-development" },
    { name: "Software Automation", href: "/software-automation" },
    { name: "AI Automation", href: "/ai-automation" },
    { name: "Mobile App Development", href: "/mobile-app-development" },
    { name: "Web App Development", href: "/web-app-development" },
    { name: "Admin Panel Development", href: "/admin-panel-development" },
    { name: "Custom Software Solutions", href: "/custom-software-solutions" },
    { name: "Software Made Simple", href: "/software-made-simple" },
  ];

  const caseStudyLinks = [
    {
      name: "School SaaS Case Study",
      href: "/case-study-building-a-school-saas-platform",
    },
    {
      name: "Operations Automation Case Study",
      href: "/case-study-operations-automation",
    },
    {
      name: "HR Platform Case Study",
      href: "/case-study-hr-platform",
    },
    {
      name: "Admin Dashboard Case Study",
      href: "/case-study-admin-dashboard",
    },
  ];

  const blogLinks = BLOG_POSTS.map((post) => ({
    name: post.title,
    href: `/blog/${post.slug}`,
  }));

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://x.com", icon: Twitter },
    { name: "YouTube", href: "https://www.youtube.com", icon: Youtube },
    { name: "Instagram", href: "https://www.instagram.com", icon: Instagram },
    { name: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  ];

  return (
    <footer className="relative border-t bg-background/40 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg className="h-full w-full" aria-hidden="true">
          <defs>
            <pattern
              id="footer-grid"
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M36 0H0V36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#footer-grid)"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid gap-4 lg:grid-cols-[3fr_1fr]">
          {/* Primary Links */}
          <nav
            aria-label="Footer primary"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="space-y-2.5 sm:col-span-2 lg:col-span-2">
              <h3 className="text-xs font-semibold text-foreground">Pages</h3>
              <ul className="grid gap-2 md:grid-cols-2">
                {pageLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[11px] text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2.5">
              <h3 className="text-xs font-semibold text-foreground">Blog</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {blogLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[11px] text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2.5">
              <h3 className="text-xs font-semibold text-foreground">
                Case Studies
              </h3>
              <ul className="space-y-1.5">
                {caseStudyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[11px] text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-foreground">Follow</h3>
            <div className="flex flex-col items-start gap-2" aria-label="Social media">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-muted-foreground/20 text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40 hover:bg-muted/50"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t/60 pt-8">
          <p className="text-center text-[11px] text-muted-foreground">
            © {currentYear} Turicks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
