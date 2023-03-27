import React from 'react';

//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './AppUseEffect.css';
import { ComponenteUseEffect } from './components/ComponenteUseEffect';


function AppUseEffect() {
	return (
		<div className="AppuseState">
			<header className="App-headerUseEffect">
				<Container>
					<ComponenteUseEffect/>
				</Container>
			</header>
		</div>
	);
}

export default AppUseEffect;