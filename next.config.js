/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  "trailingSlash": true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId}) 
  {
    return {
    '/': { page: '/' },
    '/shop': { page: '/shop' },
    '/the-rock': { page: '/the-rock' }
  }
}, 

eslint: {
  ignoreDuringBuilds: true,
}, 

  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
