import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const EventosComponentes = () => {
	const hasDadoClic = (e, nombre) => {
		alert("Has dado clic al botón! " + nombre);
	}
	const hasDadoDobleClic = (e) => {
		alert("Has dado doble clic al botón! ");
	}
	const botonaccion = (e, accion) => {
		console.log("¡Has "+accion+" a la caja con el Mouse!");
	}
	const estasDentroInput = e => {
		console.log("¡Estás dentro del input! Escribe tu nombre...");
	}
	const estasFueraInput = e => {
		console.log("¡Estás fuera del input! Bye!");
	}
	return (
		<div>
			<h3>Eventos en React</h3>
			<p>
				{/* Evento Clic*/}
				<Button variant="primary" onClick = {e => hasDadoClic(e, "Kada")}>
					Dame clic!
				</Button>
			</p>
			<p>
				{/* Evento Double Clic*/}
				<Button variant="success" onDoubleClick = {hasDadoDobleClic}>
					Dame doble clic!
				</Button>
			</p>
			<div id="caja"
				onMouseEnter={e => botonaccion(e, "entrado")}
				onMouseLeave={e => botonaccion(e, "salido")}
			>
				{/*Evento onMouseEnter onMouseLeave*/}
				¡Pasa por encima!
			</div>
			<br/>
			<InputGroup size='lg'>
				{/* Evento con Focus y Blur*/}
				<Form.Control
					aria-label="Text"
					type='text'
					onFocus={estasDentroInput}
					onBlur={estasFueraInput}
					placeholder='Introduce tu nombre...' />
			</InputGroup>
		</div>
	)
}
