import yargs from 'yargs';

import {description} from '../../package.json';

const usageText = `
${description}.

Usage:
$0 [Options]
`.trim();

const {argv} = yargs.usage(usageText).options({
	help: {
		alias: ['h', 'H'],
		boolean: true,
		default: false,
		description: 'Print usage information and exit'
	},
	version: {
		alias: ['v', 'V'],
		boolean: true,
		default: false,
		description: 'Print version number and exit'
	},
	terminal: {
		alias: ['t', 'T'],
		boolean: true,
		default: false,
		description: 'Output to the terminal'
	}
});

export default argv;
