# Intentive UI

This is the main marketing and landing site for Intentive, built with Next.js 15 and integrated with the Docusaurus documentation site.

## Features

- **Modern Next.js 15** with React 19
- **Integrated Documentation** from the sibling Intentive project
- **Unified Design System** with consistent theming across marketing and docs
- **Dark/Light Mode** support
- **Responsive Design** with Tailwind CSS
- **Smart Deployment** with automatic fallback when docs aren't available

## Documentation Integration

This project integrates the Docusaurus documentation site from the sibling `intentive` project located at `../intentive/packages/docs-website`.

### How it works

1. **Build Process**: The Docusaurus site is built and copied to `public/static/docs/`
2. **Routing**: Next.js rewrites handle `/docs/*` routes to serve the static documentation
3. **Theming**: Custom CSS ensures the documentation matches the main site's design system
4. **Navigation**: Unified header with seamless navigation between marketing and docs
5. **Smart Fallback**: If the sibling project isn't available (e.g., on Vercel), a fallback docs page is created

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
# Full production build (includes docs if available)
npm run build
```

The production build automatically:
1. Checks if the sibling `intentive` project exists
2. If available: Builds the Docusaurus documentation and copies it
3. If not available: Creates a helpful fallback page with links to GitHub
4. Builds the Next.js application

### Deployment

This setup works seamlessly with **Vercel**, **Netlify**, and other platforms:

- **With sibling project** (local development): Full docs integration
- **Without sibling project** (deployments): Graceful fallback with helpful links

### Project Structure

```
intentive-ui/
├── app/                    # Next.js app directory
├── components/             # React components
├── scripts/                # Build helper scripts
│   └── build-docs-fallback.js
├── public/
│   └── static/
│       └── docs/          # Generated docs (gitignored)
├── package.json
└── next.config.mjs        # Includes docs rewrites

../intentive/packages/docs-website/  # Sibling Docusaurus project (optional)
```

## Tech Stack

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **Radix UI** - Component primitives
- **Docusaurus 3.8** - Documentation site
- **TypeScript** - Type safety 