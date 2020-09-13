import got from 'got';

export async function getData(): Promise<ServerData> {
	const {node, electron} = process.versions;
	console.log(
		`Getting data using node.js v${node} & Electron v${electron}...`
	);

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
