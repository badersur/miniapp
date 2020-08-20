import yargs from 'yargs';

import {description} from '../../../package.json';

const usageText = `${description}.

Usage:
$0 [Options]`;

const {argv} = yargs.usage(usageText).options({
	help: {
		alias: ['h', 'H'],
		boolean: true,
		default: false,
		description: 'Output usage information'
	},
	version: {
		alias: ['v', 'V'],
		boolean: true,
		default: false,
		description: 'Output version number'
	},
	cli: {
		alias: ['c', 'C'],
		boolean: true,
		default: false,
		description: 'Output to the CLI'
	},
	terminal: {
		alias: ['t', 'T'],
		boolean: true,
		default: false,
		description: 'Similar to cli option'
	}
});

export function getArguments() {
	return argv;
}
