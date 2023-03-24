import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const EjercicioComponente = ({year}) => {
	const [yearNow, SetYearMow] = useState(year);
	const siguiente = e => {
		SetYearMow(yearNow+1);
	}
	const anterior = e => {
		SetYearMow(yearNow-1);
	}
	return (
		<div>
			<h3>Ejercicio con Eventos y useState</h3>
			<Badge bg="success">
				{yearNow}
			</Badge>
			<p>
				<Button variant="outline-danger" onClick={anterior}>Anterior</Button>
				&nbsp;
				<Button variant="outline-danger" onClick={siguiente}>Siguiente</Button>
			</p>
		</div>
	)
}
