const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/projects/' : '',
  basePath: isProd ? '/projects' : '',
  output: 'export'
};

export default nextConfig;
