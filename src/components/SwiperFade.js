import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../css/Swiper.scss"

import { Autoplay,  EffectFade, Navigation, Pagination } from 'swiper/modules';

const SwiperFade = () => {

    
const path = process.env.PUBLIC_URL;
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        speed={1500}
        effect={'fade'}
        navigation={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        modules={[ Autoplay ,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={`${path}/image/bg.jpg`} alt="백그라운드" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${path}/image/bg2.jpg`} alt="백그라운드" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${path}/image/bg3.jpg`} alt="백그라운드" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${path}/image/bg4.jpg`} alt="백그라운드" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperFade