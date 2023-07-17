import classes from "./SubmitForm.module.css";

function SubmitForm() {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="tagline">Tagline</label>
        <input type="text" id="tagline" required></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="link">Link</label>
        <input type="url" id="link" required></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="twitter">Twitter Account (optional)</label>
        <input type="url" id="twitter" required={false}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea rows="3" id="description" required></textarea>
      </div>
      <button>Submit Tool</button>
    </form>
  );
}

export default SubmitForm;
