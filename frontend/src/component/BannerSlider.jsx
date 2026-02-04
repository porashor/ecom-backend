import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import "swiper/css/a11y";
const BannerSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      loop={true}    
      autoplay={{delay: 3000}}
      spaceBetween={5}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      a11y={{enabled: true}}
    >
      <SwiperSlide>
        <div className='min-h-50'>
            <img className='w-full h-75 object-cover' src="https://media.istockphoto.com/id/1305999733/photo/web-design-desktop.jpg?s=1024x1024&w=is&k=20&c=KTPA-Mnyww2JxGK3E-R0NI3jh8_tSlyELUcUFSdEim4=" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='min-h-50'>
            <img className='w-full h-75 object-cover' src="https://media.istockphoto.com/id/1305999733/photo/web-design-desktop.jpg?s=1024x1024&w=is&k=20&c=KTPA-Mnyww2JxGK3E-R0NI3jh8_tSlyELUcUFSdEim4=" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='min-h-50'>
            <img className='w-full h-75 object-cover' src="https://media.istockphoto.com/id/1305999733/photo/web-design-desktop.jpg?s=1024x1024&w=is&k=20&c=KTPA-Mnyww2JxGK3E-R0NI3jh8_tSlyELUcUFSdEim4=" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default BannerSlider
