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
        <div className="grid gap-8 lg:grid-cols-[2fr_2fr_1.5fr_1fr]">
          {/* Primary Links */}
          <nav aria-label="Footer primary" className="space-y-3">
            <Link href="/services" className="group inline-flex items-center gap-2">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Services</h3>
              <span className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">→</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI agents, SaaS, enterprise solutions, and custom software.
            </p>
          </nav>

          <nav aria-label="Footer resources" className="space-y-3">
            <Link href="/blog" className="group inline-flex items-center gap-2">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Resources</h3>
              <span className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">→</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Blog, case studies, and insights on product delivery.
            </p>
          </nav>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:contact@turicks.com" className="block hover:text-primary transition-colors">
                contact@turicks.com
              </a>
              <a href="tel:+918660018590" className="block hover:text-primary transition-colors">
                +91-8660018590
              </a>
              <p className="text-xs">
                Smartworks, Sector 54<br />
                Gurugram, India
              </p>
            </div>
          </div>

          {/* Social */}
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

        <div className="mt-8 border-t border-border/60 pt-8">
          <p className="text-center text-[11px] text-muted-foreground">
            © {currentYear} Turicks. All rights reserved. | <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
