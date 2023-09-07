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

const getcampDetail = async icampParams => {
  try {
    const res = await axios.get(
      `/api/camp/detail-camping?icamp=${icampParams}`,
    );
    const result = res.data;
    console.log("캠핑장 디테일 요청완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 캠핑장이랑 맞은 iday 값 찾기
const geticampDay = async icampParams => {
  try {
    const res = await axios.get(`/api/camp/icampday?icamp=${icampParams}`);
    const result = res.data;
    console.log("캠핑장 icamp 찾기", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const postCampReserve = async senddata => {
  try {
    const res = await axios.post("/api/camp/reserve", senddata);
    const result = res.data;
    console.log("캠핑예약등록 성공?", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export {
  geticampDay,
  getcampDetail,
  getCamingList,
  getLocationCampingList,
  postCampReserve,
};
