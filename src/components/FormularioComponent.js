import React, { useState } from 'react'

import { FormControl } from '@mui/material';
//import {InputLabel} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import {TextField} from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
//import ListSubheader from '@mui/material/ListSubheader';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
//import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';

export const FormularioComponent = () => {
	const [usuario, setUsuario] = useState({});
	const conseguirDatosFormulario = e => {
		e.preventDefault();
		let datos = e.target;
		let usuario = {
			nombre: datos.nombre.value,
			apellido: datos.apellido.value,
			sexo: datos.sexo.value,
			biografia: datos.biografia.value,
			enviar: datos.enviar.value
		}
		console.log(usuario);
		setUsuario(usuario);
	}
	const cambiarDatos = e => {
		let name_del_input = e.target.name;
		//let usuario_para_modificar = usuario;
		//usuario_para_modificar[name_del_input] = e.target.value;
		setUsuario(estado_previo =>({
			...estado_previo,
			[name_del_input]: e.target.value
		})
		);
	}
	return (
		<div>
			<h3>Formularios con ReactJS</h3>
			{ usuario.enviar &&
				(
					<div className='info_usuario'>
						El usuario {usuario.nombre} {usuario.apellido} es un(a) {usuario.sexo} y su biografía es: {usuario.biografia}
					</div>
				)
			}
			<hr/>
			<form onSubmit={conseguirDatosFormulario}>
				<FormControl>
					<TextField label="Nombre" variant="outlined" name='nombre' onChange={cambiarDatos} />
				</FormControl>
				<FormControl>
					<TextField label="Apellido" variant="outlined" name='apellido' onChange={cambiarDatos} />
				</FormControl>
				<FormControl sx={{ minWidth: 120 }}>
					<InputLabel htmlFor="grouped-select">Sexo</InputLabel>
					<Select defaultValue="" id="grouped-select" label="Grouping" name='sexo' onChange={cambiarDatos}>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value="hombre">Hombre</MenuItem>
						<MenuItem value="mujer">Mujer</MenuItem>
					</Select>
				</FormControl>
				<br></br>
				<FormControl sx={{minWidth: 230 }}>
					<TextareaAutosize
						className='mt-1'
						aria-label="minimum height"
						minRows={2}
						placeholder="Biografía"
						name='biografia'
						style={{ width: 230 }}
						onChange={cambiarDatos}
					/>
				</FormControl>
				<br></br>
				<FormControl>
					<Button variant="contained" type="submit" value="enviar" name="enviar" endIcon={<SendIcon />} className='mt-2'>
						Enviar
					</Button>
				</FormControl>
			</form>
		</div>
	)
}
