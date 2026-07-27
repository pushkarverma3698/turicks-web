# Turicks — Visual Language

Derives from [00-WORLD.md](00-WORLD.md). These are binding tokens for all assets and the site build.

## 1. Color System

Dark-first. The world's default state is ink; light is earned.

| Token | Name | Hex | Role |
|-------|------|-----|------|
| `--ink-950` | Deep Ink | `#0A0C10` | Page background, film backgrounds |
| `--ink-900` | Ink | `#11141B` | Card / panel surfaces |
| `--ink-800` | Warm Ink | `#1A1E27` | Elevated surfaces, hover states |
| `--bone-100` | Bone | `#F2EFE9` | Primary text on dark; light-mode background |
| `--bone-400` | Faded Bone | `#A8A49B` | Secondary text, captions |
| `--thread-500` | Molten Copper | `#E8722A` | THE accent. The Thread. CTAs, active states, the single line of light |
| `--thread-300` | Ember | `#F5A468` | Thread glow edges, hover on copper |
| `--thread-700` | Forge | `#B34E12` | Pressed states, thread shadow-side |
| `--signal-500` | Loom Blue | `#3E6B8F` | Sparingly: data viz second series, diagram strokes. Never competes with copper |
| `--success` | Verdigris | `#3F8F6B` | Success states only |
| `--danger` | Oxide | `#C24435` | Errors only |

**Rules:**
- One copper element per viewport commands attention. Copper is scarce by design — it is the Thread, and there is only one Thread.
- No gradients between hues. Only copper→transparent glow falloffs (the Thread's light).
- No purple, no cyan-magenta AI clichés, anywhere, ever.
- Light mode exists (Bone background, Ink text, copper unchanged) but dark is canonical.

## 2. Typography

| Role | Face | Usage |
|------|------|-------|
| Display | **Instrument Serif** (400, italic for emphasis) | Headlines, film title cards. Large, tight-tracked. The "human hand" voice |
| Body / UI | **Geist Sans** (already in project) | Everything functional |
| Data / craft-marks | **Geist Mono** | Numbers, labels, captions, case-study metrics, `[ 04 / WEAVE ]` section markers |

**Rules:**
- Display serif only above 32px. Below that, Geist Sans.
- Section markers use mono in caps with brackets: `[ 02 / THE LOOM ]` — these are the site's "loom notation."
- Metrics are always mono and always copper: `80%` `12,400 students` `3.2s → 240ms`.
- Max headline: 8 words. The serif does the drama; the copy stays flat.

## 3. The Thread (signature graphic device)

- A single continuous stroke, 1.5–3px at UI scale, molten copper with a soft ember glow (`box-shadow`/SVG blur, 8–24px falloff).
- It is **one path per composition** — never a mesh, never multiple threads crossing.
- Behavior: enters from an edge, travels *through* content (under some elements, over others), exits or ties off into a knot/node.
- In still images: the thread has physical presence — it casts warm light on nearby surfaces.
- Degenerate forms: a copper underline on links; the 2px copper left-border on active nav items; the loading indicator (thread drawing a circle).

## 4. Texture & Surface

- **Weave grain:** a barely-visible (2–3% opacity) woven texture overlay on large ink surfaces. Never on text containers.
- **Craft-marks:** hairline (1px, `--ink-800`) rules and corner ticks on cards, like technical-drawing registration marks.
- **No glassmorphism, no blur-heavy frosted panels, no drop shadows on cards.** Depth comes from surface steps (`ink-950 → 900 → 800`) and the Thread's light.

## 5. Imagery Style (photography / generated stills)

- Macro craft photography energy: extreme close-ups of hands, woven copper wire, loom shuttles, brushed metal, circuit-textile hybrids.
- Lighting: single warm key (the Thread's light) against near-black. Deep shadows retained — crush the blacks.
- Color grade: desaturated everything except copper/amber tones. Bone-white highlights only.
- Never: stock offices, smiling teams at whiteboards, blue holograms, robot faces, floating UI screens in space.

## 6. Iconography & Diagrams

- Icons: Lucide (already in project), 1.5px stroke, `--bone-400` default, copper when active.
- Architecture diagrams: bone strokes on ink, copper for the "hot path" (the one flow that matters), Loom Blue for secondary flows. Mono labels.

## 7. Layout

- 12-col grid, generous gutters; content max-width 1200px; case studies 720px measure for prose.
- Asymmetry as signature: the Thread's path decides alignment — sections alternate anchor side following the thread's descent down the page.
- Whitespace is ink-space: sections separated by large dark voids the Thread crosses alone.

## 8. Logo Treatment

- Wordmark: TURICKS in Geist Sans, 600, +0.08em tracking, Bone.
- The knot: the "T" may carry a single copper thread woven through its crossbar — the only decorated letter. This knot is the favicon/app icon (copper knot on ink).
