import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { name: "School Management System", href: "/products#school-management" },
      { name: "All Products", href: "/products" },
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "RSS", href: "/blog/rss.xml" },
      { name: "Sitemap", href: "/sitemap.xml" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Services", href: "/services" },
    ],
    Support: [
      { name: "Contact", href: "/contact" },
      { name: "Robots", href: "/robots.txt" },
    ],
  };

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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Turicks
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Turicks is a SaaS development partner for startups and growing
              businesses. We help founders turn ideas into scalable digital
              products—design, development, cloud infrastructure, and long-term
              support under one roof.
            </p>
            <p className="text-sm text-foreground/80">
              Think of us as your on-demand product engineering team.
            </p>
            <div className="flex items-center gap-3" aria-label="Social media">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-muted-foreground/20 text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40 hover:bg-muted/50"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t/60 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Turicks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
