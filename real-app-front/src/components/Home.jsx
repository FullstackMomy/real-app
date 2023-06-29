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
                  "https://cdn.pixabay.com/photo/2018/01/31/09/42/people-3120717_640.jpg"
                }
                name={"Famelies Photos Card"}
                description={"Business card for famelies photos"}
                address={"Natania"}
                phone={"0544768901"}
              />
              <FirstCardPresent
                img={
                  "https://cdn.pixabay.com/photo/2017/08/06/20/11/wedding-2595862_640.jpg"
                }
                name={"Wedding Card"}
                description={"Business wedding card"}
                address={"Petach-Tikva"}
                phone={"0544366701"}
              />
              <FirstCardPresent
                img={
                  "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_640.jpg"
                }
                name={"Startup Card"}
                description={"Business card for startup companies"}
                address={"Modiin"}
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
