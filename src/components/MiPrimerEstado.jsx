import React, {useState} from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const MiPrimerEstado = () => {

	/*
	//Problema de no usar useState
	let nombre = "KadaSoftware";

	 const cambiarnombre = e => {
		nombre = "K4d4";
	}*/
	const [nombre, setNombre] = useState("KadaSoftware");
	const cambiarNombre = (e, nombreFijo) => {
		setNombre(nombreFijo);
		console.log(e.target);
	}
	return (
		<div>
			<h4>Componente: Mi primer estado</h4>
			<strong>
				{nombre}
			</strong>
			<br></br>
			<Button onClick={e => cambiarNombre(e, "K4d4Software")}>
				Cambiar nombre
			</Button>
			<hr/>
			<InputGroup size='lg'>
				{/* Evento con Focus y Blur*/}
				<Form.Control
					aria-label="Text"
					type='text'
					onChange={e => cambiarNombre(e, e.target.value)}
					placeholder='Cambiar nombre...' />
			</InputGroup>
		</div>
	)
}
