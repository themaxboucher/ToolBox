import SubmitForm from "../componenents/SubmitForm";
import { useHistory } from "react-router-dom";

// Firebase imports
import { auth } from "../Utilities/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function SubmitPage() {
  const [user, loading] = useAuthState(auth);

  // Block page from non authenticated users
  const history = useHistory();
  if (!user && !loading) history.replace("/");

  if (user) // Only render content if user is authenticated
    return (
      <section>
        <SubmitForm />
      </section>
    );
}

export default SubmitPage;
