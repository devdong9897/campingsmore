import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import store from "./store/store2";
import { Provider } from "react-redux";
import ScrollToTop from "./components/ScrollUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
      <ScrollToTop />
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </Provider>,
);
