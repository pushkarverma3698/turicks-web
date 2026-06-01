# Security Vulnerability Report

Generated: 2026-06-01

## Fixed (via `npm audit fix`)

| Package | Old | New | Severity | Advisory |
|---------|-----|-----|----------|---------|
| ajv | 6.12.6 | 6.15.0 | Moderate | [GHSA-2g4f-4pwh-qvx6](https://github.com/advisories/GHSA-2g4f-4pwh-qvx6) — ReDoS via `$data` option |
| brace-expansion | 1.1.12 | 1.1.15 | Moderate | [GHSA-f886-m6hf-6m8v](https://github.com/advisories/GHSA-f886-m6hf-6m8v) — zero-step sequence DoS |
| flatted | 3.3.3 | 3.4.2 | High | [GHSA-25h7-pfq9-p65f](https://github.com/advisories/GHSA-25h7-pfq9-p65f) + [GHSA-rf6f-7fwh-wjgh](https://github.com/advisories/GHSA-rf6f-7fwh-wjgh) — unbounded recursion DoS + prototype pollution |
| minimatch | 3.1.2 | 3.1.5 | High | [GHSA-3ppc-4f35-3m26](https://github.com/advisories/GHSA-3ppc-4f35-3m26) + others — ReDoS via wildcards/extglobs |
| picomatch | 4.0.3 | 4.0.4 | High | [GHSA-3v7f-55p6-f55p](https://github.com/advisories/GHSA-3v7f-55p6-f55p) + [GHSA-c2c7-rcm5-vvqj](https://github.com/advisories/GHSA-c2c7-rcm5-vvqj) — method injection + ReDoS |

## Requires Manual Action (Breaking Change)

### postcss < 8.5.10 (Moderate)
- **Advisory**: [GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93)
- **Issue**: XSS via unescaped `</style>` in CSS stringify output
- **Location**: Bundled inside `next` (`node_modules/next/node_modules/postcss`)
- **Current Next.js version**: ^16.2.6
- **Proposed fix**: `npm audit fix --force` — downgrades Next.js to **9.3.3** (major breaking change, 7 major versions back)

**Risk assessment**: The postcss vulnerability is moderate severity and only exploitable if untrusted CSS content is passed directly through postcss's stringify output. In a typical Next.js site this risk is low unless user-supplied CSS is processed at runtime.

**Recommended action**: Wait for Next.js to ship an internal postcss upgrade (they are aware of this class of issue). Monitor [next.js releases](https://github.com/vercel/next.js/releases) and upgrade to the patch once available. Do **not** apply `--force` downgrade.
