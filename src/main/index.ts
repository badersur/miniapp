/* eslint-disable unicorn/no-process-exit */

'use strict';

import yargs from 'yargs';

import {createApp} from './gui';
import {getData} from './utils/get-data';
import {version} from '../../package.json';
import {getArguments} from './utils/get-cli-args';

const argv = getArguments();

if (argv.help || argv.version) {
	if (argv.help) {
		yargs.showHelp();
	} else if (argv.version) {
		console.log(version);
	}

	process.exit();
} else if (argv.terminal || argv.cli) {
	(async () => {
		try {
			console.log('Fetching data...');
			const data = await getData();
			console.dir(data.serverResponse);
		} catch (error) {
			console.error(error);
		}

		process.exit();
	})();
} else {
	createApp();
}
