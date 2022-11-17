import chalk from 'chalk';
import minimist from 'minimist';

import {COMMAND_LIST} from './constants/commands';

const {_, ...args} = minimist(process.argv.slice(2));

((cli, opts) => {
  const [command, ...input] = cli;
  const supportCLI = false;

  console.log(cli);

  if (!supportCLI) {
    console.log(`Invalid command ${chalk.blue(command)}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const pkg = require('../package.json');

  if (opts.h || opts.help || !supportCLI) {
    console.log(`
  Welcome to Tini App CLI v${pkg.version}
  📚 Usage: ${chalk.green('tiniapp-cli')} COMMAND [ARGS]
  Displays help information
  Options:
      -h,--help\t: output usage information
  Command:
      - ${chalk.cyan('init')} <project_name>: generate a new project.
      - ${chalk.cyan('server')}: Start the miniapp server.
          tiki-miniapp server --port <port>
          Default port is 8080.
      - ${chalk.cyan('build')}: Builds the miniapp for production.
      - ${chalk.cyan('pack')} [<folder>]: Package the miniapp to a single file.
      - ${chalk.cyan(
        'publish',
      )} [<folder>]: Package and publish the miniapp to Tiki Dev Center.
          Publishes '.' folder if no argument supplied.
      - ${chalk.cyan(
        'increase_build_number',
      )} [<folder>]: Increment the build number of your project.
          tiki-miniapp increase_build_number [<folder>] --build_number <change to a specific version>
      `);
    return;
  }
  // supportCLI(input, args);
})(_, args);
