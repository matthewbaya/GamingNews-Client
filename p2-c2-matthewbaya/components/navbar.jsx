import { Link, useNavigate } from "react-router-dom";
import "../styles/App.css";

export default function Navbar() {
  const navigate = useNavigate();
  const handleChangePageToHomepage = () => {
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#aaa" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand press-start-2p-regular" to={"/"}>
            G<span style={{ color: "orangered" }}>B</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  onClick={handleChangePageToHomepage}
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
