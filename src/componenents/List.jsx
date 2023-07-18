import Tool from "./Tool";
import classes from "./List.module.css";
import ToolsData from "../data/ToolsData";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function List(props) {
  const filteredTools = ToolsData.filter(
    (tool) =>
      (tool.price === props.filterCombo.priceFilter ||
        props.filterCombo.priceFilter === "All") &&
      (tool.tags.some((tag) => tag === props.filterCombo.categoryFilter) ||
        props.filterCombo.categoryFilter === "Featured")
  );
  function filteredToolsIsEmpty() {
    if (filteredTools.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <ul className={classes.list}>
      {filteredToolsIsEmpty() ? (
        <div className={classes.listFallback}>
          <h2>There are currently no AI tools matching those filters.</h2>
          <p>Feel free to submit a tool <Link to="/submit">here</Link>.</p>
        </div>
      ) : (
        filteredTools.map((item) => (
          <Tool
            key={item.title}
            title={item.title}
            thumbnail={item.thumbnail}
            tagline={item.tagline}
            description={item.description}
            link={item.link}
            price={item.price}
            tags={item.tags}
            keyFeatures={item.keyFeatures}
          />
        ))
      )}
    </ul>
  );
}

export default List;
