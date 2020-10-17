/* eslint-disable unicorn/no-process-exit */

'use strict';

import {createApp} from './gui';
import {getData} from './utils/get-data';
import {getArguments} from './utils/get-cli-args';

const argv = getArguments();

if (argv.terminal || argv.cli) {
	(async () => {
		try {
			console.log('Getting data...');
			const data = await getData();
			console.dir(data.serverResponse);
		} catch (error: unknown) {
			console.error(error);
		}

		process.exit(0);
	})();
} else {
	createApp();
}
