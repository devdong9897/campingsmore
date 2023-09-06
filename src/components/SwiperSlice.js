import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/Swiper.scss";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const SwiperSlice = ({ bestitem }) => {
  console.log("스와이퍼슬라이스 실행");
  const path = process.env.PUBLIC_URL;
  const navigate = useNavigate();
  const handleItemNumber = iitem => {
    navigate(`/main/orderdetail?iitem=${iitem}`);
  };
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper-slice"
      >
        {bestitem.length ? (
          <>
            {bestitem.map((item, index) => (
              <SwiperSlide
                key={index}
                onClick={e => handleItemNumber(item.iitem)}
              >
                <div className="slide_item_img">
                  <img src={item.pic} alt="추천상품이미지"></img>
                </div>
                <div className="slide_item_text">{item.name}</div>
              </SwiperSlide>
            ))}
          </>
        ) : (
          <div className="empty_box"></div>
        )}
      </Swiper>
    </>
  );
};

export default SwiperSlice;
