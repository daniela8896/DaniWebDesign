import React from 'react'
import './Card.css'

const Card = ({ emoji, titulo, detalles }) => {
  return (
	<div className='card-contenedor'>
         <img src={emoji} alt="emoji" />
		 <span>{titulo}</span>
		 <span>{detalles}</span>
		 <button className='btn-c'>Leer mas...</button>
	</div>
  )
}

export default Card