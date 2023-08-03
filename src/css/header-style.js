import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999999;
  width: 100%;
  height: ${(props) => (props.scrollOver ? '90px' : '120px')};
  background: ${(props) => (props.scrollOver ? 'rgba(0, 0, 0,0.8)' : 'rgba(0, 0, 0,0.3)')};
  transition: height, background 0.3s ease-in;
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
      background-image: url("${path}/image/Logo_w.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: ${(props) => (props.scrollOver ? '100px' : '125px')};
    }
    .gnb_area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: ${(props) => (props.scrollOver ? '0%' : '3%')};
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
              color: #9ab685;
            }
          }
        }
      }
    }
    .account {
      flex-grow: 1;
      width: 10%;
      height: 100%;
      padding-top: 1.6%;
      .account_list {
        display: flex;
        justify-content: flex-end;
        padding-right: 50px;
        padding-top: 10px;
        gap: 15px;
        li {
          a {
            display: block;
            width: auto;
            height: 50px;
            font-size: 17px;
            color: #fff;
          }
        }
      }
    }
  }
`;
