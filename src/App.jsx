import { Route, Switch } from "react-router-dom";
import SubmitPage from "./pages/SubmitPage";
import Layout from "./layout/Layout";
import { possibleFilterCombos } from "./data/FilterOptions";
import Hero from "./componenents/Hero";
import List from "./componenents/List";
import Sort from "./componenents/Sort";
import AuthModal from "./componenents/AuthModal";
import AccountPage from "./pages/AccountPage";
import { useContext } from "react";
import AuthModalContext from "./store/AuthModalContext";
import NotFoundPage from "./pages/NotFoundPage";
import toKebabCase from "./helperFunctions/toKebabCase";
import Feedback from "./componenents/Feedback";

function App() {
  function filterComboPath(priceFilter, categoryFilter) {
    if (priceFilter === "All" && categoryFilter == "Featured") {
      return "/";
    } else if (priceFilter === "All" && categoryFilter !== "Featured") {
      return `/${toKebabCase(categoryFilter)}-tools`;
    } else if (priceFilter !== "All" && categoryFilter === "Featured") {
      return `/${toKebabCase(priceFilter)}-tools`;
    } else if (priceFilter !== "All" && categoryFilter !== "Featured") {
      return `/${toKebabCase(priceFilter)}-${toKebabCase(
        categoryFilter
      )}-tools`;
    }
  }

  //Context for the authentication modal
  const AuthModalCtx = useContext(AuthModalContext);

  return (
    <>
      <Layout>
        <Switch>
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
                <Hero filterCombo={filterCombo} />
                <Sort
                  priceFilter={filterCombo.priceFilter}
                  categoryFilter={filterCombo.categoryFilter}
                />
                <List filters={filterCombo} />
              </section>
            </Route>
          ))}
          <Route path="/submit">
            <SubmitPage />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
        {AuthModalCtx.authModalIsOpen && <AuthModal />}
      </Layout>
      <Feedback />
    </>
  );
}

export default App;
