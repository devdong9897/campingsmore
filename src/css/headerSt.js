import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const HeaderContainer = styled.div`
  z-index: 999999;
  width: 100%;
  height: 300px;
  background: white;
  background-image: url("${path}/image/headerBg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  .inner {
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 1400px;
    height: 100%;
    .logo {
      margin: 0 auto;
      width: 200px;
      height: 150px;
      background: orange;
    }
    .nav_box {
      display: flex;
      width: 100%;
      height: 100%;
      .gnb {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 100%;
        p {
          width: 100%;
          height: auto;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 30px;
          color: #fff;
          text-align: center;
        }
      }
    }
    .account {
      position: absolute;
      top: 0px;
      right: 0px;
      width: auto;
      padding: 0px 10px;
      height: 50px;
      border-radius: 100px;
      background: sandybrown;
      .account_list {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: 10px;
      }
    }
  }
`;
