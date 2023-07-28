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
`