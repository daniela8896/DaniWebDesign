import React from "react";
import './DivFlotante.css'


const DivFlotante = ({ imagen, txt1, txt2 }) => {



	const newLocal = <br />
    return (
	    <div className="flotante-contenedor">
		   <img src={imagen} alt="" />
		   <span>
			   {txt1}
			   {newLocal}
			   {txt2}
		   </span>
	    </div>
    )
}

export default DivFlotante
