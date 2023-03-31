import React, { useEffect, useState } from 'react'

import Alert from 'react-bootstrap/Alert';

export const AjaxComponente = () => {
	const [usuarios, setUsuarios] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [errores, setErrores] = useState("");
	
	useEffect(() => {
		//getUsuariosEstaticos();
		//getUsuarioAjaxPms();
		getUsuariosAjaxAW();
	}, []);

	//Genérico básico
	/*const getUsuariosEstaticos = () => {
		setUsuarios([
			{
				"id": 1,
				"email": "kada@reqres.in",
				"first_name": "Kada",
				"last_name": "Lawson",
				"avatar": "https://reqres.in/img/faces/7-image.jpg"
			},
			{
				"id": 2,
				"email": "juan@reqres.in",
				"first_name": "Juan",
				"last_name": "Ferguson",
				"avatar": "https://reqres.in/img/faces/8-image.jpg"
			},
			{
				"id": 3,
				"email": "pepe@reqres.in",
				"first_name": "Pepe",
				"last_name": "Funke",
				"avatar": "https://reqres.in/img/faces/9-image.jpg"
			}
		]);
	}*/

	/*const getUsuarioAjaxPms = () => {
		fetch("https://reqres.in/api/users?page=1")
			.then(respuesta => respuesta.json())
			.then(
				resultado_final => {
					setUsuarios(resultado_final.data);
					console.log(usuarios);
				},
				error => {
					console.log(error);
				}
			)
	}*/

	const getUsuariosAjaxAW = () => {
		setTimeout(async() => {
			try{
				const peticion = await fetch("https://reqres.in/api/users?page=1");
				const {data} = await peticion.json();
				setUsuarios(data);
				setCargando(false);
			}catch(error){
				console.log(error);
				setErrores(error.message);
			}
		}, 4000);
	}

	if (errores !== ""){
		//Cuando hay errores
		return(
			<Alert variant="danger" onClose={() => {}} dismissible>
				<Alert.Heading>Error!</Alert.Heading>
				<p>
					{errores}
				</p>
			</Alert>
		)
	}else if (cargando === true ){
		//Cuando todo está cargando
		return(
			<div className='cargando'>
				Cargando datos...
			</div>
		);
	}else if(cargando === false && errores === ""){
		return(
			//Cuando todo salió bien
			<div>
				<h3>Listado de usuarios via Ajax</h3>
				<ol className='usuarios'>
					{
						usuarios.map(usuario => {
							console.log(usuario);
							return (
								<li key={usuario.id}>
									{usuario.first_name}&nbsp;
									{usuario.last_name}<br></br>
									<img alt={"imagen usuario "+usuario.id} src={usuario.avatar} width="100" />
								</li>
								);
						})
					}
				</ol>
			</div>
		);
	}
}
