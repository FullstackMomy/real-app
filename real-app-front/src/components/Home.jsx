import PageHeader from "./common/pageHeader";
import Card from "./card";
import { useMyCards } from "../hooks/useMyCards";
import FirstCardPresent from "./FirstCardsPresent";
import { useAuth } from "../context/auth.context";

const Home = () => {
  const cards = useMyCards();
  const { user } = useAuth();

  return (
    <>
      <PageHeader
        title={
          <>
            <i className="bi bi-card-text me-2"></i>bizCard4U
          </>
        }
        description={"Create your Business Cards with Our Card Maker"}
      />

      <div className="row d-flex flex-wrap justify-content-around gap-2 mt-2">
        {!user || !user?.biz ? (
          <>
            <h3 className="text-center">Example Cards</h3>
            <div className="d-flex flex-wrap justify-content-around mt-3 gap-2">
              <FirstCardPresent
                img={
                  "https://er.isacs.eu/sites/default/files/flmngr/avatar-placeholder.png"
                }
                name={"Lior"}
                description={"card creator manager"}
                address={"Natania"}
                phone={"0544768901"}
              />
              <FirstCardPresent
                img={
                  "https://er.isacs.eu/sites/default/files/flmngr/avatar-placeholder.png"
                }
                name={"Amir"}
                description={"card creator "}
                address={"Petach-Tikva"}
                phone={"0544366701"}
              />
              <FirstCardPresent
                img={
                  "https://er.isacs.eu/sites/default/files/flmngr/avatar-placeholder.png"
                }
                name={"Ayala"}
                description={"card creator suplayer"}
                address={"Modiine"}
                phone={"0507806345"}
              />
            </div>
          </>
        ) : !cards.length ? (
          "No Cards Yet.."
        ) : (
          cards.toReversed().map((card, index) => {
            if (index < 4) {
              return <Card key={card._id} card={card} />;
            }
            return null;
          })
        )}
      </div>
    </>
  );
};

export default Home;
