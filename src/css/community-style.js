import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const CommunityWrapper = styled.div`
  width: 100%;
  height: auto;
  .top_community_contents {
    width: 100%;
    height: 1000px;
    position: relative;
  }
  .community_contents_inner {
    position: absolute;
    width: 1300px;
    margin: 0 auto;
    height: 100%;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .community_search {
    float:left;
    height:26px;
    margin-right:10px;
  }
  .communit_icon {
    float:left;
    width: 20px;
    height:20px;
    padding:2px 2px;
    border:1px solid #000; 
  }
  .community_board_regi {
    float: right;
    background-color: #9ab685;
    border-radius: 15px;
    border: none;
    width: 130px;
    height: 30px;
    color: white;
    display: block;
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
  .community_board_list_notice {
    background-color: gray;
    border-radius: 50%;
    padding: 5px;
    width: 200px;
    height: 200px;
  }
  span:nth-child(2) {
    margin-left: 150px;
  }
  span:last-child {
    float: right;
    margin-right: 10px;
  }
  
`;
