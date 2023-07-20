import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import List from "../componenents/List";
import UserInfo from "../componenents/UserInfo";

// Firebase imports
import { auth } from "../Utilities/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function AccountPage() {
  const [user] = useAuthState(auth);

  // Block page from non authenticated users
  const history = useHistory();
  if (!user) history.replace("/");

  if (user) // Only render content if user is authenticated
    return (
      <section>
        <UserInfo />
        <h2>Saved Tools</h2>
        <List
          filterCombo={{ priceFilter: "All", categoryFilter: "Featured" }}
        />
      </section>
    );
}

export default AccountPage;
