import React from 'react'
import './Inicio.css'
import Header from '../../components/header/Header'
import Experiencia from '../../components/experiencia/Experiencia'
import Clientes from '../../components/clientes/Clientes'
import Servicios from '../../components/servicios/Servicios'
import Trabajos from '../../components/trabajos/Trabajos'
import Testimonios from '../../components/testimonios/Testimonios'
import Contacto from '../../components/contacto/Contacto'


const Inicio = () => {
  return (
	<>
   
   <Header />
   <Experiencia />
   <Servicios />
   <Testimonios />
   <Trabajos />
   <Clientes />
   <Contacto />


  </>
  )
}

export default Inicio