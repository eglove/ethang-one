import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-components',
  outputTargets: [
    {
      dir: '../../dist/packages/web-components/dist',
      esmLoaderPath: '../loader',
      type: 'dist',
    },
    {
      dir: '../../dist/packages/web-components/www',
      serviceWorker: null, // Disable service workers
      type: 'www',
    },
  ],
  taskQueue: 'async',
};
