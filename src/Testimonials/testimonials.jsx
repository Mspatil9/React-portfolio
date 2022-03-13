import React from 'react'
import './testimonials.css'
import avt1 from '../assests/avtr1.jpg'
import avt2 from '../assests/avtr2.jpg'
import avt3 from '../assests/avtr3.jpg'
import { Pagination  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data =[
  {
    avatar:avt1,
    name:'Marthin ',
    review:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. '
    

  },
  {
    avatar:avt2,
    name:'Kwame Despite',
    review:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. '
    

  },
  {
    avatar:avt3,
    name:'Tina Snow',
    review:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam '
    

  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
       <Swiper className="container testimonials__container" // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}>
      
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="" /></div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
                
              </SwiperSlide>
            )
          })
        }
           
         </Swiper>
      
      
      
      </section>
  )
}

export default Testimonials