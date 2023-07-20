import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Header.module.css";
import { RectangleStackIcon } from "@heroicons/react/24/solid";

// Firebase imports
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Utilities/firebase";

function Header(props) {
  const [user] = useAuthState(auth);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <RectangleStackIcon />
          <span>ToolBox</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/submit" className={classes.link}>
              About
            </Link>
          </li>
          <li>
            <Link to="/submit" className={classes.link}>
              Newsletter
            </Link>
          </li>
          <li>
            <Link to="/submit" className={classes.link}>
              Submit
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.auth}>
        {!user ? (
          <>
            <a className={classes.link} onClick={props.openAuthModal}>Login</a>
            <button onClick={props.openAuthModal} className="btn">
              Sign Up
            </button>
          </>
        ) : (
          <div>
            <Link to="/account">
              <img src={user.photoURL} alt={user.displayName} className={classes.profilePic} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
