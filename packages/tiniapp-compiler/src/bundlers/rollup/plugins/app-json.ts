import {Plugin} from 'rollup';

interface PluginOptions {
  dir?: string;
}

export const appJson = (options?: PluginOptions): Plugin => {
  return {
    name: 'app-json',
  };
};
