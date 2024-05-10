import { useState, useEffect } from "react";
import ArticleCard from "../components/cms-main-entity-card";
import axios from "axios";

export default function CmsHomepage() {
  const [articles, setArticles] = useState([]);
  async function fetchData() {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://berita-terkini.matthew-baya.online/articles",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      });
      setArticles(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="IDEA Admin Panel" />
      <meta name="author" content="Hacktiv8" />
      <link
        href="https://cdn-icons-png.freepik.com/512/9956/9956310.png?ga=GA1.1.1392924088.1712049123&"
        type="image/x-icon"
        rel="shortcut icon"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0"
        rel="stylesheet"
      />
      <link href="./css/style.css" rel="stylesheet" />
      <title>Home</title>
      {/* Preloader */}
      <div id="preloader" style={{ display: "none" }}>
        <div className="loading">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_remmdtqv.json"
            background="transparent"
            speed={1}
            style={{ width: 300, height: 300 }}
            loop=""
            autoPlay=""
          />
        </div>
      </div>
      {/* End Preloader */}
      {/* Navbar */}
      <header
        className="navbar sticky-top bg-white flex-md-nowrap p-0 shadow"
        id="navbar"
      >
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
          <img
            src="https://cdn-icons-png.freepik.com/512/9956/9956310.png?ga=GA1.1.1392924088.1712049123&"
            width={30}
            className="d-inline-block me-2"
            alt="IDEA"
          />
          Admin Panel
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar-menu"
          aria-controls="sidebar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </header>
      {/* End Navbar */}
      {/* Home Section */}
      <section className="container-fluid" id="home-section">
        <div className="row">
          {/* Sidebar */}
          <nav
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            id="sidebar-menu"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="" id="nav-product">
                    <span className="icon material-symbols-outlined me-2">
                      post
                    </span>
                    Posts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="" id="nav-category">
                    <span className="icon material-symbols-outlined me-2">
                      category
                    </span>
                    Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="" id="nav-category">
                    <span className="icon material-symbols-outlined me-2">
                      account_circle
                    </span>
                    Add User
                  </a>
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
                    Hei, <span id="username">Admin</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="" id="nav-logout">
                    <span className="icon material-symbols-outlined me-2">
                      logout
                    </span>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* End Sidebar */}
          {/* Product Section */}
          <section
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            id="product-section"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="display-2">Articles</h1>
              <button
                type="button"
                className="btn btn-primary rounded-pill"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="new-product"
              >
                Add New Post
              </button>
            </div>
            <div className="row">
              <div className="col-12 table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Image</th>
                      <th scope="col" width="180px">
                        Title
                      </th>
                      <th scope="col" width="250px">
                        Date Created
                      </th>
                      <th scope="col">Author</th>
                      <th scope="col" width="50px" />
                    </tr>
                  </thead>
                  <tbody id="table-product">
                    {articles.map((article, index) => {
                      return (
                        <ArticleCard
                          key={article.id}
                          article={article}
                          index={index + 1}
                        ></ArticleCard>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* End Product Section */}
        </div>
      </section>
      {/* End Home Section */}
    </>
  );
}
