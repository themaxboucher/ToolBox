import Modal from "../UI/Modal";
import ModalBackdrop from "../UI/ModalBackdrop";
import classes from "./AuthModal.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";

// Firebase imports
import { auth } from "../Utilities/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import AuthModalContext from "../store/AuthModalContext";

function AuthModal(props) {
  //Context for the authentication modal
  const AuthModalCtx = useContext(AuthModalContext);

  // Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      AuthModalCtx.closeAuthModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal onClick={AuthModalCtx.closeAuthModal}>
        <div className={classes.authForm}>
          <h2>Sign Up</h2>
          <button onClick={googleLogin} className="btn-alt">
            <IconContext.Provider value={{ size: "18px" }}>
                <FcGoogle className={classes.icon} />
            </IconContext.Provider>
            <span>Continue with Google</span>
          </button>
        </div>
      </Modal>
      <ModalBackdrop onClick={props.closeAuthModal} />
    </div>
  );
}

export default AuthModal;
