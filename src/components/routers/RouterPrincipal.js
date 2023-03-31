import React from 'react';

import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import { Inicio } from '../pages/Inicio';
import { Articulos } from '../pages/Articulos';
import { Contacto } from '../pages/Contacto';
import { Error } from '../pages/Error';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import HomeIcon from '@mui/icons-material/Home';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import { Persona } from '../pages/Persona';

export const RouterPrincipal = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<div>
			<BrowserRouter>
				{/* <nav id="sidebar" className='mt-3'>
					<ul>
						<li>
							<NavLink to="/inicio">Inicio</NavLink>
						</li>
						<li>
							<NavLink to="/articulos">Articulos</NavLink>
						</li>
						<li>
							<NavLink to="/contacto">Contacto</NavLink>
						</li>
					</ul>
				</nav> */}
				<Box sx={{ width: '100%' }} className="mt-4">
					<Tabs value={value} onChange={handleChange} centered>
						<Tab label="Inicio"
							icon={<HomeIcon />}
							component={NavLink}
							to="/inicio"
							className="Mui-selected"
						/>
						<Tab label="Artículos"
							icon={<AppsSharpIcon />}
							component={NavLink}
							to="/articulos"
							className="Mui-selected"
						/>
						<Tab label="Contacto"
							icon={<MailSharpIcon />}
							component={NavLink}
							to="/contacto"
							className="Mui-selected"	
						/>
					</Tabs>
				</Box>
				<Routes>
					<Route path='/' element={<Inicio></Inicio>} />
					<Route path='/inicio' element={<Inicio></Inicio>} />
					<Route path='/articulos' element={<Articulos></Articulos>} />
					<Route path='/contacto' element={<Contacto></Contacto>} />
					<Route path='/persona' element={<Persona></Persona>} />
					<Route path='/persona/:nombre' element={<Persona></Persona>} />
					<Route path='/persona/:nombre/:apellido' element={<Persona></Persona>} />
					<Route path='*' element={<Error></Error>}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}
