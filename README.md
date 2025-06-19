# naturalclar.dev

Personal portfolio website for Naturalclar (Jesse Katsumata), built with Next.js and optimized for AMP.

## About

This is a minimalist portfolio site showcasing:
- Full Stack Open Source Developer profile
- Membership in react-native-community, reason-react-native, asdf-community
- Maintainer role for Japanese translations of Gatsby.js and TypeScript Website
- Links to blog, Twitter, and GitHub profiles

## Tech Stack

- **Framework**: Next.js 14 with AMP support
- **Language**: TypeScript
- **Styling**: Inline styles with Font Awesome icons
- **Deployment**: GitHub Pages via static export
- **Package Manager**: pnpm

## Development

### Prerequisites

- Node.js
- pnpm

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
- `pnpm export` - Copy additional files to output directory
- `pnpm type-check` - Run TypeScript type checking
- `pnpm deploy` - Deploy to GitHub Pages

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
└── extra/              # Additional files for deployment
```

## Features

- **AMP Optimization**: Main page is AMP-enabled for fast mobile loading
- **Static Export**: Generates static files for deployment
- **Responsive Design**: Mobile-friendly layout
- **SEO Optimized**: Meta tags for social media sharing
- **Accessibility**: ARIA labels and semantic HTML

## Deployment

The site is deployed to GitHub Pages using the following process:

1. Build the site: `pnpm build`
2. Export additional files: `pnpm export`
3. Deploy: `pnpm deploy`

The deployment script uses gh-pages to push the `out` directory to the `master` branch.

## License

MIT