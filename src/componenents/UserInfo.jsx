import Card from "../UI/Card";
import classes from "./UserInfo.module.css";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";


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
    <Card>
      <div className={classes.userInfo}>
        <div>
          <div>
            <img src={user.photoURL} alt={user.displayName} />
          </div>
          <div>
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
          </div>
        </div>
        <button onClick={logout} className="btn-alt">
          <span>Logout</span>
          <ArrowRightOnRectangleIcon className={classes.icon} />
        </button>
      </div>
    </Card>
  );
}

export default UserInfo;
