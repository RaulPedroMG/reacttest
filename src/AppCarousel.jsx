import React from 'react';

import './AppCarousel.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';

import ImageLogo from './images/logo.svg';
import { Container } from 'react-bootstrap';

function AppCarousel () {
  return (
	<div className="App-Carousel">
		<header className="App-headerCarousel">
			<Container>
				<div className="gridImageslogin">
					<div className="logo">
						<img src={ImageLogo} alt="Imagen Logo" className="imgLogo" />
					</div>
					<Carousel />
				</div>
			</Container>
		</header>
	</div>
  )
}

export default AppCarousel