/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  // Next.js 15 specific configurations
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
    typedRoutes: true,
  },
}

module.exports = nextConfig 