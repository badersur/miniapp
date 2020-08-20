/* eslint-disable unicorn/no-process-exit */

'use strict';

import {createApp} from './gui';
import {getData} from './utils/get-data';
import {getArguments} from './utils/get-cli-args';

const argv = getArguments();

if (argv.terminal || argv.cli) {
	(async () => {
		try {
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
