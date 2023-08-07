import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const ReservationWrapper = styled.div`
  width: 100%;
  height: 100%px;
  background: white;
  color: #eee;
  background-image: url("${path}/image/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .reservation_inner {
    position: relative;
    padding-top: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 3000px;
    background: rgba(217, 217, 217, 0.5);
    .logo_img {
      width: 500px;
      height: 500px;
      background: url("${path}/image/logo2.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 500px;
      margin: 0 auto;
    }
    .announcement {
      text-align: center;
      font-size: 24px;
      margin-top: 20px;
      color: #eee;
      font-weight: bold;
      h1 {
        font-size: 90px;
        font-weight: 900;
      }
      span {
        color: red;
        font-weight: 900;
      }
      p {
        font-size: 40px;
      }
    }
  }
`;
