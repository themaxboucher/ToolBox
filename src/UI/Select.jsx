import { useRef, useState, useEffect } from "react";
import classes from "./Select.module.css";
import Card from "./Card";
import Tag from "./Tag";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Select(props) {
  const [optionsAreOpen, setOptionsAreOpen] = useState(false);
  function toggleOptionsHandler() {
    if (optionsAreOpen) {
      setOptionsAreOpen(false);
      console.log("close");
    } else {
      setOptionsAreOpen(true);
      console.log("open");
    }
  }

  // Close dropdown if users clicks outside dropdown
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOptionsAreOpen(false);
      }
    };

    // Attach the event listener to the document when the dropdown is visible
    if (optionsAreOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // Clean up the event listener when the dropdown is not visible
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [optionsAreOpen]);
  // TODO: Fix bug where select doesn't open if you click on the arrow

  function selectBtnText() {
    if (props.type === "price") {
      return props.currentFilter === "All" ? "All Pricing" : props.currentFilter;
    } else if (props.type === "category") {
      return props.currentFilter === "Featured"
        ? "All Categories"
        : props.currentFilter;
    }
  }

  return (
    <div className={classes.select} ref={dropdownRef}>
      <button className={classes.selectBtn} onClick={toggleOptionsHandler}>
        <span>{selectBtnText()}</span>
        <ChevronDownIcon className={optionsAreOpen && classes.rotate} />
      </button>
      {optionsAreOpen && (
        <div className={classes.dropdown}>
          <Card>
            {props.options.map((option) => (
              <Tag
                key={option}
                type={props.type}
                currentFilter={props.currentFilter}
                close={toggleOptionsHandler}
              >
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
