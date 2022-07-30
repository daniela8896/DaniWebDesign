import React from 'react'
import './Footer.css'
import wave from '../../assets/img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Face from '@iconscout/react-unicons/icons/uil-facebook'
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp'
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='footer'>
			<img src={wave} alt="wave" style={{ width: '100%', height: '100%' }} />

			<div className="f-contenedor">
				<span>Dani Web Design</span>
				<div className="f-iconos">
					<Insta color='white' size='3rem' />
					<Face color='white' size='3rem' />
					<Whatsapp color='white' size='3rem' />
				</div>

				<div className='footer__links'>

					<NavLink to='/' className="nav__link">
						Inicio
					</NavLink>


					<NavLink to='blog' className="nav__link">
						Blog
					</NavLink>


					<NavLink to='portafolio' className="nav__link">
						Portafolio
					</NavLink>


					<NavLink to='contacto' className="nav__link boton">
						Contacto
					</NavLink>
				</div>
			</div>

		</footer>
	)
}

export default Footer