import React, { useEffect, useState } from 'react'

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { AvisoComponente } from './AvisoComponente';

export const ComponenteUseEffect = () => {
	const [usuario, setUsuario] = useState("RP");
	const modUsuario = e => {
		setUsuario(e.target.value);
	}
	const [fecha, setFecha] = useState("01-05-1996");
	const cambiarFecha = e => {
		setFecha(Date.now());
	}
	const [contador, setContador] = useState(0);
	//Se ejecuta solo una vez, solo al cargar el componente
	useEffect(() => {
		//console.log("Has cargado el componente");
	}, []);

	//Se ejecuta solo si se cambia el usuario
	useEffect(() =>{
		setContador(contador => contador + 1);
		//console.log("Has modificado el usuario: " + contador);
	}, [fecha, usuario]);

	return (
		<div>
			<h3>Hook useEffect</h3>
			<h3>
				<Badge bg={contador >= 6 ? "danger" : "primary"}>
					{usuario}
				</Badge>
				&nbsp;
				<Badge bg={contador >= 6 ? "danger" : "primary"}>
					{fecha}
				</Badge>
			</h3>
			<Form>
				<Form.Group className="mb-3">
					<InputGroup size='lg' className='mb-1'>
						<Form.Control
							aria-label="Text"
							type='text'
							onChange={modUsuario}
							placeholder='Cambiar nombre...' />
					</InputGroup>
					<Button variant='success' onClick={cambiarFecha}>
						Cambiar Fecha
					</Button>
				</Form.Group>
			</Form>
			{usuario === "K4d4" && <AvisoComponente/>}
		</div>
	)
}
