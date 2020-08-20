type ServerResponse = Record<string, unknown>;

interface ServerData {
	serverResponse: ServerResponse;
}

type GetData = () => Promise<ServerData>;

interface Window {
	getData: GetData;
}

// Declare const getData: GetData;
