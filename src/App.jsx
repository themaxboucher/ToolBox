import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./componenents/Header";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./pages/HomePage";
import SubmitPage from "./pages/SubmitPage";
import Layout from "./layout/Layout";
import { possibleFilterCombos } from "./data/FilterOptions";
import Hero from "./componenents/Hero";
import List from "./componenents/List";
import Sort from "./componenents/Sort";
import AuthModal from "./componenents/AuthModal";
import AccountPage from "./pages/AccountPage";

function App() {
  console.log(possibleFilterCombos);

  function filterComboPath(priceFilter, categoryFilter) {
    if (priceFilter === "All" && categoryFilter == "Featured") {
      return "/";
    } else if (priceFilter === "All" && categoryFilter !== "Featured") {
      return `/${categoryFilter}-tools`;
    } else if (priceFilter !== "All" && categoryFilter === "Featured") {
      return `/${priceFilter}-tools`;
    } else if (priceFilter !== "All" && categoryFilter !== "Featured") {
      return `/${priceFilter}-${categoryFilter}-tools`;
    }
  }

  function filterComboHeaderText(priceFilter, categoryFilter) {
    if (priceFilter === "All" && categoryFilter == "Featured") {
      return "Find the best new AI tools";
    } else if (priceFilter === "All" && categoryFilter !== "Featured") {
      return `AI ${categoryFilter} Tools`;
    } else if (priceFilter !== "All" && categoryFilter === "Featured") {
      return `${priceFilter} AI Tools`;
    } else if (priceFilter !== "All" && categoryFilter !== "Featured") {
      return `${priceFilter} AI ${categoryFilter} Tools`;
    }
  }

  const [authModalIsOpen, setAuthModalIsOpen] = useState(true);
  function openAuthModalHandler() {
    setAuthModalIsOpen(true);
  }
  function closeAuthModalHandler() {
    setAuthModalIsOpen(false);
  }

  return (
    <>
      <Layout openAuthModal={openAuthModalHandler}>
        <Switch>
          {/* <Route path="/" exact>
            <HomePage />
          </Route> */}
          {possibleFilterCombos.map((filterCombo) => (
            <Route
              path={filterComboPath(
                filterCombo.priceFilter,
                filterCombo.categoryFilter
              )}
              key={filterCombo}
              exact
            >
              <section>
                <Hero
                  headerText={filterComboHeaderText(
                    filterCombo.priceFilter,
                    filterCombo.categoryFilter
                  )}
                  subheaderText={`Placeholder text.`}
                />
                <Sort
                  priceFilter={filterCombo.priceFilter}
                  categoryFilter={filterCombo.categoryFilter}
                />
                <List filterCombo={filterCombo} />
              </section>
            </Route>
          ))}
          <Route path="/submit">
            <SubmitPage />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
        </Switch>
        {authModalIsOpen && <AuthModal closeAuthModal={closeAuthModalHandler} />}
      </Layout>
    </>
  );
}

export default App;
