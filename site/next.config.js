/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Bahr Images',
    description: 'Personal images.',
    icon: '/img/logo.svg',
    listUrl: 'https://insyria.github.io/kasm-registry/',
    contactUrl: 'https://github.com/insyria/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
