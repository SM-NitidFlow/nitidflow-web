/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite compilar sin pisar el .next que usa `next dev`:
  //   NEXT_DIST_DIR=.next-build npm run build
  distDir: process.env.NEXT_DIST_DIR || '.next',
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
