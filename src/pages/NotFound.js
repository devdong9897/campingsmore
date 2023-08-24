import React from "react";
import { NotFoundwapper } from "../css/nonfound-style";

const NotFound = () => {
  return (
    <NotFoundwapper>
      <div className="inner">
        <span className="title">404 NOT FOUND</span>
        <span className="ctnt">
          현재 찾으시는 주소가 정확하지않거나 찾을 수 없습니다.
        </span>
      </div>
    </NotFoundwapper>
  );
};

export default NotFound;
