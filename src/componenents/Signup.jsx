import Modal from "../UI/Modal";
import ModalBackdrop from "../UI/ModalBackdrop";
import classes from "./Signup.module.css";

function Signup(props) {
    return <div>
        <Modal onClick={props.closeSignup}>
            <form className={classes.signupForm}>
                <h2>Sign Up</h2>
                <button className="btn-alt"><span>Continue with Google</span></button>
            </form>
        </Modal>
        <ModalBackdrop onClick={props.closeSignup} />
    </div>
}

export default Signup;