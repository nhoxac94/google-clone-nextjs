/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['mobileworld.com.vn', 'upload.wikimedia.org'],
  },
};

module.exports = nextConfig;
