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
  experimental: {
    runtime: 'nodejs',
    serverComponents: true
  },
  headers: securityHeaders,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['cdn.filestackcontent.com']
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  }
};

module.exports = withNx(nextConfig);
