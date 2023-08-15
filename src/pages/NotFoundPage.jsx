import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>This Page Does Not Exist.</h1>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}

export default NotFoundPage;
