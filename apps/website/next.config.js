// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const path = require('path');


/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  experimental: {
    outputStandalone: true,
    outputFileTracingRoot: path.join(__dirname, '../../')
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['cdn.filestackcontent.com', 'disquscdn.com', 'rlcdn.com', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  reactStrictMode: true,
};

module.exports = withNx(nextConfig);
