import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import KakaoMap from "../components/KakaoMap";
import { MainContentsWrapper } from "../css/main-contents-style";

const MainContents = () => {
  return (
    <MainContentsWrapper>
      <div className="top_main_contents">
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
            캠핑 스모어에서 추천하는 상품입니다.
          </span>
        </div>
        <div className="recommned_inner">
          <ul className="recommned_list">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </MainContentsWrapper>
  );
};

export default MainContents;
