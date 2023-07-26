import React from "react";
import { Route, Routes } from "react-router";
import FindID from "./FindID";
import FindPassWord from "./FindPassWord";

const Find = () => {
  return (
    <div className="find_wrapper">
      <div className="find_inner">
        <Routes>
          <Route path="/findid" element={<FindID />}></Route>
          <Route path="/findps" element={<FindPassWord />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Find;
