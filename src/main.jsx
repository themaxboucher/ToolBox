import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";
import { AuthModalContextProvider } from "./store/AuthModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthModalContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthModalContextProvider>
);
