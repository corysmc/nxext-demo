import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'my-library',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@nxext-demo/my-library',
      proxiesFile: '../../../libs/my-library-react/src/generated/components.ts',
    }),
    angularOutputTarget({
      componentCorePackage: '@nxext-demo/my-library',
      directivesProxyFile: '../../../libs/my-library-angular/src/generated/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
  ],

  plugins: [],
};
