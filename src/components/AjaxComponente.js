import React, { useEffect, useState } from 'react'

export const AjaxComponente = () => {
	const [usuarios, setUsuarios] = useState([]);
	const [cargando, setCargando] = useState(true);
	//Genérico básico
	const getUsuariosEstaticos = () => {
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
	}

	const getUsuarioAjaxPms = () => {
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
	}

	const getUsuariosAjaxAW = () => {
		setTimeout(async() => {
			const peticion = await fetch("https://reqres.in/api/users?page=1");
			const {data} = await peticion.json();
			setUsuarios(data);
			setCargando(false);
		}, 4000);
	}

	useEffect(() => {
		//getUsuariosEstaticos();
		//getUsuarioAjaxPms();
		getUsuariosAjaxAW();
	}, []);

	if (cargando === true ){
		//Cuando todo está cargando
		return(
			<div className='cargando'>
				Cargando datos...
			</div>
		);
	}else{
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
									<img src={usuario.avatar} width="50" />
								</li>
								);
						})
					}
				</ol>
			</div>
		);
	}
}
