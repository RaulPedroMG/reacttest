import React, { useRef } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Formulario = () => {
	const nombreInput = useRef();
	const apellidoInput = useRef();
	const emailInput = useRef();
	const miCaja = useRef();
	const mostrar = e => {
		e.preventDefault();
		let {current: caja} = miCaja;
		console.log(nombreInput.current.value);
		console.log(apellidoInput.current.value);	
		console.log(emailInput.current.value);
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
				<Row>
					<Form.Group as={Col} md="4" className="mb-3" controlId="formBasicName">
						<Form.Label>Nombre</Form.Label>
						<Form.Control type="text" placeholder="Nombre" ref={nombreInput} />
					</Form.Group>
					
					<Form.Group as={Col} md="4" className="mb-3" controlId="formBasicLastname">
						<Form.Label>Apellido</Form.Label>
						<Form.Control type="text" placeholder="Apellido" ref={apellidoInput} />
					</Form.Group>
				
					<Form.Group as={Col} md="4" className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Email" ref={emailInput} />
					</Form.Group>
				</Row>
				<Row>
					<Col sm={3} className='mb-2' xs={6}>
						<div className="d-grid">
							<Button variant="primary" type="submit" value="enviar">
								Enviar
							</Button>
						</div>
					</Col>
					<Col sm={3} xs={6}>
						<div className="d-grid">
							<Button variant="success" onClick={() => nombreInput.current.select()}>
								Rellenar el formulario!
							</Button>
						</div>
					</Col>
				</Row>
			</Form>
			{/* </form> */}
		</div>
	)
}
