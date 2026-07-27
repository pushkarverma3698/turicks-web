# Turicks — Asset Inventory

Single source of truth for every asset. Prompt recipes in [05-PROMPTS.md](05-PROMPTS.md). Status values: `todo → generated → graded → approved → shipped`.

File locations: stills `public/assets/img/`, video `public/assets/video/`, vectors `public/assets/brand/`. Naming: lowercase asset ID, e.g. `img-f04.avif`, `vid-f06.mp4`, `logo-02.svg`.

## A. Film Stills (boards + conditioning frames)

| ID | Name | Ratio | Deliverable | Used in | Status |
|----|------|-------|-------------|---------|--------|
| IMG-F01 | Wall of Almost | 16:9 | 4K still | Film S01, hero base | todo |
| IMG-F02 | The Cut | 16:9 | 4K still | Film S02 | todo |
| IMG-F03 | Hands | 16:9 | 4K still | Film S03, services | todo |
| IMG-F04 | The Shuttle Flies | 16:9 | 4K still | Film S04, services | todo |
| IMG-F05 | Circuit Textile | 1:1 | 4K still | Film S05, services, loop | todo |
| IMG-F06 | The Decision Path | 16:9 | 4K still | Film S06, site hero video | todo |
| IMG-F07 | Dashboard Settles | 16:9 | 4K still | Film S07, case cover | todo |
| IMG-F08 | The School Fills | 16:9 | 4K still | Film S08, case cover | todo |
| IMG-F09 | The Shop Goes Live | 9:16 | 4K still | Film S09, case cover | todo |
| IMG-F10 | The Knot | 1:1 | 4K still | Film S10, OG base | todo |

## B. Video Clips

| ID | Length | Ratio | Source frame | Used in | Status |
|----|--------|-------|--------------|---------|--------|
| VID-F01…F10 | 4–10s each | 16:9 (F09 9:16) | matching IMG-F## | Film master edit | todo |
| VID-M01 | 60s | 16:9 | edit of F01–F10 | Brand film master | todo |
| VID-M02 | 30s | 9:16 | recut S02/04/06/09/10 | Social cutdown | todo |
| VID-M03 | 10s loop | 1:1 | VID-F05 regraded | Profiles, ambient | todo |
| VID-M04 | 8s | 21:9 crop | VID-F06 −40% exposure, muted | Site hero background | todo |

## C. Website Assets

| ID | Name | Ratio | Used in | Status |
|----|------|-------|---------|--------|
| IMG-W01 | Hero noise texture | 21:9 | Homepage hero pre-resolve | todo |
| IMG-W02 | Weave grain tile | 1:1 seamless | Global surface overlay | todo |
| IMG-W03 | Service: Agents | 4:5 | /ai-agent-development, home services | todo |
| IMG-W04 | Service: SaaS | 4:5 | /custom-saas-application-development | todo |
| IMG-W05 | Service: BizSite AI | 4:5 | /ai-ingested-websites, /products | todo |
| IMG-W06 | Case cover: Ops | 16:10 | case-study-operations-automation | todo |
| IMG-W07 | Case cover: School | 16:10 | case-study-building-a-school-saas-platform | todo |
| IMG-W08 | Case cover: Commerce | 16:10 | case studies index | todo |
| IMG-W09 | Origin / About | 16:9 | /about | todo |
| IMG-W10 | OG share base | 1200:630 | metadata across site | todo |

## D. Identity (vector, hand-built)

| ID | Name | Format | Used in | Status |
|----|------|--------|---------|--------|
| LOGO-01 | Wordmark | SVG | Header, footer, film end card | todo |
| LOGO-02 | Thread-knot mark | SVG + ICO/PNG 32/180/512 | Favicon, app icons, avatars | todo |
| DIA-01 | Decision-path diagram style | SVG component | Service pages, docs | todo |
| SVG-T01 | Homepage master Thread path | SVG path | Scroll-linked thread | todo |

## E. Audio

| ID | Name | Length | Used in | Status |
|----|------|--------|---------|--------|
| SFX-01 | Loom thunk (settle hit) | <1s | Film cuts, landings | todo |
| SFX-02 | Shuttle snap | <1s | Film S04 | todo |
| SFX-03 | Static bed → silence | 10s | Film Act I | todo |
| SFX-04 | Warm hum bed | 60s | Film spine | todo |
| VO-01 | Narration (4 lines, flat delivery) | ~20s total | Film master | todo |

## Acceptance Criteria (any asset → `approved`)

1. Blacks at or below `#0A0C10`; only warm copper/amber luminance; zero purple/cyan.
2. Exactly one Thread per composition, continuous, unbroken.
3. No generated text anywhere in the asset.
4. Grounded physicality — passes the "could this object exist on a desk in Gurugram?" test (abstract shots F05/F06/F10 exempt).
5. Motion clips: locked or ≤4% push camera; ends on a held stable frame.
