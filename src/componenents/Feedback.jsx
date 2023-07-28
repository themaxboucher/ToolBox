import { useState } from "react";
import Card from "../UI/Card";
import classes from "./Feedback.module.css";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PaperAirplaneIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Utilities/firebase";

function Feedback() {
  const [user] = useAuthState(auth);

  const [formIsOpen, setFormIsOpen] = useState(false);
  function toggleFormHandler() {
    if (formIsOpen) {
      setFormIsOpen(false);
    } else {
      setFormIsOpen(true);
    }
  }

  return (
    <>
      <div onClick={toggleFormHandler} className={classes.box}>
        <Card>
          {formIsOpen ? <XCircleIcon /> : <ChatBubbleOvalLeftEllipsisIcon />}
        </Card>
      </div>
      {formIsOpen && (
        <div className={classes.feedbackForm}>
          <Card>
            <h3>Have feedback?</h3>
            <p>Send questions, feature requests, or bug reports here:</p>
            <form>
              <input type="text" required placeholder="Name" value={user && user.displayName} />
              <input type="email" required placeholder="Email" value={user && user.email}/>
              <textarea rows="6" required placeholder="Message"></textarea>
              <button className="btn">
                <span>Send</span>
                <PaperAirplaneIcon />
              </button>
            </form>
          </Card>
        </div>
      )}
    </>
  );
}

export default Feedback;
