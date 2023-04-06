import React, { useMemo, useState } from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrash } from '@fortawesome/free-solid-svg-icons';

// import { FcEmptyTrash } from "react-icons/fc";
// import { FcLinux } from "react-icons/fc";

import { Col, Form, Row, Button } from 'react-bootstrap';

function Tareas() {
	const [tareas, setTareas] = useState([]);
	const [contador, setContador] = useState(1230);
	const guardarTareas = e => {
		e.preventDefault();
		let tareas_actualizadas = [...tareas, e.target.descripcion.value]
		setTareas(tareas_actualizadas);
	}
	const borrarTarea = id => {
		//Filtar las tareas para borrar la que no quiero
		let nuevas_tareas = tareas.filter((tarea, indice) => indice !== id );
		//setState, guardar el nuevo listado de tareas en el estado
		setTareas(nuevas_tareas);
	}
	const sumarAlContador = e => {
		setContador(contador => contador + 1);
	}
	const contadoresPasados = (acumulacion) => {
		for(let i = 0; i <= acumulacion; i++){
			console.log("Ejecutando acumulación de contadores del pasado");
		}
		return 'Contador manual de tareas: '+ acumulacion;
	}
	const memoContadores = useMemo (() => contadoresPasados(contador), [contador]);
	return (
		<div>
			<p>
				<i className="bi-alarm" style={{fontSize: 30}} color='cornflowerblue'></i>
				&nbsp;
				<i className="bi bi-alarm-fill text-danger" style={{ fontSize: 30 }}></i>
				&nbsp;
				<i className="bi bi-bar-chart text-success" style={{ fontSize: 30 }}></i>
			</p>
			<h3>{memoContadores}</h3>
			<Row>
				<Col sm={1} xs={3} className='mb-2'>
					<div className="d-grid">
						<Button variant="danger" onClick={sumarAlContador}>
							Sumar
						</Button>
					</div>
				</Col>
			</Row>
			<hr/>
			<h3>Mis Tareas</h3>
			<Form onSubmit={guardarTareas}>
				<Row>
					<Col>
						<Form.Group as={Col} md={4} className="mb-3">
							<Form.Label>Tarea</Form.Label>
							<Form.Control type="text" name='descripcion' placeholder="Describe tu tarea..."/>
						</Form.Group>
					</Col>
					<Row>
						<Col sm={2} xs={5} className='mb-2'>
							<div className="d-grid">
								<Button variant="primary" type="submit" value="guardar">
									Enviar Tarea
								</Button>
							</div>
						</Col>
					</Row>
				</Row>
			</Form>
			<h4>Lista de Tareas: </h4>
			{ <ul>
				{
					tareas.map((tarea, indice) => {
						return (
							<li key={indice} className='mt-2'>
								{tarea}&nbsp;
								{ <Button variant="outline-danger" size='sm' onClick={() => borrarTarea(indice)}>
									<FontAwesomeIcon icon="fa-solid fa-trash" />
								</Button> }
							</li>
						)
					})
				}
			</ul> }
		</div>
	)
}

export default Tareas