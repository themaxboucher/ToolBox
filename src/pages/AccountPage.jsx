import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import List from "../componenents/List";
import UserInfo from "../componenents/UserInfo";

// Firebase imports
import { auth } from "../Utilities/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function AccountPage() {
  const [user, loading] = useAuthState(auth);

  // Block page from non authenticated users
  const history = useHistory();
  if (!user && !loading) history.replace("/");

  if (user) // Only render content if user is authenticated
    return (
      <section>
        <UserInfo />
        <List
          filters="Saved"
        />
      </section>
    );
}

export default AccountPage;
