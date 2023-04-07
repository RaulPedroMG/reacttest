import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
	return (
		<div className='mt-3 mb-3'>
			<h3>Panel de Control</h3>
			<p>Elige una de estás opciones:</p>
			<nav>
				<ul>
					<li>
						<NavLink to='/panel/inicio'>Inicio</NavLink>
					</li>
					<li>
						<NavLink to='/panel/crear-articulos'>Crear Artículos</NavLink>
					</li>
					<li>
						<NavLink to='/panel/gestion-usuarios'>Gestión de Usuarios</NavLink>
					</li>
					<li>
						<NavLink to='/panel/acerca-de'>Acerca de</NavLink>
					</li>
				</ul>
			</nav>
			<div>
				<Outlet></Outlet>
			</div>
		</div>
	)
}
