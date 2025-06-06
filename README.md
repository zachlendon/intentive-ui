# Intentive UI

This is the main marketing and landing site for Intentive, built with Next.js 15 and integrated with the Docusaurus documentation site.

## Features

- **Modern Next.js 15** with React 19
- **Integrated Documentation** from the sibling Intentive project
- **Unified Design System** with consistent theming across marketing and docs
- **Dark/Light Mode** support
- **Responsive Design** with Tailwind CSS

## Documentation Integration

This project integrates the Docusaurus documentation site from the sibling `intentive` project located at `../intentive/packages/docs-website`.

### How it works

1. **Build Process**: The Docusaurus site is built and copied to `public/docs-static/`
2. **Routing**: Next.js rewrites handle `/docs/*` routes to serve the static documentation
3. **Theming**: Custom CSS ensures the documentation matches the main site's design system
4. **Navigation**: Unified header with seamless navigation between marketing and docs

### Development

```bash
# Start development server (without docs)
npm run dev

# Build and serve with documentation
npm run dev:with-docs

# Build documentation only
npm run build:docs:dev
```

### Production Build

```bash
# Full production build (includes docs)
npm run build
```

The production build automatically:
1. Builds the Docusaurus documentation
2. Copies it to the public directory
3. Builds the Next.js application

### Project Structure

```
intentive-ui/
├── app/                    # Next.js app directory
├── components/             # React components
├── public/
│   └── docs-static/       # Generated docs (gitignored)
├── package.json
└── next.config.mjs        # Includes docs rewrites

../intentive/packages/docs-website/  # Sibling Docusaurus project
```

## Tech Stack

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **Radix UI** - Component primitives
- **Docusaurus 3.8** - Documentation site
- **TypeScript** - Type safety 