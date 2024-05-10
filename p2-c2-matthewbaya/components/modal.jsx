import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Modal({ categories }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState();
  async function createNewArticle() {
    try {
      let response = await axios({
        method: "POST",
        url: "https://berita-terkini.matthew-baya.online/articles",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
        data: {
          title,
          content,
          imgUrl,
          categoryId,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createNewArticle();
      Swal.fire({
        title: "Post Created",
        text: `"${title}"`,
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "You clicked the button!",
        icon: "success",
      });
    }
  };

  // async function fetchCategories() {
  //   try {
  //     let { data } = await axios({
  //       method: "GET",
  //       url: "https://berita-terkini.matthew-baya.online/pub/categories",
  //     });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchCategories();
  // }, []);
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create new post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label id="title-form" className="form-label">
                    Title
                  </label>
                  <input
                    name="title"
                    type="text"
                    className="form-control"
                    id="title-form"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    id="content-form"
                  >
                    Content
                  </label>
                  <input
                    name="content"
                    type="text"
                    className="form-control"
                    id="content-form"
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label id="imgurl-form" className="form-label">
                    Image URL
                  </label>
                  <input
                    name="imgUrl"
                    type="text"
                    className="form-control"
                    id="imgurl-form"
                    onChange={(e) => {
                      setImgUrl(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <select
                    onChange={(e) => {
                      setCategoryId(e.target.value);
                    }}
                    name="categoryId"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      --Category--
                    </option>
                    {categories.map((e) => {
                      return (
                        <option key={e.id} value={e.id}>
                          {e.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
