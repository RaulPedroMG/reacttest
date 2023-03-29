import React from 'react';

//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './AppFormulariosEventos.css';
import { FormularoComponent } from './components/FormularoComponent';



function AppFormulariosEventos() {
	return (
		<div className="AppuseState">
			<header className="App-headerFormulariosEventos">
				<Container>
					<FormularoComponent/>
				</Container>
			</header>
		</div>
	);
}

export default AppFormulariosEventos;