import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Cool App</div>
      <nav>
        <ul>
          <li>
            <a>Submit</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
