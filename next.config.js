/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dolf-website',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/dolf-website/',
}

module.exports = nextConfig 