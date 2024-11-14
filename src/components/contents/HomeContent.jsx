import { Link } from "react-router-dom";
import categories from "../../data/categories.json";

export default function Content() {
  return (
    <div className="mt-2 mt-md-5 min-vh-100">
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
        {categories.map((category, index) => (
          // Single Card
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card h-100 rounded-4 border-0 shadow-sm">
              <div className="text-center bg-light p-4 rounded-top-4">
                <img
                  src={category.img} // Anda mungkin ingin mengganti ini untuk setiap kategori
                  className="card-img-top"
                  alt={`${category.name} Icon`}
                  style={{ maxWidth: "120px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold mb-3">
                  <Link to="/" className="text-decoration-none text-dark">
                    {category.name}
                  </Link>
                </h5>
                <p className="card-text text-muted">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
