import Card from "../UI/Card";
import classes from "./Tool.module.css";

function Tool(props) {
  return (
    <li>
      <Card>
        <div className={classes.display}>
          <div className={classes.right}>
            <div className={classes.thumbnail}>
              <img src={props.thumbnail} alt={props.title}></img>
            </div>
            <div className={classes.content}>
              <h3>{props.title}</h3>
              <p>{props.tagline}</p>
            </div>
          </div>
          <div className={classes.links}>
            {props.twitter && (
              <a href={props.twitter} target="_blank">
                TWT
              </a>
            )}
            <a href={props.link} target="_blank">
              URL
            </a>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default Tool;
