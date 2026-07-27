# Turicks — The Spatial Computing Layer

> How Turicks exists in a post-website world. This document extends [00-WORLD.md](00-WORLD.md) into three dimensions: the site is no longer a page that scrolls — it is **a place the Thread pulls you through**. Everything here obeys the same physics: darkness default, light earned, one Thread, loom rhythm (still → shuttle → settle).

## The Post-Website Premise

By 2035, "visiting a website" is an anachronism — you enter a rendered space the way you enter a shop. Turicks builds toward that now: the site is a **single continuous 3D world**, and the scroll wheel is not a scrollbar — it is the shuttle cord. Pulling it advances the weave. The DOM still exists (SEO routes stay frozen per CLAUDE.md), but on capable devices the homepage becomes **THE LOOM**: a WebGPU-rendered interior the camera travels through, with DOM content anchored to positions inside it.

State of the art this borrows from (verified July 2026): WebGPU is now shippable to all users with automatic WebGL fallback; TSL node materials make the renderer a config switch, not a rewrite; the strongest award-tier sites drive the *camera* with scroll through true Z-depth rather than sliding 2D layers, center on one hero object with real weight, and run GPU-compute particle systems at 60–120fps.

**Non-negotiable inheritance:** the spatial layer must still pass every rule in `02`/`03` — copper scarcity, no purple, loom rhythm, stillness at rest, full reduced-motion path.

---

## 1. The 3D Scene Graph

One world, five chambers, one Thread connecting them. The camera never cuts — it travels.

```
<LoomWorld>                                # single R3F Canvas, WebGPURenderer
├── <TheThread>                            # THE persistent object. One Catmull-Rom
│                                          #   curve spanning all chambers; tube geometry
│                                          #   + emissive TSL material; the camera's rail
│                                          #   and the world's only light source that moves
├── <Chamber.Noise>          [z:    0 → -40]
│   ├── <GlitchShards>                     # ~2,000 instanced quads: ghost UIs, flickering
│   │                                      #   cold blue-grey, GPGPU-driven decay
│   └── <StaticField>                      # GPU particle fog, cold, dense
├── <Chamber.Loom>           [z:  -40 → -120]
│   ├── <WarpField>                        # 10,000 vertical fiber-optic warp strands,
│   │                                      #   instanced cylinders, faint bone glow tips
│   ├── <Shuttle>                          # THE HERO OBJECT. Machined anodized-metal
│   │                                      #   shuttle carrying the Thread as weft.
│   │                                      #   Real mass, inertia, PBR + anisotropy
│   └── <WeaveFront>                       # the growing fabric plane — compute shader
│                                          #   writes woven rows as the user progresses
├── <Chamber.Path>           [z: -120 → -180]
│   └── <DecisionLattice>                  # Shot-06 as space: dim bone nodes in 3D rows;
│                                          #   Thread weaves through; touched nodes ignite
├── <Chamber.Fabric>         [z: -180 → -240]
│   ├── <FabricPanels>                     # 3 floating woven panels = case studies;
│   │                                      #   circuit-textile material; DOM metrics
│   │                                      #   anchored via <Html> at panel corners
│   └── <GroundedProps>                    # desk, monitor silhouette, phone — near-black,
│                                          #   revealed only by Thread proximity light
├── <Chamber.Knot>           [z: -240 → -280]
│   └── <TheKnot>                          # Thread ties itself into the T-knot; wordmark
│                                          #   settles; CTA anchored here
├── <InfiniteFabric>         [below all chambers, y: -8]
│   └── (see §7 — the floor of the world)
├── <Atmosphere>                           # weave-grain volumetric dust, exposure fog
│                                          #   fading to #0A0C10 at 60 units
└── <AudioGraph>                           # (see §10 — positional, chamber-zoned)
```

Rules:
- **The Thread is one object across all chambers** — never chamber-local copies. Its curve is the site's information architecture.
- Chambers connect in one continuous Z-corridor; no portals, no fades between chambers (transitions are travel, §6).
- Everything except the Thread, ignited nodes, and screens is within 3 stops of black. The scene budget for luminance is as scarce as copper in 2D.

## 2. Camera Choreography

The camera is a passenger on the Thread. Scroll progress `p ∈ [0,1]` maps to arc-length along the Thread's curve; the camera rides a parallel offset rail (never *on* the thread — always seeing it).

| Segment | p range | Move | Loom rhythm role |
|---------|---------|------|------------------|
| Descent | 0.00–0.12 | Slow push through Noise, camera near-static while shards stream past (world moves, camera barely) | *still* |
| The Cut | 0.12–0.16 | Thread ignites ahead; camera accelerates hard along it (`--ease-shuttle` mapped to arc-length velocity) | *shuttle* |
| Loom orbit | 0.16–0.40 | Camera decelerates into a 120° orbital around the Shuttle hero as it fires; the one orbital move in the site | *settle* |
| Weave through | 0.40–0.62 | First-person weave: camera follows Thread under/over through the DecisionLattice — the signature "under-over" dip (±0.4 units Y, `--ease-loom`) | alternating |
| Gallery drift | 0.62–0.85 | Slow lateral dolly past FabricPanels; camera yaws ≤8° to face each panel | *still* |
| The Knot | 0.85–1.00 | Camera pulls back and centers; Thread ties the knot at frame center; hold | *settle, hold* |

Constraints:
- Scroll input is smoothed with critically-damped inertia (no spring overshoot — settle easing, ~180ms lag). The world must feel *heavy*.
- FOV fixed at 42° except The Cut (42°→48°→42°) — the only FOV breath in the site.
- Camera roll: never. Yaw/pitch clamped ±12° from rail tangent. No free look on desktop; on device-orientation mobile, ±3° parallax only.
- Idle >6s: everything stops except Thread ember-pulse (§9). Stillness at rest is a spatial rule too.

## 3. The Hero Moment

**"The Shuttle Flies" — p ≈ 0.16–0.24.** The one moment people screen-record.

Sequence: the camera settles into the Loom chamber orbit. Total stillness — 10,000 warp strands hanging, faint bone tips, deep hum. One full second of nothing (held stillness is the setup; every award-site instinct says fill it — don't). Then the Shuttle **fires**: crosses the 40-unit chamber in 380ms carrying the Thread, warp strands it passes deflect ±2cm with cloth-sim wobble (GPGPU verlet, §9), a woven row of light packs into the WeaveFront with the *thunk* (§10), and the room is one row brighter. Each further scroll-tick in this range fires another pass. **The user's scroll is literally weaving the room brighter.** By orbit's end the WeaveFront holds ~30 glowing rows — rows *they* made.

The headline "**Woven, not generated.**" settles as DOM type over the third pass — never before the user has caused at least one row.

## 4. The Signature Interaction

**Pulling the Thread.** Site-wide, on any device: press-and-drag (or touch-drag) grabs the nearest point of the Thread and pulls it toward the cursor, up to 1.5 units. The Thread behaves as a real tensioned fiber — verlet rope segment with high stiffness, warm light intensifying at the stretch point, a rising string-tension note (§10). Release: it snaps back with **one** overdamped oscillation and a soft harmonic — never a wobbling spring.

Why it's the signature: it makes the brand claim tactile. Generated things are weightless; woven things have tension. Every visitor learns Turicks's difference through their fingers in the first ten seconds.

Functional grammar built on it:
- Pull past 1.5 units at a nav-node: the Thread "catches" and reels the camera to that chamber (spatial navigation).
- In Chamber.Fabric, pulling the Thread through a panel's corner loop flips the panel to its metrics face.
- Reduced-motion / no-JS: interaction absent; standard links do everything (it is enhancement, never a gate).

## 5. The Memory Moment

**Your row is kept.** The rows woven in the hero moment are written to `localStorage` (row count + a hash of the session date — nothing personal). On every return visit, the Loom chamber opens with your previously-woven rows already glowing in the WeaveFront, and one line of mono type at their edge:

`[ ROWS WOVEN: 47 · LAST PASS: 12 MAR 2035 ]`

Returning prospects literally see their accumulated engagement as fabric. Over multiple visits the WeaveFront visibly fills — the site remembers you in material, not in a cookie banner's language. At 100 rows, the fabric completes one full panel and the knot chamber's CTA changes to: *"Your panel is finished. Bring us the rest."* This is the single sanctioned personalization; no other state persists.

## 6. Scroll-to-Space Transitions

How the flat DOM world and the 3D world exchange custody — the moment competitors get wrong with a hard iframe seam.

- **Entry (DOM → space):** the page loads as ordinary DOM (LCP-safe, SEO-safe): headline, nav, IMG-W01 noise still. The canvas boots behind it at opacity 0. When ready, the 2D hero's copper thread underline *is* the Thread: an SVG-to-3D handoff where the SVG stroke's endpoint position is matched by the 3D Thread's ingress point (screen-space aligned), the SVG retracts as the 3D tube extends, and the DOM background dissolves into Chamber.Noise over 640ms (`--t-weave`). One line, continuous across renderers. The user never sees "a 3D site load" — the page they were reading *deepens*.
- **Within-page (space → DOM anchors):** service copy, metrics, and CTAs are real DOM (`<Html>` anchors / screen-space projected divs), never texture-baked text. They settle per `03` rules when their chamber's camera segment begins.
- **Exit (space → route):** navigating to any frozen SEO route reverses the handoff — camera accelerates along the Thread toward the destination's nav-node, the Thread exits frame right, and the destination page's copper underline enters left, already drawn. Route pages are 2D (system per `02`); the world exists only where it earns its cost.
- **Fallbacks:** WebGPU → WebGL via TSL automatically; low-tier GPU or `prefers-reduced-motion` → the site remains the excellent 2D scroll-film of Phase 4. The spatial layer is a progressive tier, never the only site.

## 7. The Infinite Fabric Reveal

The floor of the world — and the final act of the Knot chamber.

Throughout the journey the ground is invisible (below the fog floor). At p ≈ 0.92, as the knot cinches, the camera's final pull-back tilts down 9° — and reveals that the entire world has been standing on **an infinite plane of woven circuit-textile** extending to the horizon in every direction: every row every visitor has ever woven, every project shipped, one continuous fabric.

Implementation: a single 2-unit fabric tile (the IMG-F05 material, §9) on a horizon-warped infinite-plane shader — camera-anchored grid with logarithmic distance compression, texture LOD ringed at 3 scales to kill moiré, copper trace-pulses running to the horizon on GPU (density falls off with distance so total luminance stays within budget). Fog resolves at the horizon line into `#0A0C10` so fabric and sky are one material world.

The reveal reframes the whole site retroactively: you weren't in a room — you were standing on the fabric all along. Hold four full seconds (film end-card rule). Then the CTA settles: *"Bring us the raw material."*

## 8. R3F Architecture

```
components/spatial/
├── LoomWorld.tsx            # <Canvas> owner; WebGPURenderer w/ WebGL fallback;
│                            #   frameloop="demand" outside animation, "always" inside
├── core/
│   ├── ThreadCurve.ts       # THE curve: CatmullRomCurve3, arc-length LUT, single source
│   ├── ThreadMesh.tsx       # TubeGeometry along curve + threadMaterial (§9)
│   ├── CameraRig.tsx        # scroll→arc-length mapping, damped follow, segment table (§2)
│   ├── ScrollBinding.ts     # Lenis-style virtual scroll → progress store (zustand)
│   └── QualityGovernor.ts   # boot benchmark → tier {full|lite|flat}; owns fallback
├── chambers/
│   ├── NoiseChamber.tsx     # GlitchShards (InstancedMesh) + StaticField (GPGPU)
│   ├── LoomChamber.tsx      # WarpField, Shuttle (hero), WeaveFront
│   ├── PathChamber.tsx      # DecisionLattice
│   ├── FabricChamber.tsx    # FabricPanels + <Html> metric anchors
│   └── KnotChamber.tsx      # TheKnot tie animation + InfiniteFabric reveal trigger
├── systems/
│   ├── ThreadPull.tsx       # §4 — verlet rope solver (compute), pointer raycast
│   ├── WeaveMemory.ts       # §5 — localStorage rows, hydrate WeaveFront
│   ├── HandoffBridge.tsx    # §6 — SVG↔3D thread custody, route transitions
│   └── AudioGraph.ts        # §10
└── materials/               # all TSL — see §9
```

Decisions:
- **Renderer:** `WebGPURenderer` with built-in WebGL fallback; all materials TSL so the path is a config switch. `QualityGovernor` runs a 300ms boot benchmark: `full` (WebGPU, all systems), `lite` (WebGL, no GPGPU cloth/particle-fog, warp strands 10k→2k, static floor), `flat` (Phase-4 2D site — canvas never mounts).
- **State:** one zustand store (`progress`, `chamber`, `rowsWoven`, `tier`, `audioUnlocked`). React renders *nothing* per-frame — all per-frame work in `useFrame` reading refs; React handles chamber mount/unmount at segment boundaries only.
- **Perf budget:** ≤300 draw calls, ≤1.5M vertices resident, 60fps mid-tier laptop / 120fps target on WebGPU (2–10× headroom is real, per current migrations). Chambers beyond ±1 segment are unmounted, their compute buffers retained.
- **DOM truth:** SEO/content lives in the server-rendered DOM; the canvas is `aria-hidden`, and every spatial interaction has a DOM equivalent. Static export constraint unchanged — all of this ships as static JS.

## 9. Shader Architecture

All TSL node materials (renderer-agnostic). One shared uniform block: `uProgress`, `uThreadNearestPoint` (per-object), `uRowsWoven`, `uTime`, `uPullTension`.

| Material | Applied to | Construction |
|----------|-----------|--------------|
| `threadMaterial` | ThreadMesh | Emissive core `#E8722A` → `#F5A468` edge via fresnel; ember-pulse: 0.9–1.0 intensity sine at 0.2Hz (the only idle motion); heat concentrates at `uPullTension` point; drives a point-light chain sampled at 8 curve points — the Thread *is* the lighting rig |
| `weaveMaterial` | WeaveFront, FabricPanels, InfiniteFabric | Procedural weave: two crossed anisotropic warp/weft normal functions; copper traces masked along weft rows; rows `< uRowsWoven` emissive, others matte; trace-pulses via time-offset noise gated to shuttle rhythm (still → travel → still — never continuous flow) |
| `shuttleMaterial` | Shuttle hero | PBR anodized metal: high anisotropy along machining direction, micro-scratch normal detail, clearcoat 0.3; lit almost entirely by Thread proximity |
| `glitchShardMaterial` | GlitchShards | Cold blue-grey SDF-text scramble + UV-tear flicker; global `dies` uniform: shards freeze & desaturate as Thread wake passes (the Cut) |
| `warpStrandMaterial` | WarpField instances | Near-black cylinder, bone tip glow; per-instance deflection read from cloth compute buffer |
| `nodeMaterial` | DecisionLattice | Dim bone emissive; ignition: 120ms flash → settle to warm hold when Thread arc-length passes the node's parameter |
| `atmosphere` | fullscreen post | Exposure fog to `#0A0C10` @60u; 1.5% animated film grain; vignette 0.25; **no bloom pass** — glow falloff lives in the emissive materials (bloom is generated-slop energy and murders the black floor) |

Compute (WebGPU tier only, WGSL via TSL compute):
- **Cloth/rope solver:** one verlet kernel serves both warp-strand deflection and Thread pull (§4) — 3 constraint iterations, 128-particle rope + 10k strand tips.
- **Static field:** 200k-particle curl-noise fog in Noise chamber; killed after the Cut, buffer reused for InfiniteFabric trace-pulses.
- **Weave packer:** writes new rows into WeaveFront's row-state texture on each shuttle pass; same texture hydrated from WeaveMemory at boot.

Grading contract: final frame must histogram-match the 2D system — blacks ≤ `#0A0C10`, single warm hue family, zero blue except Chamber.Noise. A debug LUT-check mode asserts this in dev.

## 10. Audio Architecture

Sound is the loom's other half — every landing in the film language has a *thunk*; the space inherits it. Web Audio API, unlocked on first user gesture (the first Thread pull is the natural unlock — tension note as reward).

```
AudioGraph
├── beds/ (2D, stereo)
│   ├── hum          # SFX-04 warm hum — lowpass & gain mapped to uProgress
│   │                #   (cold/dim in Noise → warm/full in Knot)
│   └── static       # SFX-03 — Noise chamber only; hard-cut along the Cut wake
├── positional/ (PannerNode HRTF, attached to scene objects)
│   ├── shuttle      # snap (SFX-02) at fire + thunk (SFX-01) at pack;
│   │                #   doppler-faked with 40ms pitch bend on pass
│   ├── nodes        # DecisionLattice ignitions — soft ticks, pentatonic
│   │                #   set so any scroll speed stays consonant
│   └── knot         # final cinch thunk, center-stage, dry
├── interaction/
│   ├── threadPull   # string-tension: sine+saw blend, pitch & brightness
│   │                #   mapped to uPullTension; release = plucked harmonic
│   │                #   with one overdamped decay (matches physics)
│   └── weaveTick    # per-row pack on scroll — velocity-sensitive: fast
│                    #   scroll = quieter per-row (sums to constant loudness)
└── master
    ├── ducker       # beds duck −6dB under any positional hit (100ms/600ms)
    ├── limiter      # brickwall −1dBFS; overall target −23 LUFS ambient
    └── mute         # visible mono control `[ SOUND: ON ]`, state persisted
```

Rules:
- Loom rhythm governs audio too: beds are *texture*, events are *transients*, and silence is used — the second before the hero Shuttle fires is fully ducked to near-silence.
- Nothing loops audibly: beds are 90s files with 8s equal-power crossfade loops.
- Total payload ≤900KB (Opus); loaded after first interaction, never blocking.
- Muted, reduced-motion, and flat-tier experiences are complete without audio — captions on the film, mono markers carrying all information.

---

## Phase Placement

This is **Phase 7** in the blueprint — it begins only after Phase 4 (Homepage) is verified, because the 2D scroll-film *is* the spatial layer's `flat` fallback tier and must stand alone first. Create `docs/phases/PHASE-7-SPATIAL.md` from the template at kickoff; deliverables map 1:1 to §§1–10 headings, gated per section on the perf budget (§8) and the grading contract (§9).

Sources: [Utsubo — Best Three.js Websites 2026](https://www.utsubo.com/blog/best-threejs-websites-2026), [Utsubo — What's New in Three.js 2026](https://www.utsubo.com/blog/threejs-2026-what-changed), [Maxime Heckel — Field Guide to TSL and WebGPU](https://blog.maximeheckel.com/posts/field-guide-to-tsl-and-webgpu/), [The Monolith Project showcase](https://www.webgpu.com/showcase/the-monolith-project/), [Codrops — React Three Fiber archive](https://tympanus.net/codrops/tag/react-three-fiber/), [Wawa Sensei — WebGPU/TSL lessons](https://wawasensei.dev/courses/react-three-fiber/lessons/webgpu-tsl)
