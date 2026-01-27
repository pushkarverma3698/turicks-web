import Link from "next/link";

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
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Services", href: "/services" },
    ],
    Support: [
      { name: "Contact", href: "/contact" },
      { name: "Documentation", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t bg-background/40 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg className="h-full w-full" aria-hidden="true">
          <defs>
            <pattern id="footer-grid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M36 0H0V36" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" className="text-primary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Turicks
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building tailored SaaS solutions for organizations. We create
              custom software that fits your unique requirements.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-sm font-semibold">{title}</h3>
              <ul className="space-y-2">
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
