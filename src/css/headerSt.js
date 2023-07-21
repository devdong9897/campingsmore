import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const HeaderContainer = styled.div`
  z-index: 999999;
  width: 100%;
  height: 120px;
  background: #214a08;
  .inner {
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    .logo {
      width: 15%;
      height: 100%;
    }
    .gnb_area {
      display: flex;
      justify-content: center;
      width: 70%;
      height: 100%;
      .gnb_list {
        display: flex;
        justify-content: space-between;
        width: 970px;
        height: 100%;
        li {
          width: 23%;
          height: 100%;
          a {
            padding-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50%;
            background: #9ab685;
            border-bottom-right-radius: 40px;
            border-bottom-left-radius: 40px;
            color: #fff;
            font-size: 19px;
            font-weight: bold;
            text-shadow: 2px 2px 2px black;
          }
        }
      }
    }
    .account {
      width: 15%;
      height: 100%;
    }
  }
`;
