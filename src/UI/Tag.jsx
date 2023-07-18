import { useContext } from "react";
import classes from "./Tag.module.css";
import FiltersContext from "../store/FiltersContext";

function Tag(props) {
  const filtersCtx = useContext(FiltersContext);

  const filterIsSelected = filtersCtx.filterIsSelected(props.children);

  function clickHandler() {
    if (props.type === "price") {
      if (props.children === filtersCtx.priceFilter) {
        filtersCtx.changePriceFilter("All");
      } else {
        filtersCtx.changePriceFilter(props.children);
      }
    } else if (props.type == "category") {
      if (props.children === filtersCtx.categoryFilter) {
        filtersCtx.changeCategoryFilter("Featured");
      } else {
        filtersCtx.changeCategoryFilter(props.children);
      }
    }
  }

  return (
    <div
      className={filterIsSelected ? classes.selectedTag : classes.tag}
      onClick={clickHandler}
    >
      {props.children}
    </div>
  );
}

export default Tag;
