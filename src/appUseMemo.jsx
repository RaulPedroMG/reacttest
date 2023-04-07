import React from 'react'

import './appUseMemo.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Gestion from './components/Gestion';
import Tareas from './components/Tareas';


function appUseMemo () {
	return (
		<div className="App-UseMemo">
			<header className="App-Routes">
				<Container>
					{/*Ejercicio con Hook useMemo*/}
					<Tareas></Tareas>
					<hr className="shine" />
					{/*Ejecicio con método memo para componentes*/}
					<Gestion></Gestion>
				</Container>
			</header>
		</div>
	)
}

export default appUseMemo