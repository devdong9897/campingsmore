import axios from "axios";
const getCommunityBulletinBoarList = async () => {
    try {
        const res = await axios.get(`/api/community/boardDetail/1`)
        const result = res.data;
        console.log("게시글 상세보기 요청완료")
        console.log(result)
        return result
    }catch(err){
        console.log(err)
    }
    return []
}


export {getCommunityBulletinBoarList}