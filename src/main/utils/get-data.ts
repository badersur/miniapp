import nodeFetch from 'node-fetch';

export async function getData(): Promise<ServerData> {
	const {node, electron} = process.versions;
	console.log(
		`Getting data using node.js v${node} & Electron v${electron}...`
	);

	const parameters = new URLSearchParams();
	parameters.append('a', '1');

	const response = await nodeFetch('https://httpbin.org/post', {
		method: 'POST',
		body: parameters
	});
	const serverResponse = (await response.json()) as ServerResponse;

	return {
		serverResponse
	};
}
