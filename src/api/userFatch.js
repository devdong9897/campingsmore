import axios from "axios";
import { UserAdd } from "../reducers/userSlice";

const getUserData = async dispatch => {
  try {
    const res = await axios.get("/sign-api/myinfo");
    const result = res.data;
    console.log("유저데이터 불러오기", result);
    dispatch(UserAdd(result));
  } catch (err) {
    console.log(err);
  }
};

const SignupFetch = async newUser => {
  try {
    const res = await axios.post("/sign-api/sign-up", newUser);
    console.log("전송성공?");
  } catch (err) {
    console.log(err);
  }
};

const getFindAccount = async FindIDInfo => {
  try {
    const res = await axios.get(
      `/sign-api/search-id?name=${FindIDInfo.name}&phone=${FindIDInfo.phone}&birth=${FindIDInfo.birth}`,
    );
    const result = res.data;
    console.log("아이디찾기 요청완료");
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export { SignupFetch, getUserData, getFindAccount };
