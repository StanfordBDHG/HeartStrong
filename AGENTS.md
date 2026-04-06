<!--
This source file is part of the Stanford HeartStrong open-source project

SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
-->

# AGENTS Guide

Use this file when working on HeartStrong with Codex, Claude, or another coding agent.

## What HeartStrong is

HeartStrong is a static Stanford patient education website that extends the HeartStrong booklet.

The site should stay:

- calm, supportive, and patient-friendly
- medically respectful, not childish or gimmicky
- simple to host and maintain
- multi-page, not a single-page app

Core pages:

- Welcome
- HF Basics
- Goal Setting
- Treatment Options
- Resources

Non-negotiable product rules:

- Keep Astro static only: no backend, login, or datastore.
- Dark and light mode should follow the user’s system setting.
- Hero buttons should usually guide people further down the current page.
- The footer page navigator should preserve the linear page flow.
- ENGAGE-HF videos should be embedded with context, not just linked out.
- Print actions should be scoped and predictable.
- Keep the education-only/legal messaging intact.

## Design guardrails

The current design is booklet-aligned, warm, editorial, and lightly liquid-glass-inspired. Readability matters more than visual effects.

Preserve these design choices:

- Use glass/translucent effects sparingly.
- Keep the mascot family consistent with the current booklet-inspired anatomical look.
- Prefer existing raster/generated assets over introducing new illustration systems.
- Dark-mode image variants should match the same composition as light mode and only adapt palette, glow, and contrast.
- Do not create duplicate mascot roles or extra asset variants unless clearly needed.
- Keep content plain-language and patient-facing.
- Avoid expanding medical claims beyond the current educational framing.
- Keep printable resources close to one printed page when practical.

## Where to edit

Check the current implementation before changing anything. Reuse the existing patterns instead of creating a parallel one.

Main source-of-truth files:

- Content, routes, page heroes, videos, medication data: [`src/data/site.ts`](src/data/site.ts)
- Illustration metadata and themed assets: [`src/data/illustrations.ts`](src/data/illustrations.ts)
- Shared layout and page shell: [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro)
- Global styling and design tokens: [`src/styles/global.css`](src/styles/global.css)
- Interactive components and page UI: `src/components/*`
- Shared browser behavior: [`src/scripts/siteChrome.ts`](src/scripts/siteChrome.ts)
- Scripts, checks, and dependency versions: [`package.json`](package.json)
- CI and deployment behavior: [`.github/workflows`](.github/workflows)

## Safe editing workflow

When a non-coder asks an agent for a change, the agent should:

1. Inspect the current implementation first.
2. Make the smallest coherent change that solves the request.
3. Preserve accessibility, responsiveness, and the design guardrails above.
4. Run the required local checks.
5. Summarize what changed, how it was tested, and any remaining risk.

Useful local commands:

```bash
npm install
npm run dev
npm run lint
npm run validate
```

`npm run validate` runs the full local quality gate:

- Prettier format check
- ESLint
- Vitest coverage
- Astro type and project checks
- production build

Manual QA after UI changes:

- check desktop and mobile layouts
- check both light and dark mode
- click through page navigation
- verify ENGAGE-HF video embeds
- test the goal wizard interactions
- test the treatment accordion behavior
- test print flows and printable pages

## Engineering and repo rules

- Keep REUSE and SPDX headers intact.
- Keep markdown links valid.
- Do not bypass failing CI.
- Fix root causes instead of suppressing lint or type errors.
- Use the shared Stanford Spezi web linting setup already in the repo.
- Run `npm run validate` before finishing meaningful changes.

Dependency updates need extra care:

- Do not blindly accept major version bumps.
- Verify peer compatibility for Astro, TypeScript, ESLint, and `@stanfordspezi/spezi-web-configurations`.
- If a dependency PR fails CI, check peer dependency constraints before changing repo code.

Deployment model:

- GitHub Pages deploys from `main`.
- Do not assume a branch push gives you a safe separate Pages preview.

When in doubt:

- preserve the current product and design decisions
- prefer editing the existing component or data source
- avoid broad redesigns unless the prompt explicitly asks for them

## Good prompt examples

Use prompts like:

- “Update the treatment accordion copy, keep the current design, and run validate.”
- “Add a new printable resource, wire it through the existing data model, and check dark mode and print layout.”
- “Adjust the mascot placement on mobile without changing the overall visual style.”

Avoid vague prompts like:

- “Redesign the whole site.”
- “Upgrade everything to the latest versions.”
- “Make it more fun.”
