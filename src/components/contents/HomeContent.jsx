import { Link } from "react-router-dom";
export default function Content() {
  return (
    <div className="container mt-2 mt-md-5 min-vh-100">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="mb-3">Personalize Your Quiz Experience</h1>
        <p className="text-muted">
          Choose your topics and materials to create a customized learning path
          that suits your interests and expertise
        </p>
      </div>

      {/* Cards Container */}
      <div className="row g-4 ">
        {/* Single Card */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 rounded-4 border-0 shadow-sm ">
            <div className="text-center bg-light p-4 rounded-top-4">
              <img
                src="assets/category/IKON AI.png"
                className="card-img-top"
                alt="Artificial Intelligence Icon"
                style={{ maxWidth: "120px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3  ">
                <Link to="/" className="text-decoration-none text-dark">
                  Artificial Intelligence
                </Link>
              </h5>
              <p className="card-text text-muted">
                Eksplorasi dunia kecerdasan buatan, uji wawasan AI Anda, dan
                ketahui langkah-langkah berkarir di bidang teknologi pintar.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 (contoh) */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 rounded-4 border-0 shadow-sm">
            <div className="text-center bg-light p-4 rounded-top-4">
              <img
                src="assets/category/IKON ML.png"
                className="card-img-top"
                alt="Mobile Development"
                style={{ maxWidth: "120px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">
                {" "}
                <Link to="/" className="text-decoration-none text-dark">
                  Machine Learning
                </Link>
              </h5>
              <p className="card-text text-muted">
                Mulailah memahami dasar-dasar machine learning, ikuti quiz untuk
                evaluasi, dan temukan jalur menuju profesi di AI dan Data
                Science
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 (contoh) */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 rounded-4 border-0 shadow-sm">
            <div className="text-center bg-light p-4 rounded-top-4">
              <img
                src="assets/category/IKON FS.png"
                className="card-img-top"
                alt="Artificial Intelligence Icon"
                style={{ maxWidth: "120px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">
                <Link to="/" className="text-decoration-none text-dark">
                  Full Stack Development
                </Link>
              </h5>
              <p className="card-text text-muted">
                Pelajari pembuatan aplikasi dari ujung ke ujung, uji pemahaman
                Anda, dan lihat langkah menjadi Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
