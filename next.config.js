/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'dpm-pingpong-bucket.s3.ap-northeast-2.amazonaws.com',
      },
    ],
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
  rewrites: async () => {
    return [
      {
        source: '/api/v1/:path*',
        destination: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
