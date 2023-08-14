import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const ReviewModalWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
  .review_modal_contents_inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: auto;
    border-radius: 15px;
    background: #ffff;
  }
  .select_item {
    margin: 0 auto;
    margin-top: 50px;
    width: calc(100% - 80px);
    height: 100px;
    background: #ffff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 1px 5px black;
    li {
      display: flex;
      .thisitem_img {
        width: 100px;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .item_name {
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-left: 10px;
        font-size: 18px;
      }
    }
  }
  .review_modal_title {
    width: calc(100% - 80px);
    height: 60px;
    background-color: white;
    margin: 0 auto;
    margin-top: 40px;
    display: block;
    text-indent: 20px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;
    background: #f0f0f0;
  }
  .review_modal_detail {
    margin: 0 auto;
    margin-top: 25px;
    width: calc(100% - 80px) !important;
    height: 50%;
    display: block;
    padding: 20px;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;
    background: #f0f0f0;
    resize: none;
  }
  .review_modal_eval {
    text-align: center;
    padding-top: 10px;
  }
  .review_modal_star {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30px;
    gap: 5px;
    text-align: center;
    color: #ffdc62;
    margin: 10px 0;
    li {
      list-style-type: none;
      width: 30px;
      height: 30px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .review_modal_complete {
    display: block;
    margin: 0 auto;
    margin-top: 25px;
    padding: 5px 50px;
    border-radius: 5px;
    border: none;
    background-color: #d2b48c;
  }
  .review_cancel {
    display: block;
    margin: 0 auto;
    margin-top: 25px;
    padding: 5px 50px;
    border-radius: 5px;
    border: none;
    background-color: #d2b48c;
  }
`;
