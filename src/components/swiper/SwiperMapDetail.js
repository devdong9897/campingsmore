import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SwiperMapDetail = ({ campDetail }) => {
  const baseUrl = "http://192.168.0.144:5005/img/";
  console.log("이게뭔데", campDetail[0].pic);
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper-slice"
      >
        {campDetail[0].pic.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide_inner">
              <img src={baseUrl + item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperMapDetail;
