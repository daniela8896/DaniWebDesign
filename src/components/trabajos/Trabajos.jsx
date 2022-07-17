import React from 'react'
import './Trabajos.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import img1slide from '../../assets/img/ecommerce.png'
import img2slide from '../../assets/img/hoc.png'
import img3slide from '../../assets/img/sidebar.png'
import img4slide from '../../assets/img/musicapp.png'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'


const Trabajos = () => {
  return (
	<div className='trabajos-contenedor'>
       
	   <span>Proyectos Realizados</span>
	   <span>Portafolio</span>

	   <Swiper 
	   modules={[Pagination]}
	   pagination={{clickable:true}}
	   spaceBetween={150}
	   slidesPerView={3}
	   grabCursor={true}
	   className='trabajos-contenedor-slider'
	   >
          <SwiperSlide>
            <img src={img1slide} alt="" />
		  </SwiperSlide>
		  <SwiperSlide>
            <img src={img2slide} alt="" />
		  </SwiperSlide>
		  <SwiperSlide>
            <img src={img3slide} alt="" />
		  </SwiperSlide>
		  <SwiperSlide>
            <img src={img4slide} alt="" />
		  </SwiperSlide>
		  <SwiperSlide>
            <img src={img4slide} alt="" />
		  </SwiperSlide>
       

	   </Swiper>

	</div>
  )
}

export default Trabajos