type Command = {
  name: string;
  description: string;
  argument?: string;
};

// Commands
export const INIT_COMMAND: Command = {
  name: 'init',
  description: 'Create a Tini App',
};

export const SERVE_COMMAND: Command = {
  name: 'serve',
  description: '',
};

export const BUILD_COMMAND: Command = {
  name: 'build',
  description: 'Build the Tini App',
};

export const PACK_COMMAND: Command = {
  name: 'pack',
  description: '',
};

export const UPLOAD_COMMAND: Command = {
  name: 'upload',
  description: '',
};

export const VERSION_COMMAND: Command = {
  name: 'version',
  description: '',
  argument: 'v',
};
