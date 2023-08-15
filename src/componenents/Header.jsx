import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { RectangleStackIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import AuthModalContext from "../store/AuthModalContext";

// Firebase imports
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Utilities/firebase";

function Header() {
  const [user] = useAuthState(auth);

  //Context for the authentication modal
  const AuthModalCtx = useContext(AuthModalContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <RectangleStackIcon />
          <span>ToolBox</span>
        </Link>
      </div>
      <div className={classes.auth}>
        {!user ? (
          <>
            <a className={classes.link} onClick={AuthModalCtx.openAuthModal}>Login</a>
            <button onClick={AuthModalCtx.openAuthModal} className="btn">
              Sign Up
            </button>
          </>
        ) : (
          <>
            <Link to="/submit" className={classes.link}>
              Submit
            </Link>
            <Link to="/account">
              <img src={user.photoURL} alt={user.displayName} className={classes.profilePic} />
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
