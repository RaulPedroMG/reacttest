import React from 'react'

import { FormControl } from '@mui/material';
//import {InputLabel} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import {TextField} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const FormularoComponent = () => {
	const [sexo, setSexo] = React.useState('');
	const handleChange = (event: SelectChangeEvent) => {
		setSexo(event.target.value);
	};
	return (
		<div>
			<h3>Formularios con ReactJS</h3>
			<form>
				<FormControl>
					<TextField label="Nombre" variant="outlined"/>
				</FormControl>
				<FormControl>
					<TextField label="Apellido" variant="outlined"/>
				</FormControl>
				<FormControl sx={{minWidth: 230 }}>
					<InputLabel id="demo-simple-select-helper-label">Sexo</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						value={sexo}
						label="Age"
						onChange={handleChange}
					>
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
						aria-label="minimum height"
						minRows={2}
						placeholder="Biografía"
						style={{ width: 230 }}
					/>
				</FormControl>
				<br></br>
				<FormControl>
					<Button sx={{ mt: 1, mr: 1 }} type="submit" variant="contained" endIcon={<SendIcon />}>
						Enviar
					</Button>
				</FormControl>
			</form>
		</div>
	)
}
