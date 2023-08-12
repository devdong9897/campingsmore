import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DaumPost from "../api/DaumPost";
import FindID from "../components/FindID";
import FindPassWord from "../components/FindPassWord";
import IdResult from "../components/IdResult";
import Login from "../components/Login";
import PassChange from "../components/PassChange";
import PassWordResult from "../components/PassWordResult";
import SignUp from "../components/SignUp";
import { AccoutWrapper } from "../css/acoount-style";

const Account = () => {
  const [daumPost, setDaumPost] = useState(false);
  const [fullAddress, setFullAddress] = useState("");
  return (
    <AccoutWrapper>
      {daumPost ? (
        <DaumPost
          setFullAddress={setFullAddress}
          setDaumPost={setDaumPost}
          daumPost={daumPost}
        />
      ) : (
        ""
      )}
      {/* <DaumPost /> */}
      <div className="account_inner">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/signup"
            element={
              <SignUp setDaumPost={setDaumPost} fullAddress={fullAddress} />
            }
          ></Route>
          <Route path="/findpassword" element={<FindPassWord />}></Route>
          <Route path="/passchange" element={<PassChange />}></Route>
          <Route path="/passwordresult" element={<PassWordResult />}></Route>
          <Route path="/findid" element={<FindID />}></Route>
          <Route path="/idresult" element={<IdResult />}></Route>
        </Routes>
      </div>
    </AccoutWrapper>
  );
};

export default Account;
