import React from 'react'
import './Testimonios.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profile1 from '../../assets/img/profile1.jpg'
import profile2 from '../../assets/img/profile2.jpg'
import profile3 from '../../assets/img/profile3.jpg'
import profile4 from '../../assets/img/profile4.jpg'
import profile5 from '../../assets/img/profile5.jpg'
import profile6 from '../../assets/img/profile6.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonios = () => {
  const clientes =[
	{
		img: profile1 ,
		descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa itaque cum qui aut voluptate obcaecati, sapiente nisi iusto odit earum?"
	},
	{
		img: profile2,
		descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa itaque cum qui aut voluptate obcaecati, sapiente nisi iusto odit earum?"
	},
	{
		img: profile3,
		descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa itaque cum qui aut voluptate obcaecati, sapiente nisi iusto odit earum?"
	},
	{
		img: profile4,
		descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa itaque cum qui aut voluptate obcaecati, sapiente nisi iusto odit earum?"
	},
	{
		img: profile5,
		descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa itaque cum qui aut voluptate obcaecati, sapiente nisi iusto odit earum?"
	},
	{
		img: profile6,
		descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa itaque cum qui aut voluptate obcaecati, sapiente nisi iusto odit earum?"
	}
  ]



  return (
	<section className='testimonio-contenedor'>
		<div className="testimonio-encabezado">
			<span>Somos una agencia </span>
			<span>creativa de servicio completo </span>
			<span>que se especializa en el diseño y desarrollo web.</span>
			<div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
			<div className="blur t-blur2" style={{background: "var(--celeste)"}}></div>
		</div>

		<Swiper
		modules={[Pagination]}
		slidesPerView={1}
		pagination={{clickable:true}}
		>
             {clientes.map((cliente, index)=>{
                 return(
					<SwiperSlide key={index}>
						<div className="testimonio-map">
						<img src={cliente.img} alt="cliente" />
                        <span>{cliente.descripcion}</span>
						</div>
					</SwiperSlide>
				 )
			 })}


		</Swiper>
	  
	</section>
  )
}

export default Testimonios
