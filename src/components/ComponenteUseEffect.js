import React, { useEffect, useState } from 'react'

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const ComponenteUseEffect = () => {
	const [usuario, setUsuario] = useState("RP");
	const modUsuario = e => {
		setUsuario(e.target.value);
	}
	const [fecha, setFecha] = useState("01-05-1996");
	const cambiarFecha = e => {
		setFecha(Date.now());
	}
	//Se ejecuta solo una vez, solo al cargar el componente
	useEffect(() =>{
		console.log("Has cargado el componente");
	}, []);

	//Se ejecuta solo si se cambia el usuario
	useEffect(() =>{
		console.log("Has modificado el usuario");
	}, [usuario]);
	return (
		<div>
			<h3>Hook useEffect</h3>
			<Badge bg="primary">
				{usuario}
			</Badge>
			<Badge bg="primary">
				{fecha}
			</Badge>
			<Form>
				<Form.Group className="mb-3">
					<InputGroup size='lg'>
						<Form.Control
							aria-label="Text"
							type='text'
							onChange={modUsuario}
							placeholder='Cambiar nombre...' />
					</InputGroup>
					<Button variant='success' onClick={cambiarFecha}>
						Cambia Fecha
					</Button>
				</Form.Group>
			</Form>
		</div>
	)
}
