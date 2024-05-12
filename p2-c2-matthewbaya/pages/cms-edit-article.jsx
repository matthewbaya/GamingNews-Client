import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ArticleEdit() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  //   const [article, setArticle] = useState();
  const { id } = useParams();

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

  async function fetchArticle() {
    try {
      let { data } = await axios({
        method: "GET",
        url: "https://berita-terkini.matthew-baya.online/articles/" + id,
        headers: { Authorization: localStorage.getItem("access_token") },
      });
      setTitle(data.title);
      setContent(data.content);
      setImgUrl(data.imgUrl);
      setCategoryId(data.categoryId);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateArticle() {
    try {
      await axios({
        method: "UPDATE",
        url: "https://berita-terkini.matthew-baya.online/articles/" + id,
        headers: { Authorization: localStorage.getItem("access_token") },
        data: {
          title,
          content,
          imgUrl,
          categoryId,
        },
      });
      Swal.fire({
        title: "Post Updated",
        text: `Post with id ${id} has been updated`,
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.name,
        icon: "error",
      });
      console.error(error);
    }
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await updateArticle();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Error",
        icon: "error",
      });
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticle();
    fetchCategories();
  }, [id]);

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <h1>Edit Article</h1>
          <button
            className="btn btn-secondary"
            onClick={() => {
              navigate("/cms");
            }}
          >
            Home
          </button>
        </div>
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
              value={title}
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
            <textarea
              name="content"
              type="text"
              className="form-control"
              id="content-form"
              value={content}
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
              value={imgUrl}
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
                  <option key={e.id} value={categoryId}>
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
    </>
  );
}
