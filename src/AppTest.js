//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import logo from './logo.svg';
import './AppTest.css';
import Welcome from './components/Welcome';

function AppTest() {
	//const [show, setShow] = useState(true);
	const name = "Kadasoftware";
	const bienvenida = <h5 className='textedit'>Hola {name}</h5>;
	return (
		<div className="AppTest">
			<header className="App-headerTest">
				<Container>
					<Welcome message="Hola Welcome Props" name="KadaSofware" />
					<div className="shopping-list">
						{bienvenida}
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