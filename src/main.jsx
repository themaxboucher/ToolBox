import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";
import { FiltersContextProvider } from "./store/FiltersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FiltersContextProvider>
);
