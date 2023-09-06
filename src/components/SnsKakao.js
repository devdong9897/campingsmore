import KakaoLogin from "react-kakao-login";
import { kakaoAccoutPost } from "../api/userFatch";

const SnsKakao = () => {
  const kakaoClientId = "13e391cae7ce39976c861f8375f44c18";
  const kakaoOnSuccess = async data => {
    console.log(data);
    const Kdata = {
      connected_at: data.profile.connected_at,
      id: data.profile.id,
      email: data.profile.kakao_account.email,
      access_token: data.response.access_token,
      refresh_token: data.response.refresh_token,
    };
    console.log("추출데이터", Kdata);
    try {
      const kakaoData = await kakaoAccoutPost(Kdata);
      console.log("됬냐?");
    } catch (err) {
      console.log(err.message);
    }
  };
  const kakaoOnFailure = error => {
    console.log(error);
  };
  return (
    <>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </>
  );
};

export default SnsKakao;
