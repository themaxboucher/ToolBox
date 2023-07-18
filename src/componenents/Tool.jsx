import { useState } from "react";
import { LinkIcon } from "@heroicons/react/24/solid";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import ModalBackdrop from "../UI/ModalBackdrop";
import classes from "./Tool.module.css";
import Tag from "../UI/Tag";

function Tool(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      <li onClick={openModalHandler}>
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
                <LinkIcon className={classes.icon} />
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
                  <LinkIcon className={classes.icon} />
                </a>
              </div>
            </div>

            <div>
              <p>{props.description}</p>
            </div>

            <div>
              <h3>Key Features</h3>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
            <div>
              {props.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </Modal>
      )}
      {modalIsOpen && <ModalBackdrop onClick={closeModalHandler} />}
    </>
  );
}

export default Tool;
