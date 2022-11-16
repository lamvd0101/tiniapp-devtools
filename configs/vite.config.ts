import nodeResolve from '@rollup/plugin-node-resolve';
import path from 'path';
import {defineConfig as viteDefineConfig} from 'vite';

export function defineConfig(opts: {name: string; dir: string}) {
  return viteDefineConfig(({mode}) => {
    return {
      mode: mode,
      root: path.resolve(opts.dir, 'src'),
      plugins: [nodeResolve({exportConditions: ['node']})],
      build: {
        lib: {
          name: opts.name,
          fileName: 'index',
          entry: 'index.ts',
          formats: ['es'],
        },
        outDir: '../dist',
      },
    };
  });
}
