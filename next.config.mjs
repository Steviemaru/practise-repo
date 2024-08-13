/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "coin-images.coingecko.com",
        port: '',
        pathname: '/coins/**',
      },
    ],
  },
  reactStrictMode: true,
  webpack(config) {
      config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
      });

      return config;
  },
};

export default nextConfig;