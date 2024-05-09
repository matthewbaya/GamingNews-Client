import { Link, useNavigate } from "react-router-dom";

export default function Card(props) {
  // const navigate = useNavigate();
  const { title, imgUrl, id } = props;

  // const handleChangePageToArticleDetail = () => {
  //   setTimeout(() => {
  //     navigate("/detail/" + id);
  //   }, 500);
  // };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <Link to={"/detail/" + id} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
      ;
    </>
  );
}
