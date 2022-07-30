import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import Blog from '../../pages/blog/Blog'
import Contacto from '../../pages/contacto/ContactoP'
import Portafolio from '../../pages/portafolio/Portafolio'
import Menu from '../menu/Menu'
import Footer from '../footer/Footer'

const Rutas = () => {
  return (
	<BrowserRouter>
          <Menu />
          <Routes>
              <Route exact path='/' element={<Inicio />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/portafolio' element={<Portafolio />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  )
}

export default Rutas

