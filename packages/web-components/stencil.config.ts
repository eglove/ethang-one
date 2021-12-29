import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  globalStyle: '../../styles/global.css',
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
    reactOutputTarget({
      componentCorePackage: '@ethang/web-components',
      includePolyfills: true,
      proxiesFile: './react/index.ts',
    }),
  ],
  taskQueue: 'async',
};
