import { Route, Routes } from "react-router-dom";
import { Wrap } from "./css/layoutSt";
import "./App.css";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Main from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderList from "./pages/OrderList";
import Community from "./pages/Community";
function App() {
  return (
    // Wrap 컴포넌트 아닙니다. 스타일입니다.
    <Wrap>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/orderlist" element={<OrderList />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Wrap>
  );
}

export default App;
