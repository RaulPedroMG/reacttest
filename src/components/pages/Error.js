import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
	return (
		<div className='mt-3 mb-3'>
            <h3>Error 404</h3>
            <strong>¡Esta página no existe!</strong>
            <br></br>
            <Link to="/inicio">Volver al inicio</Link>
		</div>
	)
}
