import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Header.module.css";
import { RectangleStackIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/"><RectangleStackIcon /><span>ToolBox</span></Link>
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
