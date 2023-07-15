import Card from "./Card";
import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={classes.modal}>
      <Card>
        <button className={classes.exit} onClick={props.onClick}>X</button>
        <div>{props.children}</div>
      </Card>
      <div className={classes.backdrop}></div>
    </div>
  );
}

export default Modal;
