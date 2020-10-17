import {ServerData} from 'common/types';

type GetData = () => Promise<ServerData>;

interface Window {
	getData: GetData;
}

// declare const getData: GetData;
