import { Link } from "react-router-dom";
import PageHeader from "./common/pageHeader";
import { useMyCards } from "../hooks/useMyCards";
import Card from "./card";

const MyCards = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader
        title="My Cards"
        description="your cards are in the list below"
      />
      <div className="d-flex justify-content-center">
        <Link
          className="text-center"
          style={{ color: "black" }}
          to="/card-create"
        >
          <button type="button" className="btn btn-primary">
            Create a New Card
          </button>
        </Link>
      </div>

      <div className="d-flex flex-wrap justify-content-around mt-3 gap-2">
        {!cards.length ? (
          <p className="text-danger fw-bold fs-4">
            No cards yet, Please create some card
          </p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
};

export default MyCards;
