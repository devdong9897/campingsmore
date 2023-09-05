import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/Swiper.scss";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const SwiperFade = () => {
  console.log("스와이퍼 페이드 실행");

  const path = process.env.PUBLIC_URL;
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        speed={1500}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={`../image/bg.jpg`} alt="백그라운드" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`../image/bg2.jpg`} alt="백그라운드" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`../image/bg3.jpg`} alt="백그라운드" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`../image/bg4.jpg`} alt="백그라운드" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperFade;
