import Card from "../UI/Card";
import classes from "./Feedback.module.css";
import {
  ChatBubbleOvalLeftEllipsisIcon,

} from "@heroicons/react/24/solid";

function Feedback() {
  return (
    <>
      <a href="https://forms.gle/ER1kQke3bCjsHEMc7" target="_blank" className={classes.box} title="Feedback">
        <Card>
          <ChatBubbleOvalLeftEllipsisIcon />
        </Card>
      </a>
    </>
  );
}

export default Feedback;
