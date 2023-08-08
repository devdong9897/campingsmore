import axios from "axios"

const postPaymentList = async (data) => {
    try {
        const res = await axios.post(`/api/payment/order/cart`,data)
        return res.data
    }catch(err) {
        throw new Error("payment 실패")
    }
}
export default postPaymentList