import React, { useEffect, useState } from "react";
import KakaoMap from "../components/KakaoMap";
import { MainContentsWrapper } from "../css/main-contents-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/effect-fade";
import SwiperFade from "../components/SwiperFade";
import { getOrderListCategory, getbestitem } from "../api/itemFatch";
import { cookies } from "../api/cookie";
import { useNavigate } from "react-router-dom";
import SwiperSlice from "../components/SwiperSlice";

const MainContents = () => {
  const navigate = useNavigate();
  // 추천상품 state
  const [bestitem, setBestitem] = useState([]);
  // 카테고리 상품 state
  const [orderlist, setOrderList] = useState([]);
  // 검색 state
  const [search, setSearch] = useState("");

  // 검색 쿼리스트링 state
  const [qusearch, setQusearch] = useState("");

  // 검색기능 핸들러
  const handleSearch = () => {
    const queryString = encodeURIComponent(search);
    setQusearch(queryString);
    console.log(queryString);
    // getOrderSearch(queryString);
  };

  // 카테고리 상품 가져오기
  const getOrderList = async () => {
    try {
      const data = await getOrderListCategory();
      setOrderList(data);
      console.log("얌마!", orderlist.itemList);
    } catch (err) {
      console.log("오더리스트 에러", err);
    }
  };

  // 추천상품 가져오기
  const getbestitemFetch = async () => {
    try {
      const bestitemJson = await getbestitem();
      setBestitem(bestitemJson);
    } catch (error) {
      console.log(error);
    }
  };

  const handleThisitem = (iitem) => {
    navigate(`/main/orderdetail?iitem=${iitem}`)
  }

  useEffect(() => {
    getbestitemFetch();
    getOrderList();
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
              onChange={e => setSearch(e.target.value)}
            ></input>
            <button className="search_submit" onClick={handleSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <ul className="main_category">
            {orderlist.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
          <div className="select_slide">
            <SwiperSlice bestitem={bestitem} />
          </div>
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
              <li key={index} onClick={e => handleThisitem(item.iitem)}>
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
