import { useState } from "react";
import classes from "./Select.module.css";
import Card from "./Card";
import Tag from "./Tag";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

function Select(props) {
  const [optionsAreOpen, setOptionsAreOpen] = useState(false);
  function toggleOptionsHandler() {
    if (optionsAreOpen) {
      setOptionsAreOpen(false);
    } else {
      setOptionsAreOpen(true);
    }
  }

  function selectBtnText() {
    if (props.type === "price") {
      return props.currentFilter === "All" ? "All Prices" : props.currentFilter;
    } else if (props.type === "category") {
      return props.currentFilter === "Featured" ? "All Categories" : props.currentFilter;
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
              <Tag key={option} type={props.type} currentFilter={props.currentFilter}>
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
