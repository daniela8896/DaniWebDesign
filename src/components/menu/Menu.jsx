import React, {useState} from 'react'
import './Menu.css'
import logo from '../../assets/img/isotipo.png'
import { NavLink } from "react-router-dom";
import Toogle from '../toogle/Toogle';


const Menu = () => {


 const [active, setActive] = useState("nav__menu");
 const [icon, setIcon] = useState("nav__toggler");
 
 const navToggle = () => {
   if (active === "nav__menu") {
	 setActive("nav__menu nav__active");
   } else setActive("nav__menu");

   // Icon Toggler
   if (icon === "nav__toggler") {
	 setIcon("nav__toggler toggle");
   } else setIcon("nav__toggler");
 };
 return (
   <nav className="nav">
	 <NavLink to='/' className="nav__brand">
	   <img src={logo} alt="logo" />
	 </NavLink>

<Toogle />

	 <div className={active}>
	   
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

	 <div onClick={navToggle} className={icon}>
	   <div className="line1"></div>
	   <div className="line2"></div>
	   <div className="line3"></div>
	 </div>
   </nav>
 );
}

export default Menu
