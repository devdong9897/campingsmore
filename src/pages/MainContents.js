import React, { useEffect, useState, useCallback } from "react";
import KakaoMap from "../components/KakaoMap";
import { MainContentsWrapper } from "../css/main-contents-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/effect-fade";
import SwiperFade from "../components/swiper/SwiperFade";
import { getOrderListCategory, getbestitem } from "../api/itemFatch";
import { cookies } from "../api/cookie";
import { useNavigate } from "react-router-dom";
import SwiperSlice from "../components/swiper/SwiperSlice";
import { getMapData } from "../api/mapDataFetch";
import SwiperMap from "../components/swiper/SwiperMap";
import { useDispatch, useSelector } from "react-redux";
import { KakaoDataAdd } from "../reducers/KakaoDataSlice";

const MainContents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 추천상품 state
  const [bestitem, setBestitem] = useState([]);
  // 카테고리 상품 state
  const [orderlist, setOrderList] = useState([]);
  // 검색 state
  const [search, setSearch] = useState("");
  // 검색 쿼리스트링 state
  const [qusearch, setQusearch] = useState("");
  // 가져온데이타 맵 데이터 stae
  const [kmapData, setKmapData] = useState([]);

  const SwiperFadeMemoized = React.memo(SwiperFade);
  const SwiperSliceMemoized = React.memo(SwiperSlice);
  const SwiperMapMemoized = React.memo(SwiperMap);

  // 검색기능 핸들러
  const handleSearch = () => {
    const queryString = encodeURIComponent(search);
    setQusearch(queryString);
    navigate(`/main/orderlist?search=${queryString}`);
    // getOrderSearch(queryString);
  };

  // 메인컨텐츠 모든 데이터 가져오기
  const getAlldata = async () => {
    try {
      const orderData = await getOrderListCategory();
      setOrderList(orderData);
      const bestitemJson = await getbestitem();
      setBestitem(bestitemJson);
      const mapData = await getMapData(dispatch);
      setKmapData(mapData);
      console.log("카테고리 상품", orderData);
      console.log("추천상품", bestitemJson);
      console.log("맵데이터", mapData);
    } catch (err) {
      console.log(err);
    }
  };

  // 카테고리 눌러서 검색결과창 가기
  const handleCateResult = useCallback(
    catecode => {
      navigate(`/main/orderlist?catecode=${catecode}`);
    },
    [navigate],
  );

  const handleThisitem = useCallback(
    iitem => {
      navigate(`/main/orderdetail?iitem=${iitem}`);
    },
    [navigate],
  );

  useEffect(() => {
    getAlldata();
  }, []);

  return (
    <MainContentsWrapper>
      <div className="top_main_contents">
        <div className="slide_area">
          <SwiperFadeMemoized />
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
            {orderlist?.map((item, index) => (
              <li
                key={index}
                onClick={e => handleCateResult(item.iitemCategory)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          {bestitem.length ? (
            <div className="select_slide">
              <SwiperSliceMemoized bestitem={bestitem} />
            </div>
          ) : (
            <div className="empty_box">추천 상품이 없습니다.</div>
          )}
        </div>
      </div>
      <div className="kakao_map_wrap">
        <span className="map_title">최적의 캠핑 장소를 찾아보세요</span>
        <div className="kakao_map_area">
          {kmapData ? <SwiperMapMemoized kmapData={kmapData} /> : ""}
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
          {bestitem.length ? (
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
          ) : (
            <div className="bestempty_box">추천상품데이터가 없습니다.</div>
          )}
        </div>
      </div>
    </MainContentsWrapper>
  );
};

export default MainContents;
