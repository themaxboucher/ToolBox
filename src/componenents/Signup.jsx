import Modal from "../UI/Modal";
import ModalBackdrop from "../UI/ModalBackdrop";
import classes from "./Signup.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Firebase imports
import { auth } from "../Utilities/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Signup(props) {
    const history = useHistory();

  // Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      history.replace("/account");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal onClick={props.closeSignup}>
        <div className={classes.signupForm}>
          <h2>Sign Up</h2>
          <button onClick={googleLogin} className="btn-alt">
            <span>Continue with Google</span>
          </button>
        </div>
      </Modal>
      <ModalBackdrop onClick={props.closeSignup} />
    </div>
  );
}

export default Signup;
