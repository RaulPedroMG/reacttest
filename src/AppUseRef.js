import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './AppUseRef.css';
import { Formulario } from './components/Formulario';

const AppUseRef = props => {
	return (
		<div className="App-UseRef">
			<header className="App-Routes">
				<Container>
					<Formulario></Formulario>
				</Container>
			</header>
		</div>
	)
}

export default AppUseRef