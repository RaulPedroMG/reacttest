import React from 'react'
import PropTypes from 'prop-types';

export const FichaMedica = ({
								nombre,
								apellido,
								ficha
							}) => {
	return (
		<div>
			<h3>Comunicación entre componentes</h3>
			<ul>
				<li>{nombre}</li>
				<li>{apellido}</li>
				<li>{ficha.altura}</li>
				<li>{ficha.gruposanguineo}</li>
			</ul>
		</div>
	)
}

FichaMedica.propTypes = {
	nombre:  PropTypes.string.isRequired,
	apellido:  PropTypes.string.isRequired,
	ficha: PropTypes.object
}

FichaMedica.defaultProps = {
	nombre: "RP",
	apellido: "MG",
}