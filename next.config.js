/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = 'liliana-pontes-advogada';

const nextConfig = {
  output: 'export',
  basePath: isGithubActions ? `/${repo}` : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
