import React, { useEffect, useState } from 'react'

export const Empleados = React.memo (({pagina, mensaje}) => {
	const [empleados, setEmpleados] = useState([]);
	useEffect(() =>{
		//console.log("Se ha vuelto a renderizar Empleado!");
	}, [empleados])
	const conseguirEmpleados = async (p) => {
		const url = 'https://reqres.in/api/users?page=' + p;
		const peticion = await fetch(url);
		const {data: empleados} = await peticion.json();
		setEmpleados(empleados);
	}
	useEffect(() => {
		conseguirEmpleados(pagina);
		mensaje();
	}, [pagina, mensaje])
	return (
		<div>
			<p>Mostrando la página: {pagina}</p>
			<hr></hr>
			<h3>Empleados!</h3>
			<ul className='empleados'>
				{empleados.length >= 1 &&
					empleados.map(empleado => {
						return <li key={empleado.id}>{empleado.first_name + " " + empleado.last_name}</li>
					})
				}
			</ul>
		</div>
	)
})
