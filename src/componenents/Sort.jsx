import classes from "./Sort.module.css";
import Select from "../UI/Select";
import { categoryOptions, priceOptions } from "../data/FilterOptions";

function Sort(props) {
  return (
    <div className={classes.sort}>
      <label>SORT BY:</label>
      <div className={classes.selecters}>
        <Select
          type="price"
          options={priceOptions}
          currentFilter={props.priceFilter}
        />
        <Select
          type="category"
          options={categoryOptions}
          currentFilter={props.categoryFilter}
        />
      </div>
    </div>
  );
}

export default Sort;
