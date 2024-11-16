import { Link } from "react-router-dom";
export default function CommingSoon() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-center">
          <h1 className="display-3">Coming Soon</h1>
          <p className="lead">
            We're working hard to bring you this page. Stay tuned!
          </p>
          <div className="mt-4">
            <Link to={"/"}>
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
