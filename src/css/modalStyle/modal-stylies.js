import styled from "@emotion/styled";

export const BoardDeleteModalWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
  .boardDelete_inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    width: 500px;
    height: 200px;
    background: rgba(210, 180, 140, 0.9);
    border-radius: 35px;
    padding: 20px;
    .warning_text {
      margin-top: 30px;
      width: 100%;
      height: auto;
      font-size: 25px;
      text-align: center;
      color: #fff;
    }
    .modal_button {
      margin-top: 35px;
      gap: 20px;
      display: flex;
      justify-content: center;
      width: 100%;
      button {
        width: 150px;
        height: 45px;
        border-radius: 10px;
        border: none;
        font-size: 18px;
      }
    }
  }
`;
