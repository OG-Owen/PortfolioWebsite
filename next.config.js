/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PortfolioWebsite',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
