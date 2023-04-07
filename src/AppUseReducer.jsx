import React from 'react'

import './AppUseReducer.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import MisJuegos from './components/MisJuegos';



function AppUseReducer () {
	return (
		<div className="App-UseReducer">
			<header className="App-headerUseReducer">
				<Container>
					<MisJuegos></MisJuegos>
				</Container>
			</header>
		</div>
	)
}

export default AppUseReducer