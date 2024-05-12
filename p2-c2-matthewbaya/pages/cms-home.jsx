import { useState, useEffect } from "react";
import ArticleCard from "../components/cms-main-entity-card";
import axios from "axios";
import Modal from "../components/modal-newData";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import CmsNavbar from "../components/cms-navbar";
import CmsSidebar from "../components/cms-sidebar";

export default function CmsHomepage() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

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

  async function fetchCategories() {
    try {
      let { data } = await axios({
        method: "GET",
        url: "https://berita-terkini.matthew-baya.online/pub/categories",
      });
      setCategories(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteArticle(id) {
    try {
      let response = await axios({
        method: "DELETE",
        url: "https://berita-terkini.matthew-baya.online/articles/" + id,
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      });
      console.log(response);
      fetchData();
      if (response) {
        Swal.fire({
          title: "Post Deleted",
          text: "byeeeeeee~",
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);
  return (
    <>
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
      <CmsNavbar></CmsNavbar>
      {/* End Navbar */}
      {/* Home Section */}
      <section className="container-fluid" id="home-section">
        <div className="row">
          {/* Sidebar */}
          <CmsSidebar />
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
                data-bs-target="#createNewPostModal"
                id="new-product"
              >
                Add New Post
              </button>
              <Modal categories={categories} fetchData={fetchData}></Modal>
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
                          deleteArticle={deleteArticle}
                          categories={categories}
                          fetchData={fetchData}
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
