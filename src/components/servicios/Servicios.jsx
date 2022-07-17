import React from 'react'
import './Servicios.css'
import Card from '../card/Card'
import emoji1 from '../../assets/img/glasses.png'
import emoji2 from '../../assets/img/heartemoji.png'
import emoji3 from '../../assets/img/humble.png'
import { motion } from "framer-motion";

const Servicios = () => {
	const transition = {
		duration: 1,
		type: "spring",
	  };

  return (
	<section className='servicios-contenedor'>
       <div className="servicios-title">
          <span>¿Necesita un nuevo sitio web <br/> o una tienda online?</span>
		  <span>¡Ningún proyecto es demasiado <br/> grande o <br/> demasiado pequeño!</span>
		  <span>Nos encanta <br/> idear soluciones creativas y técnicamente sólidas 
		  <br/>
		   para satisfacer sus necesidades.</span>
		   <a href='#' className='boton btn-s'>Portafolio</a>
		   <div className="blur s-blur" style={{background: "#B4FEE7"}}></div>
	   </div>
	   <div className="cards">


        <motion.div
		 initial={{ left: "25rem" }}
		 whileInView={{ left: "14rem" }}
		 transition={transition}
		 style={{left: '14rem'}}>
         <Card  
		   emoji={emoji2}
		   titulo={'Diseño'}
		   detalles={'🔹páginas web, 🔹tiendas online'}
		 />
		</motion.div>

		<motion.div 
		initial={{ left: "-11rem", top: "12rem" }}
		whileInView={{ left: "-4rem" }}
		transition={transition}
		style={{top: '12rem', left: '-4rem'}}>
         <Card  
		   emoji={emoji1}
		   titulo={'Diseño'}
		   detalles={'🔹páginas web, 🔹tiendas online'}
		 />
		</motion.div>

		<motion.div
		 initial={{ top: "19rem", left: "25rem" }}
		 whileInView={{ left: "12rem" }}
		 transition={transition}
		 style={{top: '19rem', left: '12rem'}}>
         <Card  
		   emoji={emoji3}
		   titulo={'Diseño'}
		   detalles={'🔹páginas web, 🔹tiendas online'}
		 />
		</motion.div>
		<div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
          
	   </div>
	</section>
  )
}

export default Servicios