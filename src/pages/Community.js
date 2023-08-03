import React from "react";
import { useNavigate } from "react-router-dom";
import { CommunityWrapper } from "../css/community-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Community = () => {

  const communityData = [
    {title:"공지", information:"우리 서비스에 대한 소개", writer:"관리자"},
    {title:"공지", information:"알립니다 어쩌고", writer:"관리자"},
    {title:"공지", information:"이 많은걸 관리해야하다니", writer:"관리자"},
    {title:"공지", information:"사이트에 대해 피드백을...", writer:"관리자"},
    {title:"공지", information:"사이트에 대해 피드백을...", writer:"관리자"},
    {title:"공지", information:"사이트에 대해 피드백을...", writer:"관리자"},
    {title:"공지", information:"사이트에 대해 피드백을...", writer:"관리자"},
]



  const navigate = useNavigate();

  const handleGoToCommunity = () => {
    navigate("/main/communitywrite");
  };

  // const bbb = communityData.map(el => <div key={el.title}>{el.title} {el.information} {el.writer}</div>)

  return (
    <CommunityWrapper>
      <div className="top_community_contents">
        <div className="community_contents_inner">
          <h1>커뮤니티</h1>
  
          <hr className="community_line" />
          <input type="text" className="community_search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="community_icon" />
          <button className="community_board_regi" onClick={handleGoToCommunity}>
            게시글 작성
          </button>
          <div className="community_board_list_head_box">
            <div className="community_board_list_head">
            <div className="community_board_bod">
              {communityData.map((el) => (
                <div key={el.title}>
                  <span>{el.title}</span> <span>{el.information}</span>{" "}
                  <span>{el.writer}</span>
                </div>
              ))}
            </div>
            </div>
          </div>

        </div>
      </div>
    </CommunityWrapper>
  );
}  

export default Community;
