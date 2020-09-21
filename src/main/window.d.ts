type ServerRecord = Record<string, unknown>;

interface KnownServerResponse {
	args: ServerRecord;
	data: string;
	files: ServerRecord;
	form: ServerRecord;
	headers:
		| {
				Accept: string;
				'Accept-Encoding': string;
				'Content-Length': string;
				'Content-Type': string;
				Host: string;
				'User-Agent': string;
				'X-Amzn-Trace-Id': string;
		  }
		| ServerRecord;
	json: null | ServerRecord;
	origin: string;
	url: string;
}

type ServerResponse = KnownServerResponse | ServerRecord;

interface ServerData {
	serverResponse: ServerResponse;
}

type GetData = () => Promise<ServerData>;

interface Window {
	getData: GetData;
}

// Declare const getData: GetData;
