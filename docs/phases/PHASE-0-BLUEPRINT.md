# Turicks Web Rebuild — Execution Blueprint (Phase 0 / Master Plan)

Implements the "Woven, not generated" direction (`docs/creative/`). Six phases, each with a verification gate. Never start Phase N+1 before Phase N is verified. Each phase gets its own `PHASE-N-*.md` doc created at phase start, using the template at the bottom.

## Phase Map

| Phase | Name | Output | Depends on |
|-------|------|--------|-----------|
| 1 | Foundation | Design tokens + fonts + base surfaces live | — |
| 2 | Motion Kit | Animation wrapper library complete | 1 |
| 3 | Identity & Core Assets | Logos, thread SVGs, website stills generated & graded | 1 (parallel with 2) |
| 4 | Homepage | Full scroll-cinema homepage shipped | 2, 3 |
| 5 | Site Rollout | All service/case/about pages restyled | 4 |
| 6 | Film | 60s brand film + cutdowns | 3 (independent of 4–5) |

## Phase 1 — Foundation

**Goal:** the design system exists in code; nothing visual is hand-rolled after this.

Deliverables:
- [ ] `app/globals.css`: replace stock shadcn palette with ink/bone/thread/signal tokens (`02-VISUAL-LANGUAGE.md §1`), map into shadcn semantic vars (`--background`→ink-950, `--primary`→thread-500, etc.) so existing `components/ui/` restyle for free.
- [ ] Easing/duration custom properties (`03-MOTION-LANGUAGE.md §1–2`).
- [ ] Instrument Serif via `next/font`; type scale utilities (display/body/mono-marker).
- [ ] Weave-grain overlay utility (IMG-W02 placeholder CSS noise until asset lands).
- [ ] `SectionMarker` component (`[ NN / NAME ]` mono marker).

Gate: `npm run build` green; a `/landing` test page renders all tokens; existing pages still build (they'll look transitional — acceptable).

## Phase 2 — Motion Kit

**Goal:** every behavior in `03-MOTION-LANGUAGE.md` exists as a typed wrapper in `components/animations/`.

Deliverables:
- [ ] `<Settle>` — standard entrance (opacity/translateY/scale, `--ease-settle`).
- [ ] `<ThreadDraw>` — SVG stroke draw, in-view and scroll-linked modes (`useScroll` + `pathLength`).
- [ ] `<NoiseResolve>` — hero headline de-scramble (one-shot).
- [ ] `<Typewrite>` — section-marker per-character reveal.
- [ ] `<Stagger>` — 60ms children orchestrator (cap 5).
- [ ] All wrappers: `prefers-reduced-motion` fallback built in, not per-usage.

Gate: playground route renders all wrappers; reduced-motion verified in devtools emulation; build green.

## Phase 3 — Identity & Core Assets

**Goal:** everything in `06-ASSET-INVENTORY.md` sections C+D at `approved`.

Deliverables:
- [ ] LOGO-01 wordmark SVG, LOGO-02 thread-knot mark + favicons (replace `app/icon.tsx`/`apple-icon.tsx` output).
- [ ] SVG-T01 homepage master thread path (design in Figma/hand-code; test with `<ThreadDraw>`).
- [ ] Generate IMG-W01…W10 via `05-PROMPTS.md` (nano-banana MCP or Midjourney), grade per Post-Processing Standard, export AVIF+WebP.
- [ ] Update inventory statuses.

Gate: every C+D asset passes the 5 acceptance criteria in `06-ASSET-INVENTORY.md`; assets in `public/assets/`; inventory table updated.

## Phase 4 — Homepage

**Goal:** `app/page.tsx` is the scroll-film (`04-STORYBOARD.md` Homepage Scroll Mapping).

Deliverables:
- [ ] Hero: IMG-W01 noise field + `<NoiseResolve>` headline + thread entry; VID-M04 background when available (static IMG-F06 fallback until then).
- [ ] Persistent scroll-linked SVG-T01 thread down the page; sections anchor alternating sides per thread path.
- [ ] Services as loom-stations (IMG-W03–05); case-study fabric panels (IMG-W06–08) with mono copper metrics; knot pre-footer CTA ("Bring us the raw material.").
- [ ] Copy rewritten to `01-NARRATIVE.md` voice; taglines verbatim.

Gate: Lighthouse ≥90 perf/a11y/SEO on static export; reduced-motion walkthrough; visual QA against creative docs at 390/768/1440px; build green.

## Phase 5 — Site Rollout

**Goal:** all existing routes restyled to the system. **Slugs never change** (SEO).

Deliverables:
- [ ] Header/footer/nav to new system (thread underlines, knot logo).
- [ ] Service pages (agents, SaaS, BizSite, mobile, web, automation…) on a shared restyled template + product narrative one-liners.
- [ ] Case studies: 720px measure, embroidered-metric components, cover assets.
- [ ] About with IMG-W09 + origin story (Act II framing); contact = "joining the weave."
- [ ] OG images (IMG-W10 base) wired into metadata; sitemap/robots re-verified.

Gate: full-site crawl of `out/` — zero broken links, all routes styled, no stock-shadcn remnants; build green.

## Phase 6 — Film (parallel track after Phase 3)

**Goal:** VID-M01 master + cutdowns per `04-STORYBOARD.md`.

Deliverables:
- [ ] Generate IMG-F01–F10 boards → VID-F01–F10 clips (conditioned on stills).
- [ ] Edit master to sound spine (SFX-01–04, VO-01); grade conform; export M01–M04.
- [ ] Embed on site (existing `video-preview-modal.tsx`) + social rollout.

Gate: film passes acceptance criteria; thread continuity across every cut verified frame-by-frame.

## Risks

| Risk | Mitigation |
|------|-----------|
| Generated assets drift off-palette | Post-Processing Standard grade pass is mandatory; acceptance criteria gate |
| Scroll-linked thread jank on mobile | `pathLength` transform only (GPU-safe); static thread fallback <768px if <60fps |
| SEO regression from restyle | Slugs frozen; metadata diffed pre/post; sitemap checked at Phase 5 gate |
| Scope creep into CMS/backend | Static export is a constraint, not a phase — any dynamic feature is out of scope |

## Phase Doc Template

```markdown
# PHASE-N-NAME
## Goal
## Deliverables (checklist)
## Architecture decisions
## Success criteria
## Open questions
## Verification results  ← filled at gate, with command output
```
