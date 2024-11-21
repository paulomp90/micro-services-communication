import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact({
      swcReactOptions: {
        importSource: '@emotion/react',
      },
    }),
    pluginModuleFederation({
      name: 'micro_header',
      exposes: {
        './app': './src/App.tsx',
      },
      shared: [
        { react: { requiredVersion: '18.3.1' } },
        { 'react-dom': { requiredVersion: '18.3.1' } },
        { '@emotion/react': { requiredVersion: '11.13.5' } },
      ],
    }),
  ],
  server: {
    port: 2002,
  },
  tools: {
    swc: {
      jsc: {
        experimental: {
          plugins: [['@swc/plugin-emotion', {}]],
        },
      },
    },
  },
});
