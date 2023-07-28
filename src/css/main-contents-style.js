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
    height: 100vh;
    background: #000;
    .main_contents_inner {
      z-index: 1;
      position: absolute;
      top: 40%;
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
          color: #9ab685;
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
          background: #9ab685;
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
          width: auto;
          padding: 0px 35px;
          height: 100%;
          border-radius: 100px;
          background: #9ab685;
          color: #fff;
        }
      }
    }
  }
  .top_main_contents::after {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0.3;
    background-image: url("${path}/image/dot_bg.png");
  }
  .top_main_contents::before {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0.7;
    background-image: url("${path}/image/bg.jpg");
  }
  .kakao_map_wrap {
    position: relative;
    width: 100%;
    height: 1000px;
    background: #262626;
    .kakao_map_area {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1300px;
      height: 800px;
      overflow: hidden;
      border-radius: 15px;
      background: green;
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
      background: bisque;
      .recommned_title {
        font-weight: bold;
        font-size: 30px;
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
        grid-template-rows: 600px 600px 600px;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        width: 100%;
        height: 100%;
        li {
          background: gray;
        }
      }
    }
  }
`;
