import React, {ReactNode} from 'react';
import {Helmet} from 'react-helmet';

import {productName} from '../../package.json';

interface ShellProps {
	children: ReactNode;
}

const Shell = ({children}: ShellProps) => {
	return (
		<>
			<Helmet>
				<title>{productName}</title>
			</Helmet>

			<div className="App">
				<header className="App-header">
					<h1>{productName}</h1>
				</header>

				<main className="App-main">{children}</main>
			</div>
		</>
	);
};

export default Shell;
