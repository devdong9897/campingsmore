import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { kakaoMapDataAdd } from "../reducers/KakaoMapSlice";

const getAllianceMap = async dispatch => {
  try {
    const res = await axios.get("/api/dataset/kakao");
    const result = res.data;
    console.log("제휴 카카오위치 데이터 요청");
    dispatch(kakaoMapDataAdd(result));
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  return [];
};

const { kakao } = window;

const KakaoMap = () => {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  useEffect(() => {
    getAllianceMap();
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(" ", (data, status, _pagination) => {
      console.log("이쪽데이터인가?", data);
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);
        console.log("이게뭔디");
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map]);

  const placesSearchCB = (data, status, _pagination) => {
    console.log("여기임?", data);
    if (status === kakao.maps.services.Status.OK) {
      const bounds = new kakao.maps.LatLngBounds();
      let markers = [];

      for (var i = 0; i < data.length; i++) {
        markers.push({
          position: {
            lat: data[i].y,
            lng: data[i].x,
          },
          content: data[i].place_name,
        });
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }
      setMarkers(markers);
      map.setBounds(bounds);
    }
  };

  const handleSearch = () => {
    const keyword = document.getElementById("keyword").value;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, placesSearchCB); // 사용자 입력 키워드로 검색
  };

  return (
    <div className="kakao_map">
      <div className="map_search">
        <input type="text" id="keyword" placeholder="장소검색"></input>
        <button id="searchBtn" onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "100%",
          height: "800px",
          borderRadius: "15px",
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map(marker => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
    </div>
  );
};

export default KakaoMap;
