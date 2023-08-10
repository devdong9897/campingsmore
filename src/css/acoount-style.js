import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const AccoutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &::after {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    content: "";
    height: 100%;
    opacity: 0.2;
    background-image: url("${path}/image/dot_bg.png");
  }
  &::before {
    position: absolute;
    top: 0px;
    left: 0px;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("${path}/image/bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .account_inner {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: auto;
    height: auto;
    background: rgba(210, 180, 140, 0.7);
    border-radius: 20px;
    overflow: hidden;
  }
`;
