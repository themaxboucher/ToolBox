import { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import ModalBackdrop from "../UI/ModalBackdrop";
import classes from "./Tool.module.css";
import Tag from "../UI/Tag";
import { ArrowTopRightOnSquareIcon, BoltIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import AuthModalContext from "../store/AuthModalContext";

// Firebase imports
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Utilities/firebase";

function Tool(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModalHandler() {
    // Don't open tool modal if user clicks on save button
    if (!event.target.closest("a")) {
      setModalIsOpen(true);
    }
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const [user] = useAuthState(auth);
  //Context for the authentication modal
  const AuthModalCtx = useContext(AuthModalContext);

  function saveClickHandler() {
    event.stopPropagation();
    if (!user) {
      AuthModalCtx.openAuthModal();
    } else {
      console.log("SAVED");
    }
  }

  return (
    <>
      <li onClick={openModalHandler} className={classes.tool}>
        <Card>
          <div className={classes.display}>
            <div className={classes.right}>
              <div className={classes.thumbnail}>
                <img src={props.thumbnail} alt={props.title}></img>
              </div>
              <div className={classes.content}>
                <h3>
                  <span>{props.title}</span>
                  <a href={props.link} target="_blank">
                    <ArrowTopRightOnSquareIcon className={classes.icon} />
                  </a>
                </h3>
                <p>{props.tagline}</p>
                <p className={classes.tags}>
                  <span>{props.price}</span> •{" "}
                  {props.tags.map((tag) => (
                    <a key={tag}>{tag}</a>
                  ))}
                </p>
              </div>
            </div>
            <div className={classes.links}>
              <a className={classes.actions} onClick={saveClickHandler}>
                <BookmarkIcon className={classes.icon} />
                <span>300</span>
              </a>
            </div>
          </div>
        </Card>
      </li>

      {modalIsOpen && (
        <Modal onClick={closeModalHandler}>
          <div className={classes.modal}>
            <div className={classes.top}>
              <div className={classes.right}>
                <div className={classes.thumbnail}>
                  <img src={props.thumbnail} alt={props.title}></img>
                </div>
                <div className={classes.content}>
                  <h2>{props.title}</h2>
                  <p className={classes.tagline}>{props.tagline}</p>
                  <p className={classes.tags}>
                    <span>{props.price}</span> •{" "}
                    {props.tags.map((tag) => (
                      <a key={tag}>{tag}</a>
                    ))}
                  </p>
                </div>
              </div>
              <div className={classes.links}>
                <a href={props.link} target="_blank" className="btn-alt">
                  Visit
                </a>
                <a className="btn" onClick={saveClickHandler}>
                  <BookmarkIcon className={classes.icon} />
                  <span>Save</span>
                </a>
              </div>
            </div>

            <div className={classes.description}>
              <p>{props.description}</p>
            </div>

            <div>
              <h3>
                <BoltIcon className={classes.icon} />
                <span>Key Features</span>
              </h3>
              <ul className={classes.keyFeatures}>
                {props.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
      {modalIsOpen && <ModalBackdrop onClick={closeModalHandler} />}
    </>
  );
}

export default Tool;
