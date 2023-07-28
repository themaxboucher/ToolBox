import classes from "./UserInfo.module.css";
import {
  ArrowRightOnRectangleIcon,
  BookmarkIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Card from "../UI/Card";

// Firebase imports
import { auth } from "../Utilities/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function UserInfo() {
  const [user] = useAuthState(auth);

  // Logout
  const logout = async () => {
    const logoutConfirm = confirm("Are you sure you want to logout?");
    if (logoutConfirm == true) {
      await signOut(auth);
    }
  };
  return (
    <>
      <Link to="/" className={classes.goBack}>
        <ChevronLeftIcon />
        <span>Back to home page</span>
      </Link>
      <div className={classes.margin}>
        <Card>
          <div className={classes.userInfo}>
            <div>
              <img src={user.photoURL} alt={user.displayName} />
              <div className={classes.textInfo}>
                <h3>{user.displayName}</h3>
                <p>{user.email}</p>
              </div>
            </div>
            <button onClick={logout} className="btn-alt">
              <ArrowRightOnRectangleIcon className={classes.icon} />
              <span>Logout</span>
            </button>
          </div>
        </Card>
      </div>
      <h2>
        <BookmarkIcon className={classes.icon} />
        <span>Saved Tools</span>
      </h2>
    </>
  );
}

export default UserInfo;
