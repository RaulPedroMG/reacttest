import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {
	let {nombre = "Kada", apellido = "Software"} = useParams();
	return (
		<div>
			<h3>Esta es la página de Persona</h3>
			<h4>La persona es: {nombre} {apellido}</h4>
		</div>
	)
}
