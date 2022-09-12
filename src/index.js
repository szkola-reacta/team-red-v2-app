import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginProvider from "components/login/LoginProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>,
);
