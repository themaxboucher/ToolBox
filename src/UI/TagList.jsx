import classes from "./TagList.module.css";

function TagList(props) {
    return <div className={classes.display}>{props.children}</div>;
}

export default TagList;