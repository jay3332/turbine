/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
    runtime: 'experimental-edge',
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
