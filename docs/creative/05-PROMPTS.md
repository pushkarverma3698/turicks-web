# Turicks — Image & Video Generation Prompts

All prompts inherit the **Global Style Block** below. Asset IDs map to [06-ASSET-INVENTORY.md](06-ASSET-INVENTORY.md). Stills are written for Midjourney/Nano-Banana/Imagen-class models; video prompts for Runway/Veo/Kling-class models (use the matching still as the image-conditioning frame where supported).

## Global Style Block (append to every still prompt)

```
cinematic macro photography, near-black deep ink background (#0A0C10), single warm
copper-amber key light, crushed blacks, deep shadows retained, desaturated palette
except molten copper (#E8722A) and warm amber highlights, bone-white (#F2EFE9)
accents only, physical craft textures (brushed metal, woven fiber, skin grain),
shallow depth of field, no blue holograms, no purple, no neon, no lens flare,
no text, no logos, photorealistic, shot on 100mm macro, f/2.8 --ar 16:9
```

## Negative prompt (models that support it)

```
purple, cyan-magenta gradient, hologram, robot face, sci-fi city, glassmorphism,
stock photo office, smiling people at whiteboard, floating UI, bokeh circles,
lens flare, text, watermark, oversaturated, HDR look, cartoon, 3D render look
```

---

## A. Brand Film Stills (boards + video conditioning frames)

**IMG-F01 — Wall of Almost (Shot 01)**
```
a dark void filled with dozens of overlapping ghostly translucent glitching
software interfaces, flickering half-rendered dashboards and chat windows,
cold desaturated blue-grey, corrupted misaligned text blocks, digital decay,
chaotic dense collage receding into blackness + [Global Style Block, but
palette exception: this frame is cold blue-grey, no copper present]
```

**IMG-F02 — The Cut (Shot 02)**
```
a single perfectly straight horizontal thread of molten copper light crossing
a dark frame filled with dim frozen glitching interfaces, the thread leaves a
clean black wake behind it, warm light bending the cold static around it,
glowing ember edge falloff + [Global Style Block]
```

**IMG-F03 — Hands (Shot 03)**
```
extreme macro close-up of a human hand resting on a dark mechanical keyboard
in near darkness, lit only by warm copper light from the left, visible skin
texture and dust motes floating in the light beam, one thin glowing copper
thread of light emerging from beneath a keycap and flowing off frame
+ [Global Style Block]
```

**IMG-F04 — The Shuttle Flies (Shot 04)**
```
a precision loom shuttle machined from dark anodized metal carrying a glowing
molten copper thread as weft, flying across taut warp threads made of fine
dark fiber-optic strands, one woven row of glowing fabric forming, motion
frozen at peak flight, workshop darkness + [Global Style Block]
```

**IMG-F05 — Circuit Textile (Shot 05)**
```
top-down extreme macro of a fabric that is simultaneously textile and circuit
board, glowing copper traces woven as weft threads through a dark matte woven
substrate, tiny pulses of warm light traveling along the traces, tactile
thread texture meeting etched copper + [Global Style Block --ar 1:1]
```

**IMG-F06 — The Decision Path (Shot 06)**
```
abstract dark space with dozens of dim bone-white points of light hanging in
rows like warp threads seen end-on, one continuous molten copper thread
weaving under and over through them, each touched node glowing warm, untouched
branches staying dark, one clear luminous path through ambiguity
+ [Global Style Block]
```

**IMG-F07 — The Dashboard Settles (Shot 07)**
```
over-the-shoulder shot of a real computer monitor on a wooden desk in a dark
office at night, screen showing a minimal dark operations dashboard with warm
copper accent rows, a thin copper thread of light running along the desk edge
into the monitor bezel, warm screen glow on desk objects + [Global Style Block]
```

**IMG-F08 — The School Fills (Shot 08)**
```
wide shot of a school administrator's desk at dusk, monitor showing a dark
enrollment platform with a grid of warm glowing cells, window behind showing
a real Indian city skyline at dusk with sodium street lights, Gurugram evening
haze, grounded and unglamorous, thin copper thread running along the window
frame + [Global Style Block]
```

**IMG-F09 — The Shop Goes Live (Shot 09)**
```
macro close-up of a shopkeeper's hand holding a smartphone in a dim warm-lit
shop, screen showing a clean dark storefront website with copper accents and
a prominent publish button, thin copper thread of light exiting the phone's
edge, shallow focus on thumb over screen + [Global Style Block --ar 9:16]
```

**IMG-F10 — The Knot (Shot 10)**
```
a single molten copper thread of light tying itself into an elegant simple
knot, suspended centered in a pure deep-ink void, warm ember glow falloff
lighting nothing else, minimal, monumental stillness + [Global Style Block --ar 1:1]
```

## B. Video Prompts (per shot; condition on matching still)

Direction constants for every clip: *locked-off camera (or ≤4% slow push-in), the copper thread is the only fast-moving element, everything else near-still, no camera shake, no speed ramps, ends on a held stable frame.*

**VID-F01 (6s):** "Glitching translucent interfaces flicker and multiply in darkness, density rising, cold blue-grey, stuttering digital decay, camera locked."
**VID-F02 (4s):** "A straight molten copper light-thread travels left to right across the glitch wall; interfaces dim and freeze in its wake; ends clean black with thread exiting right."
**VID-F03 (6s):** "Slow 3% push-in on hand at keyboard in copper light; a single key press; a glowing thread flows out from beneath the key and off frame right; dust motes drift."
**VID-F04 (6s):** "Metal shuttle carrying glowing copper thread fires across fiber-optic warp; the beater packs one glowing row with a heavy soft impact; stillness returns."
**VID-F05 (6s):** "Top-down circuit-textile; warm pulses travel copper traces in shuttle rhythm — still, sudden travel, still; loopable."
**VID-F06 (7s):** "Copper thread weaves under and over through hanging dim nodes, lighting each touched node; slow 2% push-in; wrong branches remain dark; ends held on completed path."
**VID-F07 (5s):** "Dashboard on desk monitor assembles row by row from bottom, each row settling with weight; a number ticks up and locks; thread glows along desk edge."
**VID-F08 (5s):** "Enrollment grid cells fill one by one with warm light; dusk city light shifts subtly outside window; locked camera."
**VID-F09 (5s):** "Storefront webpage finishes assembling on phone screen; thumb taps publish; thread exits phone edge frame right."
**VID-F10 (10s):** "Thread enters frame left and ties itself into a knot in one continuous motion at center; knot cinches with a soft settle; holds 4 seconds on stillness."

## C. Website Assets

**IMG-W01 — Hero noise field texture:** IMG-F01 recipe, graded 60% darker, `--ar 21:9`, used as the pre-resolve hero background.
**IMG-W02 — Weave grain tile:** `"seamless tileable texture of very fine dark woven fabric, matte, near-black on black, extremely subtle relief, no highlights --ar 1:1"` (used at 2–3% opacity).
**IMG-W03/04/05 — Service imagery:** IMG-F03 (agents), IMG-F04 (SaaS platforms), IMG-F05 (BizSite AI) recipes recomposed `--ar 4:5`.
**IMG-W06/07/08 — Case-study covers:** IMG-F07/F08/F09 recipes `--ar 16:10`, graded uniform.
**IMG-W09 — About/origin:** `"dark workshop interior in Gurugram at night, warm copper task lamp over a desk with keyboard and notebooks, window with city dusk, one copper thread of light crossing the desk, honest and unglamorous" + [Global Style Block]`
**IMG-W10 — OG/social share card base:** IMG-F10 recipe `--ar 1200:630`, knot offset left third (wordmark composited in post — never generate text).

## D. Identity Assets (vector — hand-built, not generated)

- **LOGO-01:** TURICKS wordmark, Geist Sans 600, +0.08em tracking, Bone — SVG.
- **LOGO-02:** Thread-knot mark (T-crossbar knot), single copper path — SVG, favicon 32/180/512.
- **DIA-01:** Agent decision-path diagram component style (bone strokes, copper hot path, mono labels) — Figma/SVG spec, mirrors IMG-F06.

## Post-Processing Standard (all generated stills)

1. Grade to palette: blacks to `#0A0C10`, warm accent conformed toward `#E8722A`.
2. Add 1.5% monochrome film grain.
3. Never composite generated text — all type set in build.
4. Export: AVIF + WebP fallback, 2x max width 2560px, stills for video conditioning at native 16:9 4K.
