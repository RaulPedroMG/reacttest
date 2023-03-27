import React from 'react'

import Button from 'react-bootstrap/Button';

export const MiPrimerEstado = () => {
	let nombre = "KadaSoftware";

	const cambiarnombre = e => {
		nombre = "K4d4";
	}

	return (
		<div>
			<h3>Componente: Mi primer estado</h3>
			<strong>
				{nombre}
			</strong>
			<br></br>
			<Button onClick={ cambiarnombre}>
				Cambiar nombre
			</Button>
		</div>
	)
}
