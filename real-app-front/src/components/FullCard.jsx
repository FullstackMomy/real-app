import { useParams } from "react-router-dom";
import { useCard } from "../hooks/useCard";
import { Link } from "react-router-dom";

const FullCard = () => {
  const { id } = useParams();

  const card = useCard(id);

  return (
    <div className="row d-flex flex-wrap justify-content-around mt-3">
      {card === null ? null : (
        <div
          id="cardHover"
          className="card p-0 "
          style={{ width: "840px", height: "100%" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={card.bizImage}
                className="img-fluid rounded-start"
                alt={card.bizName}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{card.bizName}</h5>
                <p className="card-text">{card.bizDescription}</p>
                <ul className="list-group list-group-flush">
                  <div className="list-group-item">{card.bizAddress}</div>
                  <div className="list-group-item">{card.bizPhone}</div>
                </ul>
                <div className="d-flex justify-content-end">
                  <Link
                    style={{ color: "green", fontSize: "40px" }}
                    to={`/my-cards`}
                    className="me-4 mt-4"
                  >
                    <i className="bi bi-arrow-right-circle"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullCard;
