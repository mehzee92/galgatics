/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: false,
  swcMinify: true,
  eslint: { ignoreDuringBuilds: true, }
};

module.exports = nextConfig;


