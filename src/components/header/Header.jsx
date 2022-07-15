import React from 'react'
import "./Header.css";
import face from '../../assets/img/Facebook.png'
import instagram from '../../assets/img/instagram.png'
import whatsapp from '../../assets/img/Whatsapp.png'
import vector1 from '../../assets/img/Vector1.png'
import vector2 from '../../assets/img/Vector2.png'
import boy from '../../assets/img/boy.png'
import bien from '../../assets/img/thumbup.png'
import corona from '../../assets/img/crown.png'
import emojigafas1 from '../../assets/img/glassesimoji.png'
import { DivFlotante } from '../divFlotante/DivFlotante';

export const Header = () => (
    <header className='header-contenedor'>
        <section className='header-izquierda'>
            <div className='header-nombre'>
                <span> ¿Su sitio web parece  </span>
                <span>  un poco anticuado?</span>
                <span> Le vendría bien una nueva imagen para atraer mejor a sus visitantes.</span>
            </div>

            <button className='header-btn boton'> Hablemos </button>

            <div className='header-iconos'>
                <a href='#'>
                    <img src={face} alt='facebook'/>
                </a>
                <a href ='#'>
                    <img src={instagram} alt='instagram' />
                </a>
                <a href ='https://api.whatsapp.com/send?phone=+573025870243&text=Hola,%20Quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20que%20prestan%20.'>
                    <img src={whatsapp} alt='whatsapp' />
                </a>
            </div>
        </section>
        <div className='header-derecha'>
            <img src={vector1} alt='vector' />
            <img src={vector2} alt='vector' />
            <img src={boy} alt='vector' />
            <img src={emojigafas1} alt='emoji' />
        <div className='contenedor-div-flotante'>
            <DivFlotante imagen={corona} txt1='Diseño' txt2='Web' />
        </div>
        <div className='contenedor-div-flotante-bien'>
            <DivFlotante imagen={bien} txt1='Tiendas' txt2='Virtuales' />
        </div>
        
        {/* blur divs */}
        
        <div className='blur' style={{background: "rgb(236 210 255)"}}></div>
        <div className='blur2' style={{background: "rgb(236 210 255)"}}></div>

        </div>
    </header>
)
