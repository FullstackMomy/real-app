import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={bizImage} className="card-img-top" alt={bizName} />
      <div className="card-body">
        <h5 className="card-title">{bizName}</h5>
        <p className="card-text">{bizDescription}</p>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">{bizAddress}</li>
          <li className="list-group-item">{bizPhone}</li>
        </ul>

        <div className="links d-flex justify-content-between">
          <Link to={`/my-cards/edit/${_id}`}>
            <span className="btn btn-primary">Edit</span>
          </Link>
          <Link to={`/my-cards/delete/${_id}`}>
            <span className="btn btn-danger">Delete</span>
          </Link>
          <Link to={`/my-cards/view/${_id}`} className="card-link">
            <span className="btn btn-warning">
              <i className="bi bi-eye"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;