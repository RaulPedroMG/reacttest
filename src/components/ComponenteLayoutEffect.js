import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';

const ComponenteLayoutEffect = () => {
	const [mostrar, setMostrar] = useState(false);
	const caja = useRef();
	const boton = useRef();
	useEffect (() => {
		console.log("useEffect");
		if(caja.current == null) return
		const {bottom} = boton.current.getBoundingClientRect();
		caja.current.style.marginTop = `${bottom + 45}px`;
		caja.current.style.marginLeft = `${bottom + 5}px`;
		// let caja = document.querySelector("#caja");
		// caja.innerHTML = "<h4>Hola2</h4>";
		// console.log(caja.getBoundingClientRect());
	},[mostrar])
	useLayoutEffect (() => {
		console.log("useLayoutEffect");
		// if(caja.current == null) return
		// const {bottom} = boton.current.getBoundingClientRect();
		// caja.current.style.marginTop = `${bottom + 45}px`;
		// caja.current.style.marginLeft = `${bottom + 5}px`;


		// let caja = document.querySelector("#caja");
		// caja.innerHTML = "<h4>Hola</h4>";
		// console.log(caja.getBoundingClientRect());
	}, [])
	return (
		<div className='mb-1'>
			<h3>Ejemplo useEffect y useLayoutEffect</h3>
			<Row className="mt-3">
				<Col sm={2} xs={5} className='mb-2'>
					<div className="d-grid">
						<Button variant="success" ref={boton} onClick={() => setMostrar(prev => {
							console.log(!prev);
							return !prev
						})}>
							Mostrar mensaje
						</Button>
					</div>
				</Col>
			</Row>
			{mostrar && (
				<div id="caja" ref={caja}>
					<h4>Soy un mensaje!</h4>
				</div>
			)}
		</div>
	)
}

export default ComponenteLayoutEffect