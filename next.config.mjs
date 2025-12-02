/** @type {import('next').NextConfig} */
const nextConfig = {
  // <CHANGE> Optimized config for static portfolio site
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
}

export default nextConfig
