// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'your-cdn.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
