import got from 'got';

import {ServerData, ServerResponse} from 'common/types';

export async function getData(): Promise<ServerData> {
	console.log('Getting data...');
	const serverResponse: ServerResponse = await got
		.post('https://httpbin.org/post', {
			method: 'POST',
			form: {
				a: 1
			}
		})
		.json();

	return {
		serverResponse
	};
}
