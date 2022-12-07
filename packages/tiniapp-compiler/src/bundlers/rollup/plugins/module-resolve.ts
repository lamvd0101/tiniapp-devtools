import nodeResolve from '@rollup/plugin-node-resolve';
import {Plugin} from 'rollup';

interface PluginOptions {
  dir?: string;
}

export const moduleResolve = (options?: PluginOptions): Plugin => {
  return nodeResolve({exportConditions: ['node']});
};
