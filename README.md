# naturalclar.dev

Personal portfolio website for Naturalclar (Jesse Katsumata), built with Next.js and optimized for AMP.

## About

This is a minimalist portfolio site showcasing:
- Full Stack Open Source Developer profile
- Membership in react-native-community, reason-react-native, asdf-community
- Maintainer role for Japanese translations of Gatsby.js and TypeScript Website
- Links to blog, Twitter, and GitHub profiles

## Tech Stack

- **Framework**: Next.js 15 with AMP support
- **Language**: TypeScript
- **Styling**: Inline styles with Font Awesome icons
- **Linting**: oxlint
- **Deployment**: GitHub Pages via static export
- **Package Manager**: pnpm

## Development

### Prerequisites

- Node.js — CI runs 24.x
- pnpm — the version is pinned by the `packageManager` field in `package.json`, so
  [Corepack](https://nodejs.org/api/corepack.html) will select it for you

### Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm export` - Copy additional files to output directory (run *after* `pnpm build`)
- `pnpm lint` - Run oxlint
- `pnpm lint:fix` - Run oxlint and apply fixes
- `pnpm type-check` - Run TypeScript type checking
- `pnpm deploy` - Manual gh-pages publish (see Deployment — this is not how CI deploys)

## Project Structure

```
├── components/
│   ├── atoms/          # Basic UI components
│   │   ├── Avatar.tsx
│   │   ├── Heading.tsx
│   │   ├── Icon.tsx
│   │   └── Paragraph.tsx
│   └── templates/      # Layout components
│       └── Page.tsx
├── head/
│   └── Meta.tsx        # SEO and meta tags
├── pages/
│   ├── _document.tsx   # Custom document
│   └── index.tsx       # Main page (AMP-enabled)
├── public/
│   └── static/         # Static assets
├── extra/              # Additional files copied into out/ at deploy time
├── index.d.ts          # JSX declarations for AMP elements (<amp-img>)
└── .oxlintrc.json      # Lint configuration
```

## Features

- **AMP Optimization**: Main page is AMP-enabled for fast mobile loading
- **Static Export**: Generates static files for deployment
- **Responsive Design**: Mobile-friendly layout
- **SEO Optimized**: Meta tags for social media sharing
- **Accessibility**: ARIA labels and semantic HTML

## Deployment

**Pushing to `master` deploys the site.** `.github/workflows/Deploy.yml` runs on every push
to `master`: it builds, runs `pnpm export`, and publishes `out/` with `gh-pages`. It points
`origin` at this repository first, so the result lands on the `gh-pages` branch of
`naturalclar.dev`. Because of this, changes are merged through a pull request rather than
pushed to `master` directly.

The `pnpm deploy` script is a separate, manual path and is **not** what CI runs:
`gh-pages -d out -o gh-pages -b master` publishes to the remote named `gh-pages` — the
separate `naturalclar.github.io` repository — and to the `master` branch there. The two are
not interchangeable.

Every push also runs `.github/workflows/CI.yml`, which lints, type-checks, and builds.

## License

MIT