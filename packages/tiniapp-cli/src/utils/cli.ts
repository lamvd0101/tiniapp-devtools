import chalk from 'chalk';
import yargs from 'yargs';
import {ArgumentsCamelCase} from 'yargs';
import {hideBin} from 'yargs/helpers';

export function registerCommand(
  command: string,
  description: string,
  handler: (folder: string, args: any) => void,
) {
  const cmdBuilder = () => {
    console.log('\n');
    console.log(chalk.cyan(`Command: ${description}`));
  };
  const cmdHandler = (argv: ArgumentsCamelCase) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {_, $0, folder = '', ...args} = argv;

    console.log(chalk`→ Current dir: {red ${folder}}`);
    console.log(chalk`→ Current params: {red ${JSON.stringify(args)}}`);
    console.log('\n');

    handler(folder as string, args);
  };

  yargs(hideBin(process.argv))
    .command(command, description, cmdBuilder, cmdHandler)
    .demandCommand(1)
    .parse();
}
