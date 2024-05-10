import "../styles/App.css";

import Navbar from "../components/navbar";
import Card from "../components/card";
import { useEffect, useState } from "react";
import axios from "axios";

function Homepage() {
  const [articles, setArticles] = useState([]);
  async function getPubArticles() {
    try {
      const response = await axios({
        method: "GET",
        url: "https://berita-terkini.matthew-baya.online/pub/articles",
      });
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPubArticles();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="display-1 my-5 text-center press-start-2p-regular">
          Geming <span style={{ color: "orangered" }}>Banget</span>
        </h1>
      </div>
      <div className="card-container">
        <div className="d-flex flex-wrap justify-content-center gap-5">
          {articles.map((article, index) => {
            // article.updatedAt = article.updatedAt.getDate();
            return (
              <Card
                key={index}
                title={article.title}
                imgUrl={article.imgUrl}
                id={article.id}
                updatedAt={article.updatedAt}
                category={article.Category.name}
                username={article.User.username}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Homepage;
