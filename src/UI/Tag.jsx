import classes from "./Tag.module.css";

function Tag(props) {
    return <div className={classes.tag}>{props.children}</div>;
}

export default Tag;