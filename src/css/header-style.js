import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999999;
  width: 100%;
  height: 120px;
  background: rgba(0, 0, 0, 0.3);
  .inner {
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 1300px;
    height: 100%;
    .logo {
      flex-grow: 1;
      width: 150px;
      height: 100%;
      background-image: url("${path}/image/Logo_w.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 125px;
      cursor: pointer;
    }
    .gnb_area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 3%;
      width: 70%;
      height: 100%;
      .gnb_list {
        display: flex;
        justify-content: center;
        gap: 3%;
        align-items: center;
        width: 100%;
        height: auto;
        li {
          width: 10%;
          height: 100%;
          a {
            padding-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: auto;
            color: #fff;
            font-size: 19px;
            font-weight: 800;
            text-shadow: 2px 2px 2px black;
            &:hover {
              color: #D2B48C;
            }
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
            margin-top: 15px;
          }
        }
      }
    }
  }
`;
