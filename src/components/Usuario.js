import React from "react";

const Usuario = () => {

	let nombre = "Kada";
	let web = "https://www.kadasoftware.com/";

	let usuario = {
		nombre: "Kada",
		apellido: "KadaSoftware",
		web: "https://www.kadasoftware.com/"
	}

	return (
		<div className="Usuario">
			<hr/>
			<h5>Componente creado</h5>
			<h6>Datos del usuario:</h6>
			<ul>
				<li>Nombre: <strong>{nombre}</strong></li>
				<li>Web: <b>{web}</b></li>
			</ul>
			<ul>
				<li>Nombre: <strong>{usuario.nombre}</strong></li>
				<li>Apellido: <strong>{usuario.apellido}</strong></li>
				<li>Web: <strong>{usuario.web}</strong></li>
			</ul>
			<h6>Este es otro componente basado en el curso!</h6>
			<ul>
				<li>
					ReactJS
				</li>
				<li>
					React Native
				</li>
			</ul>
			<hr/>
		</div>
	)
}

export default Usuario;