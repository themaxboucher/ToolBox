import classes from "./ModalBackdrop.module.css";

function ModalBackdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
}

export default ModalBackdrop;
