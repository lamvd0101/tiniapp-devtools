#!/usr/bin/env node
import * as commands from './commands';
import {registerCommand} from './utils/cli';

registerCommand('init <folder>', 'Create a Tini App', commands.init);
registerCommand('build <folder>', 'Build the Tini App', commands.build);
