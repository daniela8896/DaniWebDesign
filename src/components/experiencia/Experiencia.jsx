import React from 'react'
import './Experiencia.css'
import vector3 from '../../assets/img/Vector3.png'
import vector2 from '../../assets/img/Vector2.png'
import {motion} from 'framer-motion'

const Experiencia = () => {
	
  return (
	<section className='experiencia-contenedor'>
		<div className="experiencia-principal grid1">
			<motion.img
			 initial={{ rotate: 45 }}
			 whileInView={{ rotate: 0 }}
			 viewport={{ margin: "-40px" }}
			 transition={{ duration: 3.5, type: "spring" }}
			src={vector3} alt="vector" />
			<img src={vector2} alt="vector" />
			<span>Diseño de páginas web</span>
		</div>
		<div className="experiencia-principal grid2">
			<motion.img
			 initial={{ rotate: 45 }}
			 whileInView={{ rotate: 0 }}
			 viewport={{ margin: "-40px" }}
			 transition={{ duration: 3.5, type: "spring" }}
			src={vector3} alt="vector" />
			<img src={vector2} alt="vector" />
			<span>Tiendas en linea</span>
		</div>
		<div className="experiencia-principal grid3">
			<motion.img
			 initial={{ rotate: 45 }}
			 whileInView={{ rotate: 0 }}
			 viewport={{ margin: "-40px" }}
			 transition={{ duration: 3.5, type: "spring" }}
			src={vector3} alt="vector" />
			<img src={vector2} alt="vector" />
			<span>Desarrollo web seo</span>
		</div>

	</section>
  )
}

export default Experiencia
