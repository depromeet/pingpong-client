/** @type {import('next').NextConfig} */

import { getDevEnv, getProdEnv } from './src/firebase/env';

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
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

    return config;
  },
  rewrites: async () => {
    const res = process.env.NEXT_PUBLIC_MODE === 'dev' ? await getDevEnv() : await getProdEnv();

    return [
      {
        source: '/:path*',
        destination: `https://${res.be}/api/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
