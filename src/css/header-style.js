import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999999;
  width: 100%;
  height: ${props => (props.scrollOver ? "90px" : "120px")};
  background: ${props =>
    props.scrollOver ? "rgba(0, 0, 0,0.8)" : "rgba(0, 0, 0,0.3)"};
  transition:
    height,
    background 0.3s ease-in;
  transition-duration: 0.3s;
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
      background-image: url(${path}/image/logo2.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 115px;
      margin-top: 5px;
      cursor: pointer;
    }
    .gnb_area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: ${props => (props.scrollOver ? "0%" : "3%")};
      width: 70%;
      height: 100%;
      transition-duration: 0.3s;

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
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            color: #fff;
            font-size: 19px;
            font-weight: 800;
            text-shadow: 2px 2px 2px black;
            &:hover {
              color: #d2b48c;
            }
          }
        }
      }
    }
    .account {
      flex-grow: 1;
      width: 10%;
      height: 100%;
      padding-top: 1.8%;
      .account_list {
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        li {
          a {
            display: flex;
            gap: 3px;
            width: auto;
            height: auto;
            font-size: 17px;
            color: #fff;
            .basket_img {
              display: block;
              position: relative;
              .basket_count {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                font-weight: bolder;
                position: absolute;
                top: -10px;
                right: -10px;
                width: 20px;
                height: 20px;
                border-radius: 100%;
                background: red;
              }
            }
          }
          .logout_btn {
            padding-top: 2px;
            width: auto;
            height: auto;
            font-size: 17px;
            border: none;
            background: none;
            color: #fff;
            font-family: "Inter", "NanumSquare";
          }
        }
      }
    }
  }
`;
