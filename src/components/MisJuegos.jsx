import React, { useEffect, useReducer } from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Col, FloatingLabel, Form, FormControl, FormGroup, FormText, Row } from 'react-bootstrap'

import JuegoReducer from '../reducers/JuegoReducer'

const init = () => {
	return JSON.parse(localStorage.getItem("juegos")) || [];
}

function MisJuegos() {
	const [juegos, dispatch] = useReducer(JuegoReducer, [], init);
	useEffect(() => {
		localStorage.setItem("juegos", JSON.stringify(juegos))
	}, [juegos])
	const conseguirDatosForm = e => {
		e.preventDefault();
		let juego = {
			id: new Date().getTime(),
			titulo: e.target.titulo.value,
			descripcion: e.target.descripcion.value
		}
		console.log(juego);
		const accion = {
			type: "crear",
			payload: juego
		}
		dispatch(accion);
		console.log(juegos);
	}
	const borrarjuego = id => {
		const action = {
			type: "borrar",
			payload: id
		}
		dispatch(action);
	}
	const editar = (e, id) => {
		console.log(e.target.value, "Editar, " + id);
		let juego = {
			id,
			titulo: e.target.value,
			descripcion: e.target.value
		}
		const action = {
			type: "editar",
			payload: juego
		}
		dispatch(action);
	}
	return (
		<div className='mb-3'>
			<h3>Estos son mis videojuegos</h3>
			<h5>Número de videojuegos: {juegos.length}</h5>
			<ul>
				{
					juegos.map(juego => (
						<li key={juego.id} className="mt-1">
							{juego.titulo}
							&nbsp;
							<Button variant="danger" size='sm' onClick={e => borrarjuego(juego.id)} className="mb-1">
								<FontAwesomeIcon icon="fa-solid fa-trash-can" />
							</Button>
							&nbsp;
							<div className="d-grid d-inline-block">
								<FormGroup as={Col} md={2} className="mb-3 d-inline">
									<FormControl
										type="text"
										placeholder="Editar..."
										onBlur={e => editar(e, juego.id)}
										onKeyPress={e => {
											if(e.key === "Enter"){
												editar(e, juego.id);
												console.log("Has presionado enter");
											}
										}
									}
									/>
								</FormGroup>
							</div>
						</li>	
					))
				}
			</ul>
			<hr></hr>
			<h5>Agregar juego</h5>
			<Form onSubmit={conseguirDatosForm}>
				<Row className='d-flex justify-content-center align-self-center'>
					<Col md="4" sm="4" xs="6">
						<div className="form-floating mb-3">
							<input type="text" className="form-control" name="titulo" placeholder="Escribe el título..." />
							<label htmlFor="floatingInput">Título</label>
						</div>
					</Col>
					<Col md="4" sm="4" xs="6">
						<FormGroup>
							<FloatingLabel label="Descripción">
								<FormControl as="textarea" placeholder="Descripcion" name="descripcion" />
								<FormText className="text-muted">Descripción del Videojuego</FormText>
							</FloatingLabel>
						</FormGroup>
					</Col>
				</Row>
				<Row className="justify-content-center mt-2">
					<Col md="2" sm="2" xs="4">
						<div className="d-grid">
							<Button type="submit" className="btn btn-primary">Enviar</Button>
						</div>
					</Col>
					<Col md="2" sm="2" xs="4">
					</Col>
					<Col md="2" sm="2" xs="4">
					</Col>
					<Col md="2" sm="2" xs="4">
					</Col>
				</Row>
			</Form>
		</div>
	)
}

export default MisJuegos