import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const nextConfig = {
  ...withNextra(),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  rewrites: async () => [],
};

export default nextConfig;

