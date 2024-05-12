import CmsNavbar from "../components/cms-navbar";
import CmsSidebar from "../components/cms-sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <CmsNavbar></CmsNavbar>
      <section className="container-fluid" id="home-section">
        <div className="row">
          <CmsSidebar></CmsSidebar>
          <section
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            id="product-section"
          >
            <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="display-2 ">Categories</h1>
            </div>
            <div className="row">
              <div className="col-12 table-responsive">
                <table className="table align-middle">
                  <thead className="text-center">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Category</th>
                    </tr>
                  </thead>
                  <tbody id="table-product" className="text-center">
                    {categories.map((e, index) => {
                      return (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{e.name}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
