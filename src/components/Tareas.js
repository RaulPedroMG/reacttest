import React from 'react'

import { Col, Form, Row, Button } from 'react-bootstrap';

function Tareas() {
	return (
		<div>
			<h3>Mis Tareas</h3>
			<Form>
				<Row>
					<Col>
						<Form.Group as={Col} md={4} className="mb-3">
							<Form.Label>Tarea</Form.Label>
							<Form.Control type="text" name='descripcion' placeholder="Describe tu tarea..."/>
						</Form.Group>
					</Col>
					<Row>
						<Col sm={2} className='mb-2' xs={5}>
							<div className="d-grid">
								<Button variant="primary" type="submit" value="guardar">
									Enviar Tarea
								</Button>
							</div>
						</Col>
					</Row>
				</Row>
			</Form>
		</div>
	)
}

export default Tareas