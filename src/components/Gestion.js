import React, { useCallback, useEffect, useState } from 'react'
import { Empleados } from './Empleados'
import { Col, Form, Row, Button } from 'react-bootstrap';

function Gestion () {
	const [nombre, setNombre] = useState("");
	const [pagina, setPagina] = useState(1);
	const asignarGestor = e => {
		setNombre(e.target.value);
	}
	useEffect(() => {
		console.log("Vista gestión actualizada!");
	}, [nombre, pagina])
	const mostrarMensaje = useCallback(() => {
		//console.log("Hola, soy un mensaje desde el componenete Empleados");
	}, [pagina]);
	return (
		<div>
			<h3>Nombre del gestor: {nombre}!</h3>
			<Form>
				<Row>
					<Col>
						<Form.Group as={Col} md={4} className="mb-3">
							<Form.Label>Nombre</Form.Label>
							<Form.Control type="text" placeholder="Introduce el nombre del gestor..." onChange={asignarGestor} />
						</Form.Group>
					</Col>
				</Row>
			</Form>
			<h4>Listado de empleados...</h4>
			<p>Los usuarios son gestionados por: {nombre} y vienen del jsonplaceholder...</p>
			<Row>
				<Col className='mb-2' sm={2} xs={6}>
					<div className="d-grid">
						<Button variant="outline-danger" onClick={() => {setPagina(1)}}>
							Página 1
						</Button>
					</div>
				</Col>
				<Col sm={2} xs={6}>
					<div className="d-grid">
						<Button variant="outline-dark" onClick={() => {setPagina(2)}}>
							Página 2
						</Button>
					</div>
				</Col>
			</Row>
			<Empleados pagina={pagina} mensaje={mostrarMensaje} />
		</div>
	)
}

export default Gestion