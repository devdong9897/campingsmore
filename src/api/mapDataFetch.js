import axios from "axios";
import { KakaoDataAdd } from "../reducers/KakaoDataSlice";

const getMapData = async dispatch => {
  try {
    const res = await axios.get("/api/dataset/kakao");
    const result = res.data;
    console.log("맵데이터 가져오기", result);
    dispatch(KakaoDataAdd(result));
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export { getMapData };
