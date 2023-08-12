import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const BasketWrapper = styled.div`
  width: 100%;
  height: auto;
  background: white;
  color: #eee;
  padding-top: 120px;
  padding-bottom: 120px;
  .basket_inner {
    margin: 0 auto;
    width: 1300px;
    height: 100%;
    h1 {
      color: black;
      margin-top: 40px;
    }
    .basket_topline {
      width: 100%;
      height: 65px;
      margin-top: 67px;
      background: #f6f1bc;
      border-radius: 15px;
      .basket_topline_list {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 0.2fr 1fr 1fr 1fr 1fr 0.2fr;
        margin-top: 10px;
        vertical-align: middle;
        color: black;
        font-size: 20px;
        padding: 20px 0px;
        li {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          border-right: 1px solid #9ab685;
          &:last-child {
            border-right: none;
          }
        }
        li:first-child {
          border-right: none;
        }
      }
    }
    .basket_list {
      width: 100%;
      height: 100%;
      .basket_goods_list {
        border-bottom: 1px solid #9ab685;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        height: auto;
        overflow: hidden;
        li {
          width: 100%;
          height: 180px;
          padding: 20px 0px;
          display: grid;
          border-radius: 15px;
          grid-template-columns: 0.2fr 1fr 1fr 1fr 1fr 0.2fr;
          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            color: black;
            text-align: center;
            font-size: 20px;
          }
          div:nth-child(4) {
            display: inline;
            margin-top: 50px;
            button {
              margin: 0 10px;
              border: 1px solid #000;
            }
            span {
            }
          }
          .basket_choice_box {
            div {
              width: 15px;
              height: 15px;
              background-color: white;
              margin-left: 23px;
            }
          }
          .basket_product_img {
            background: gold;
            border-radius: 15px;
            overflow: hidden;
            width: 140px;
            height: 140px;
            margin: 0 auto;
            img {
              width: 100%;
              height: 100%;
              background-image: url("${path}/image/food.jpg");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
            }
          }
          button {
            width: 30px;
            height: 30px;
            border: none;
            background-color: white;
            font-size: 25px;
          }
        }
      }
    }
    .basket_all_choice {
      background-color: #9ab685;
      width: 100px;
      height: 30px;
      margin-top: 10px;
      float: right;
      border: none;
      border-radius: 15px;
      color: white;
      padding: 5px 15px;
      margin-left: 30px;
      cursor: pointer;
    }
    .basket_choice_del {
      float:right;
      background-color: white;
      margin-top:10px;
      padding:5px 10px;
      border-radius: 10px;
      border:1px solid #d2b48c;
      color:#d2b48c;
    }
    
    .basket_box {
      display: block;
      background-color: #d2b48c;
      width: 200px;
      height: 40px;
      color: white;
      border-radius: 10px;
      border: none;
      font-size: 20px;
      margin: 0 auto;
      margin-top: 50px;
      cursor: pointer;
    }
    .basket_box:hover {
      background-color: #cd853f;
    }
  }
`;
