import { createContext, useState } from "react";

const FiltersContext = createContext({
  priceFilter: "All",
  categoryFilter: "Featured",
  changePriceFilter: (selectedFilter) => {},
  changeCategoryFilter: (selectedFilter) => {},
  itemMatchesFilters: (itemTag) => {},
});

export function FiltersContextProvider(props) {
  const [userPriceFilter, setUserPriceFilter] = useState("All");
  function changePriceFilterHandler(selectedFilter) {
    setUserPriceFilter(selectedFilter);
  }

  const [userCategoryFilter, setUserCategoryFilter] = useState("Featured");
  function changeCategoryFilterHandler(selectedFilter) {
    setUserCategoryFilter(selectedFilter);
  }

  function filterIsSelectedHandler(itemTag) {
    if (itemTag === userPriceFilter || itemTag === userCategoryFilter) {
      return true;
    } else {
      return false;
    }
  }

  function itemMatchesFiltersHandler(itemTag) {
    if (itemTag === userPriceFilter && itemTag === userCategoryFilter) {
      return true;
    } else {
      return false;
    }
  }

  const context = {
    priceFilter: userPriceFilter,
    categoryFilter: userCategoryFilter,
    changePriceFilter: changePriceFilterHandler,
    changeCategoryFilter: changeCategoryFilterHandler,
    filterIsSelected: filterIsSelectedHandler,
    itemMatchesFilters: itemMatchesFiltersHandler,
  };
  return (
    <FiltersContext.Provider value={context}>
      {props.children}
    </FiltersContext.Provider>
  );
}

export default FiltersContext;
