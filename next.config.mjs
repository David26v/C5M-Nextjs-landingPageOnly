/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'kurtzy.s3.ap-southeast-2.amazonaws.com',
          pathname: '/static/images/**',
        },
      ],
    },
  };

export default nextConfig;
