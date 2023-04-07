import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'

export const AvisoComponente = () => {
	useEffect(() => {
		//Detecta cuando el componente se monta
		alert("El componente AvisoComponente está montado!!");
		
		//Cuando el componente se desmonta
		return () => {
			alert("Componente desmontado!");
		}
	}, []);//Se ejecuta una vez porque le paso el array vacio
	return (
		<div>
			<hr/>
			<h5>Saludos K4d4!</h5>
			<Button
				variant="light"
				onClick={e => {
					alert("Bienvenido!");
				}}
				>
				Mostar alerta!
			</Button>
		</div>
	)
}
