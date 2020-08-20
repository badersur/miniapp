import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const app = document.querySelector('#app');
if (app) {
	ReactDOM.render(<App />, app);
}
