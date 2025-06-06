/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configure rewrites to handle docs routes ONLY
  async rewrites() {
    return [
      // Serve the docs index page for both /docs and /docs/
      {
        source: '/docs',
        destination: '/static/docs/index.html',
      },
      {
        source: '/docs/',
        destination: '/static/docs/index.html',
      },
      // Handle static assets (CSS, JS, images) - these must come before the general path matching
      {
        source: '/docs/assets/:path*',
        destination: '/static/docs/assets/:path*',
      },
      {
        source: '/docs/img/:path*',
        destination: '/static/docs/img/:path*',
      },
      // Handle other static files
      {
        source: '/docs/sitemap.xml',
        destination: '/static/docs/sitemap.xml',
      },
      {
        source: '/docs/404.html',
        destination: '/static/docs/404.html',
      },
      // Handle doc pages - try directory with index.html first
      {
        source: '/docs/:path+',
        destination: '/static/docs/:path*/index.html',
      },
      // Fallback for direct file access
      {
        source: '/docs/:path+',
        destination: '/static/docs/:path*',
      },
    ]
  },
  trailingSlash: false,
}

export default nextConfig
