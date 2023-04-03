import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {
	//Valores por defectos, parámetros opcionales
	//let {nombre = "Kada", apellido = "Software"} = useParams();
	const {nombre, apellido} = useParams();
	return (
		<div>
			{!nombre && <h3>No hay persona que mostrar!</h3>}
			{nombre &&
				<div>
					<h3>Esta es la página de Persona</h3>
					<h4>La persona es: {nombre} {apellido}</h4>
				</div>
			}
		</div>
	)
}
