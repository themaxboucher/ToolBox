import Tool from "./Tool";
import classes from "./List.module.css";
import ToolsData from "../data/ToolsData";

function List() {

  return (
    <ul className={classes.list}>
      {ToolsData.map((item) => (
        <Tool
          key={item.title}
          title={item.title}
          thumbnail={item.thumbnail}
          tagline={item.tagline}
          description={item.description}
          link={item.link}
          twitter={item.twitter}
          price={item.price}
          tags={item.tags}
          keyFeatures={item.keyFeatures}
        />
      ))}
    </ul>
  );
}

export default List;
