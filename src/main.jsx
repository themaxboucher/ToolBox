import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthModalContextProvider } from "./store/AuthModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthModalContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthModalContextProvider>
);
