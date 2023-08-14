import axios from 'axios'

// const baseURL = 'http://192.168.0.144:5005/api/community/board'
// const instance = axios.create({
//     baseURL:baseURL,
// })

// const createPost = async (postData) => {
//     try{
//         const res = await instance.post('/',postData)
//         return res.data
//     }catch(error) {
//         throw new Error('게시글 작성 실패')
//     }
// }
// export default createPost;

// const getCommunityBulletinBoard = async () => {
//     try {
        
//     }catch(err){
//         console.log(err)
//     }
// }
const getFetchData = async () => {
    try{
        const res = await axios.get(`/api/community/boardDetail`)
        const data = res.data
        console.log(res.data)
        return data
    }catch(err){
        console.log("게시글 디테일보기 요청실패",err)
    }
}
export default getFetchData;