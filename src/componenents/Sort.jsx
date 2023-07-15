import Tag from "../UI/Tag";
import TagList from "../UI/TagList";
import classes from "./Sort.module.css";

function Sort() {
  return (
    <div className={classes.sort}>
      <label htmlFor="catagories">SORT BY:</label>
      <TagList>
        <Tag>LLM</Tag>
        <Tag>Image Generation</Tag>
      </TagList>
    </div>
  );
}

export default Sort;