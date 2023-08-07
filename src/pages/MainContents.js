import React, { useEffect, useState } from "react";
import KakaoMap from "../components/KakaoMap";
import { MainContentsWrapper } from "../css/main-contents-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/effect-fade";
import SwiperFade from "../components/SwiperFade";
import { getbestitem } from "../api/itemFatch";
import { cookies } from "../api/cookie";

const MainContents = () => {
  const [bestitem, setBestitem] = useState([]);

  // 추천상품 가져오기
  const getbestitemFetch = async () => {
    try {
      const bestitemJson = await getbestitem();
      setBestitem(bestitemJson);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getbestitemFetch();
  }, []);

  return (
    <MainContentsWrapper>
      <div className="top_main_contents">
        <div className="slide_area">
          <SwiperFade />
        </div>
        <div className="main_contents_inner">
          <span className="main_title">
            최고의 캠핑서비스 , <strong>캠핑스모어</strong> 와 함께 하세요
          </span>
          <div className="search_bar">
            <input
              type="text"
              placeholder="찾으시는 캠핑음식이 있으신가요?"
            ></input>
            <button className="search_submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <ul className="main_category">
            <li>#카테고리 데이터</li>
            <li>#카테고리 데이터</li>
            <li>#카테고리 데이터</li>
            <li>#카테고리 데이터</li>
            <li>#카테고리 데이터</li>
          </ul>
        </div>
      </div>
      <div className="kakao_map_wrap">
        <span>최적의 캠핑 장소를 찾아보세요</span>
        <div className="kakao_map_area">
          <KakaoMap />
        </div>
      </div>
      <div className="recommned_menu">
        <div className="flying_basket"></div>
        <div className="recommned_branner">
          <span className="recommned_title">
            캠핑 스모어 에서 추천하는 상품
          </span>
        </div>
        <div className="recommned_inner">
          <ul className="recommned_list">
            {bestitem.map((item, index) => (
              <li key={index}>
                <div className="reco_item_pic">
                  <img src={item.pic} alt="추천상품이미지"></img>
                </div>
                <div className="reco_item_desc">
                  <span className="reco_title">{item.name}</span>
                  <span className="reco_price">{item.price} 원</span>
                </div>
                <ul className="option">
                  <li>무료배송</li>
                  <li>카드가능</li>
                  <li>개인가능</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainContentsWrapper>
  );
};

export default MainContents;
