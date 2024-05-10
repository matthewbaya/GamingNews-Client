import { Link, useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  const { title, imgUrl, id, updatedAt, category, username } = props;

  const handleChangePageToArticleDetail = () => {
    setTimeout(() => {
      navigate("/detail/" + id);
    }, 500);
  };

  return (
    <>
      <div
        className="card text-dark card-has-bg click-col"
        style={{
          width: "30rem",
          backgroundImage: `url(${imgUrl})`,
        }}
        onClick={handleChangePageToArticleDetail}
      >
        <img src={imgUrl} className="card-img d-none" alt="..." />
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <small className="card-meta mb-2">{category}</small>
            <h4 className="card-title mt-0 ">
              <p className="text-dark" to={"/detail/" + id}>
                {title}
              </p>
            </h4>
            <small>
              <i className="far fa-clock" /> Updated At {updatedAt}
            </small>
          </div>
          <div className="card-footer">
            <div className="media">
              <div className="media-body">
                <h6 className="my-0 text-dark d-block">By {username}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
