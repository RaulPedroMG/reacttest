import React from 'react';

//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './AppRouters.css';
import { RouterPrincipal } from './components/routers/RouterPrincipal';



function AppRouters() {
	return (
		<div className="AppRouters">
			<header className="App-Routes">
				<Container>
					<RouterPrincipal />
				</Container>
			</header>
		</div>
	);
}

export default AppRouters;