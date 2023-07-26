import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const FindWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: white;
  background-image: url("${path}/image/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .find_inner {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 575px;
    height: auto;
    background: rgba(154, 182, 133, 0.7);
    padding: 20px;
    border-radius: 20px;
    overflow: hidden;
  }
`;
