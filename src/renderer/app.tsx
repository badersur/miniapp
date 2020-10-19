import React, {Component} from 'react';

import {ServerData} from 'common/types';

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
			return <div className="App-error">Error: {error.message}</div>;
		}

		if (!isLoaded) {
			return <div className="App-loading">Loading...</div>;
		}

		if (!data) {
			return <div className="App-no-data">No data</div>;
		}

		return (
			<div className="App-data">
				<h2>Server Data</h2>
				<pre>{JSON.stringify(data.serverResponse, undefined, 4)}</pre>
			</div>
		);
	}
}

export default App;
