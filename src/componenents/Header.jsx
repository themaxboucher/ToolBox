import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Header.module.css";
import { RectangleStackIcon } from "@heroicons/react/24/solid";

function Header(props) {
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
      <ul className={classes.auth}>
        <li>
          <a className={classes.link}>Login</a>
        </li>
        <li>
          <button onClick={props.openSignup} className="btn">Sign Up</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
