import { useNavigate, Link } from "react-router-dom";

export default function ArticleCard(props) {
  const handleDeleteArticle = (e) => {
    try {
      e.preventDefault();
      props.deleteArticle(props.article.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <tr>
        <td scope="row">{props.index}</td>
        <td>
          <img src={props.article.imgUrl} className="img-fluid" />
        </td>
        <td className="fw-bold">{props.article.title}</td>
        <td>{props.article.createdAt}</td>
        <td>{props.article.User.username}</td>
        <td>
          <span className="d-flex">
            <a href="" className="ms-3" onClick={handleDeleteArticle}>
              <span className="icon material-symbols-outlined text-danger">
                delete
              </span>
            </a>
            <Link to={"/cms/edit/article/" + props.article.id} className="ms-3">
              <span className="icon material-symbols-outlined text-danger">
                edit
              </span>
            </Link>
            <Link
              to={"/cms/edit/image/" + props.article.id}
              href=""
              className="ms-3"
            >
              <span className="icon material-symbols-outlined text-danger">
                image
              </span>
            </Link>
          </span>
        </td>
      </tr>
    </>
  );
}
