import React, { useEffect } from "react";
import { CommunityBulletinBoardWrapper } from "../css/community-bulletin-board-style";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import createPost from "../api/communityWriteFetch";
import getFetchData from "../api/communityBulletinBoardFetch";

const CommunityBulletinBoard = () => {
  // const [communityBulletinBoardData, setCommunityBulletinBoardData] = useState()
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState([]);
  const [picList, setPicList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const {iboard} = useParams()

  const getCommunityBulletinData = async () => {
    try{
      const data = await getFetchData(iboard)
      setBoardData(data)
      // setPicList(data.picList)
      // setCommentList(data.commentList.list)
    }catch(err) { 
      console.log(err)
    }
    
  }
  useEffect(() => {

    getFetchData()

  }, []);
  if(!boardData) {
    return <div>Loading</div>
  }
  // const handleGoToCommunityBulletinBoard = () => {
  //   navigate("/main/communitywrite");
  // };

  return (
    <CommunityBulletinBoardWrapper>
      <div className="top_community_bulletin_board_contents">
        <div className="community_bulletin_board_contents_inner">
          <h1>커뮤니티 게시글</h1>
          <hr className="community_bulletin_board_line" />
          {/* {bulletinList.map((item, index)=> (
            <li key={index}>
              <div className="community_bulletin_board_topbox">
            <h1>[자유]</h1>
            <p>2023-08-11</p><br/>
            <p>YBJ</p>
          </div>

          <input
            type="text"
            className="community_bulletin_board_title"
            placeholder="제목을 입력해 주세요"
          />
          <textarea
            cols="30"
            rows="10"
            className="community_bulletin_board_detail"
            placeholder="내용을 입력해 주세요"
          ></textarea>
            </li>
          ))} */}
                {boardData.map((item, index) => (
                  <div key={index}>
                    <div className="community_bulletin_board_topbox">
                    <h1>{item.category}</h1>
                    <p>{item.createdat}</p>
                    <br />
                    <p>{item.name}</p>
                  </div>
                  <h2>{item.title}</h2> 
                  <p>{item.ctnt}</p>
                  </div>
                ))}
                  
                    <input
                    type="text"
                    className="community_bulletin_board_title"
                    placeholder="제목을 입력해 주세요"/>
          <textarea
            cols="30"
            rows="10"
            className="community_bulletin_board_detail"
            placeholder="내용을 입력해 주세요"
          ></textarea>

          {/* 이미지 목록 표시 */}
          {/* <div className="image-list">
            {picList.map((pic, index) => (
              <img key={index} src={pic.pic} alt={`Image ${index}`} />
            ))}
          </div> */}

          <div className="comment-list">
            {/* <h3>댓글 목록</h3> */}
            {/* {commentList.map(comment => (
              <div key={comment.icomment}>
                <p>{comment.name}</p>
                <p>{comment.ctnt}</p>
                <p>{comment.createdAt}</p>
              </div>
            ))} */}
          </div>

          {/* <h2>제목: {boardData.title}</h2>
          <p>작성자: {boardData.name}</p>
          <p>카테고리: {boardData.category}</p>
          <p>내용: {boardData.ctnt}</p>
          <p>날짜와 시간 : {boardData.createdat}</p>
          <p>조회수 : {boardData.boardview}</p> */}

          <h1>리뷰작성</h1>
          <div className="community_bulletin_board_comment_box">
            <div className="community_bulletin_board_comment">
              <img
                src="/image/profile.jpg"
                alt="My Image"
                className="community_bulletin_board_img"
              />
              <p>hyeongman1990</p>
              <textarea cols="30" rows="10"></textarea>
              <button>등록</button>
            </div>
          </div>
        </div>
      </div>
    </CommunityBulletinBoardWrapper>
  );
};

export default CommunityBulletinBoard;
