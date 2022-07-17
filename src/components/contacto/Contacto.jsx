import React from 'react'
import { useState } from 'react';
import './Contacto.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
export const Contacto = () => {

	const form = useRef();

	const [done, setDone] = useState(false)

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_tti7q3n', 'template_izbeeqn', form.current, 'Tgzj3bit9J4G0NFrC')
		.then((result) => {
			console.log(result.text);
			setDone(true)
		}, (error) => {
			console.log(error.text);
		});
	};


  return (
	<div className='contacto-contenedor'>
		<div className="contacto-izquierdo">
			<div className="contacto-texto">
				<span>Llámanos ahora</span>
				<br />
				<span>Te ayudaremos a crear una tienda online.</span>
				<div className="blur c-blur2" style={{background: "var(--purple)"}}></div>
			</div>
		</div>

		<div className="contenedor-derecho">
			<form ref={form} onSubmit={sendEmail}>
				<input type="text" name='user_name' className='user' placeholder='Nombre'/>
				<input type="email" name='user_email' className='user' placeholder='Correo'/>
				<textarea name="message" className='user' placeholder='Mensaje'></textarea>
				<input type="submit" value="Enviar" className='button boton' />
				<span>{done && "Gracias por ponerte en conmigo! 🥰, En pocos momentos te contactare 😊"}</span>
				<div 
				className="blur c-blur1"
				style={{background: "var(--celeste)"}}
				>
				</div>
			</form>
		</div>

	</div>
  )
}
