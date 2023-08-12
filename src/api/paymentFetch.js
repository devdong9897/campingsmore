import axios from "axios";

const getPayMent = async ItemData => {
  try {
    const res = await axios.get(
      `/api/payment/order/${ItemData.iitemId}?quantity=${ItemData.quantitys}`,
    );
    const result = res.data;
    console.log(result);
    console.log("getpayment 요청완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
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
  } catch (err) {
    console.log(err);
  }
};

export { PostPayMent, getPayMent };
