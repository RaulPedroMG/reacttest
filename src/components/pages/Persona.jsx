import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { FormControl, TextField } from '@mui/material';
import Button from '@mui/material/Button';

export const Persona = () => {
	//Valores por defectos, parámetros opcionales
	//let {nombre = "Kada", apellido = "Software"} = useParams();
	const {nombre, apellido} = useParams();
	const navegar = useNavigate();
	const enviar = (e) => {
		e.preventDefault();
		let nombre = e.target.nombre.value;
		let apellido = e.target.apellido.value;
		let url = "/persona/"+nombre+"/"+apellido;
		if(nombre.length <= 0 && apellido.length <= 0){
			navegar("/");
		}else if(nombre === "contacto"){
			navegar("/contacto");
		}
		else{
			navegar(url);
		}
	}
	return (
		<div>
			{!nombre && <h3>No hay persona que mostrar!</h3>}
			{nombre &&
				<div className='mb-3'>
					<h3>Esta es la página de Persona</h3>
					<h4>La persona es: {nombre} {apellido}</h4>
					<hr />
				</div>
			}
			<form onSubmit={enviar} className='mb-4'>
				<FormControl>
					<TextField label="Nombre" variant="outlined" name='nombre' />
				</FormControl>
				<FormControl>
					<TextField label="Apellido" variant="outlined" name='apellido'/>
				</FormControl>
				<br></br>
				<FormControl>
					<Button variant="contained" type="submit" value="enviar" name="enviar" className='mt-2'>
						Enviar
					</Button>
				</FormControl>
			</form>
		</div>
	)
}
