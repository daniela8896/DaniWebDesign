import React from 'react'
import "./navbar.css";
import isotipo from '../../assets/img/isotipo.png'

const Navbar = () => {
    return (
        <nav className='nav-contenedor'>
            <div className='nav-izquierda'>
                <div className='nav-nombre'>
                    <img src={isotipo} alt="isotipo" />
                </div>
            <span>Cambiar</span>
            </div>

            < div className = 'nav-derecha' >
                <div className='nav-lista'>
                    <ul>
                        <li> Inicio </li>
                        <li> Blog </li>
                        <li> Portafolio </li>
                        <li> Quien soy? </li>
                    </ul>
                </div>
                    <button className='boton nav-btn'>
                        Contacto
                    </button>
                
            
            </div>
    
        </nav>
    )
}

export default Navbar
