import axios from "axios";
// const axiosInstance = axios.create({
//     baseURL: "http://localhost:5000",
//     timeout: 1000,
//     headers: {
//     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     Accept: "*/*",
//     },
// })

// 게시글 post
const postCommunity = async () => {
    try {
        const res = await axiosInstance.post("/api/community/comunity")
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}
export {postCommunity}

