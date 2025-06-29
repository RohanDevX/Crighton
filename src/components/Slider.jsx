import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';
import { Autoplay, Pagination } from 'swiper/modules';

const Slider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="slider-container">
      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        spaceBetween={30}
        centeredSlides={true}
        speed={1100} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/images/1a.jpg" alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src="/images/2a.jpg" alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src="/images/3a.jpg" alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src="/images/4a.jpg" alt="Slide 4" /></SwiperSlide>
      </Swiper>
      
      <div className="custom-prev" onClick={() => swiperRef.current.slidePrev()}></div>
      <div className="custom-next" onClick={() => swiperRef.current.slideNext()}></div>
    </div>
  );
};

export default Slider;
