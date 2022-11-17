import {defineConfig} from '@tiniapp/compiler';
import {build as viteBuild} from 'vite';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function build(folder: string, args = {mode: 'production'}) {
  const config = defineConfig({name: 'tiniapp-cli', dir: folder});
  viteBuild({...config, envDir: undefined, configFile: undefined});
}
