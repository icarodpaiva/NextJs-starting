/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i0.wp.com"],
    formats: ["image/webp"]
  }
}

module.exports = nextConfig
