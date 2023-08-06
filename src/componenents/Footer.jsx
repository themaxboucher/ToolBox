import classes from "./Footer.module.css";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.divider}></div>
      <div className={classes.content}>
        <p className={classes.copyright}>Copyright © {currentYear} - 2236636 Alberta Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;