import axios from "axios";

// 게시글 작성 post 요청
const createPost = async postData => {

    const res = await axios.post(`/api/community/board`, postData);
    console.log("게시글 작성 요청 성공");
    return res.data;
    

};
export default createPost;
