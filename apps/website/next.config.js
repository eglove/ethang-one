// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

const securityHeaders = async () => {
  return [
    {
      headers: [
        {
          key: 'Referrer-Policy',
          value: 'same-origin'
        },
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        }
      ],
      source: '/:path*'
    }
  ]
}

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  headers: securityHeaders,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['cdn.filestackcontent.com', 'disquscdn.com', 'rlcdn.com']
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  reactStrictMode: true,
};

module.exports = withNx(nextConfig);
