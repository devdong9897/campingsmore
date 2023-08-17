import React from "react";
import DaumPostcode from "react-daum-postcode";
import "../css/DaumPost.css";
const PopupPostCode = ({
  setFullAddress,
  setDaumPost,
  daumPost,
  mypageDaum,
  setMypageDaum,
  setFixAddress,
  daumModal,
  isDaumModal,
  setUserAddress,
}) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용\
  const handlePostCode = data => {
    let fullAddress = data.address;
    let extraAddress = "";
    if(daumPost) {
      setDaumPost(false);
      setFullAddress(fullAddress);
    } else if(mypageDaum) {
      setMypageDaum(false);
      setFixAddress(fullAddress);
    } else if(daumModal){
      isDaumModal(false);
      setUserAddress(fullAddress);
    }
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(fullAddress);
    console.log(data);
    console.log("엄청나구만", fullAddress);
    console.log(data.zonecode);
  };
  return (
    <div className="daum_post_modal">
      <DaumPostcode className="postCodeStyle" onComplete={handlePostCode} />
    </div>
  );
};

export default PopupPostCode;
