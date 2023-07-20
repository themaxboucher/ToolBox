import BackgroundImage from "../UI/BackgroundImage";
import Header from "../componenents/Header";
import classes from "./Layout.module.css";

function Layout(props) {
    return <div>
        <BackgroundImage />
        <Header openSignup={props.openAuthModal}/>
        <main className={classes.main}>{props.children}</main>
    </div>
}

export default Layout;