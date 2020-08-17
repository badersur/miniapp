import nodeFetch from 'node-fetch';

export async function getData(): Promise<ServerData> {
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
