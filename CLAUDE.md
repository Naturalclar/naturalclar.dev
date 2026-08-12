# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` — Start the development server
- `pnpm build` — Production build (static export into `out/`)
- `pnpm export` — Copy `extra/` into `out/`; run *after* `pnpm build`, not instead of it
- `pnpm lint` / `pnpm lint:fix` — Run oxlint
- `pnpm type-check` — `tsc --noEmit`
- `pnpm deploy` — Manual gh-pages publish (see Deployment — this differs from CI)

There is no test framework in this repo. CI runs `pnpm lint` and `pnpm build` only.

## AMP is the central constraint

`pages/index.tsx` sets `export const config = { amp: true }`. Almost every non-obvious
decision in this codebase follows from that, so check it before proposing changes:

- **No client-side JS.** AMP forbids custom scripts, which is why there is no CSS-in-JS
  runtime, no icon library that ships JS, and no interactive components.
- **No `next/image`.** It cannot render in AMP, and `output: "export"` provides no image
  loader. `components/atoms/Avatar.tsx` branches on the `isAmp` prop instead, emitting
  `<amp-img>` via `React.createElement` (JSX would not typecheck cleanly) or a plain
  `<img>`.
- **`<amp-img>` is hand-declared.** `index.d.ts` augments the global `JSX.IntrinsicElements`
  namespace. New AMP elements need an entry there.
- **Next.js 16 removed AMP support.** `next/amp` no longer exists, so the framework cannot
  be upgraded past 15 without first migrating off AMP. A Dependabot PR attempting this
  fails to compile on `import { useAmp } from "next/amp"`.

## Architecture

Atomic-design layout: `components/atoms/` (Avatar, Heading, Icon, Paragraph),
`components/templates/` (Page), `head/` (Meta). Each directory has a barrel `index.ts`;
import through it rather than reaching for the file directly.

Styling is **inline style objects only** — there is no stylesheet, no CSS module, and no
CSS-in-JS dependency. `Page.tsx` holds the layout container style; everything else styles
at the call site. Global `body` styling is injected as a raw `<style>` tag from
`pages/_document.tsx`'s `getInitialProps`.

Two external stylesheets are loaded by `<link>` from `head/Meta.tsx`, not from npm:

- **Font Awesome 4.7.0** off `maxcdn.bootstrapcdn.com`. `components/atoms/Icon.tsx` renders
  icons purely as `fa fa-${name}` class names, so the whole icon set depends on this CDN.
- **Google Fonts (Source Sans Pro)**, referenced by `fontFamily` in `Page.tsx` and
  `_document.tsx`.

`head/Meta.tsx` is rendered from inside the page rather than from `_document.tsx`, and
carries the full SEO/OG/Twitter card set.

TypeScript runs with `strict: false`.

## Linting

oxlint is configured in `.oxlintrc.json` with the typescript, unicorn, oxc, react, nextjs,
jsx-a11y and import plugins; `correctness`, `suspicious` and `perf` run as errors.

Three rules are deliberately off, each with a comment in the config explaining why. Do not
re-enable them without addressing the underlying constraint: `react/react-in-jsx-scope`
(automatic JSX runtime), `nextjs/no-img-element` and `nextjs/no-page-custom-font` (both AMP
consequences described above).

## Deployment

**Pushing to `master` deploys to production.** `.github/workflows/Deploy.yml` triggers on
push to `master`, builds, runs `pnpm export`, then publishes `out/` with `npx gh-pages`.
It re-points `origin` at the current repo first, so it lands on the `gh-pages` branch of
`naturalclar.dev`. The workflow is guarded by `if: github.repository ==
'Naturalclar/naturalclar.dev'` so forks do not deploy.

The `pnpm deploy` script does something different: `gh-pages -d out -o gh-pages -b master`
targets the remote named `gh-pages` (the separate `naturalclar.github.io` repo) and the
`master` branch there. Do not assume the two paths are interchangeable.

## Gotchas

- `tsconfig.tsbuildinfo` is **tracked in git**, so `pnpm type-check` and `pnpm build` dirty
  the working tree. Restore it before committing unless the change is intentional.
- `pnpm build` fails at the AMP validation step in sandboxes without network access — the
  AMP Optimizer cannot fetch the runtime version from `cdn.ampproject.org` and emits
  `style[amp-runtime]` without `i-amphtml-version`. This is environmental, not a code
  defect; compare against an unmodified checkout before investigating.
- CI pins pnpm 9 while the lockfile is `lockfileVersion: '9.0'`; pnpm 10 writes the same
  version, so regenerating locally with pnpm 10 stays compatible with `--frozen-lockfile`.
