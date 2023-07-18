import { useContext, useState } from "react";
import classes from "./Select.module.css";
import Card from "./Card";
import Tag from "./Tag";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import FiltersContext from "../store/FiltersContext";

function Select(props) {
  const [optionsAreOpen, setOptionsAreOpen] = useState(false);
  function toggleOptionsHandler() {
    if (optionsAreOpen) {
      setOptionsAreOpen(false);
    } else {
      setOptionsAreOpen(true);
    }
  }
  const filtersCtx = useContext(FiltersContext);
  const priceFilter = filtersCtx.priceFilter;
  const categoryFilter = filtersCtx.categoryFilter;

  function selectBtnText() {
    if (props.type === "price") {
      return priceFilter === "All" ? "All Prices" : priceFilter;
    } else if (props.type === "category") {
      return categoryFilter === "Featured" ? "All Categories" : categoryFilter;
    }
  }

  return (
    <div>
      <button className={classes.selectBtn} onClick={toggleOptionsHandler}>
        <span>{selectBtnText()}</span>
        {optionsAreOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {optionsAreOpen && (
        <div className={classes.dropdown}>
          <Card>
            {props.options.map((option) => (
              <Tag key={option} type={props.type}>
                {option}
              </Tag>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}

export default Select;
