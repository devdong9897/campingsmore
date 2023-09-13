import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SwiperMapDetail = ({ campPicList }) => {
  const baseUrl = "http://192.168.0.144:5005/img/";
  console.log("어 이거 왜 안뜨고 지랄링임?", campPicList);
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper-slice"
      >
        {campPicList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide_inner">
              <img src={"/img/" + item.pic} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperMapDetail;
