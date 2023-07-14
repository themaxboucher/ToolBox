import Header from "../componenents/Header";
import classes from "./Layout.module.css";

function Layout(props) {
    return <div>
        <Header />
        <main className={classes.main}>{props.children}</main>
    </div>
}

export default Layout;