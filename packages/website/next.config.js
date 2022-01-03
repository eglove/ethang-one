// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-require-imports,unicorn/prefer-module
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'ph-files.imgix.net'],
    formats: ['image/avif', 'image/webp'],
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  reactStrictMode: true,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,unicorn/prefer-module
module.exports = withNx(nextConfig);
