import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const CommunityBulletinBoardWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top:150px;
  padding-bottom:80px;
  .top_community_bulletin_board_contents {
    width: 100%;
    height: auto;
  }
  .community_bulletin_board_contents_inner {
    margin: 0 auto;
    width: 1300px;
    height: auto;
  }
  .community_bulletin_board_line {
    margin: 20px 0 20px 0;
  }
  .community_bulletin_board_topbox {
    width: 100%;
    height:auto;
    .community_bulletin_board_title{
    font-size:30px;
    width: auto;
    height: auto;
    margin-bottom:10px;
    font-size: 20px;
    border:none;
    border-radius:10px;
    resize:none;
    float:left;
    }
    .board_info {
    .board_category {
      border-radius: 15px;
      }
      .board_create_info{
        float:right;
        display: block;
      }
    }
    .board_ctnt{
      width: 100%;
      border-radius:5px;
      margin-top:10px;
      overflow: hidden;
      background-color: lightgray;
    }
  }
  .community_bulletin_board_detail {
    width: 1300px;
    height: 270px;
    font-size: 20px;
    text-indent: 15px;
    line-height: 1.5;
    border:none;
    border-radius: 10px;
    resize:none;
  }
  .community_bulletin_board_comment_box {
    width: 100%;
    height:200px;
    background-color: lightgray;
  .community_bulletin_board_comment {
    width: 90%;
    height:180px;
    margin:0 auto;
    position:relative;
    top:22px;
    textarea{
      resize:none;
      text-indent: 10px;
      border-radius: 10px;
      background-color: white;
      border:1px solid white;
    }
    img {
      width: 50px;
      height:50px;
      float:left;
    }
    p {
      padding-left:70px;
      padding-top:20px;      
    }
    }
    .board_date {
      margin-top:20px;
      width: 100%;
      height:110px;
      border:none;
      border-radius: 15px;
      background-color: lightgray;
      text-indent:10px;
      resize:none;
    }
  }
  .community_bulletin_board_resi{
      float:right;
      width: 70px;
      height:30px;
      border-radius:5px;
      background-color: white;
      margin-top:20px;
    }
    .community_bulletin_board_resi:hover {
      background-color: black;
      color:white;
    }

`