import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const CommunityWriteWrapper = styled.div`
  width: 100%;
  height: 1500px;
  .top_communityWrite_contents {
    width: 100%;
    height: 1000px;
    position: relative;
  }
  .communityWrite_contents_inner {
    position: absolute;
    width: 1300px;
    margin: 0 auto;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .communityWrite_line {
    margin: 20px 0 20px 0;
  }
  .communityWrite_board_menu {
    width: 60px;
    height: 30px;
    text-indent: 5px;
    display: block;
    margin-bottom: 20px;
    float: left;
  }
 .communityWrite_board_menu:focus, .communityWrite_board_menu:hover  {
  border:1px solid #8B4513;
 }
  .communityWrite_board_title {
    width: 100%;
    height: 60px;
    font-size: 20px;
    text-indent: 15px;
    margin-bottom: 20px;
    border:1px solid #cccccc;
  }
  .communityWrite_board_detail {
    width: 1300px;
    height: 500px;
    font-size: 20px;
    text-indent: 15px;
    line-height: 1.5;
    border: 1px solid #D2B48C;
    border-radius: 10px;
    resize:none;

  }
  
  .communityWrite_board_cancel {
    float: right;
    background-color: #D2B48C;
    border-radius: 15px;
    border: none;
    width: 80px;
    height: 30px;
    color: white;
    margin-top:25px;
  }
  .communityWrite_board_regi, .communityWrite_board_del{
    float: right;
    background-color: #D2B48C;
    border-radius: 15px;
    border: none;
    width: 80px;
    height: 30px;
    color: white;
    margin-top:15px;
    margin-left:10px;
  }
`;
