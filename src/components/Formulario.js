import React, { useRef } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Formulario = () => {
	const nombreValue = useRef();
	const apellidoValue = useRef();
	const emailValue = useRef();
	const miCaja = useRef();
	const mostrar = e => {
		e.preventDefault();
		let {current: caja} = miCaja;
		console.log(nombreValue.current.value);
		console.log(apellidoValue.current.value);	
		console.log(emailValue.current.value);
		console.log(miCaja);
		caja.classList.add("fondoverde");
		caja.innerHTML = "<h3>Formulario enviado</h3>";
	}
	return (
		<div>
			<h3>Formulario</h3>
			{/* <form> */}
			<div ref={miCaja} className="miCaja">
				<h3>Prueba con useRef</h3>
			</div>
			<Form onSubmit={mostrar}>
				<Row className="mb-3">
					<Form.Group as={Col} md="4" className="mb-3" controlId="formBasicName">
						<Form.Label>Nombre</Form.Label>
						<Form.Control type="text" placeholder="Nombre" ref={nombreValue} />
					</Form.Group>
					
					<Form.Group as={Col} md="4" className="mb-3" controlId="formBasicLastname">
						<Form.Label>Apellido</Form.Label>
						<Form.Control type="text" placeholder="Apellido" ref={apellidoValue} />
					</Form.Group>
				
					<Form.Group as={Col} md="4" className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Email" ref={emailValue} />
					</Form.Group>
				</Row>
				<Button variant="primary" type="submit" value="enviar">
					Enviar
				</Button>
			</Form>
			{/* </form> */}
		</div>
	)
}
