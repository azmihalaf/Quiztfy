import { Link } from "react-router-dom";
import "../../../src/App.css";
import "../../styles/Category.css";

export default function CategoryContent() {
  return (
    <>
      <div className="min-vh-100 full-page-bg">
        <div className="d-flex text-center p-5 align-items-center justify-content-center">
          <Link
            className=" p-2 d-none d-md-block ms-md-5 position-absolute top-1 start-0 "
            to={"/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="currentColor"
              className="bi bi-arrow-left-circle-fill text-warning"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </Link>
          <h1>Artificial Intelligence</h1>
        </div>
        {/* Cards Container */}
        <div className="d-flex flex-wrap justify-content-center gap-3 ">
          {/* // Single Card */}
          <div className="col-12 col-md-3 col-lg-3 mb-4 ">
            <div className="card h-100 rounded-4 border-0 shadow-sm">
              <div className="text-center p-4 rounded-top-4">
                <img
                  src="/assets/category/Materi.png" // Anda mungkin ingin mengganti ini untuk setiap kategori
                  className="card-img-top"
                  // alt={`${category.name} Icon`}
                  style={{ maxWidth: "120px" }}
                />
              </div>
              <div className="card-body  ">
                <h5 className="card-title text-center fw-semibold mb-3">
                  <Link
                    to="/comming"
                    className=" text-decoration-none text-dark "
                  >
                    Materi
                  </Link>
                </h5>
                <p className="card-text text-center text-muted">
                  Baca dan pelajari konsep dasar web development
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  fill="currentColor"
                  className="bi bi-question-circle-fill text-warning"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
              </div>
            </div>
          </div>
          {/* // Single Card */}
          <div className="col-12 col-md-3 col-lg-3 mb-4 ">
            <div className="card h-100 rounded-4 border-0 shadow-sm">
              <div className="text-center p-4 rounded-top-4">
                <img
                  src="/assets/category/Materi.png" // Anda mungkin ingin mengganti ini untuk setiap kategori
                  className="card-img-top"
                  // alt={`${category.name} Icon`}
                  style={{ maxWidth: "120px" }}
                />
              </div>
              <div className="card-body  ">
                <h5 className="card-title text-center fw-semibold mb-3">
                  <Link
                    to="/category"
                    className=" text-decoration-none text-dark "
                  >
                    Materi
                  </Link>
                </h5>
                <p className="card-text text-center text-muted">
                  Baca dan pelajari konsep dasar web development
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  fill="currentColor"
                  className="bi bi-question-circle-fill text-warning"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
              </div>
            </div>
          </div>
          {/* // Single Card */}
          <div className="col-12 col-md-3 col-lg-3 mb-4 ">
            <div className="card h-100 rounded-4 border-0 shadow-sm">
              <div className="text-center p-4 rounded-top-4">
                <img
                  src="/assets/category/Materi.png" // Anda mungkin ingin mengganti ini untuk setiap kategori
                  className="card-img-top"
                  // alt={`${category.name} Icon`}
                  style={{ maxWidth: "120px" }}
                />
              </div>
              <div className="card-body  ">
                <h5 className="card-title text-center fw-semibold mb-3">
                  <Link
                    to="/category"
                    className=" text-decoration-none text-dark "
                  >
                    Materi
                  </Link>
                </h5>
                <p className="card-text text-center text-muted">
                  Baca dan pelajari konsep dasar web development
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  fill="currentColor"
                  className="bi bi-question-circle-fill text-warning"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
