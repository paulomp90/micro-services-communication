import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'micro_host',
      remotes: {
        micro_header: 'micro_header@http://localhost:2002/mf-manifest.json',
        micro_body: 'micro_body@http://localhost:2001/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 2000,
  },
});
