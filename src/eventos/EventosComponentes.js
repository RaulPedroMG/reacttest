import React from 'react'

import Button from 'react-bootstrap/Button';

export const EventosComponentes = () => {
	const hasDadoClic = (e, nombre) => {
		alert("Has dado clic al botón! " + nombre);
	}
	return (
		<div>
			<h3>Eventos en React</h3>
			{/* Evento Clic*/}
			<Button variant="success" onClick = {e => hasDadoClic(e, "Kada")}>
				Dame clic!
			</Button>
		</div>
	)
}
