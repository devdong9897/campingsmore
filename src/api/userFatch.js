import axios from "axios";
import {UserAdd} from "../reducers/userSlice";

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

export { SignupFetch, getUserData };
