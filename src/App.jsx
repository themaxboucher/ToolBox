import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./componenents/Header";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./pages/HomePage";
import SubmitPage from "./pages/SubmitPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/submit">
            <SubmitPage />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
