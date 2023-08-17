import axios from "axios";
import { UserAdd } from "../reducers/userSlice";

const getUserData = async dispatch => {
  try {
    const res = await axios.get("/api/user/me");
    const result = res.data;
    console.log("유저데이터 불러오기", result);
    dispatch(UserAdd(result));
  } catch (err) {
    console.log(err);
  }
};

const SignupFetch = async newUser => {
  try {
    const res = await axios.post("/api/user", newUser);
    console.log("회원가입 전송?", res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getFindAccount = async FindIDInfo => {
  try {
    const res = await axios.get(
      `/api/search/id?name=${FindIDInfo.name}&phone=${FindIDInfo.phone}&birth=${FindIDInfo.birth}`,
    );
    const result = res.data;
    console.log("아이디찾기 요청완료", res.data);
    if (res.data === "") {
      alert("입력하신 정보의 아이디가 없습니다.");
    }
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const LogoutFetch = async () => {
  try {
    const res = await axios.post("/api/oauth/logout");
    const result = res.data;
    console.log("로그아웃 요청", result);
  } catch (err) {
    console.log(err);
  }
};

const FindPasswordFetch = async (FindPw) => {
  try{
    console.log(FindPw);
    const res = await axios.get(`/api/search/pw?id=${FindPw.name}&name=${FindPw.name}&email=${FindPw.email}`);
    const result = res.data;
    console.log("비밀번호 찾기 요청",result);
    return result;
  }catch(err){
    console.log(err);
  }
  return [];
}





const AccoutwithdrawalFetch = async userIuser => {
  try {
    const res = await axios.delete("/api/user/delete", {
      data: {
        iuser: userIuser,
      },
    });
    const result = res.data;
    console.log("회원탈퇴요청", result);
  } catch (err) {
    console.log(err);
  }
};

export {
  SignupFetch,
  getUserData,
  getFindAccount,
  LogoutFetch,
  AccoutwithdrawalFetch,
  FindPasswordFetch
};
