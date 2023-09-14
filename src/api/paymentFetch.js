import axios from "axios";

const getPayMent = async singleItem => {
  try {
    const res = await axios.get(
      `/api/payment/order/${singleItem.iitemId}?quantity=${singleItem.quantitys}`,
    );
    const result = res.data;
    console.log("getpayment 요청완료!!!!", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const getCampingData = async () => {
  try {
    const res = await axios.get("/api/camp/my-reserve");
    const result = res.data;
    console.log("캠핑장 불러왔냐고 섀꺄", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const postPaymentList = async data => {
  try {
    const res = await axios.post(`/api/payment/order/cart`, data);
    return res.data;
  } catch (err) {
    throw new Error("payment 실패");
  }
};

const PostPayMent = async newPaymentData => {
  try {
    const res = await axios.post("/api/payment", newPaymentData);
    const result = res.data;
    console.log("결제 정보 전송완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const PostKakaoPay = async newPaymentData => {
  try {
    const res = await axios.post("/api/payment/kakao/ready", newPaymentData);
    const result = res.data;
    console.log("카카오 결제 정보 전송?", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export { PostPayMent, getPayMent, PostKakaoPay, getCampingData };
