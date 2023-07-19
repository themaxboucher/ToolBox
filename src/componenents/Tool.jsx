import { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import ModalBackdrop from "../UI/ModalBackdrop";
import classes from "./Tool.module.css";
import Tag from "../UI/Tag";
import { ArrowTopRightOnSquareIcon, BoltIcon } from "@heroicons/react/24/solid";

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
      <li onClick={openModalHandler} className={classes.tool}>
        <Card>
          <div className={classes.display}>
            <div className={classes.right}>
              <div className={classes.thumbnail}>
                <img src={props.thumbnail} alt={props.title}></img>
              </div>
              <div className={classes.content}>
                <h3><span>{props.title}</span><a href={props.link} target="_blank"><ArrowTopRightOnSquareIcon className={classes.icon} /></a></h3>
                <p>{props.tagline}</p>
                <p className={classes.tags}><span>{props.price}</span>  •  {props.tags.map(tag => <a key={tag}>{tag}</a>)}</p>
              </div>
            </div>
            <div className={classes.links}>
              <a className={classes.actions}>
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
                  <p>{props.tagline}</p>
                  <p className={classes.price}><span>{props.price}</span>  •  {props.tags.map(tag => <a key={tag}>{tag}</a>)}</p>
                </div>
              </div>
              <div className={classes.links}>
                <a href={props.link} target="_blank" className="btn">
                  Visit
                </a>
                <a className="btn"><BookmarkIcon className={classes.icon} /><span>Save</span></a>
              </div>
            </div>

            <div>
              <p>{props.description}</p>
            </div>

            <div>
              <h3><BoltIcon className={classes.icon} /><span>Key Features</span></h3>
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
