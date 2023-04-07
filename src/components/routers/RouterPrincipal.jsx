import React from 'react';

import {Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom';
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
import { PanelControl } from '../pages/PanelControl';

import SettingsIcon from '@mui/icons-material/Settings';

import { PanelInicio } from '../panel/PanelInicio';
import { Crear } from '../panel/Crear';
import { Gestion } from '../panel/Gestion';
import { Acerca } from '../panel/Acerca';

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
					<Tabs value={value} onChange={handleChange} centered variant="fullWidth">
						<Tab label="Inicio"
							icon={<HomeIcon />}
							component={NavLink}
							to="/inicio"
						/>
						<Tab label="Artículos"
							icon={<AppsSharpIcon />}
							component={NavLink}
							to="/articulos"
						/>
						<Tab label="Contacto"
							icon={<MailSharpIcon />}
							component={NavLink}
							to="/contacto"
						/>
						<Tab label="Panel de Control"
							icon={<SettingsIcon/>}
							component={NavLink}
							to="/panel"
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
					<Route path='/redirigir' element={<Navigate to="/persona/RaulPedro/MéndezGarcía" />} />
					<Route path='/panel/*' element={<PanelControl />}>
					<Route path='inicio' element={<PanelInicio />} />
						<Route index element={<PanelInicio />} />
						<Route path='crear-articulos' element={<Crear />} />
						<Route path='gestion-usuarios' element={<Gestion />} />
						<Route path='acerca-de' element={<Acerca />} />
					</Route>
					<Route path='*' element={<Error></Error>}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}
