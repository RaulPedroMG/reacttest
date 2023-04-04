import React, { useEffect, useRef, useState } from 'react'

import { Button, Row, Col } from 'react-bootstrap'

export const Ejemplo = () => {
	const [numeroSaludo, setNumeroSaludo] = useState(0);
	const saludosEnCola = useRef(numeroSaludo);
	useEffect(() =>{
		saludosEnCola.current = numeroSaludo;
		setTimeout(() => {
			console.log("Saludos en cola: " + saludosEnCola.current);
		}, 2000)
	}, [numeroSaludo])
	const enviarSaludo = e => {
		setNumeroSaludo(numeroSaludo => numeroSaludo + 1);
	}
	return (
		<div>
			<h3>Más ejemplo de useRef</h3>

			<h4>Saludos Enviados: {numeroSaludo}</h4>
			<Row>
				<Col sm={2} xs={5}>
					<div className='d-grid'>
						<Button variant="primary" onClick={enviarSaludo}>
							Enviar Saludo!!
						</Button>
					</div>
				</Col>
			</Row>
		</div>
	)
}
