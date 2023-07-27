import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import FindPassWord from "../components/FindPassWord";
import PassChange from "../components/PassChange";
import PassWordResult from "../components/PassWordResult";
import FindID from "../components/FindID";
import IdResult from "../components/IdResult";
import { AccoutWrapper } from "../css/acoount-style";

const Account = () => {
  return (
    <AccoutWrapper>
      <div className="account_inner">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
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
