/** @type {import('next').NextConfig} */
const repo = 'liliana-pontes-advogada';

const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
