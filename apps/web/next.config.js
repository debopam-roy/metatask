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
  // Ensure environment variables are available
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
}

module.exports = nextConfig 