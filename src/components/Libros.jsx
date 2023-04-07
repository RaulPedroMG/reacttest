import React from 'react'

export const Libros = () => {
	const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];
    return (
        <div className='Componente'>
			<h3>Listado de libros</h3>
			{libros.length >= 1 ? (
				<ul>
					{
						libros.map((libro, indice) =>{
							return <li key={indice}>{libro}</li>;
						})
					}
				</ul>
			)
			: (<p>¡No hay libros!</p>)
			}	
		</div>
    )
}
