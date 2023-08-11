import axios from "axios";

const getPayMent = async () => {
  try {
    const res = await axios.get("/api/payment/order");
    const result = res.date;
    console.log("getpayment 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// const postPaymentList = async data => {
//   try {
//     const res = await axios.post(`/api/payment/order/cart`, data);
//     return res.data;
//   } catch (err) {
//     throw new Error("payment 실패");
//   }
// };

export default { getPayMent };
