import React from 'react';

//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './AppFormulariosEventos.css';
import { FormularioComponent } from './components/FormularioComponent';



function AppFormulariosEventos() {
	return (
		<div className="AppuseState">
			<header className="App-headerFormulariosEventos">
				<Container>
					<FormularioComponent/>
				</Container>
			</header>
		</div>
	);
}

export default AppFormulariosEventos;