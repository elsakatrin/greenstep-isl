/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ssbptdtmzjjavisvxdpp.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['ssbptdtmzjjavisvxdpp.supabase.co'],
  },
}

module.exports = nextConfig
