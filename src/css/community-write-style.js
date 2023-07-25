import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const CommunityWriteWrapper = styled.div`
    width: 100%;
    height:auto;
    .top_communityWrite_contents {
        width: 100%;
        height:1000px;
        position:relative;
    }
    .communityWrite_contents_inner {
        position:absolute;
        width:1300px;
        margin:0 auto;
        height: 100%;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .top_communityWrite_title {
    }
    .communityWrite_line {
        margin:20px 0 20px 0;
    }
    .communityWrite_board_menu {
        width: 120px;
        height:30px;
        text-indent:15px;
        display: block;
        margin-bottom:20px;
        float:left;
    }
    .communityWrite_board_regi {
        float:right;
        background-color: #9ab685;
        border-radius: 15px;
        border:none;
        width: 80px;
        height:30px;
        color:white;
    }
    .communityWrite_board_title {
        width: 100%;
        height:60px;
        font-size:20px;
        text-indent:15px;
        margin-bottom:20px;
    }
    .communityWrite_board_detail{
        width:1300px;
        height:800px;
        font-size:20px;
        text-indent:15px;
        line-height: 1.5;
    }
    
`