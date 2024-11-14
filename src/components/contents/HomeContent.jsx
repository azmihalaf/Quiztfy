import { Link } from "react-router-dom";
export default function Content() {
  return (
    <div className=" mt-2 mt-md-5 min-vh-100">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="mb-3">Personalize Your Quiz Experience</h1>
        <p className="text-muted">
          Choose your topics and materials to create a customized learning path
          that suits your interests and expertise
        </p>
      </div>

      {/* Cards Container */}
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {/* Single Card */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100 rounded-4 border-0 shadow-sm">
            <div className="text-center bg-light p-4 rounded-top-4">
              <img
                src="assets/category/IKON AI.png"
                className="card-img-top"
                alt="Artificial Intelligence Icon"
                style={{ maxWidth: "120px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">
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

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100 rounded-4 border-0 shadow-sm">
            <div className="text-center bg-light p-4 rounded-top-4">
              <img
                src="assets/category/IKON DA.png"
                className="card-img-top"
                alt=" Data Analyst Icon"
                style={{ maxWidth: "120px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">
                <Link to="/" className="text-decoration-none text-dark">
                  Data Analyst
                </Link>
              </h5>
              <p className="card-text text-muted">
                Dalami keterampilan analisis data, uji kemampuan Anda, dan ikuti
                roadmap menuju karir sebagai Data Analyst
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100 rounded-4 border-0 shadow-sm">
            <div className="text-center bg-light p-4 rounded-top-4">
              <img
                src="assets/category/IKON ML.png"
                className="card-img-top"
                alt="Machine Learning Icon"
                style={{ maxWidth: "120px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">
                <Link to="/" className="text-decoration-none text-dark">
                  Machine Learning
                </Link>
              </h5>
              <p className="card-text text-muted">
                Mulailah memahami dasar-dasar machine learning, ikuti quiz untuk
                evaluasi, dan temukan jalur menuju profesi di AI dan Data
                Science.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100 rounded-4 border-0 shadow-sm">
            <div className="text-center bg-light p-4 rounded-top-4">
              <img
                src="assets/category/IKON WEBDEV.png"
                className="card-img-top"
                alt=" Web Development Icon"
                style={{ maxWidth: "120px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">
                <Link to="/" className="text-decoration-none text-dark">
                  Web Development
                </Link>
              </h5>
              <p className="card-text text-muted">
                Pelajari dasar pembuatan website, ikuti quiz untuk menguji
                pemahaman, dan temukan jalur karir sebagai Web Developer
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100 rounded-4 border-0 shadow-sm">
            <div className="text-center bg-light p-4 rounded-top-4">
              <img
                src="assets/category/MOBDEV.png"
                className="card-img-top"
                alt="Mobile Development Icon"
                style={{ maxWidth: "120px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">
                <Link to="/" className="text-decoration-none text-dark">
                  Mobile Development
                </Link>
              </h5>
              <p className="card-text text-muted">
                Pelajari pembuatan aplikasi mobile, uji kemampuan Anda melalui
                kuis, dan rencanakan langkah menuju menjadi Mobile Developer
              </p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100 rounded-4 border-0 shadow-sm">
            <div className="text-center bg-light p-4 rounded-top-4">
              <img
                src="assets/category/IKON FS.png"
                className="card-img-top"
                alt="Full Stack Development Icon"
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

        {/* Card 7 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100 rounded-4 border-0 shadow-sm">
            <div className="text-center bg-light p-4 rounded-top-4">
              <img
                src="assets/category/IKON IOT.png"
                className="card-img-top"
                alt="Internet Of Things Icon"
                style={{ maxWidth: "120px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">
                <Link to="/" className="text-decoration-none text-dark">
                  Internet Of Things
                </Link>
              </h5>
              <p className="card-text text-muted">
                Pelajari bagaimana perangkat cerdas terhubung, asah pengetahuan
                IoT melalui quiz, dan pahami potensi karir di IoT
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card h-100 rounded-4 border-0 shadow-sm">
            <div className="text-center bg-light p-4 rounded-top-4">
              <img
                src="assets/category/IKON UI UX.png"
                className="card-img-top"
                alt="UI/ UX Design Icon"
                style={{ maxWidth: "120px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">
                <Link to="/" className="text-decoration-none text-dark">
                  UI/ UX Design
                </Link>
              </h5>
              <p className="card-text text-muted">
                Kenali prinsip desain antarmuka yang menarik, uji pengetahuan
                desain Anda, dan lihat peluang karir di bidang UI/UX
              </p>
            </div>
          </div>
        </div>

        {/* Tambahkan lebih banyak card sesuai kebutuhan */}
      </div>
    </div>
  );
}
