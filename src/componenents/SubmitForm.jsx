import Card from "../UI/Card";
import classes from "./SubmitForm.module.css";
import { useRef, useState } from "react";
import { categoryOptions } from "../data/FilterOptions";
import {
  CheckCircleIcon,
  CheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom/cjs/react-router-dom";

import { db } from "../Utilities/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth } from "../Utilities/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function SubmitForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const [user] = useAuthState(auth);

  const nameInputRef = useRef();
  const linkInputRef = useRef();
  const taglineInputRef = useRef();
  const thumbnailInputRef = useRef();

  const [enteredFree, setEnteredFree] = useState(false);
  function freeOptionClickHandler() {
    if (!enteredFree) {
      setEnteredFree(true);
    } else {
      setEnteredFree(false);
    }
  }

  const [enteredPaid, setEnteredPaid] = useState(false);
  function paidOptionClickHandler() {
    if (!enteredPaid) {
      setEnteredPaid(true);
    } else {
      setEnteredPaid(false);
    }
  }

  const [enteredTags, setEnteredTags] = useState([]);
  function tagClickHandler(clickedTag) {
    if (enteredTags.some((tag) => tag === clickedTag)) {
      setEnteredTags((prev) => prev.filter((tag) => tag !== clickedTag));
    } else {
      setEnteredTags((prev) => [...prev, clickedTag]);
    }
  }

  const priceInputRef = useRef();
  const keyFeature1InputRef = useRef();
  const keyFeature2InputRef = useRef();
  const keyFeature3InputRef = useRef();
  const keyFeature4InputRef = useRef();
  const keyFeature5InputRef = useRef();

  async function createToolDoc() {
    try {
      const enteredName = nameInputRef.current.value;
      const enteredLink = linkInputRef.current.value;
      const enteredTagline = taglineInputRef.current.value;
      const enteredThumbnail = thumbnailInputRef.current.value;
      const enteredPrice = enteredPaid ? priceInputRef.current.value : "";
      const enteredKeyFeatures = [
        keyFeature1InputRef,
        keyFeature2InputRef,
        keyFeature3InputRef,
        keyFeature4InputRef,
        keyFeature5InputRef,
      ]
        .map((e) => e.current.value)
        .filter((value) => value);
      const docData = {
        public: false,
        createdAt: serverTimestamp(),
        submittedBy: user.uid,
        name: enteredName,
        link: enteredLink,
        tagline: enteredTagline,
        thumbnail: enteredThumbnail,
        saves: 0,
        savedBy: [],
        tags: enteredTags,
        pricing: {
          free: enteredFree,
          paid: enteredPaid,
          price: enteredPrice,
        },
        keyFeatures: enteredKeyFeatures,
      };
      await addDoc(collection(db, "tools"), docData);
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    if (enteredTags.length === 0) {
      alert("Please select at least one tool category");
    } else if (enteredFree === false && enteredPaid === false) {
      alert("Please select the pricing options this tool offers");
    } else {
      createToolDoc();
    }
  }

  return (
    <Card>
      {!isSuccess ? (
        <>
          <div className={classes.heading}>
            <h1>
              <SparklesIcon />
              <span>Submit an AI Tool</span>
            </h1>
            <p>
              Know of a great AI tool we're missing? Built one yourself? Submit
              it below.
            </p>
          </div>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.row}>
              <div className={classes.control}>
                <label htmlFor="name">Tool Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  maxLength="35"
                  ref={nameInputRef}
                ></input>
              </div>
              <div className={classes.control}>
                <label htmlFor="link">Link to Tool</label>
                <input type="url" id="link" required ref={linkInputRef}></input>
              </div>
            </div>
            <div className={classes.control}>
              <label htmlFor="tagline">
                <span>Tagline</span>
                <span className={classes.sublabel}>
                  One sentece that describes what this AI tool does
                </span>
              </label>
              <input
                type="text"
                id="tagline"
                required
                minLength="4"
                maxLength="60"
                ref={taglineInputRef}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="thumbnail">
                <span>Cover Photo</span>
                <span className={classes.sublabel}>
                  Please provide a valid photo URL
                </span>
              </label>
              <input
                type="url"
                id="thumbnail"
                required={false}
                ref={thumbnailInputRef}
              ></input>
            </div>
            <div className={classes.control}>
              <label>
                <span>Tool Categories</span>
                <span className={classes.sublabel}>
                  Select at least one option:
                </span>
              </label>
              <ul className={classes.tagList}>
                {categoryOptions
                  .filter((category) => category !== "Featured") // Remove "Featured" from the array
                  .map((category) => (
                    <div
                      key={category}
                      className={
                        !enteredTags.some((tag) => tag === category)
                          ? classes.tag
                          : classes.selectedTag
                      }
                      onClick={() => tagClickHandler(category)}
                    >
                      {category}
                    </div>
                  ))}
              </ul>
            </div>
            <div className={classes.control}>
              <label>
                <span>Pricing</span>
                <span className={classes.sublabel}>
                  Select the pricing options this tool offers:
                </span>
              </label>
              <div
                className={
                  !enteredFree ? classes.option : classes.selectedOption
                }
                onClick={freeOptionClickHandler}
              >
                <span className={classes.checkbox}>
                  {enteredFree && <CheckIcon />}
                </span>
                <p>Free option</p>
              </div>
              <div
                className={
                  !enteredPaid ? classes.option : classes.selectedOption
                }
                onClick={paidOptionClickHandler}
              >
                <span className={classes.checkbox}>
                  {enteredPaid && <CheckIcon />}
                </span>
                <p>Paid option</p>
              </div>
              {enteredPaid && (
                <div className={classes.control}>
                  <label htmlFor="price">
                    <span>Price</span>
                    <span className={classes.sublabel}>
                      What is the cheapest paid option?
                    </span>
                  </label>
                  <input
                    type="text"
                    id="price"
                    required={enteredPaid ? true : false}
                    maxLength="50"
                    placeholder="e.g. From $10/mo"
                    ref={priceInputRef}
                  />
                </div>
              )}
            </div>
            <div className={classes.control}>
              <label>Key Features</label>
              <label htmlFor="keyFeature1" className={classes.sublabel}>
                #1
              </label>
              <textarea
                rows="2"
                id="keyFeature1"
                required
                minLength="10"
                maxLength="350"
                ref={keyFeature1InputRef}
              ></textarea>
              <label htmlFor="keyFeature2" className={classes.sublabel}>
                #2
              </label>
              <textarea
                rows="2"
                id="keyFeature2"
                required
                minLength="10"
                maxLength="350"
                ref={keyFeature2InputRef}
              ></textarea>
              <label htmlFor="keyFeature3" className={classes.sublabel}>
                #3 (optional)
              </label>
              <textarea
                rows="2"
                id="keyFeature3"
                minLength="10"
                maxLength="350"
                ref={keyFeature3InputRef}
              ></textarea>
              <label htmlFor="keyFeature4" className={classes.sublabel}>
                #4 (optional)
              </label>
              <textarea
                rows="2"
                id="keyFeature4"
                minLength="10"
                maxLength="350"
                ref={keyFeature4InputRef}
              ></textarea>
              <label htmlFor="keyFeature5" className={classes.sublabel}>
                #5 (optional)
              </label>
              <textarea
                rows="2"
                id="keyFeature5"
                minLength="10"
                maxLength="350"
                ref={keyFeature5InputRef}
              ></textarea>
            </div>
            <button className="btn">
              <SparklesIcon />
              <span>Submit Tool</span>
            </button>
          </form>
        </>
      ) : (
        <div className={classes.success}>
          <div className={classes.heading}>
            <h1>
              <CheckCircleIcon />
              <span>Success</span>
            </h1>
            <p>
              Your AI tool what submitted successfully and should appear on
              ToolBox shortly.
            </p>
          </div>
          <div className={classes.buttons}>
            <button className="btn" onClick={() => setIsSuccess(false)}>
              Submit Another Tool
            </button>
            <Link to="/" className="btn-alt">
              Back To Home Page
            </Link>
          </div>
        </div>
      )}
    </Card>
  );
}

export default SubmitForm;
