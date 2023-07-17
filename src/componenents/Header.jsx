import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">ToolBox</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/submit">Submit</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
