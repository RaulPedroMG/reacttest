import React from 'react'

import './AppLayoutEffect.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ComponenteLayoutEffect from './components/ComponenteLayoutEffect';


function AppLayoutEffect () {
	return (
		<div className="App-LayoutEffect">
			<header className="App-headerLayoutEffect">
				<Container>
					<ComponenteLayoutEffect></ComponenteLayoutEffect>
				</Container>
			</header>
		</div>
	)
}

export default AppLayoutEffect