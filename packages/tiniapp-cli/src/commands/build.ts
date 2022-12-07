import {defineViteConfig} from '@tiniapp/compiler';
import {build as viteBuild} from 'vite';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function build(folder: string, args = {mode: 'production'}) {
  const config = defineViteConfig({
    type: 'worker',
    rootDir: folder,
    // mode: 'production',
  });
  viteBuild({...config, envDir: undefined, configFile: undefined});
}
