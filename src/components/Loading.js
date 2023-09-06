import React from "react";
import { LoadingWapper } from "../css/loading-style";

const Loading = () => {
  return (
    <LoadingWapper>
      <div className="loading_inner">
        <span className="loader"></span>
        <span>데이터를 로딩중입니다.</span>
      </div>
    </LoadingWapper>
  );
};

export default Loading;
