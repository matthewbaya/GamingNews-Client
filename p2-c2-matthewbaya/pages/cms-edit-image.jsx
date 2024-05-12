import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/cms.css";

export default function ImageEdit() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const { id } = useParams();

  const fetchImage = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://berita-terkini.matthew-baya.online/articles/` + id,
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      });
      setImage(data.imgUrl);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("article_image", file);
      const { data } = await axios({
        method: "PATCH",
        url: `https://berita-terkini.matthew-baya.online/articles/${id}/img`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("access_token"),
        },
      });
      console.log(formData);
      fetchImage();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnUpload = async (e) => {
    try {
      e.preventDefault();
      uploadImage();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => {
          navigate("/cms");
        }}
      >
        Home
      </button>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1>Update Image</h1>
        <img
          src={image}
          style={{ width: 250, height: "100%" }}
          alt="Movie Poster"
        />
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            color: "white",
          }}
          onSubmit={handleOnUpload}
        >
          <label htmlFor="formFile" className="form-label">
            Select file:
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            className="form-control"
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: 100 }}
          >
            Upload
          </button>
        </form>
      </div>
    </>
  );
}
