/* eslint-disable unicorn/no-process-exit */

'use strict';
import path from 'path';
import {format as formatUrl} from 'url';

import {app, BrowserWindow} from 'electron';

import argv from './cli';
import {getData} from './utils';

const isDevelopment = process.env.NODE_ENV !== 'production';
const preloadScriptPath = path.join(app.getAppPath(), 'preload.js');

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow: BrowserWindow | null;

async function createMainWindow() {
	const window = new BrowserWindow({
		webPreferences: {
			// Should be false
			nodeIntegration: true,
			// ContextIsolation: true,
			// enableRemoteModule: true,
			preload: preloadScriptPath
		}
	});

	const urlToLoad = isDevelopment
		? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		  `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
		: formatUrl({
				pathname: path.join(__dirname, 'index.html'),
				protocol: 'file',
				slashes: true
		  });

	await window.loadURL(urlToLoad);

	window.on('closed', () => {
		mainWindow = null;
	});

	window.webContents.on('devtools-opened', () => {
		window.focus();
		setImmediate(() => {
			window.focus();
		});
	});

	if (isDevelopment) {
		window.webContents.openDevTools();
	}

	return window;
}

// Quit application when all windows are closed
app.on('window-all-closed', () => {
	// On macOS it is common for applications to stay open until the user explicitly quits
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', async () => {
	// On macOS it is common to re-create a window even after all windows have been closed
	if (!mainWindow) {
		mainWindow = await createMainWindow();
	}
});

process.on('exit', () => {
	app.quit();
});

(async () => {
	if (argv.terminal) {
		try {
			const data = await getData();
			console.dir(data.serverResponse);
		} catch (error: unknown) {
			console.error(error);
		}

		process.exit(0);
	} else {
		// Create main BrowserWindow when electron is ready
		app.on('ready', async () => {
			mainWindow = await createMainWindow();
		});
	}
})();
