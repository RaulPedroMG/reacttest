import React from 'react';

//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import logo from './logo.svg';
import './AppTest.css';
import Welcome from './components/Welcome';
import Profile from './components/Profile';

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}
  
const user = {
	firstName: 'React',
	lastName: 'JS'
};
  
const element = (
	<h3>
		Hello, {formatName(user)}!
	</h3>
);

const element2 = React.createElement(
	'h3',
	{className: 'greeting'},
	'Hello, desde element2!'
);

function AppTest() {
	//const [show, setShow] = useState(true);
	const name = "Kadasoftware";
	const bienvenida = <h5 className='textedit'>Hola {name}</h5>;
	return (
		<div className="AppTest">
			<header className="App-headerTest">
				<Container>
					<h2> {new Date().toLocaleTimeString()}.</h2>
					<Welcome
						message="Hola Welcome Props"
						name="KadaSofware">
					</Welcome>
					<Profile></Profile>
					<div className="shopping-list">
						{bienvenida}
						{element}
						{element2}
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