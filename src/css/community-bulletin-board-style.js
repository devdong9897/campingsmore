import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const CommunityBulletinBoardWrapper = styled.div`
  width: 100%;
  height: auto;
  .top_community_bulletin_board_contents {
    width: 100%;
    height: 1000px;
    position: relative;
  }
  .community_bulletin_board_contents_inner {
    position: absolute;
    width: 1300px;
    margin: 0 auto;
    height: 100%;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .community_bulletin_board_line {
    margin: 20px 0 20px 0;
  }
  .community_bulletin_board_regi {
    float: right;
    background-color: #D2B48C;
    border-radius: 15px;
    border: none;
    width: 130px;
    height: 30px;
    color: white;
    display: block;
  }
  .community_bulletin_board_edit {
    float: right;
    background-color: #D2B48C;
    border-radius: 15px;
    border: none;
    width: 80px;
    height: 30px;
    color: white;
    display: block;
    margin-right:10px;
  }
  .community_bulletin_board_del {
    float: right;
    background-color: #D2B48C;
    border-radius: 15px;
    border: none;
    width: 80px;
    height: 30px;
    color: white;
    display: block;
    margin-right:10px;
  }
  .community_bulletin_board_title {
    width: 100%;
    height: 60px;
    font-size: 20px;
    text-indent: 15px;
    margin-top:20px;
    margin-bottom: 20px;
    border:none;
    border-radius:10px;
    resize:none;
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
    height:250px;
    border-radius: 10px;
    background-color: white;
 
  .community_bulletin_board_comment {
    width: 90%;
    height:180px;
    margin:0 auto;
    background-color: white;
    position:relative;
    top:20px;
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
    textarea {
      margin-top:20px;
      width: 100%;
      height:110px;
      border:none;
      border-radius: 15px;
      background-color: lightgray;
      text-indent:10px;
      resize:none;
    }
    button {
      float:right;
      width: 70px;
      height:30px;
      border-radius:5px;
      background-color: white;
    }
    button:hover {
      background-color: black;
      color:white;
    }
  }
`;
