
const FirstCardPresent = ({ img, name, description, address, phone }) => {
  return (
    <div className="card p-0" style={{ width: "18rem" }}>
      <img
        src={img}
        className="card-img-top"
        alt={img}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <p className="cart-text text-center">{description}</p>

        <ul className="list-group list-group-flush">
          <div className="list-group-item">
            <i className="bi bi-geo-alt-fill me-2"></i>
            {address}
          </div>
          <div className="list-group-item">
            <i className="bi bi-telephone-fill me-2"></i>
            {phone}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default FirstCardPresent;
