import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../css/Swiper.scss";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SwiperMap = ({ kmapData }) => {
  console.log("이게뭔데", kmapData.documents);
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper-slice"
      >
        {kmapData.documents?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide_inner">
              <div className="camping_img">
                <img src="../image/bg4.jpg"></img>
              </div>
              <div className="camping_detail">
                <span className="name">{item.place_name}</span>
                <span className="address_nmae">{item.address_name}</span>
                <span className="road_address_name">
                  {item.road_address_name}
                </span>
                <span className="camping_url">
                  <a href={item.place_url}>캠핑장 상세주소</a>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperMap;
