import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CmsSidebar() {
  const [displayRegister, setDisplayRegister] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("user_role", "Staff")) {
  //     setDisplayRegister("d-none");
  //   } else if (localStorage.getItem("user_role", "Admin")) {
  //     setDisplayRegister("");
  //   }
  // }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/cms/login");
  };
  return (
    <>
      <nav
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        id="sidebar-menu"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to={"/cms"} className="nav-link" id="nav-product">
                <span className="icon material-symbols-outlined me-2">
                  post
                </span>
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/cms/categories"}
                className="nav-link"
                id="nav-category"
              >
                <span className="icon material-symbols-outlined me-2">
                  category
                </span>
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/cms/register"}
                className={"nav-link " + displayRegister}
                id="nav-category"
              >
                <span className="icon material-symbols-outlined me-2">
                  account_circle
                </span>
                Add User
              </Link>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
            <span>Account</span>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <a className="nav-link">
                <span className="icon material-symbols-outlined me-2">
                  person
                </span>
                Welcome!
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href=""
                id="nav-logout"
                onClick={handleLogout}
              >
                <span className="icon material-symbols-outlined me-2">
                  logout
                </span>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
