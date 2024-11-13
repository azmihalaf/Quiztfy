import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-bottom-5 shadow sticky-top">
        <div className="container-fluid">
          {/* Logo dan Nama Brand */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="assets/Logo.png"
              alt="Logo"
              height="60"
              className="d-inline-block align-top me-2"
            />
            <div className="brand-text">
              <span className="brand-tech">Tech</span>
              <span className="brand-quiztfy">Quiztfy</span>
            </div>
          </a>

          {/* Tombol Toggle untuk Navbar di perangkat kecil */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvas"
            aria-controls="navbarOffcanvas"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Navbar dengan Offcanvas untuk Mobile */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="navbarOffcanvas"
            aria-labelledby="navbarOffcanvasLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="navbarOffcanvasLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto fw-bold text-center">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link position-relative px-3"
                    href="#"
                  >
                    <span className="position-relative">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/about"}
                    className="nav-link position-relative px-3"
                  >
                    <span className="position-relative">About Us</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/help"}
                    className="nav-link position-relative px-3"
                    href="#"
                  >
                    <span className="position-relative">Help</span>
                  </Link>
                </li>
              </ul>

              {/* Opsi Login */}
              <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0 justify-content-center">
                <p className="m-0 d-none d-sm-block">
                  Already have an account?{" "}
                </p>
                <Link to="/login">
                  <button className="btn btn-outline-dark rounded-pill px-4 border-0">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
