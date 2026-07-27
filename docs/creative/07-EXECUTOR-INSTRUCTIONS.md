# Turicks — Executor Instructions

Operating manual for any executor session (Claude Code or human) implementing the rebuild. The Creative Director role is complete; these instructions transfer authority to the documents, not to improvisation.

## Session Startup (every session, in order)

1. Read `CLAUDE.md` (project root) — rules and stack.
2. Read the **active** phase doc in `docs/phases/` (lowest-numbered phase with unchecked deliverables). Work only inside it.
3. Read only the creative doc(s) the current task cites. Don't re-read the whole `docs/creative/` set each session.
4. `npm run build` before any dev server (encoding/type check).

## Division of Labor

| Task type | Executor |
|-----------|----------|
| Tokens, components, pages, motion wrappers | Claude Code sessions (this manual) |
| Still generation | nano-banana MCP / Midjourney, prompts verbatim from `05-PROMPTS.md` |
| Video generation | Runway/Veo/Kling, conditioned on approved stills |
| Grading, film edit, sound | Human (Pushkar) or dedicated tooling session |
| Logo/knot vector | Hand-drawn SVG — never generated |
| Creative decisions not covered by docs | **Stop and ask.** Do not invent |

## The Ten Commandments of Execution

1. **The docs outrank your taste.** If a choice looks better but violates `02`/`03`, the docs win. Propose changes as doc PRs, not silent deviations.
2. **One Thread.** One copper focal element per viewport, one continuous thread per composition. If a design has two, one is wrong.
3. **Tokens only.** Any hex literal or raw `cubic-bezier` in a component diff is an automatic revision.
4. **Still after load.** If anything on a page animates at rest (besides VID-M03's sanctioned loop), remove it.
5. **Slugs are frozen.** Restyle routes; never rename, merge, or delete them.
6. **No generated text in assets.** Type is always set in code/post.
7. **Reduced motion ships with the animation**, in the wrapper, not as a follow-up.
8. **Phase gates are real.** Fill "Verification results" with actual command output before checking the last box. Use verification-before-completion discipline — evidence before claims.
9. **Copy is written, not padded.** Voice rules in `01-NARRATIVE.md`; banned-word list is enforced (grep the diff).
10. **Update state as you go:** asset statuses in `06-ASSET-INVENTORY.md`, phase checklists, and project MEMORY.md gotchas at session end.

## Standard Task Loop

```
pick unchecked deliverable in active phase
→ read cited creative-doc section
→ implement (surgical, tokens, wrappers)
→ npm run build
→ verify against phase gate criteria for that item
→ check the box + note evidence
→ commit (conventional format, e.g. "feat: add ThreadDraw scroll-linked mode")
```

## Asset Generation Loop

```
pick `todo` asset in 06-ASSET-INVENTORY.md
→ copy prompt verbatim from 05-PROMPTS.md (Global Style Block + negative prompt)
→ generate 4 candidates → pick against the 5 acceptance criteria
→ grade per Post-Processing Standard
→ export to public/assets/<type>/<id>.<ext>
→ set status (generated → graded → approved), note model + seed in the row
```

## Escalation Triggers (stop, report, wait)

- A creative doc contradicts another (cite both sections).
- A phase-gate criterion can't be met without changing a canonical doc.
- Performance forces a motion compromise beyond the documented mobile fallback.
- Anything requiring a server function, CMS, or paid API in the dev loop (violates static-export constraint / cost-control rules).

## Definition of Project Done

All six phase docs show verified gates; `06-ASSET-INVENTORY.md` shows every row `shipped`; `turicks.com` serves the new static export; the film master is live on the homepage and social channels.
