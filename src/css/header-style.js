import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999999;
  width: 100%;
  height: 120px;
  background: rgba(33, 77, 8, 0.1);
  .inner {
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    .logo {
      flex-grow: 1;
      width: 150px;
      height: 100%;
      background-image: url("${path}/image/Logo.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 125px;
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
      flex-grow: 1;
      width: 10%;
      height: 100%;
      .account_list {
        display: flex;
        padding-right: 50px;
        padding-top: 10px;
        gap: 10px;
        li {
          a {
            display: block;
            width: 125px;
            height: 50px;
            font-size: 17px;
            color: #fff;
            background: green;
          }
        }
      }
    }
  }
`;
