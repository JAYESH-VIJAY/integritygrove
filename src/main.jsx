import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//========= order is important ===========// 
import "./plugins.css";
import "./App.css";
import "./index.css";
import "./styles/HomePage/HomePage.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
