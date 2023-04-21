import React from 'react';

import './AppCarousel.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';

import ImageLogo from './images/logo.svg';

function AppCarousel () {
  return (
	<div className="App-Carousel">
		<header className="App-headerCarousel">
			<div className="gridImageslogin">
				<div className="logo">
					<img src={ImageLogo} alt="Imagen Logo" className="imgLogo" />
				</div>
				<Carousel/>
			</div>
		</header>
	</div>
  )
}

export default AppCarousel