import BackgroundImage from "../UI/BackgroundImage";
import Footer from "../componenents/Footer";
import Header from "../componenents/Header";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <BackgroundImage />
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
