import { Route, Routes } from "react-router-dom";
import { Wrap } from "./css/layoutSt";
import "./App.css";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    // Wrap 컴포넌트 아닙니다. 스타일입니다.
    <Wrap>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Wrap>
  );
}

export default App;
