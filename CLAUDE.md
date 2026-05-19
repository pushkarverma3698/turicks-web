# Turicks Web — CLAUDE.md

## Project Overview

Company website for **Turicks** (turicks.com) — an AI-native SaaS & software development agency based in Gurugram, India. Turicks builds custom AI agents, AI-ingested websites (BizSite AI), SaaS platforms, mobile apps, and enterprise systems.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.1.1 (App Router, `output: 'export'` — fully static) |
| UI | React 19.2.3 + TypeScript (strict mode) |
| Styling | Tailwind CSS 4 + shadcn/ui (New York style) |
| Animation | Framer Motion 12 — always use wrapper components, not raw Framer |
| Icons | Lucide React |
| Fonts | Geist Sans (body), Geist Mono (code) |
| No CMS | No database, no server functions, no API routes |

## Commands

```bash
npm run dev      # development server (localhost:3000)
npm run build    # static export → out/
npm run lint     # ESLint 9
```

### Critical: Always Verify Build Before Dev Server

**MANDATORY WORKFLOW**:
1. **Always run `npm run build` first** to verify the project compiles successfully
2. **Only then** run `npm run dev` to start the development server
3. Build errors must be fixed before viewing the site

This catches character encoding issues, TypeScript errors, and syntax problems early.

## Build Error Diagnosis & Character Encoding Issues

### Problem: Smart Quotes in Code
Next.js/Turbopack compilation fails if files contain Unicode smart quotes (curly quotes) instead of ASCII straight quotes in code attributes (className, etc.). Error appears as:
```
Unexpected character '"' at line:column
```

### Diagnosis Steps
1. **Read the error message** — note the exact line and column
2. **Use byte-level inspection**:
   ```bash
   hexdump -C app/page.tsx | grep -A2 -B2 "e2 80"
   ```
   Smart quotes appear as UTF-8 sequences:
   - Left double quote: `E2 80 9C`
   - Right double quote: `E2 80 9D`
   - Left single quote: `E2 80 98`
   - Right single quote: `E2 80 99`

3. **Alternative: Check with od**:
   ```bash
   od -c app/page.tsx | grep -C2 "\\\\342"
   ```

### Fix: Byte-Level String Replacement
Standard string methods may not detect smart quotes reliably. Use **byte-level replacement**:

```bash
python3 << 'EOF'
with open('app/page.tsx', 'rb') as f:
    content = f.read()
content = content.replace(b'\xe2\x80\x9c', b'"')  # left double quote
content = content.replace(b'\xe2\x80\x9d', b'"')  # right double quote
content = content.replace(b'\xe2\x80\x98', b"'")  # left single quote
content = content.replace(b'\xe2\x80\x99', b"'")  # right single quote
with open('app/page.tsx', 'wb') as f:
    f.write(content)
print("Fixed smart quotes")
EOF
```

**Why this works**: Operates on raw bytes, not decoded strings. String methods sometimes miss these characters.

### Prevention
- Copy/paste text carefully — avoid word processors (Google Docs, Word, etc.) that auto-convert quotes
- Always use a code editor with visible whitespace/special characters (VS Code: `editor.renderWhitespace: all`)
- If unsure, review before committing: `git diff` will highlight unusual characters

## Critical Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, **global metadata**, Organization schema JSON-LD |
| `app/page.tsx` | Homepage (956 lines) — hero, services grid, BizSite AI, AI agents, CTA |
| `app/services/page.tsx` | Services listing page |
| `app/ai-agent-development/page.tsx` | AI agent development landing page |
| `app/ai-ingested-websites/page.tsx` | BizSite AI / AI-ingested websites landing page |
| `app/ai-automation/page.tsx` | AI automation (broader) page |
| `app/sitemap.ts` | Dynamic XML sitemap — add new routes here |
| `app/robots.ts` | robots.txt generator |
| `lib/blog.ts` | All blog posts as inline markdown strings — add new posts here |
| `components/header.tsx` | Sticky nav header |
| `components/footer.tsx` | Footer with nav links |
| `components/animations/fade-in.tsx` | FadeIn scroll animation wrapper |
| `components/animations/stagger-container.tsx` | StaggerContainer + staggerItem |
| `components/client-marquee.tsx` | Animated client logo carousel |
| `components/moving-tiles.tsx` | Product showcase carousel |
| `public/` | Static images — School/, Hr/, Admin panel/, web designs/, gif/ |

## Next.js 16 + Turbopack Guidelines

**Key Rules for This Project**:
1. **Static export only** — `output: 'export'` means no SSR, no API routes, no server functions
2. **Type safety** — TypeScript strict mode enforced; fix all compilation errors
3. **Character encoding** — Always use ASCII quotes in code (`"` not `"`)
4. **Build first, debug second** — `npm run build` is the source of truth, not `npm run dev`
5. **No dynamic imports in className** — Turbopack requires static class strings for CSS module detection

### When Adding New Pages
- Create `.tsx` file in `app/` directory
- Add `export const metadata: Metadata = {...}` at top
- Include breadcrumb + FAQ JSON-LD schemas if applicable
- Run `npm run build` to verify → then `npm run dev` to test

## Key Patterns

### Page Metadata
Each page file exports a `metadata` object at the top:
```tsx
export const metadata: Metadata = {
  title: "Page Title | Turicks",
  description: "...",
  keywords: [...],
  alternates: { canonical: "/page-slug" },
};
```

### Schema Markup (JSON-LD)
- Organization + WebSite schemas: `app/layout.tsx`
- BreadcrumbList + page-specific schemas: inside each `page.tsx` component
- FAQ schema: add `FAQPage` JSON-LD on pages with FAQ sections

### Animations
Always use the wrapper components — never add raw Framer Motion in page files:
```tsx
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, staggerItem } from "@/components/animations/stagger-container";
import { motion } from "framer-motion"; // only for custom one-off animations
```

### Static Images
Place in `public/`, reference as `/filename.ext`. Images are **unoptimized** (Next.js Image `unoptimized` flag set for static export).

### Adding Blog Posts
Add new post objects to the array in `lib/blog.ts`. The `/blog/[slug]` route is the only dynamic route in the project.

### No Dynamic Routes
Except `/blog/[slug]`. All other pages are static files under `app/`.

## Services Turicks Provides

1. **AI Agent Development** — LangGraph, CrewAI, AutoGen; single agents to multi-agent systems
2. **AI-Ingested Websites (BizSite AI)** — autonomous lead gen, AI chatbot, smart copy generation
3. **Custom SaaS Development** — MVP to enterprise, cloud-native, AI-augmented
4. **Enterprise Software Solutions** — complex workflows, legacy modernization, multi-tenant
5. **Mobile App Development** — React Native, iOS, Android
6. **UI/UX Design** — research, wireframes, prototypes, design systems
7. **Cloud Infrastructure & DevOps** — AWS, CI/CD, monitoring, cost optimization
8. **Security & Compliance** — audits, encryption, access control

## Products

- **School Management System** — attendance, fees, grades, parent comms (images: `public/School/`)
- **Enterprise Management Platform** — workflows, analytics, RBAC (images: `public/Admin panel/`)
- **HR Management System** — payroll, leave, recruitment (images: `public/Hr/`)

## Target Keywords (SEO)

**Primary**: AI agent development company India, custom AI agents, agentic AI development, AI-ingested websites, BizSite AI  
**Secondary**: SaaS development company India, custom SaaS development, build SaaS MVP, LangGraph development  
**Long-tail**: multi-agent system development India, autonomous AI workflow automation, AI website with chatbot

## Deployment

Static export — `out/` directory is deployed. No SSR, no API routes, no edge functions.

## Team

CEO: Partha Das | CTO: Sourav Kumar | Business Head: Sumit Kumar | Design: Akash Bhatti | Marketing: Omkar | Engineers: Manish Sharma, Pushkar Verma

**Contact**: contact@turicks.com | +91-8660018590 | Smartworks, Sector 54, Gurugram
