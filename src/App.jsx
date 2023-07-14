import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./componenents/Header";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./pages/HomePage";
import SubmitPage from "./pages/SubmitPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/submit">
          <SubmitPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
