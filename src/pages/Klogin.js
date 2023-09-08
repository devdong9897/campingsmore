import axios from "axios";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { setCookie } from "../api/cookie";

const Klogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const kakaocode = searchParams.get("code");

  const kakaoLogin = async () => {
    try {
      setCookie("kakaoToken", kakaocode, {
        path: "/",
        secure: true,
        sameSite: "none",
        httpOnly: true,
      });
      const res = await axios.post("/api/kakao", {
        authorize_code: kakaocode,
      });
      const result = res.data;
      console.log("카카오 보냄", result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    kakaoLogin();
  }, {});
  return <div>Klogin</div>;
};

export default Klogin;
