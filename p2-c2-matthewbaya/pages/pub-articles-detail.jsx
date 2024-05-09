import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
export default function HomepageDetail() {
  const [articeDetail, setArticle] = useState({});
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
  return (
    <>
      <Navbar></Navbar>
      <h1>ini detail article {articeDetail.id}</h1>
    </>
  );
}
