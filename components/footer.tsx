import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";


export function Footer() {
  const currentYear = new Date().getFullYear();



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
            className="grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="space-y-3">
              <Link href="/pages" className="group inline-flex items-center gap-2">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Pages</h3>
                <span className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">→</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Browse our full directory of services, solutions, and resources.
              </p>
            </div>
            
            <div className="space-y-3">
              <Link href="/blog" className="group inline-flex items-center gap-2">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Blog</h3>
                 <span className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">→</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Insights on SaaS product delivery, automation, and tech trends.
              </p>
            </div>

            <div className="space-y-3">
              <Link href="/case-studies" className="group inline-flex items-center gap-2">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  Case Studies
                </h3>
                 <span className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">→</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Real outcomes from our projects and success stories.
              </p>
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
