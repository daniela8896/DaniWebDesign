import React from 'react'
import './Clientes.css'
import img1 from '../../assets/img/Upwork.png'
import img2 from '../../assets/img/fiverr.png'
import img3 from '../../assets/img/amazon.png'
import img4 from '../../assets/img/Shopify.png'
import img5 from '../../assets/img/Facebook.png'

const Clientes = () => {
  return (
	<section className='trabajos-contenedor'>
        <div className="servicios-title">
          <span>¿Necesita un nuevo sitio web <br/> o una tienda online?</span>
		  <span>¡Ningún proyecto es demasiado <br/> grande o <br/> demasiado pequeño!</span>
		  <span>
			Nos encanta 
			<br/> 
			idear soluciones creativas
			<br/>
			y técnicamente sólidas 
		    <br/>
		    para satisfacer sus necesidades.</span>
		    <a href='#' className='boton btn-s'>Portafolio</a>
		   <div className="blur s-blur" style={{background: "#B4FEE7"}}></div>
	   </div>

	   <div className='trabajos-derecho'>
		<div className="trabajos-circulo-principal">
			<div className="trabajos-seccion-circulo">
				<img src={img1} alt="" />
			</div>
			<div className="trabajos-seccion-circulo">
				<img src={img2} alt="" />
			</div>
			<div className="trabajos-seccion-circulo">
				<img src={img3} alt="" />
			</div>
			<div className="trabajos-seccion-circulo">
				<img src={img4} alt="" />
			</div>
			<div className="trabajos-seccion-circulo">
				<img src={img5} alt="" />
			</div>
		</div>

        <div className="trabajos-relleno-circulo circulo-morado"></div>
		<div className="trabajos-relleno-circulo circulo-celeste"></div>

	   </div>

	</section>
  )
}

export default Clientes