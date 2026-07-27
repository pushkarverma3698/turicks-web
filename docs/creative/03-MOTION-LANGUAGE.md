# Turicks — Motion Language

Derives from [00-WORLD.md](00-WORLD.md) and [02-VISUAL-LANGUAGE.md](02-VISUAL-LANGUAGE.md). Binding for Framer Motion wrappers, the brand film, and all video assets.

## The Motion Metaphor: The Shuttle

A loom is still, then the shuttle *flies*, then stillness again. All Turicks motion follows this rhythm: **long holds, sudden precise travel, soft heavy landings.** Nothing floats. Nothing bounces. Nothing loops idly.

## 1. Easing Curves (canonical)

| Token | Curve | Use |
|-------|-------|-----|
| `--ease-shuttle` | `cubic-bezier(0.83, 0, 0.17, 1)` | The Thread traveling; page transitions; anything that moves *across* space |
| `--ease-settle` | `cubic-bezier(0.22, 1, 0.36, 1)` | Elements landing into place (cards, headlines) — fast in, long soft settle |
| `--ease-loom` | `cubic-bezier(0.65, 0, 0.35, 1)` | Symmetric mechanical moves: accordions, toggles, theme switch |
| never | `ease-in-out` default, spring bounce, elastic | Bounce = generated-slop energy. Banned |

## 2. Duration Scale

| Token | ms | Use |
|-------|----|----|
| `--t-tick` | 120 | Hovers, color shifts, icon states |
| `--t-shuttle` | 320 | Card entrances, small travels |
| `--t-weave` | 640 | Section reveals, thread draws within a component |
| `--t-passage` | 1200 | Full-viewport thread draws, page transitions, hero sequence |

Stagger: children enter at 60ms intervals, max 5 visible staggers (beyond that, group).

## 3. Core Motion Behaviors

### The Thread Draw (signature)
- SVG `stroke-dashoffset` draw, `--ease-shuttle`, `--t-weave`/`--t-passage` by scale.
- The thread draws *ahead* of content: thread arrives → 80ms hold → content settles in behind it (`--ease-settle`).
- Scroll-linked variant: on long pages the thread's draw progress maps to scroll position (Framer `useScroll` + `pathLength`).

### The Settle (content entrance)
- `opacity 0→1` + `translateY 12px→0` + `scale 0.995→1`, `--ease-settle`, `--t-shuttle`.
- Landing cue: nothing overshoots. Weight, not sparkle.

### The Noise Resolve (hero only)
- Background noise field (scattered glitch fragments / scrambled mono glyphs) de-scrambles into the headline as the Thread passes through the text's baseline. One-time, on load, `--t-passage`. Never replays.

### Hover Grammar
- Cards: surface steps up one ink level (`900→800`), corner ticks extend 4px, `--t-tick`. No lift, no shadow, no scale.
- Links: copper underline draws left→right, `--t-tick`.
- CTAs: ember glow intensifies (`--thread-300` shadow radius 12→20px), background unchanged.

### Section Markers
- `[ 02 / THE LOOM ]` mono labels typewrite on (per-character, 20ms/char) when entering viewport. Once per session.

## 4. Scroll Choreography (homepage)

- The Thread is a persistent scroll-linked SVG path running the page's full height, weaving left/right past each section (deciding each section's anchor side per layout rule).
- Sections trigger at 20% viewport entry; content settles only after the thread has passed its baseline.
- Parallax: banned except ink-space voids, where the weave-grain texture may drift at 0.9x scroll — barely perceptible.

## 5. Film & Video Motion Rules

- Camera: locked-off or single slow push-ins (2–4% scale over shot). No drone sweeps, no whip pans, no speed ramps.
- Cuts land on sound hits — the loom's *thunk*. Hold shots 1.5–2× longer than instinct.
- The Thread is the only fast-moving element in any frame. Everything else near-still.
- Transitions between scenes: the Thread exits frame right and enters the next frame left — one continuous line across the whole film.

## 6. Accessibility & Restraint

- `prefers-reduced-motion`: thread appears fully drawn, all entrances become 120ms opacity fades, noise-resolve replaced by static headline.
- Max one `--t-passage` animation per page. Max one animating element at rest per viewport (i.e., after load, the page is *still* — see loom rhythm).
- All motion via existing wrapper components in `components/animations/` — never raw Framer in pages (existing project rule).
