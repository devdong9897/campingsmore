import axios from "axios";

// 캠핑장 리스트 요청
const getCamingList = async () => {
  try {
    const res = await axios.get("/api/camp/camping-list");
    const result = res.data;
    console.log("캠핑장 리스트 요청완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 지역별 캠핑장 리스트
const getLocationCampingList = async e => {
  try {
    const res = await axios.get(`/api/camp/city-list?inationwide=${e}`);
    const result = res.data;
    console.log("지역별 캠핑장 리스트 불러오기", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 캠핑장 디테일 데이터

const getcampDetail = async () => {
  try {
    const res = await axios.get("/api/camp/detail-camping");
    const result = res.data;
    console.log("캠핑장 디테일 요청완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export { getcampDetail, getCamingList, getLocationCampingList };
