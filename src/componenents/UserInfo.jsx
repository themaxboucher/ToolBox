import classes from "./UserInfo.module.css";

// Firebase imports
import { auth } from "../Utilities/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Card from "../UI/Card";

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
        </button>
      </div>
    </Card>
  );
}

export default UserInfo;
