import Card from "../UI/Card";
import classes from "./LoadingList.module.css";

function LoadingList(props) {
  const cards = [];
  for (let i = 0; i < props.repeatTimes; i++) {
    cards.push(
      <Card>
        <div className={classes.loadingList}>
          <div className={classes.right}>
            <div className={classes.thumbnail}></div>
            <div className={classes.content}>
              <div className={classes.name}></div>
              <div className={classes.tagline}></div>
              <div className={classes.tags}></div>
            </div>
          </div>
          <div className={classes.saver}></div>
        </div>
      </Card>
    );
  }
  return <>{cards}</>;
}

export default LoadingList;
