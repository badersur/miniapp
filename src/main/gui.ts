'use strict';
import path from 'path';
import {format as formatUrl} from 'url';

import {app, BrowserWindow} from 'electron';

const isDevelopment = process.env.NODE_ENV !== 'production';
const preloadScriptPath = path.join(app.getAppPath(), 'preload.js');

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow: BrowserWindow | null;

function createMainWindow() {
	const window = new BrowserWindow({
		webPreferences: {
			// Should be false
			nodeIntegration: true,
			// ContextIsolation: true,
			// enableRemoteModule: true,
			preload: preloadScriptPath
		}
	});

	if (isDevelopment) {
		window.webContents.openDevTools();
	}

	if (isDevelopment) {
		void window.loadURL(
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
		);
	} else {
		void window.loadURL(
			formatUrl({
				pathname: path.join(__dirname, 'index.html'),
				protocol: 'file',
				slashes: true
			})
		);
	}

	window.on('closed', () => {
		mainWindow = null;
	});

	window.webContents.on('devtools-opened', () => {
		window.focus();
		setImmediate(() => {
			window.focus();
		});
	});

	return window;
}

export function createApp() {
	// Quit application when all windows are closed
	app.on('window-all-closed', () => {
		// On macOS it is common for applications to stay open until the user explicitly quits
		if (process.platform !== 'darwin') {
			app.quit();
		}
	});

	app.on('activate', () => {
		// On macOS it is common to re-create a window even after all windows have been closed
		if (mainWindow === null) {
			mainWindow = createMainWindow();
		}
	});

	// Create main BrowserWindow when electron is ready
	app.on('ready', () => {
		mainWindow = createMainWindow();
	});
}
