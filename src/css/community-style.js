import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const CommunityWrapper = styled.div`
  width: 100%;
  height: auto;
  .top_community_contents {
    width: 100%;
    height: 1000px;
    position: relative;
    overflow: hidden;
  }
  .community_contents_inner {
    position: absolute;
    width: 1300px;
    margin: 0 auto;
    width: 1300px;
    margin: 0 auto;
    height: 100%;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .community_line {
    margin:20px 0;
  }
  /* .community_form {
    float:right
  } */
  .community_board_menu {
    width: 60px;
    height: 30px;
    text-indent: 5px;
    display: block;
    margin-right:10px;
    margin-bottom: 20px;
    float: left;
  }
  .community_board_menu:focus, .community_board_menu:hover  {
  border:1px solid #8B4513;
 }
  .community_search {
    float:right;
    height:30px;
    margin-right:10px;
    text-indent:10px;
  }
  .community_search:hover {
    border:1px solid #8B4513;
  }
  .community_icon{
    width: 20px;
    height:20px;
    border:1px solid #000;
    padding:4px;
    border-radius: 10px;
    float:right;
  }
  .community_line {
    margin: 20px 0 20px 0;
  }
  
  .community_board_list_head:nth-of-type(1),
  .community_board_list_head:nth-of-type(5) {
    margin-top: 80px;
    background: lightgray;
  }
  .community_board_list_head {
    width: 100%;
    height: 50px;

    font-size: 20px;
    line-height: 50px;
    margin-top: 10px;
    border-bottom: 1px solid #000;
  }

  span:nth-child(1) {
    margin-left: 10px;
    color:red;
    font-weight:bold;
    font-size:14px;
    padding:5px;
    border:1px solid red;
    border-radius: 20px;
    background-color: white;
  }
  span:nth-child(2) {
    margin-left: 150px;
    background: url() ;
  }
  span:last-child {
    float: right;
    margin-right: 10px;
  }

  .community_board_bod div {
  border-bottom: 1px solid black;
  }
  .community_board_bod div:first-child {
    border:none;
    padding:0;
  }
  .community_board_regi {
    float: right;
    background-color: #D2B48C;
    border-radius: 15px;
    border: none;
    width: 130px;
    height: 30px;
    color: white;
    display: block;
    margin-top:20px;
  }

`;
