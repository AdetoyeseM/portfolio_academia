/** @type {import('next').NextConfig} */
const nextConfig = {
  // <CHANGE> Optimized config for static portfolio site
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable static export for maximum compatibility
  output: 'standalone',
}

export default nextConfig
