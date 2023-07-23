import { useEffect, useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import ModalBackdrop from "../UI/ModalBackdrop";
import classes from "./Tool.module.css";
import Tag from "../UI/Tag";
import {
  ArrowTopRightOnSquareIcon,
  BoltIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import AuthModalContext from "../store/AuthModalContext";

// Firebase imports
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../Utilities/firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  increment,
} from "firebase/firestore";

function Tool(props) {
  const toolObject = props.toolObject;

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

  const toolRef = doc(db, "tools", toolObject.id);
  const [isSavedByUser, setIsSavedByUser] = useState(false);
  const [savesNum, setSavesNum] = useState(toolObject.saves);

  useEffect(() => {
    if (user) {
      function checkIfSaved() {
        const result = toolObject.savedBy.some(
          (userIds) => userIds === user.uid
        );
        setIsSavedByUser(result);
      }

      checkIfSaved();
    }
  }, [user]);

  async function addToSaved() {
    try {
      setIsSavedByUser(true);
      setSavesNum((prev) => prev + 1);
      await updateDoc(toolRef, {
        saves: increment(1),
      });
      await updateDoc(toolRef, {
        savedBy: arrayUnion(user.uid),
      });
    } catch (error) {
      setIsSavedByUser(false);
      setSavesNum((prev) => prev - 1);
      console.log(error);
    }
  }

  async function removeFromSaved() {
    try {
      setIsSavedByUser(false);
      setSavesNum((prev) => prev - 1);
      await updateDoc(toolRef, {
        saves: increment(-1),
      });
      await updateDoc(toolRef, {
        savedBy: arrayRemove(user.uid),
      });
    } catch (error) {
      setIsSavedByUser(true);
      setSavesNum((prev) => prev + 1);
      console.log(error);
    }
  }

  function saveClickHandler() {
    if (!user) {
      AuthModalCtx.openAuthModal();
    } else {
      if (!isSavedByUser) {
        addToSaved();
      } else {
        removeFromSaved();
      }
    }
  }

  return (
    <>
      <li onClick={openModalHandler} className={classes.tool}>
        <Card>
          <div className={classes.display}>
            <div className={classes.right}>
              <div className={classes.thumbnail}>
                <img src={toolObject.thumbnail} alt={toolObject.name}></img>
              </div>
              <div className={classes.content}>
                <h3>
                  <span>{toolObject.name}</span>
                  <a href={toolObject.link} target="_blank">
                    <ArrowTopRightOnSquareIcon className={classes.icon} />
                  </a>
                </h3>
                <p>{toolObject.tagline}</p>
                <p className={classes.tags}>
                  {toolObject.pricing.free && toolObject.pricing.paid && (
                    <span>
                      <span>Free</span> +{" "}
                      <span>{toolObject.pricing.price.toLowerCase()}</span>
                    </span>
                  )}
                  {toolObject.pricing.free && !toolObject.pricing.paid && (
                    <span>
                      <span>Free</span>
                    </span>
                  )}
                  {!toolObject.pricing.free && toolObject.pricing.paid && (
                    <span>
                      <span>{toolObject.pricing.price}</span>
                    </span>
                  )}
                  •
                  {toolObject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </p>
              </div>
            </div>
            <div className={classes.links}>
              <a className={classes.actions} onClick={saveClickHandler}>
                {isSavedByUser ? (
                  <BookmarkIcon className={classes.icon} />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={classes.icon}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                )}
                <span>{savesNum.toString()}</span>
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
                  <img src={toolObject.thumbnail} alt={toolObject.title}></img>
                </div>
                <div className={classes.content}>
                  <h2>{toolObject.name}</h2>
                  <p className={classes.tagline}>{toolObject.tagline}</p>
                  <p className={classes.tags}>
                    {toolObject.pricing.free && toolObject.pricing.paid && (
                      <span>
                        <span>Free</span> +{" "}
                        <span>{toolObject.pricing.price.toLowerCase()}</span>
                      </span>
                    )}
                    {toolObject.pricing.free && !toolObject.pricing.paid && (
                      <span>
                        <span>Free</span>
                      </span>
                    )}
                    {!toolObject.pricing.free && toolObject.pricing.paid && (
                      <span>
                        <span>{toolObject.pricing.price}</span>
                      </span>
                    )}
                    •
                    {toolObject.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </p>
                </div>
              </div>
              <div className={classes.links}>
                <a href={toolObject.link} target="_blank" className="btn-alt">
                  Visit
                </a>
                <a className="btn" onClick={saveClickHandler}>
                  {isSavedByUser ? (
                    <BookmarkIcon className={classes.icon} />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={classes.icon}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      />
                    </svg>
                  )}
                  <span>Save</span>
                </a>
              </div>
            </div>

            <div className={classes.description}>
              <p>{toolObject.description}</p>
            </div>

            <div>
              <h3>
                <BoltIcon className={classes.icon} />
                <span>Key Features</span>
              </h3>
              <ul className={classes.keyFeatures}>
                {toolObject.keyFeatures.map((feature) => (
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
