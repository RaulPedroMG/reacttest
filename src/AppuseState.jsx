import React from 'react';

//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './AppuseState.css';

import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponente } from './components/EjercicioComponente';

function AppUseState() {
	const fecha = new Date();
	const yearActual = fecha.getFullYear();
	return (
		<div className="AppuseState">
			<header className="App-headeruseState">
				<Container>
					<EjercicioComponente year={yearActual}/>
					<hr/>
					<h3>El estado en ReactJS - Hook useState</h3>
					<MiPrimerEstado/>
				</Container>
			</header>
		</div>
	);
}

export default AppUseState;