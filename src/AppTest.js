import React from 'react';

//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import logo from './logo.svg';
import './AppTest.css';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Bienvenida from './components/Bienvenida';
import Usuario from './components/Usuario';
import {Libros} from './components/Libros';
import {FichaMedica} from './components/FichaMedica';
import { EventosComponentes } from './eventos/EventosComponentes';

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}
  
const user = {
	firstName: 'React',
	lastName: 'JS'
};
  
const element = (
	<h5>
		Hello, {formatName(user)} desde element!
	</h5>
);

const element2 = React.createElement(
	'h5',
	{className: 'greeting'},
	'Hello, desde element2!'
);

function AppTest() {
	//const [show, setShow] = useState(true);
	const name = "Kadasoftware";
	const bienvenida = <h5 className='textedit'>Hola {name}</h5>;
	const elementbienvenida = <Bienvenida name="Sara" />;
	const fichamedica = {
		altura: "163 cm",
		gruposanguineo: "O+",
		estado: "Bueno",
		alergias: "Ninguna"
	}
	//let numero = 1234;
	return (
		<div className="AppTest">
			<header className="App-headerTest">
				<Container>
					<h2> {new Date().toLocaleTimeString()}.</h2>
					<br></br>
					{bienvenida}
					{element}
					{element2}
					<br></br>
					<hr/>
					<EventosComponentes />
					<hr/>
					<Usuario />
					<Libros />
					<hr/>
					<FichaMedica
						nombre='k4d4'
						apellido="KadaSoftware"
						ficha={fichamedica}
					/>
					<hr/>
					<Welcome
						message="Hola Welcome Props"
						name="KadaSofware_props">
					</Welcome>
					{elementbienvenida}
					<Profile></Profile>
					<br></br>
					<br></br>
					<div className="shopping-list">
						<h1>Lista de compras para</h1>
						<ul>
							<li>Instagram</li>
							<li>WhatsApp</li>
							<li>Oculus</li>
						</ul>
					</div>
				</Container>
			</header>
		</div>
	);
}

export default AppTest;