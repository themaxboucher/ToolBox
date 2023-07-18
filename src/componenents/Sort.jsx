import Tag from "../UI/Tag";
import TagList from "../UI/TagList";
import classes from "./Sort.module.css";
import Card from "../UI/Card";
import Select from "../UI/Select";

function Sort() {
  const priceOptions = ["All", "Free", "Paid"];
  const categoryOptions = ["Featured", "Chat", "Writing", "Art & Images", "Video", "Audio", "Developer Tools", "SMM", "SEO"];

  return (
    <div className={classes.sort}>
      <label>SORT BY:</label>
      <Select type="price" options={priceOptions}/>
      <Select type="category" options={categoryOptions} />
    </div>
  );
}

export default Sort;
