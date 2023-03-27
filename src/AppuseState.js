import React from 'react';

//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './AppuseState.css';

import { MiPrimerEstado } from './components/MiPrimerEstado';

function AppTest() {
	
	return (
		<div className="AppuseState">
			<header className="App-headeruseState">
				<Container>
					<h2>El estado en ReactJS - Hook useState</h2>
					<MiPrimerEstado/>
				</Container>
			</header>
		</div>
	);
}

export default AppTest;