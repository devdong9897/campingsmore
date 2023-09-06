import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const MainContentsWrapper = styled.div`
  width: 100%;
  height: auto;
  background: whitesmoke;
  .top_main_contents {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 980px;
    background: #000;
    .slide_area {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: skyblue;
      .swiper {
        width: 100%;
        height: 100%;
        background: ghostwhite;
      }
    }
    .main_contents_inner {
      z-index: 300;
      position: absolute;
      top: 58%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1000px;
      height: auto;
      .main_title {
        display: block;
        width: 100%;
        height: 100px;
        color: #fff;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        strong {
          color: #d2b48c;
        }
      }
      .search_bar {
        position: relative;
        width: 100%;
        height: 75px;
        overflow: hidden;
        border-radius: 100px;
        input {
          width: 100%;
          height: 100%;
          font-size: 20px;
          padding: 0px 25px;
        }
        .search_submit {
          position: absolute;
          right: 0px;
          top: 0px;
          width: 100px;
          height: 100%;
          background: #d2b48c;
          border: none;
          color: #fff;
          font-size: 35px;
        }
      }
      .main_category {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        width: 100%;
        height: 50px;
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 18%;
          padding: 0px 35px;
          height: 100%;
          border-radius: 100px;
          background: #d2b48c;
          font-size: 17px;
          color: #fff;
          cursor: pointer;
        }
      }
      .empty_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-top: 200px;
        width: 100%;
        height: 300px;
        color: #fff;
        background: rgba(0, 0, 0, 0.3);
      }
      .select_slide {
        margin-top: 200px;
        width: 100%;
        height: 300px;
      }
    }
  }
  .top_main_contents::after {
    z-index: 3;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0.3;
    background-image: url(${path}/image/dot_bg.png);
  }
  .kakao_map_wrap {
    position: relative;
    width: 100%;
    height: 800px;
    margin-top: 30px;
    .map_title {
      display: block;
      font-size: 40px;
      text-align: center;
      color: #d2b48c;
      font-weight: 900;
    }
    .kakao_map_area {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1300px;
      height: 600px;
      overflow: hidden;
      border-radius: 15px;
      .slide_inner {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: flex-end;
        padding: 30px;
        .camping_img {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          z-index: 0;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
          }
        }
        .camping_detail {
          position: absolute;
          bottom: 0px;
          left: 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 100%;
          height: 30%;
          background: rgba(54, 54, 54, 0.7);
          .name {
            font-size: 25px;
            font-weight: bold;
          }
          span {
            text-align: center;
            color: #fff;
            a {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .recommned_menu {
    width: 100%;
    height: auto;
    .recommned_branner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 150px;
      background: #d2b48c;
      .img {
        width: 500px;
        height: 500px;
        margin-bottom: 30px;
        background-image: url(${path}/image/food.jpg);
      }
      .recommned_title {
        font-weight: bold;
        font-size: 40px;
        color: #fff;
      }
    }
    .recommned_inner {
      padding: 100px 0px;
      margin: 0 auto;
      width: 1300px;
      height: auto;
      .recommned_list {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-template-rows: 550px 550px 550px;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        width: 100%;
        height: 100%;
        li {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          background: #fff;
          overflow: hidden;
          border-radius: 5px;
          transition-duration: 0.3s;
          &:hover {
            box-shadow: 1px 1px 10px rgba(173, 173, 173);
            .reco_item_pic {
              img {
                width: 140%;
                transition-duration: 0.3s;
              }
            }
          }
          .reco_item_pic {
            position: relative;
            width: 100%;
            height: 300px;
            overflow: hidden;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 125%;
            }
          }
          .reco_item_desc {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 10px;
            padding: 20px;
            width: 100%;
            height: 200px;
            .reco_title {
              width: 100%;
              font-size: 18px;
              font-weight: bold;
            }
            .reco_price {
              width: 100%;
              font-size: 21px;
              font-weight: bold;
            }
          }
          .option {
            margin: 0 auto;
            width: 100%;
            border-top: 1px solid black;
            display: flex;
            padding: 15px 20px;
            gap: 10px;
            color: #696969;
          }
        }
      }
      .bestempty_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 300px;
      }
    }
  }
`;
