import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './AppUseRef.css';
import { Formulario } from './components/Formulario';
import { Ejemplo } from './components/Ejemplo';

function AppUseRef () {
	return (
		<div className="App-UseRef">
			<header className="App-Routes">
				<Container>
					<Ejemplo></Ejemplo>
					<hr/>
					<Formulario></Formulario>
				</Container>
			</header>
		</div>
	)
}

export default AppUseRef