import { Route, Routes } from "react-router-dom";
import { Wrap } from "./css/layout-style";
import "./App.css";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Main from "./pages/MainPage";
import NotFound from "./pages/NotFound";
function App() {
  return (
    // Wrap 컴포넌트 아닙니다. 스타일입니다.
    <Wrap>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main/*" element={<Main />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Wrap>
  );
}

export default App;
