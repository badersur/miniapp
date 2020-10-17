import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

import {ServerData} from 'common/types';
import {productName} from '../../package.json';

interface AppState {
	data: ServerData | null;
	error: Error | null;
	isLoaded: boolean;
}

class App extends Component<any, AppState> {
	constructor(props: any) {
		super(props);
		this.state = {
			data: null,
			isLoaded: false,
			error: null
		};
	}

	// Lifecycle: Called whenever our component is created
	async componentDidMount() {
		try {
			// @ts-expect-error
			const data = await window.getData();
			this.setState({data, isLoaded: true});
			// eslint-disable-next-line @typescript-eslint/no-implicit-any-catch
		} catch (error) {
			console.error(error);
			this.setState({error, isLoaded: true});
		}
	}

	render() {
		const {data, isLoaded, error} = this.state;

		if (error) {
			return <div>Error: {error.message}</div>;
		}

		if (!isLoaded) {
			return <div>Loading...</div>;
		}

		if (!data) {
			return <div>No data</div>;
		}

		return (
			<>
				<Helmet>
					<meta charSet="utf-8" />
					{/* Should be in index.html but... */}
					{/* https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP */}
					<meta
						httpEquiv="Content-Security-Policy"
						content="default-src 'self'; script-src 'self'"
					/>
					<meta
						httpEquiv="X-Content-Security-Policy"
						content="default-src 'self'; script-src 'self'"
					/>
					<title>{productName}</title>
				</Helmet>

				<div className="App">
					<header className="App-header">
						<h1>Hello Mini App</h1>
						<p>Welcome back!</p>
					</header>

					<main className="App-name">
						<h2>Server Data</h2>
						<pre>
							{JSON.stringify(data.serverResponse, undefined, 4)}
						</pre>
					</main>
				</div>
			</>
		);
	}
}

export default App;
