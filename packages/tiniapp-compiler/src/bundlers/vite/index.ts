import path from 'path';
import {defineConfig as viteDefineConfig} from 'vite';

import {appJson, moduleResolve} from '../rollup/plugins';

type Mode = 'production' | 'development';

interface ViteConfigs {
  type: 'worker' | 'render'; // Type of compiler
  rootDir?: string; // The current working directory
  outDir?: string; // The output directory,
  appDir?: string; // The folder contain app.json file
  mode?: Mode; // Environment of Tini App
  enableHMR?: boolean;
  port?: string; // Auto generate port
}

function getCdnBaseUrl(mode?: Mode) {
  if (process.env.PUBLIC_PATH) {
    return process.env.PUBLIC_PATH;
  } else if (mode === 'production') {
    throw new Error('PUBLIC_PATH in production mode is required.');
  }
}

export function defineConfig(configs: ViteConfigs) {
  const cdnBaseUrl = getCdnBaseUrl(configs.mode);
  const appJsonPath = path.join(configs.appDir, 'app.json');

  return viteDefineConfig({
    root: path.resolve(configs.rootDir, 'src'),
    plugins: [appJson(), moduleResolve()],
    build: {
      lib: {
        name: configs.type,
        fileName: 'index',
        entry: 'index.ts',
        formats: ['es'],
      },
      outDir: '../dist',
    },
  });
}
