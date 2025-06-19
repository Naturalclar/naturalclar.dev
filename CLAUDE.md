# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build the application for production
- `pnpm export` - Copy extra files to out directory (used after build)
- `pnpm type-check` - Run TypeScript type checking without emitting files
- `pnpm deploy` - Deploy to GitHub Pages using gh-pages

## Project Architecture

This is a Next.js-based portfolio site with AMP (Accelerated Mobile Pages) support. The project uses a component-based architecture following atomic design principles:

### Component Structure
- **Atoms** (`components/atoms/`): Basic UI elements (Avatar, Heading, Icon, Paragraph)
- **Templates** (`components/templates/`): Page layout components
- **Head** (`head/`): Meta tags and head elements

### Key Technical Details
- **AMP Support**: The main page (`pages/index.tsx`) is AMP-enabled with `export const config = { amp: true }`
- **Static Export**: Configured for static site generation with `output: "export"` in next.config.js
- **Styling**: Uses inline styles and Font Awesome icons, not styled-components despite it being in dependencies
- **TypeScript**: Configured with loose settings (`strict: false`)

### Component Patterns
- Components use inline TypeScript prop definitions
- AMP-aware components check `useAmp()` hook to render appropriate elements
- Styling is primarily done through inline style objects
- Font Awesome classes used for icons (`fa fa-${name}`)

### Deployment
The site deploys to GitHub Pages using the `deploy` script which uses gh-pages to deploy the `out` directory to the `master` branch.