import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import "../styles/App.css";

export default function HomepageDetail() {
  const [articleDetail, setArticle] = useState({});
  const { id } = useParams();
  async function getArticleDetail() {
    try {
      const response = await axios({
        method: "GET",
        url: "https://berita-terkini.matthew-baya.online/pub/articles/" + id,
      });
      setArticle(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getArticleDetail();
  }, []);
  console.log(articleDetail);
  return (
    <>
      <Navbar></Navbar>
      <div className="container my-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src={articleDetail.imgUrl}
            className="article-detail-image"
          ></img>
          <h1>{articleDetail.title}</h1>
        </div>
      </div>
      <div className="container">
        <p className="article-content">{articleDetail.content}</p>
      </div>
    </>
  );
}
