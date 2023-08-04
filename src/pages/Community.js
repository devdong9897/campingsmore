import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommunityWrapper } from "../css/community-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import getCommunityList from "../api/communityFetch"

const Community = () => {
  const navigate = useNavigate();
  const [communityList, setCommunityList] = useState([])


  // const getCommunity = async () =>{
  //   try{
  //     // const data = await getCommunityList();
  //     // console.log("받아온 데이터", data)
  //     // setCommunityList(data);
  //   }catch(err) {
  //     console.log("커뮤니티리스트 에러",err)
  //   } 
  // }

  // // 제목으로 검색
  // const [communityListSearch, setCommunityListSearch] = useState([]);
  // const [communityListItem, setCommunityListItem] = useState([]);
  // const getCommunitySearchList = async () => {
  //   try {
  //     const data = await getCommunitySearchList();
  //     setCommunityListSearch(data);
  //     console.log(data.itemList);
  //     setCommunityListItem(data.itemList)
  //     console.log("이123", communityListSearch)
  //     console.log("이젠장", communityListItem)
  //   }catch(err) {
  //     console.log("서치리스트 에러", err)
  //   }
  // }
  

  // useEffect( () => {
  //   getCommunityList()
  //   // getSearchList()
  // },[])

  const handleGoToCommunityWrite = () => {
    navigate("/main/communitywrite");
  };

  // const bbb = communityData.map(el => <div key={el.title}>{el.title} {el.information} {el.writer}</div>)

  return (
    <CommunityWrapper>
      <div className="top_community_contents">
        <div className="community_contents_inner">
          <h1>커뮤니티</h1>
          <hr className="community_line" />
          <form action="" className="community_form">
            <select className="community_board_menu">
              <option value="" disabled>
                분류
              </option>
              <option value="">공지</option>
              <option value="">자유</option>
              <option value="">잡담</option>
              <option value="">문의</option>
            </select>
          </form>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="community_icon"
          />
          <input
            type="text"
            className="community_search"
            placeholder="검색어를 입력하세요"
          />
          <div className="community_board_list_head_box">
            <div className="community_board_list_head">
              <div className="community_board_bod">
                {communityList.map((item, index) => (
                <div key={index}>
                  <span>{item.title}</span>
                  <span>{item.information}</span>
                  <span>{item.writer}</span>
                </div>
              ))}
              </div>
              <button
                className="community_board_regi"
                onClick={handleGoToCommunityWrite}
              >
                게시글 작성
              </button>
            </div>
          </div>
        </div>
      </div>
    </CommunityWrapper>
  );
};

export default Community;
