import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Shell from './shell';

const app = document.querySelector('#app');
if (app) {
	ReactDOM.render(
		<Shell>
			<App />
		</Shell>,
		app
	);
}
