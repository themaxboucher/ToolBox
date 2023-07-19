import List from "../componenents/List";

// Firebase imports
import { auth } from "../Utilities/firebase";
import { signOut } from "firebase/auth";

function AccountPage() {
    // Logout
    const logout = async () => {
        const logoutConfirm = confirm('Are you sure you want to log out?')
        if (logoutConfirm == true) {
            await signOut(auth);
        }
    }

    return <section>
        <div>
            <div><img src="https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/635aa4d8be2e8c992c37b042_horizontal%20(34).svg" /></div>
            <div><h3>Name</h3><p>emailaddress@gmail.com</p></div>
            <button onClick={logout} className="btn-alt"><span>Logout</span></button>
        </div>
        <h2>Saved Tools</h2>
        <List filterCombo={{priceFilter: "All", categoryFilter: "Featured"}} />
    </section>
}

export default AccountPage;