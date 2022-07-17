import React from 'react'
import './Footer.css'
import wave from '../../assets/img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Face from '@iconscout/react-unicons/icons/uil-facebook'
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp'

const Footer = () => {
  return (
	<footer className='footer'>
        <img src={wave} alt="wave" style={{width: '100%', height: '100%'}} />

		<div className="f-contenedor">
			<span>Dani Web Design</span>
			<div className="f-iconos">
               <Insta color='white' size='3rem' />
			   <Face color='white' size='3rem'/>
			   <Whatsapp color='white' size='3rem'/>
			</div>
		</div>

	</footer>
  )
}

export default Footer