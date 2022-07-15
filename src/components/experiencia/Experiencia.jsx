import React from 'react'
import './Experiencia.css'
import vector3 from '../../assets/img/Vector3.png'
import vector2 from '../../assets/img/Vector2.png'

export const Experiencia = () => {
  return (
	<section className='experiencia-contenedor'>
		<div className="experiencia-principal grid1">
			<img src={vector3} alt="vector" />
			<img src={vector2} alt="vector" />
			<span>Diseño de páginas web</span>
		</div>
		<div className="experiencia-principal grid2">
			<img src={vector3} alt="vector" />
			<img src={vector2} alt="vector" />
			<span>Tiendas en linea</span>
		</div>
		<div className="experiencia-principal grid3">
			<img src={vector3} alt="vector" />
			<img src={vector2} alt="vector" />
			<span>Desarrollo web seo</span>
		</div>

	</section>
  )
}
